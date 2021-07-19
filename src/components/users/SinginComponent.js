import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { singinLinkedin, registerLinkedin } from "../../services/user";
import queryString from 'query-string';
//import WrapperConsumer from '../../store';

class SinginLinkedIn extends Component {
    componentWillMount(){
        async function getToken (props){
            let params = queryString.parse(props.location.search)
            console.log(params)
            if(params.state === "singin_string"){
                const token = await singinLinkedin(params)
                if(token && token.code === 301){
                    window.opener.onShowError(301)
                }else if(token && token.code === 303){
                    localStorage.setItem("email-resend", token.email)
                    window.opener.onConfirEmail(true)
                }else if(token && token.code === 300){
                    window.opener.onErrorLinkedIn(true)
                }else if(token !== null ){
                    window.opener.onSuccess('token')
                }
            }else{
                const res = await registerLinkedin(params)
                if (res !== null) 
                    window.opener.onSuccess(res)
            }
            window.close();
            return;
        }

        getToken(this.props)
    }

    render() {
        return null;
    }
}

export default withRouter(SinginLinkedIn);