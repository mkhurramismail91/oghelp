import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink, withRouter } from 'react-router-dom'
import { singin, LINKEDIN_URL } from "../services/user";
//import WrapperConsumer from '../store';
import '../assets/css/normalize.css';
import '../assets/css/components.css';
import '../assets/css/oghelp.css';

let browser = null;

class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errors : {
                email : false,
                password : false
            },
            successForm : false,
            errorForm : false,
            errorMsg : "Invalid user ID and/or Password"
        };
        this.changeInput = this.changeInput.bind(this);

        browser = window.self;
        browser.onSuccess = () => {
            this.props.history.push("/dashboard")
        }
        browser.onShowError = () => {
            this.setState({errorForm : true, errorMsg : "This account has been deactivated."})
        }
        browser.onErrorLinkedIn = () => {
            this.setState({errorForm : true, errorMsg : "This user does not exist."})
        }
        browser.onConfirEmail = () => {
            this.props.history.push("/confirm-email")
        }
        
    }

    emailRef = React.createRef()
    passwordRef = React.createRef()

    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    changeInput(event) {
        const target = event.target;
        const name = target.name;

        var errors = this.state.errors
        errors[name] = false
        this.setState({errors: errors})
    }

    login = async (e) => {
        e.preventDefault()
        
        var user = {
            email : this.emailRef.current.value,
            password : this.passwordRef.current.value
        }
        var errors = this.state.errors
        var error = false
        if(user.email === ""){
            error = true
            errors.email = true
        }

        if(user.password === ""){
            error = true
            errors.password = true
        }

        if(!error){
            const token = await singin(user)
            if(token != null){
                if(token === 301){
                    this.setState({errorForm : true, errorMsg : "Invalid user ID and/or Password"})
                }else if(token === 303){
                    localStorage.setItem("email-resend", user.email)
                    this.props.history.push("/confirm-email")
                }else if(token === 305){
                    this.setState({errorForm : true, errorMsg : "This account has been deactivated."})
                }else{
                    this.props.history.push("/dashboard")
                }
                return;
            }else{
                this.setState({errorForm : true})
            }
        }else{
            this.setState({errors})
        }
    }

    loginLinkedIn = async (e) => {
        this.popup = document.open(LINKEDIN_URL, '_blank', 'width=600,height=600')
    }

    render(){
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Login</title>
                </Helmet>
                <div className="section_lp">
                    <div className="psection1_lp">
                    <div className="section3_lp"></div>
                    <div className="section2_lp">
                        <div className="verticalsection_lp">
                        <NavLink to="/" className="imagesection_lp"><img src={require('../assets/images/-a3x.png')} alt="" className="llp-logo-1"/></NavLink>
                        <div className="texttopsection_lp">
                            <div className="headingsection21_lp">
                            <h1 className="heading21_lp">Welcome back!</h1>
                            </div>
                            <div className="imagelock_lp"></div>
                        </div>
                        <div className="formsection_lp">
                            <div className="form21_lp w-form">
                            { !this.state.successForm &&
                            <form id="" action="/login" onSubmit={this.login} className="form2_lp">
                                <div className="content1_lp">
                                    <input type="email" ref={this.emailRef} className={`${this.state.errors.email ? "warning" : ""} textfield1_lp w-input`} maxLength="256" name="Email" data-name="Email" placeholder="Email" id="Email"/>
                                </div>
                                <div className="content1_lp">
                                    <input type="password" ref={this.passwordRef} className={`${this.state.errors.password ? "warning" : ""} textfield1_lp w-input`} maxLength="256" name="Password" data-name="Password" placeholder="Password" id="Password" required=""/>
                                </div>
                                { this.state.errorForm &&
                                    <div className="lt-error-1"><img src={require('../assets/images/times7x_1times7x.png')} alt="" className="lt-erroricon-1" onClick={() => {this.setState({error : false})}}/>
                                        <div className="lt-errortext-1" >{this.state.errorMsg}</div>
                                    </div>
                                }
                                <input type="submit" value="Log in" data-wait="Please wait..." className="button23_lp-2 w-button"/>
                            </form>
                            }
                            { this.state.successForm &&
                            <div className="successmsg_lp w-form-done">
                                <div className="textsuccess_lp">Thank you! Your submission has been received!</div>
                            </div>
                            }
                            </div>
                        </div>
                        <div className="sectiontext2_lp">
                            <div className="line-lp-1"></div>
                            <div className="text-lp-2">Or</div>
                            <div className="line-lp-1"></div>
                        </div>
                        <div className="sectiontext2_lp2">
                            <button onClick={this.loginLinkedIn} className="buttonlinkedin-lp-1 w-inline-block">
                                <img src={require('../assets/images/linkedin3x_1linkedin3x.png')} alt="" className="button-linkedin-lp-2"/>
                                    <div className="button-linkedin-lp-1">Login with </div>
                                    <div className="button-linkedin-lp-1 alt-1">LinkedIn</div>
                            </button>
                        </div>
                        <div className="botsection_lp">
                            <div className="textbot1_lp">
                            <NavLink to="/create-account" className="linkblock1_lp w-inline-block">
                                <div className="textblock1_lp">Don&#x27;t have an account, yet?</div>
                            </NavLink>
                            <NavLink className="linkblock2_lp w-inline-block" to="/create-account"><div className="textblock2_lp">Sign up for free</div></NavLink>
                            </div>
                            <div className="textbot2_lp">
                            <NavLink to="/" className="linkblock3_lp w-inline-block">
                                <div className="textblock3_lp">Back</div>
                            </NavLink>
                            </div>
                            <div className="textbot1_lp">
                            <NavLink to="/recover-password" className="linkblock1_lp w-inline-block forgot-password">
                                <div className="textblock1_lp">Forgot your password?</div>
                            </NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(LoginComponent);