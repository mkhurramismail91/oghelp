import React, {Fragment} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {Helmet} from "react-helmet";
import WrapperConsumer from '../../store';
import '../../assets/css/style.css';
import Header from '../HeaderComponent';
import Footer from './Footer';
import { changePassword } from '../../services/user'

class AccountSettingsComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : {
                currentpassword : "",
                password : "",
                repeatpassword : ""
            },
            errors : {
                currentpassword : false,
                password : false,
                repeatpassword : false
            },
            errorForm : false,
            successForm : false,
            display : "none"
        }
        this.changeInput = this.changeInput.bind(this);
    }

    formRef = React.createRef()

    changeInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        var user = this.state.user
        user[name] = value
        this.setState({
            user : user
        });
        console.log(name)
        var errors = this.state.errors
        errors[name] = false
        this.setState({errors: errors})
    }

    formSubmit = async (e) => {
        e.preventDefault()
        
        var error = false
        var errors = this.state.errors
        if(this.state.user.currentpassword === ""){
            error = true
            errors.currentpassword = true
        }
        if(this.state.user.password === "" || (this.state.user.password !== "" && this.state.user.password !== this.state.user.repeatpassword)){
            error = true
            errors.password = true
        }
        if(this.state.user.repeatpassword === "" || (this.state.user.repeatpassword !== "" && this.state.user.password !== this.state.user.repeatpassword)){
            error = true
            errors.repeatpassword = true
        }
        if(error){
            this.setState({errors})
        }else{
            var res = await changePassword(this.state.user)
            console.log(res)
            if(res.status === "success"){
                this.setState({successForm : true, errorForm : false})
                this.formRef.reset();
            }else if(res === null){
                this.setState({successForm : false, errorForm : true})
            }else{
                if(res.code === 304){
                    errors = this.state.errors
                    errors.currentpassword = true
                    this.setState({successForm : false, errorForm : true, errors})
                }else{
                    this.setState({successForm : false, errorForm : true})
                }
            }
        }
        return false
    } 

    render(){

        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Account Settings</title>
                </Helmet>
                <Header />
                <div className="global-header-1">
                    <div className="global-header-2">
                    <h1 className="global-header-3">Account settings</h1>
                    </div>
                </div>
                <div className="div-block">
                    <div className="cc_6">
                    <div className="acc_7">
                        <div className="aleftbar_md">
                        <div className="abuttonsection_md">
                            <NavLink to="/account-settings" aria-current="page" className="alinkbuttnsection_md w-inline-block w--current">
                            <div className="atextbutton_md">Password and security</div>
                            </NavLink>
                        </div>
                        <div className="abuttonsection_md">
                            <NavLink to="/account-deactivate-account" className="alinkbuttnsection_md w-inline-block">
                            <div className="atextbutton_md">Deactivate account</div>
                            </NavLink>
                        </div>
                        <div className="abuttonsection_md">
                            <NavLink data-w-id="f997e58a-83dc-5ee6-f145-f8aeffab6dd3" onMouseEnter={() => this.setState({display : "block"})} onMouseLeave={() => this.setState({display : "none"})} to="#comingsoonmd-1" className="alinkbuttnsection_md w-inline-block">
                            <div className="atextbutton_md">Payments</div>
                            <div className="comingsoonmd" style={{display : this.state.display}}>
                                <div className="comingsoonmd-1" >Coming soon</div>
                            </div>
                            </NavLink>
                        </div>
                        </div>
                    </div>
                    <div className="cc_8">
                        <div className="section1_ll">
                        <div className="containsection_lm">
                            <div className="formsection_lm">
                            <div className="form_lm w-form">
                                <div  data-name="Email Form" className="form1_lm">
                                <div className="section2_lm">
                                    <div className="headsection1_lm2">
                                    <h2 className="headings_lm2">Password and security</h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="formsection_lm">
                            <div className="form_lm w-form d-column">
                                <form id="update-password" ref={(el) => this.formRef = el} name="update-password" action="/" onSubmit={this.formSubmit} data-name="Email Form" className="form1_lm">
                                <div className="section2_lm">
                                    <div className="headsection1_lm">
                                    <h3 className="headings_lm">Password</h3>
                                    </div>
                                    <div className="section3_lm">
                                    <div className="fieldcampsection_lm"><label htmlFor="Password" className="fieldlabelform_lm">Current password</label>
                                        <input type="password" className={`${this.state.errors.currentpassword ? "warning" : ""} filltextfieldform_lm w-input`} maxLength="256" name="currentpassword" data-name="Password" placeholder="•••••••••••••••" id="currentpassword" onChange={this.changeInput}  /></div>
                                    <div className="fieldcampsection_lm"><label htmlFor="password" className="fieldlabelform_lm">New password</label>
                                        <input type="password" className={`${this.state.errors.password ? "warning" : ""} filltextfieldform_lm w-input`} maxLength="256" name="password" data-name="Password 3" placeholder="•••••••••••••••" id="password" onChange={this.changeInput}  /></div>
                                    <div className="fieldcampsection_lm"><label htmlFor="repeatpassword" className="fieldlabelform_lm">Confirm password</label>
                                        <input type="password" className={`${this.state.errors.repeatpassword ? "warning" : ""} filltextfieldform_lm w-input`} maxLength="256" name="repeatpassword" data-name="Password 2" placeholder="•••••••••••••••" id="repeatpassword" onChange={this.changeInput}  /></div>
                                    <div className="submitsectionform_lm">
                                        <input type="submit" value="Save" data-wait="Please wait..." className="submitbuttonform_lm w-button" /></div>
                                    </div>
                                </div>
                                </form>
                                {this.state.successForm && 
                                <div className="successmsjform_lm w-form-done mt-5">
                                <div className="textform_lm">Your password was successfully changed.</div>
                                </div>
                                }
                                {this.state.errorForm &&
                                <div className="errormsjform_lm w-form-fail mt-5">
                                <div className="textform_lm">Oops! Something went wrong while submitting the form.</div>
                                </div>
                                }
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(WrapperConsumer(AccountSettingsComponent));