import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink, withRouter } from 'react-router-dom'
import { singup, SINGUP_LINKEDIN_URL } from "../services/user";
import WrapperConsumer from '../store';
import { countries } from '../services/utils'
import { getAllCategories } from '../services/functions'
import Drop from './users/DropComponent'
let browser = null;

class CreateAccountComponent extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            error : false,
            user : {
                firstName: "",
                lastName : "",
                email : "",
                country : "",
                function : "",
                password : ""
            },
            errors :{
                firstName: false,
                lastName : false,
                country : false,
                email : false,
                password : false
            },
            select:{
                country : false,
                function : false
            },
            onblur:{
                country : false,
                function : false
            },
            hide:{
                country : true,
                function : true
            },
            successForm : false,
            errorForm : false,
            errorMsg : "Oops! Something went wrong while submitting the form.",
            selectedCountry : "Select one country",
            selectedFunction : "Select one function",
            allCountries : countries,
            functions : [],
            sendingForm : false
            
        };
    
        this.changeInput = this.changeInput.bind(this);
        this.doneForm = React.createRef();
        this.errorForm = React.createRef();

        this.categories = []

        browser = window.self;
        browser.onSuccess = (res) => {
            
            if(res.status === "success"){
                var user = this.state.user
                user.firstName = res.user.full_name
                user.lastName = res.user.last_name
                user.email = res.user.email
                user.provider = res.user.provider
                user.provider_id = res.user.provider_id
                user.picture = res.user.picture
                
                this.setState({user})

                this.emailRef.current.value = res.user.email

            }else{
                this.setState({error : true})
                switch (res.code){
                    case 301: 
                        this.setState({errorMsg : "This email address is already registered."})
                        break;
                    case 302: 
                        this.setState({errorMsg : "Oops! Something went wrong while submitting the form."})                        
                        break;
                    default :
                    break
                }
            }
        }
    }

    componentDidMount(){
        this.emailRef.current.value = null
        this.getAllFunctions()
        window.scrollTo(0, 0)
    }

    emailRef = React.createRef()
    passwordRef = React.createRef()

    getAllFunctions = async (e) => {
        var functions = await getAllCategories() 
        var allFunctions = []
        if(functions){
            functions = functions.map((option) => {
                option.tbl_functions = option.tbl_functions.map((op) => {
                    op.value = op.function_id
                    op.category = option.id
                    op.label = op.function_title
                    allFunctions.push(op)
                    return op
                })
                option.options = option.tbl_functions
                option.label = option.title
                return option
            });
            this.categories = {functions, allFunctions}
            this.setState({ functions: functions })
        }
    }

    changeInput = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        var user = this.state.user
        user[name] = value
        this.setState({
            user : user
        });
        var errors = this.state.errors
        errors[name] = false
        this.setState({errors: errors})
    }

    setSelectValue = (option, dropp) => {

        var hide = this.state.hide
        hide[dropp] = true
        this.setState({hide})
        var user = this.state.user
        user[dropp] = parseInt(option.value)
        this.setState({user})
        
        if(dropp === 'country')
            this.setState({selectedCountry : option.label})
        if(dropp === 'function')
            this.setState({selectedFunction : option.function_title})
        if(this.state.onblur[dropp] === false){
            var dropState = this.state.select
            dropState[dropp] = false
            this.setState({select : dropState})
        }
        //this.toggleDropdown(dropp)
        var errors = this.state.errors
        errors[dropp] = false
        this.setState({errors: errors})   
    }

    register = async (e) => {
        e.preventDefault()

        var errors = this.state.errors
        var error = false

        errors.firstName = this.state.user.firstName === ""
        errors.lastName = this.state.user.lastName === ""
        errors.email = this.state.user.email === ""
        errors.country = this.state.user.country === ""
        errors.password = this.state.user.password === ""
        errors.function = this.state.user.function === ""

        if(errors.firstName || errors.lastName || errors.email || errors.password || errors.country || errors.function)
            error = true
    
        if(error){
            this.setState({errors})
        }else{
            var user = {
                full_name : this.state.user.firstName,
                last_name : this.state.user.lastName,
                country : this.state.user.country,
                email : this.state.user.email,
                function : this.state.user.function,
                password : this.passwordRef.current.value,
                provider : this.state.user.provider,
                provider_id : this.state.user.provider_id,
                picture : this.state.user.picture
            }
            this.setState({sendingForm : true})
            const res = await singup(user)

            if(res === true){
                this.setState({successForm : false})
                this.setState({errorForm : false})
                setTimeout(() => {
                    localStorage.setItem("email-resend", user.email)
                    this.props.history.push("/confirm-email")
                }, 1200)
                return;
            }else{
                try{
                if(res.code){
                    switch (res.code){
                        case 301: 
                            this.setState({errorMsg : "This email address is already registered."})
                            break;
                        case 302: 
                            this.setState({errorMsg : "Unauthorized user!"})                        
                            break;
                        default :
                        break
                    }
                    this.setState({error : true})
                }else{
                    this.setState({errorForm : true})
                    this.setState({successForm : false})
                }
                }catch(err){
                    this.setState({errorForm : true})
                    this.setState({successForm : false})
                }
            }
            this.setState({sendingForm : false})
        }
    }
    registerLinkedIn = async (e) => {
        this.popup = document.open(SINGUP_LINKEDIN_URL, '_blank', 'width=600,height=600')
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Create account</title>
                </Helmet>
                <div className="section_lt">
                    <div className="section_lt1">
                    <div className="topbar_lt"><NavLink to="/" className="imagesection_lt w-inline-block"><img src={require('../assets/images/-a3x.png')} alt="" className="lt-logopic-1"/></NavLink>
                        <div className="rtopbar_lt">
                        <div className="topbarblock_lt alt-1">
                            <div className="texttopbar_lt">Already have an account?</div>
                        </div>
                        <div className="topbarblock_lt"><NavLink to="/login" className="topbarlink_lt">Log in</NavLink></div>
                        </div>
                    </div>
                    <div className="bluescreen_lt">
                        <div className="centralblock_lt">
                        <div className="centraltopsection_lt">
                            <div className="headtopsection_lt">
                            <h1 className="heading1_lt">Create a free account</h1>
                            </div>
                            <div className="textsection_lt">
                            <div className="ltextsection_lt">
                                <div className="lt-logos-1"><img src={require('../assets/images/slice53x.png')} alt="" className="lt-logo-1"/><img src={require('../assets/images/slice43x.png')} alt="" className="lt-logo-1"/><img src={require('../assets/images/slice33x.png')} alt="" className="lt-logo-1"/></div>
                                <div className="checksection_lt">
                                <div className="childrentextsection_lt">
                                    <div className="bluecirclesection_lt">
                                    <div className="bluecircleblock_lt"></div>
                                    </div>
                                    <div className="textcheck_lt">
                                    <div className="checktext_lt">Find Freelance work &amp; Earn more</div>
                                    </div>
                                </div>
                                <div className="childrentextsection_lt alt-1">
                                    <div className="bluecirclesection_lt">
                                    <div className="bluecircleblock_lt alt"></div>
                                    </div>
                                    <div className="textcheck_lt">
                                    <div className="checktext_lt alt">Professional - Remote work</div>
                                    </div>
                                </div>
                                <div className="childrentextsection_lt alt-1">
                                    <div className="bluecirclesection_lt">
                                    <div className="bluecircleblock_lt alt"></div>
                                    </div>
                                    <div className="textcheck_lt">
                                    <div className="checktext_lt alt">Tradesperson - Onsite Jobs</div>
                                    </div>
                                </div>
                                <div className="childrentextsection_lt">
                                    <div className="bluecirclesection_lt">
                                    <div className="bluecircleblock_lt"></div>
                                    </div>
                                    <div className="textcheck_lt">
                                    <div className="checktext_lt">Showcase your profiles</div>
                                    </div>
                                </div>
                                <div className="childrentextsection_lt alt-1">
                                    <div className="bluecirclesection_lt">
                                    <div className="bluecircleblock_lt alt"></div>
                                    </div>
                                    <div className="textcheck_lt">
                                    <div className="checktext_lt alt">Get free exposure of your profile to 1000s of Vendors, Contractors and Operators</div>
                                    </div>
                                </div>
                                <div className="childrentextsection_lt alt-1">
                                    <div className="bluecirclesection_lt">
                                    <div className="bluecircleblock_lt alt"></div>
                                    </div>
                                    <div className="textcheck_lt">
                                    <div className="checktext_lt alt">Highlight your skills to top tier clients</div>
                                    </div>
                                </div>
                                <div className="childrentextsection_lt">
                                    <div className="bluecirclesection_lt">
                                    <div className="bluecircleblock_lt"></div>
                                    </div>
                                    <div className="textcheck_lt">
                                    <div className="checktext_lt">Collaborate in worldwide Oil &amp; Gas Community</div>
                                    </div>
                                </div>
                                <div className="childrentextsection_lt alt-1">
                                    <div className="bluecirclesection_lt">
                                    <div className="bluecircleblock_lt alt"></div>
                                    </div>
                                    <div className="textcheck_lt">
                                    <div className="checktext_lt alt">Expand your horizons</div>
                                    </div>
                                </div>
                                <div className="childrentextsection_lt alt-1">
                                    <div className="bluecirclesection_lt">
                                    <div className="bluecircleblock_lt alt"></div>
                                    </div>
                                    <div className="textcheck_lt">
                                    <div className="checktext_lt alt">Collaborate and tackle large projects</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="rtextsection_lt">
                                <div className="verticalsection_lt">
                                <div className="lt-linkedinwrapper-1"><button onClick={() => this.registerLinkedIn()} className="lt-linkedinbutton-1 w-inline-block"><img src={require('../assets/images/linkedin4x_1linkedin4x.png')} alt="" className="lt-linkedinicon-1"/><div className="lt-linkedinbuttontext-1">Create an account with </div><div className="lt-linkedinbuttontext-1 alt-accent">LinkedIn</div></button></div>
                                <div className="lt-orwrapper-1">
                                    <div className="lt-orline-1"></div>
                                    <div className="lt-ortext-1">Or</div>
                                    <div className="lt-orline-2"></div>
                                </div>
                                <div className="formsection_lt">
                                    <div className="form21_lt w-form">
                                    { !this.state.successForm &&
                                    <form id="email-form" name="email-form" action="/"  onSubmit={this.register} data-name="Email Form" className="form2_lt">
                                        <div className="lt-fieldwrapper-1 alt-half"><input type="text" className={`${this.state.errors.firstName ? "warning" : ""} lt-inputfield-1 w-input`} maxLength="256" name="firstName" data-name="First name" placeholder="First name" id="firstName" defaultValue={this.state.user.firstName} onChange={this.changeInput}/></div>
                                        <div className="lt-fieldwrapper-1 alt-half"><input type="text" className={`${this.state.errors.lastName ? "warning" : ""} lt-inputfield-1 w-input`} maxLength="256" name="lastName" data-name="Last name" placeholder="Last name" id="lastName" defaultValue={this.state.user.lastName} onChange={this.changeInput}/></div>
                                        <div className="lt-fieldwrapper-1"><input type="email" className={`${this.state.errors.email ? "warning" : ""} lt-inputfield-1 w-input`} maxLength="256" name="email" data-name="email" placeholder="Email" id="email" autoComplete="off" required="" onChange={this.changeInput} ref={this.emailRef} /></div>
                                        <div className="lt-fieldwrapper-1"><input type="password" className={`${this.state.errors.password ? "warning" : ""} lt-passfield-1 w-input`} maxLength="256" name="password" data-name="Password" placeholder="Password" id="Password" autoComplete="new-password" required="" ref={this.passwordRef} onChange={this.changeInput} /></div>
                                        <div className="lt-fieldwrapper-1">
                                            <Drop options={this.state.allCountries} single={true} onChange={this.setSelectValue} error={this.state.errors.country} value={this.state.selectedCountry} name="country" btnName ="" />
                                        </div>
                                        <div onKeyPress={() => {console.log("enter")}} className="lt-fieldwrapper-1">
                                            <Drop options={this.state.functions} single={true} onChange={this.setSelectValue} error={this.state.errors.function} value={this.state.selectedFunction} name="function" btnName ="" />
                                        </div>
                                        { this.state.error &&
                                        <div className="lt-error-1"><img src={require('../assets/images/times7x_1times7x.png')} alt="" className="lt-erroricon-1" onClick={() => {this.setState({error : false})}}/>
                                            <div className="lt-errortext-1" >{this.state.errorMsg}</div>
                                        </div>
                                        }
                                        <div className="lt-buttonwrapper-1">
                                        {this.state.sendingForm ? 
                                        <button type="button" className="lt-formbutton-1 w-inline-block">
                                            <div className="lt-formbuttontext-1">Create an account</div>
                                        </button>
                                        : 
                                        <button type="submit" className="lt-formbutton-1 w-inline-block">
                                            <div className="lt-formbuttontext-1">Create an account</div>
                                        </button>
                                        }
                                        </div>
                                    </form>
                                    }
                                    { this.state.successForm &&
                                    <div className="successmsg_lt w-form-done">
                                        <div className="textsuccess_lt">Thank you! Your submission has been received!</div>
                                    </div>
                                    }
                                    { this.state.errorForm &&
                                    <div className="errormsg_lt w-form-fail">
                                        <div className="errortextmsg_lt">Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                    }
                                    </div>
                                </div>
                                <div className="sectiontext2_lt">
                                    <div className="richtext_lt w-richtext">
                                    <p>By clicking &quot;Create your account&quot; below, you agree to our <NavLink to="/terms-of-service" target="_blank">Terms Of Service</NavLink> and <NavLink to="/privacy" target="_blank">Privacy Statement</NavLink>. We will occasionally email you.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
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

export default withRouter(WrapperConsumer(CreateAccountComponent));