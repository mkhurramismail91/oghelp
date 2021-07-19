import axios from 'axios'
import { getURLWithQueryParams } from "./utils"

export const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
export const getToken = (token = null) => {
    token = localStorage.getItem('user-token')
    return token;
}
export const getUser = async (token = null) => {
    token = (token == null) ? getToken() : token
    var user = await axios.get(process.env.REACT_APP_API_URL+"/user", {headers : {"user-token": localStorage.getItem('user-token')}})
    .then(res => {
        if(res.status === 200 && res.data.user){
            var user = res.data.user

            localStorage.setItem('user-name', user.full_name) 
            return user;
        }else{
            localStorage.removeItem('user-token') 
            return null;
        }
    })
    .catch(err => {
        console.log(err)
        return null;
    })

    return user;
};


export const singin = async (user) => {
    var token = await axios.post(process.env.REACT_APP_API_URL+"/singin", user)
        .then(res => {
            if(res.status === 200 && res.data.token){
                localStorage.setItem("user-token", res.data.token)
                getUser(res.data.token)
                return res.data.token;
            }else{
                return res.data.code
            }
        })
        .catch(err => {
            console.log(err)
            return null;
        })

    return token;
};


export const singup = async (user) => {
    var token = await axios.post(process.env.REACT_APP_API_URL+"/singup", user)
        .then(res => {
            if(res.status === 200 && res.data.status === "success"){
                return true;
            }else{
                return res.data;
            }
        })
        .catch((err, res) => {
            console.log(err, res)
            return null;
        })

    return token;
};

export const confirmEmail = async (token) => {
    var user = await axios.post(process.env.REACT_APP_API_URL+"/user/confirm-email",{}, {headers : {"user-token": token}})
        .then(res => {
            if(res.status === 200 && res.data.token){
                localStorage.setItem("user-token", res.data.token)
                getUser(res.data.token)
                return res.data.token;
            }else{
                return null;
            }
        })
        .catch(err => {
            console.log(err)
            return null;
        })

    return user;
};

export const resendConfirmEmail = async (email) => {
    var user = await axios.get(process.env.REACT_APP_API_URL+"/user/send-confirm-email/"+email)
        .then(res => {
            if(res.status === 200){
                return true;
            }else{
                return null;
            }
        })
        .catch(err => {
            console.log(err)
            return null;
        })

    return user;
};


export const sendTokenPassword = async (email) => {
    var user = await axios.post(process.env.REACT_APP_API_URL+"/reset-password", {email : email})
        .then(res => {
            if(res.status === 200){
                return true;
            }else{
                return null;
            }
        })
        .catch(err => {
            console.log(err)
            return null;
        })

    return user;
};


export const updatePassword = async (user, token) => {
    var res = axios.post(process.env.REACT_APP_API_URL+"/update-password", user, {headers : {"user-token": token}})
        .then(res => {
            //console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
            return null
        })
    return res
}


export const changePassword = async (user) => {
    var token = getToken()
    var res = axios.post(process.env.REACT_APP_API_URL+"/user/update-password", user, {headers : {"user-token": token}})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
            return null
        })
    return res
}

export const desactiveAccount = async () => {
    var token = getToken()
    var res = axios.get(process.env.REACT_APP_API_URL+"/user/desactive", {headers : {"user-token": token}})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
            return null
        })
    return res
}

export const updateUser = async (user) => {
    var token = getToken()
    var res = axios.put(process.env.REACT_APP_API_URL+"/user/edit", user, {headers : {"user-token": token}})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
            return null
        })
    return res
}


export const LINKEDIN_STATE = ['singin_string', 'singup_string']

const LINKEDIN_SCOPE = 'r_liteprofile r_emailaddress'
const LINKEDIN_RIDERECT = process.env.REACT_APP_REDIRECT_URI
const LINKEDIN_CLIENT_ID = process.env.REACT_APP_CLIENT_ID

export const LINKEDIN_URL = getURLWithQueryParams('https://www.linkedin.com/oauth/v2/authorization', {
  response_type: "code",
  client_id: LINKEDIN_CLIENT_ID,
  redirect_uri: LINKEDIN_RIDERECT,
  state: LINKEDIN_STATE[0],
  scope: LINKEDIN_SCOPE
})

export const SINGUP_LINKEDIN_URL = getURLWithQueryParams('https://www.linkedin.com/oauth/v2/authorization', {
  response_type: "code",
  client_id: LINKEDIN_CLIENT_ID,
  redirect_uri: LINKEDIN_RIDERECT,
  state: LINKEDIN_STATE[1],
  scope: LINKEDIN_SCOPE
})

export const singinLinkedin = async (params) => {
console.log(params)
    var token = await axios.get(process.env.REACT_APP_API_URL+"/login-linkedin?code="+params.code+"&state="+params.state)
        .then(res => {
            //console.log(res)
            if(res.status === 200 && res.data.token){
                localStorage.setItem("user-token", res.data.token)
                getUser(res.data.token)
                return res.data.token;
            }else if(res.data.code === 301){
                return {code : 301};
            }else if(res.data.code === 303){
                return {code : 303, email : res.data.email};
            }else if(res.data.code === 300){
                return {code : 300};
            }else{
                return null
            }
            
        })
        .catch(err => {
            console.log(err)
            return null;
        })

    return token;
};

export const registerLinkedin = async (params) => {
    console.log(params)
    var user = await axios.get(process.env.REACT_APP_API_URL+"/register-linkedin?code="+params.code+"&state="+params.state)
        .then(res => {
            console.log(res)
            if(res.status === 200 && res.data){
                return res.data;
            }
        })
        .catch(err => {
            console.log(err)
            return null;
        })

    return user;
};

export const singoutLinkedin = async () => {
     const LINKEDIN_LOGOUT_URL = getURLWithQueryParams('https://www.linkedin.com/oauth/v2/invalidateToken', {
        response_type: "code",
        client_id: LINKEDIN_CLIENT_ID,
        redirect_uri: LINKEDIN_RIDERECT,
        state: LINKEDIN_STATE,
        scope: LINKEDIN_SCOPE
        })
        var token = await axios.get(LINKEDIN_LOGOUT_URL)
            .then(res => {
                console.log(res)
                return res
            })
            .catch(err => {
                console.log(err)
                return null;
            })
    
        return token;
    };



