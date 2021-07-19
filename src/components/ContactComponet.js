import React, {Fragment} from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet";
import WrapperConsumer from '../store';
import '../assets/css/style.css';
import '../assets/css/index.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import {sendEmail} from '../services/contact'

class ContactComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contact : {
                subject: "",
                firstName: "",
                lastName : "",
                phone : "",
                email : "",
                comments : ""
            },
            errors :{
                subject: false,
                firstName: false,
                lastName : false,
                phone : false,
                email : false,
                comments : false
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

    sendContact = async (e) => {
        e.preventDefault()

        var errors = this.state.errors
        var error = false
        if(this.state.contact.subject === ""){
            errors.subject = true
            error = true
        }

        if(this.state.contact.firstName === ""){
            errors.firstName = true
            error = true
        }

        if(this.state.contact.lastName === ""){
            errors.lastName = true
            error = true
        }

        if(this.state.contact.email === ""){
            errors.email = true
            error = true
        }
        if(this.state.contact.phone === ""){
            errors.phone = true
            error = true
        }

        if(this.state.contact.comments === ""){
            errors.comments = true
            error = true
        }

        if(error){
            this.setState({errors : errors})
        }else{
            const res = await sendEmail(this.state.contact)
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
                    <title>Contact</title>
                </Helmet>                
                <Header />
                <div className="section-ale-0">
                    <div className="section-ale-1">
                    <div className="container-ale-1">
                        <div className="section-ale-2">
                        <div className="section-ale-4">
                            <h2 className="heading-ale-1">Contact Us</h2>
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
                                    <NavLink to="/contact" aria-current="page" className="link-ale-3 w-inline-block w--current">
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
                                <h2>Email us</h2>
                                <p>Fill out the form below and we will respond as soon as possible. Please do not include credit card numbers or other personal financial information.</p>
                                </div>
                            </div>
                            <div className="form-ale-1">
                                <div className="form-ale-2 w-form">
                                { !this.state.successForm &&
                                <form id="contact-form" onSubmit={this.sendContact} action="/sendContact" className="form-ale-3">
                                    <div className="form-ale-4">
                                    <div className="form-ale-5">
                                        <div id="w-node-c603943200a3-c97f2e15" className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">Subject</div>
                                        </div>
                                        <div className="form-ale-8"><input type="text" className={`${this.state.errors.subject ? "warning" : ""} form-ale-11 w-input`} maxLength="256" name="subject" defaultValue={this.state.contact.subject} onChange={this.changeInput} data-name="Subject" id="Subject" required="" /></div>
                                        </div>
                                        <div className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">First name</div>
                                        </div>
                                        <div className="form-ale-8"><input type="text" className={`${this.state.errors.firstName ? "warning" : ""} form-ale-11 w-input`} maxLength="256" name="firstName" defaultValue={this.state.contact.firstName} onChange={this.changeInput} data-name="First Name" id="First-name" required="" /></div>
                                        </div>
                                        <div className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">Last name</div>
                                        </div>
                                        <div className="form-ale-8"><input type="text" className={`${this.state.errors.lastName ? "warning" : ""} form-ale-11 w-input`} maxLength="256" name="lastName" defaultValue={this.state.contact.lastName} onChange={this.changeInput} data-name="Last Name" id="Last-name" required="" /></div>
                                        </div>
                                        <div className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">Primary phone</div>
                                        </div>
                                        <div className="form-ale-8"><input type="tel" className={`${this.state.errors.phone ? "warning" : ""} form-ale-11 w-input`} maxLength="256" name="phone" defaultValue={this.state.contact.phone} onChange={this.changeInput} data-name="Primary Phone" id="Primary-phone" required="" /></div>
                                        </div>
                                        <div className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">Email address</div>
                                        </div>
                                        <div className="form-ale-8"><input type="email" className={`${this.state.errors.email ? "warning" : ""} form-ale-11 w-input`} maxLength="256" name="email" defaultValue={this.state.contact.email} onChange={this.changeInput} data-name="Email" id="email-address-2" required="" /></div>
                                        </div>
                                        <div id="w-node-c603943200c1-c97f2e15" className="form-ale-6">
                                        <div className="form-ale-7">
                                            <div className="form-ale-9">Comments</div>
                                        </div>
                                        <div className="form-ale-8"><textarea data-name="Comments" maxLength="5000" id="Comments" name="comments" defaultValue={this.state.contact.comments} onChange={this.changeInput} className={`${this.state.errors.comments ? "warning" : ""} form-ale-12 w-input`}></textarea></div>
                                        </div>
                                        <div id="w-node-c603943200c7-c97f2e15" className="form-ale-13"><input type="submit" value="Submit" data-wait="Please wait..." className="form-ale-14 w-button" /></div>
                                    </div>
                                    </div>
                                </form>
                                }
                                { this.state.successForm &&
                                <div className="ale-success-1 w-form-done" ref={this.doneForm}>
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                }
                                { this.state.errorForm &&
                                <div className="w-form-fail" ref={this.errorForm}>
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
                                    <NavLink to="#" target="_blank" rel="noopener noreferrer" className="link-ale-2 w-inline-block">
                                    <div className="section-icon-ale-1"><img src="images/email-us3x_1email-us3x.png" alt="" className="icon-image-ale-1" /></div>
                                    <div className="text-link-ale-1">Email us</div>
                                    </NavLink>
                                </div>
                                <div className="section-ale-16">
                                    <NavLink to="#" className="link-ale-2 w-inline-block">
                                    <div className="section-icon-ale-1"><img src="images/call-us3x_1call-us3x.png" alt="" className="icon-image-ale-1" /></div>
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
                        <h2 className="aoh-headline-1">Join Our Growing Professionals Community<br /></h2>
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

export default withRouter(WrapperConsumer(ContactComponent));