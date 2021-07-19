import axios from 'axios'

export const getAllSkills = async () => {
    var functions = await axios.get(process.env.REACT_APP_API_URL+"/skill", {headers : {"user-token": localStorage.getItem('user-token')}})
    .then(res => {
        if(res.data && res.data.status === "success"){
            return res.data
        }
        else
            return []
    })
    .catch(err => {
        console.log(err)
        return null;
    })

    return functions;
};


export const sendSkill = async (params) => {
    var res = await axios.post(process.env.REACT_APP_API_URL+"/skill/create", params)
        .then(res => {
            if(res.status === 200){
                return res.data.status;
            }
        })
        .catch(err => {
            console.log(err)
            return null;
        })

    return res;
};


