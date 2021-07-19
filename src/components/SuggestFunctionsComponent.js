import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import '../assets/css/normalize.css';
import '../assets/css/components.css';
import '../assets/css/oghelp.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {sendFunction} from '../services/functions'

class SuggestFunctionsComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contact : {
                missingFunction: "",
                fullName: "",
                email : "",
                comments : ""
            },
            errors :{
                missingFunction: false,
                fullName: false,
                email : false,
            },
            successForm : false,
            errorForm : false
        };
    
        this.changeInput = this.changeInput.bind(this);
        this.doneForm = React.createRef();
        this.errorForm = React.createRef();
    }

    changeInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        var contact = this.state.contact
        contact[name] = value
        this.setState({
            contact : contact
        });
        var errors = this.state.errors
        errors[name] = false
        this.setState({errors: errors})
    }

    sendFunction = async (e) => {
        e.preventDefault()

        var errors = this.state.errors
        var error = false
        if(this.state.contact.missingFunction === ""){
            errors.missingFunction = true
            error = true
        }

        if(this.state.contact.fullName === ""){
            errors.fullName = true
            error = true
        }

        if(this.state.contact.email === ""){
            errors.email = true
            error = true
        }

        if(error){
            this.setState({errors : errors})
        }else{
            const res = await sendFunction(this.state.contact)
            if(res === "success"){
                this.setState({successForm : true})
            }else{
                this.setState({errorForm : true})
            }
        }
    }

    render(){

        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Suggest function</title>
                </Helmet>
                <Header />
                <div className="section-ale-0">
                    <div className="section-ale-1">
                    <div className="container-ale-1">
                        <div className="section-ale-2">
                        <div className="section-ale-4">
                            <h2 className="heading-ale-1">Suggest functions</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="doc-ale-1">
                    <div className="doc-ale-3">
                        <div className="doc-ale-4">
                        <div className="doc-ale-10">
                            <div className="doc-ale-12">
                            <div className="doc-ale-13">
                                <div className="section-ale-8">
                                <div className="text-ale-3">Business</div>
                                </div>
                                <div className="section-ale-7">
                                <div className="doc-ale-14">
                                    <NavLink to="/about" className="link-ale-3 w-inline-block">
                                    <div className="text-ale-2">About</div>
                                    </NavLink>
                                </div>
                                <div className="doc-ale-14">
                                    <NavLink to="/jobs" className="link-ale-3 w-inline-block">
                                    <div className="text-ale-2">Jobs</div>
                                    </NavLink>
                                </div>
                                <div className="doc-ale-14">
                                    <NavLink to="/contact" className="link-ale-3 w-inline-block">
                                    <div className="text-ale-2">Contact</div>
                                    </NavLink>
                                </div>
                                </div>
                            </div>
                            <div className="doc-ale-13">
                                <div className="section-ale-8">
                                <div className="text-ale-3">Legal</div>
                                </div>
                                <div className="section-ale-7">
                                <div className="doc-ale-14">
                                    <NavLink to="/privacy" className="link-ale-3 w-inline-block">
                                    <div className="text-ale-2">Privacy</div>
                                    </NavLink>
                                </div>
                                <div className="doc-ale-14">
                                    <NavLink to="/terms-of-service" className="link-ale-3 w-inline-block">
                                    <div className="text-ale-2">Terms of Service</div>
                                    </NavLink>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="doc-ale-11">
                            <div className="doc-ale-17">
                            <div className="doc-ale-20">
                                <div className="rich-text-ale-2 w-richtext">
                                <p>Can&#x27;t find your function ? Submit your feedback below.</p>
                                </div>
                            </div>
                            <div className="form-ale-1">
                                <div className="form-ale-2 w-form">
                                { !this.state.successForm &&
                                <form id="wf-form-Contact-form" onSubmit={this.sendFunction} action="/sendFunction" name="wf-form-Contact-form" data-name="Contact form" className="form-ale-3">
                                    <div className="form-ale-4">
                                    <div className="form-ale-5">
                                        <div id="w-node-c603943200a3-257f2e1a" className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">Missing functions</div>
                                        </div>
                                        <div className="form-ale-8"><input type="text" className={`${this.state.errors.missingFunction ? "warning" : ""} form-ale-11 w-input`} maxLength="256" name="missingFunction" defaultValue={this.state.contact.missingFunction} onChange={this.changeInput} data-name="missingFunction" id="missingFunction" required=""/></div>
                                        </div>
                                        <div className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">Your name</div>
                                        </div>
                                        <div className="form-ale-8"><input type="tel" className={`${this.state.errors.fullName ? "warning" : ""} form-ale-11 w-input`} maxLength="256" name="fullName" defaultValue={this.state.contact.fullName} onChange={this.changeInput} data-name="Name" id="Name" required=""/></div>
                                        </div>
                                        <div className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">Email address</div>
                                        </div>
                                        <div className="form-ale-8"><input type="email" className={`${this.state.errors.email ? "warning" : ""} form-ale-11 w-input`} maxLength="256" name="email" defaultValue={this.state.contact.email} onChange={this.changeInput} data-name="Email " id="Email" required=""/></div>
                                        </div>
                                        <div id="w-node-c603943200c1-257f2e1a" className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">Additional comments (optional)</div>
                                        </div>
                                        <div className="form-ale-8"><textarea data-name="Comments" maxLength="5000" id="Comments" name="comments" defaultValue={this.state.contact.comments} onChange={this.changeInput} className="form-ale-12 w-input"></textarea></div>
                                        </div>
                                        <div id="w-node-c603943200c7-257f2e1a" className="form-ale-13"><input type="submit" value="Submit" data-wait="Please wait..." className="form-ale-14 w-button"/></div>
                                    </div>
                                    </div>
                                </form>
                                }
                                { this.state.successForm &&
                                <div className="ale-success-1 w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                }
                                { this.state.errorForm &&
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                                }
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="section-ale-10">
                            <div className="section-ale-12">
                            <div className="section-ale-13 hide">
                                <div className="section-ale-14">
                                <div className="text-ale-4">Partnerships</div>
                                </div>
                                <div className="section-ale-15">
                                <div className="section-ale-16">
                                    <a href="mailto:partners@oghelp.com" className="link-ale-2 w-inline-block">
                                    <div className="text-link-ale-1">Email partners</div>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="section-ale-13">
                                <div className="section-ale-14">
                                <div className="text-ale-4">Sales</div>
                                </div>
                                <div className="section-ale-15">
                                <div className="section-ale-16">
                                    <a href="mailto:sales@oghelp.com" className="link-ale-2 w-inline-block">
                                    <div className="text-link-ale-1">sales@oghelp.com</div>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="section-ale-13 hide">
                                <div className="section-ale-14">
                                <div className="text-ale-4">Contact us</div>
                                </div>
                                <div className="section-ale-15">
                                <div className="section-ale-16">
                                    <NavLink to="#" target="_blank" className="link-ale-2 w-inline-block">
                                    <div className="section-icon-ale-1"><img src="images/email-us3x_1email-us3x.png" alt="" className="icon-image-ale-1"/></div>
                                    <div className="text-link-ale-1">Email us</div>
                                    </NavLink>
                                </div>
                                <div className="section-ale-16">
                                    <NavLink to="#" className="link-ale-2 w-inline-block">
                                    <div className="section-icon-ale-1"><img src="images/call-us3x_1call-us3x.png" alt="" className="icon-image-ale-1"/></div>
                                    <div className="text-link-ale-1">Call us +12312312123</div>
                                    </NavLink>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="aoh-cta-1">
                    <div className="aoh-container-1">
                    <div className="aoh-box-1">
                        <div className="aoh-box-2">
                        <h2 className="aoh-headline-1">Join Our Growing Professionals Community<br/></h2>
                        </div>
                        <div className="aoh-box-3"><NavLink to="/create-account" className="aoh-button-1 w-button">Sign up as Service Provider</NavLink></div>
                    </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default WrapperConsumer(SuggestFunctionsComponent);