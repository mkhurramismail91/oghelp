import { Component } from 'react'
import { withRouter } from 'react-router-dom'

//import WrapperConsumer from '../../store';

class Logout extends Component {

    componentWillMount(){
        localStorage.removeItem("user-token")
        localStorage.removeItem('user-name') 
        this.props.history.push("/")
    }
    componentWillUnmount(){
        this.willNot = true
        const script = document.createElement("script");
        const scriptText = document.createTextNode(`window.Intercom("shutdown"); window.Intercom('boot', {app_id: '${process.env.REACT_APP_INTERCOM}'})`);
        script.appendChild(scriptText);
        document.head.appendChild(script);
    }

    render() {
        return null;
    }
}

export default withRouter(Logout);