import decode from 'jwt-decode'
import { getToken } from "../services/user";

const isAuth = () => {
    if(getToken() !== null){
        try{
            decode(getToken())
            return true;
        }catch(err){
            return false;
        }
        
    }else{
       return false; 
    }  
}

export default isAuth;