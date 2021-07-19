import axios from 'axios'

export const sendEmail = async (params) => {
    var res = await axios.post(process.env.REACT_APP_API_URL+"/contact-admin", params)
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



