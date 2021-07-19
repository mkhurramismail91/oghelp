import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink, withRouter } from 'react-router-dom'
import WrapperConsumer from '../store';

import {confirmEmail, resendConfirmEmail} from '../services/user'

class ConfirmEmailComponent extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            sendedEmail : false,
        }
    }
    componentDidMount(){
        this.confirmToken()
        window.scrollTo(0, 0)
    }

    confirmToken = async () => {
        var t = this.props.match.params.token
        if(t){
            console.log(t)
            var token = await confirmEmail(t)
            if(token !== null){
                this.props.history.push("/dashboard")
            }
        }
    }

    resendEmail = async () => {
        var email = localStorage.getItem('email-resend')
        await resendConfirmEmail(email)
        setTimeout(() => {
            this.setState({sendedEmail : true})
        }, 2400)
    }
    
    render() {
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Confirm email</title>
                </Helmet>
                <div className="aom-section-1">
                    <div className="aom-picarea-1">
                    <div className="aom-feats-1">
                        <h2 className="aom-feathead-1">Careers are built on networks</h2>
                        <div className="aom-featparagraph-1">Research salaries to help you negotiate, research jobs relevant to your area, and get your profile available to recruiters</div>
                    </div>
                    </div>
                    <div className="aom-contentarea-1">
                    <div className="aom-body-1">
                        <div className="aom-headwrapper-1">
                        <h1 className="aom-head-2">One last step!</h1>
                        </div>
                        <div className="aom-paragraphwrapper-1">
                        <div className="aom-paragraph-1 w-richtext">
                            <p>Kindly review your inbox and confirm your email account by following the link we just sent over.</p>
                            <p>Didn&#x27;t receive our email? Please check the junk email folder. If still not finding our email, kindly <NavLink to="/contact">reach us out</NavLink>, or click below to try another email submission. </p>
                        </div>
                        </div>
                        <div className="aom-buttonwrapper-1"><button type="button" onClick={this.resendEmail} className="aom-button-1 w-button">Re-send email</button></div>
                        <br/>
                        <br/>
                        {this.state.sendedEmail && 
                        <div className="lt-success-1"><img src={require('../assets/images/times7x_1times7x.png')} alt="" onClick={() => {this.setState({sendedEmail : false})}} className="lt-erroricon-1"/>
                            <div className="lt-errortext-1" >Email Sent</div>
                        </div>
                        }
                    </div>
                    <div className="aom-footer-1">
                        <div className="aom-footerwrapper-1">
                        <div className="aom-footertext-1 w-richtext">
                            <p>©2001–2018 All Rights Reserved. Brand® is a registered trademark of Brand. <NavLink to ="/#">Cookie Preferences</NavLink>, <NavLink to ="/privacy">Privacy</NavLink>, and <NavLink to ="/terms-of-service">Terms</NavLink>.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(WrapperConsumer(ConfirmEmailComponent));