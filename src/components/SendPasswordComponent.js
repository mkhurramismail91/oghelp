import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import '../assets/css/style.css';
import {sendTokenPassword} from '../services/user'

class SendPasswordComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errors : {
                email : false
            },
            successForm : false,
            errorForm : false
        };
    }
    emailRef = React.createRef()

    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    sendToken = async (e) => {
        e.preventDefault()
        var email = this.emailRef.current.value
        if(email !== ""){
            var token = await sendTokenPassword(email)
            if(token !== null){
                this.setState({successForm : true})
            }else{
                this.setState({errorForm : true})
            }
        }else{
            this.setState({errors : {email : true}})
        }
        return false
    }

    render(props){

        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Recover password</title>
                </Helmet>                
                <div className="aoi-section">
                    <div className="_3psection1_lp-2">
                    <div className="aoi-pic-1"></div>
                    <div className="aoi-content-1">
                        <div className="aoi-wrapper-1">
                        <div className="aoi-logo-1"><NavLink to="/index" className="aio-logocontainer-1 w-inline-block"><img src={require('../assets/images/-a3x.png')} alt="" className="aoi-logo-2"/></NavLink></div>
                        {this.state.successForm !== true &&
                        <div className="aoi-backlink-12">
                            <div className="aoi-backwrapper-1"><NavLink to="/login" className="aoi-back-1">Back to log in</NavLink></div>
                        </div>
                        }
                        <div className="aoi-backlink-1">
                            <div className="aoi-backwrapper-1">
                            <h1 className="aoi-headline-1">Forgot your password?</h1>
                            <div className="aoi-description-1">We will send a secure recovery link to your email address below.</div>
                            </div>
                        </div>
                        <div className="aoi-form-1">
                            <div className="aoi-form-2 w-form">
                            {this.state.successForm === false && 
                            <form id="email-form" name="email-form" action="/recover-password" onSubmit={this.sendToken} data-name="Email Form" className="aoi-form-3">
                                <div className="aoi-form-4">
                                <div className="aoi-tagfield-1">Email address</div>
                                <input type="email" id="Email" name="Email" data-name="Email" maxLength="256" className={`${this.state.errors.email ? "warning" : ""} aoi-textfield-1 w-input`} ref={this.emailRef} onChange={() => {this.setState({errors : {email : false}})}} /></div>
                 
                            </form>
                            }
                            {this.state.successForm && this.state.errorForm === false && 
                            <div className="aoi-success-1 w-form-done">
                                <div className="aoi-success-2">Thank you. Please check your inbox. </div>
                            </div>
                            }
                            {this.state.errorForm && this.state.successForm === false &&
                            <div className="aoi-success-3 w-form-fail">
                                <div className="aoi-success-4">Oops! Something went wrong while submitting the form.</div>
                            </div>
                            }
                            </div>
                        </div>
                        <div className="aoi-buttonwrapper-1">
                            {this.state.successForm === false &&
                            <a href="#recover" onClick={this.sendToken} className="aoi-button-1 w-inline-block">
                                <div className="aoi-button-2 alt-1">Continue</div>
                            </a>
                            }
                            {this.state.successForm === true &&
                            <a href="/login" className="aoi-button-1 w-inline-block">
                                <div className="aoi-button-2 alt-1">Continue</div>
                            </a>
                            }
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default WrapperConsumer(SendPasswordComponent);