import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import { updatePassword } from '../services/user'
import '../assets/css/style.css';


class ResetPasswordComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errors : {
                password : false,
                repeatPassword : false
            },
            successForm : false,
            errorForm : false
        };
        this.changeInput = this.changeInput.bind(this);
    }

    repeatpasswordRef = React.createRef()
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

    resetPassword = async (e) => {
        e.preventDefault()
        
        var user = {
            repeatpassword : this.repeatpasswordRef.current.value,
            password : this.passwordRef.current.value
        }

        var errors = this.state.errors
        var error = false
        if(user.repeatpassword === "" || (user.repeatpassword !== "" && user.password !== user.repeatpassword)){
            error = true
            errors.repeatPassword = true
            this.setState({errors: errors})
        }

        if(user.password === ""){
            error = true
            errors.password = true
            this.setState({errors: errors})
        }

        if(error === false){
            var token = this.props.match.params.token
            var res = await updatePassword(user, token)

            if(res !== null && res.status === "Success"){
                this.setState({successForm : true})
                this.props.history.push("/recover-password-success")
            }else{
                this.setState({errorForm : true})
            }
        }

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
                        <div className="aoi-logo-1"><NavLink to="/" className="aio-logocontainer-1 w-inline-block"><img src={require('../assets/images/-a3x.png')} alt="" className="aoi-logo-2"/></NavLink></div>
                        <div className="aoi-backlink-1">
                            <div className="aoi-backwrapper-1">
                            <h1 className="aoi-headline-1">Create a new password</h1>
                            </div>
                        </div>
                        <div className="aoi-form-1">
                            <div className="aoi-form-2 w-form">
                            {this.state.successForm === false && 
                            <form id="email-form" action="/recover" name="email-form" data-name="Email Form" className="aoi-form-3">
                                <div className="aoi-form-4 alt">
                                <div className="aoi-tagfield-1">New password</div>
                                <input type="password" id="Email" name="password" data-name="Email" maxLength="256" className={`aoi-textfield-1 w-input ${this.state.errors.password ? "warning" : ""}`} ref={this.passwordRef} onChange={this.changeInput} /></div>
                                <div className="aoi-form-4">
                                <div className="aoi-tagfield-1">Confirm new password</div>
                                <input type="password" id="Email-2" name="repeatpassword" data-name="Email 2" maxLength="256" className={`${this.state.errors.repeatPassword ? "warning" : ""} aoi-textfield-1 w-input`} ref={this.repeatpasswordRef} onChange={this.changeInput}/></div>
                            </form>
                            }
                            {this.state.successForm === true && this.state.errorForm === false && 
                            <div className="aoi-success-1 w-form-done">
                                <div className="aoi-success-2">Thank you! Your submission has been received!</div>
                            </div>
                            }
                            {this.state.errorForm === true && this.state.successForm === false && 
                            <div className="aoi-success-3 w-form-fail">
                                <div className="aoi-success-4">Oops! Something went wrong.</div>
                            </div>
                            }
                            </div>
                        </div>
                        <div className="aoi-buttonwrapper-1">
                            <button type="button" onClick={this.resetPassword} className="aoi-button-1 w-inline-block">
                                <div className="aoi-button-2 alt-1">Continue</div>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default WrapperConsumer(ResetPasswordComponent);