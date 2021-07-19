import React, {Fragment} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {Helmet} from "react-helmet";
import WrapperConsumer from '../../store';
import '../../assets/css/style.css';
import Header from '../HeaderComponent';
import Footer from './Footer';
import User from './User'
import Links from './Links'
//import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select  from 'react-select'
import {getAllSkills} from '../../services/skills'
import {updateUser} from '../../services/user'
import {LANGUAGES, EDUCATION, ENGLISH_LEVEL, EXPERIENCE, countries, getAllZones, AGE_OPTIONS} from '../../services/utils'
import ActionTypes from '../../store/actionTypes'
import validator from 'validator'
import Drop from './DropComponent'

function Phones(props) {
    return (
      <PhoneInput
        placeholder="+123456789"
        value={props.value}
        country={'us'}
        name={props.name}
        containerClass="aon-two-bottomitemcontent-2"
        inputClass="aon-two-bottomphonefield-1 w-input"
        maxLength="50"
        buttonClass="aon-two-bottomphonepic-1"
        dropdownStyle={{width : props.width}}
        onChange={props.onChange}
        onBlur={(e) => {props.onBlur(props.name, e)}}/>
    )
  }
  
  const customStyles = {
    control : (styles) =>{
        return {
            ...styles,
            border: '1px solid #e6e6e6',
        };
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        minHeight: "28px",
        margin : "2px 5px",
        width : "98%",
        backgroundColor: 
            isDisabled ? null : 
            isSelected ? "#ececec" : 
            isFocused ? "#fafafa" : null,
        color: "black",
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? "#fafafa" : "#fafafa"),
        },
      };
    },
    menu:(styles) => {
        return {
            ...styles,
            border : 'none',
            'marginTop' : "0px",
            'borderRadius': '3px',
            'backgroundColor': '#fff',
            'boxShadow': '1px 1px 30px 0 rgba(0, 0, 0, 0.1)'
        };
    },
    multiValue: (styles, { data }) => {
         const color = data.isFixed ?  '#f2f2f2' : 'white' 
         var style = {
            ...styles,
            border: `1px solid #f2f2f2`,
            background : color,
            height: '32px',
            'marginRight': '5px',
            'borderRadius': '3px',
            color: '#575b63',
            cursor: 'pointer'
        }
        if(data.isFixed){
            style['backgroundImage'] = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAABg2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz/GjxEjioWFxWvCakZ+1ISFMpNQkzRGGWxmnvmh5s283ptJk62ynaLExq8FfwFbZa0UkZKVhTWxQc95Ro1kzu3c87nfe8/p3nPBEU6rmlnTC1omZ4TG/cpcZF5xPlJHDU24GY6qpj46PR2kor3dUGXHK69dq/K5f61xKW6qUFUvPKLqRk54Qji4ktNt3hRuU1PRJeFjYY8hFxS+tvVYiZ9sTpb4w2YjHAqAo0VYSf7i2C9WU4YmLC+nU0vn1Z/72C9xxTOzMxLd4h2YhBjHj8IkYwTw0ceQzD689NMjKyrk937nT5GVXFVmnQIGyyRJkcMjal6qxyUmRI/LSFOw+/+3r2ZioL9U3eWH2gfLeukC5wZ8Fi3rfd+yPg+g+h7OMuX87B4MvopeLGudu9C8BifnZS22Bafr0H6nR43ot1Qt7kgk4PkImiLQegkNC6We/exzeAvhVfmqC9jegW4537z4BW/zZ+oMjDuqAAAACXBIWXMAAEJwAABCcAFu8l9tAAABt0lEQVR4nO3cMUoDQRiG4XeXECy19iIGPYUgW2wjbOsFbAURLaxst1xhwBPYeoF4B4+gGJNAbFLFDZt8uDNGvgdSzcD8vCyTbRIwM/u/stQDFGV1AozWzPIKPIemXsSdqtsg5eFFWY2Al45tZ8BThHG2kic+/2iDPaPepxCkDrfJVZH8OmmTOtzOcjiRw4kcTuRwIocTOZzI4UQOJ3I4kcOJHE7kcCKHEzmcyOFEDidyOJHDiRxO5HAihxM5nMjhRA4ncjiRw4kcTpQVZXUOXAP7Cc4fAMOOPXNgGmGWVQvgLjT1VdtiVpTVG3AYd6adMQEOQlNPVhdy0jxpu2Jv+fnBd5zI4UQOJ3I4UQ58pB7iD5sDX20LOXALfEYdZzfMgPvQ1K1tMoCirIZ0v4j24QK46djzAFxGmGXVLDR169MGyx+IhKaekuDtvCirTc6chaZ+732YLfnLQeRwIocTOZzI4UQOJ3I4kcOJHE7kcCKHEzmcyOFEDidyOJHDiRxO5HAihxM5nMjhRA4ncjiRw4kcTuRwIocTOZwodbjxL+2JLvkfdxZldQocr5llDDyGpp7Hncp68w0vRTl0eOWCYAAAAABJRU5ErkJggg==)'
            style['backgroundPosition'] = "95% 50%"
            style['backgroundSize'] = "13px"
            style['backgroundRepeat'] = "no-repeat"
            style['padding'] = '2px 18px 0px 10px'
        }
        return style
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        'marginRight': '5px',
        color: '#575b63',
        'fontSize': '16px',
        'lineHeight': '1.3em',
        'textAlign': 'center',
        cursor: 'pointer',
    }),
    multiValueRemove: (styles, { data }) => {
        return data.isFixed ? { ...styles, display: 'none' } : {
        ...styles,
        color: '#575b63',
            background : 'white',
            ':hover': {
                backgroundColor: "white",
                color: '#575b63',
            },
        };
    }
  };


  const orderOptions = values => {
    return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
  };
  
  

class EditProfileComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            userEdit : {
                skills : [],
                country : null,
                language: [],
                education : [],
                functions : []
            },
            errors : {},
            zones : [],
            skills : [],
            resumeFile : "",
            profileFile : "",
            successForm : false,
            errorForm : false,
            errorMsg : false,
            activeSection : {
                first : true,
                second : false,
                third : false,
                fourth : false
            },
            sendingForm : false,
            widthPhone : "300px"
        }

        this.onChange = this.onChange.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePhoneCompany = this.onChangePhoneCompany.bind(this);
        this.inputFileChange = this.inputFileChange.bind(this)
        this.onRemoveDrop = this.onRemoveDrop.bind(this)
        this.onScroll = this.onScroll.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }


    firstRef = React.createRef()
    secondRef = React.createRef()    
    thirdRef = React.createRef()
    fourthRef = React.createRef()

    componentDidMount(){
        this.getAllZones()
        this.getSkills()
        document.addEventListener("scroll", this.onScroll)
        window.addEventListener("resize", this.onResize)
        var w = this.fullNameRef.current.offsetWidth
        this.setState({widthPhone : w})
    }

    componentWillUnmount(){
        document.removeEventListener("scroll", this.onScroll)
        window.removeEventListener("resize", this.onResize)
    }

    onResize(){
        var w = this.fullNameRef.current.offsetWidth
        this.setState({widthPhone : w})
    }

    onBlur(name, e){
        var value = e.target.value
        //var name = e.target.name
        if(!value || value.length < 4){
            value = "" 
        }
        console.log(value, name)
        var userP = this.state.userEdit
        userP[name] = value
        this.setState(userP)
    }

    onScroll() {
        var scroll = window.scrollY + 80
        var sections = {
            first : false,
            second : false,
            third : false,
            fourth : false
        }

        if(scroll < this.secondRef.current.offsetTop)
            sections.first = true
        if(scroll >= this.secondRef.current.offsetTop && scroll < this.thirdRef.current.offsetTop)
            sections.second = true
        if(scroll >= this.thirdRef.current.offsetTop && scroll < this.fourthRef.current.offsetTop)
            sections.third = true
        if(scroll >= this.fourthRef.current.offsetTop)
            sections.fourth = true            
        this.setState({activeSection : sections})
    }

    setSkills = (user) => {
        var skills = user.skills
        skills = skills.map(function(s){
            return {value : s.skill.skill_id, label: s.skill.title_skill}
        })
        var userS = this.state.userEdit
        userS.skills = skills
        this.setState({userEdit : userS})
    }

    setEducations = (user) => {
        var educations = user.educations
        educations = educations.map(function(s){
            var label = EDUCATION.find((l) => l.value === s.education_id)
            return (label) ? {value : s.education_id, label: label.label} : {value : s.education_id, label: ""}
            
        })
        var userS = this.state.userEdit
        userS.education = educations
        this.setState({userEdit : userS})
        
    }

    setLanguage = (user) => {
        var languajes = user.languajes
        languajes = languajes.map(function(s){
            var label = LANGUAGES.find((l) => l.value === s.language_id)
            return {value : s.language_id, label: label.label}
        })
        
        //languajes.splice(0, 0, {value : 0, label: "Add a language", isFixed : true});
        var userS = this.state.userEdit
        userS.language = languajes
        this.setState({userEdit : userS})
        
    }

    async getAllZones(){
        const res = await getAllZones()
        if(res && res.status === "success"){
            var zones = res.zones.map((z) =>{
                return {value : z.id, label : z.zone_name}
            })
            this.setState({zones: zones})
        }
        
    }

    async getSkills(){
        const res = await getAllSkills()
        if(res && res.status === "success"){
            var skills = res.skills.map(function(s){
                return {value : s.id, label: s.title}
            })
            this.setState({skills: skills})
        }
    }

    setLevelEnglish(level){
        level = ENGLISH_LEVEL.find((ed) => ed.value === level)
        return (level) ? level : ""
    }

    setEnglishP = (user) =>{
        var level = ENGLISH_LEVEL.find((ed) => ed.value === user.english_proficiency)
        var userS = this.state.userEdit
        if(level && !userS.english_proficiency){
            userS.english_proficiency = level.value
            this.setState({userEdit : userS})
        }
    }
    setAge = (user) =>{
        var age = AGE_OPTIONS.find((ed) => ed.value === user.age)
        var userS = this.state.userEdit
        if(age && !userS.age){
            userS.age = age.value
            this.setState({userEdit : userS})
        }
    }
    setFunctions = (user) => {
        var functions = user.functions
        functions = functions.map(function(s){
            return {value : s.function_id, label: s.tbl_function.title_function}
        })
        //functions.splice(0, 0, {value : 0, label: "Add a function", isFixed : true});
        var uS = this.state.userEdit
        uS.functions = functions
        this.setState({userE : uS});
    }
    getCountry = (user) => {
        var country = countries.find((c) => {
            return String(c.value) === user.country
        })
        var userS = this.state.userEdit
        if(country && userS.country === null){ 
            userS.country = country.val
            this.setState({userEdit : userS})
        }
    }

    setCountry = (cU) => {
        var country = countries.findIndex((c) => { 
            return c.val === cU
        })
        return countries[country]
    }
    

    setTimezone(user){
        var userS = this.state.userEdit
        if(!userS.timezone){
            userS.timezone = parseInt(user.timezone)
            this.setState({userEdit : userS})
        }
    }
    getExperience(e){
        e = EXPERIENCE.find((ed) => ed.value === e)
        return (e) ? e.label : "..."
    }

    setExperience = (user) =>{
        var experience = EXPERIENCE.find((ed) => ed.value === user.experience)
        var userS = this.state.userEdit
        if(experience && !userS.experience){
            userS.experience = experience.value
            this.setState({userEdit : userS})
        }
    }

    formatPicture(p){
        p = p.split("/")
        p = p.pop()
        return p
    }

    inputChange(e){
        var userS = this.state.userEdit
        const target = e.target;
        const value = target.value;
        const name = target.name;
        userS[name] = value
        this.setState({userEdit : userS})
    }

    onChangePhone(val){
        if(!val || val.length < 4){
            val = "" 
        }
        var userS = this.state.userEdit
        userS["contact_no"] = val
        console.log(userS)
        this.setState({userEdit : userS})
    }

    onChangePhoneCompany(val){
        if(!val || val.length < 4){
            val = "" 
        }
        var userS = this.state.userEdit
        userS["company_contact"] = val
        this.setState({userEdit : userS})
    }

    async onChange(value, {action, removedValue, name }) {
        var initValues = []
        switch(name){
            case "language" :
                initValues = LANGUAGES.filter(v => v.isFixed);
                break
            case "skills" :
                initValues = []
                break
            case "education" :
                initValues = EDUCATION.filter(v => v.isFixed);
                break     
            default :
                break           
        }

        switch (action) {
          case 'remove-value':
          case 'pop-value':
            if (removedValue.isFixed) {
              return;
            }
            break;
          case 'clear':
            value = initValues
            break;
          case 'create-option' :
            break;
        default :
            break 
        }
    
        
        var state = this.state
        if(name === "skills"){
            value = orderOptions(value);
        }
        if(name === "english_proficiency" || name === "age"){
            value = value.value
        }
        state.userEdit[name] = value
        
        this.setState(state);
    }

    async onRemoveDrop(value, name ) {
        var state = this.state
        if(name === "english_proficiency" || name === "age"){
            value = value.value
        }
        state.userEdit[name] = value
        this.setState(state);
    }

    functionsChange = (val) => {
        var userF = this.state.userEdit
        userF.functions = val
        this.setState({ userEdit : userF })
    }

    inputFileChange=event=>{
        var userEdit = this.state.userEdit
        var name = event.target.name
        var value = event.target.value
        var p = ""
        var file = event.target.files[0]
        if(name === "resume"){
            if(file.type === "application/pdf"){
                p = value.split("\\")
                p = p.pop()
                userEdit.resumeFile = event.target.files[0]
                this.setState({resumeFile : p, userEdit})
            }
        }else if(name === "profileFile"){
            if(file.type === "image/png" || file.type === "image/gif" || file.type === "image/jpg" || file.type === "image/jpeg"){
                p = value.split("\\")
                p = p.pop()
                userEdit.profileFile = event.target.files[0]
                this.setState({profileFile : p, userEdit})
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        var user = nextProps.context.user
        if(user.country) this.getCountry(user) 
        if(user.skills.length > 0) this.setSkills(user)
        if(user.educations.length > 0) this.setEducations(user)
        if(user.languajes.length > 0) this.setLanguage(user)
        if(user.english_proficiency) this.setEnglishP(user) 
        if(user.age) this.setAge(user) 
        if(user.timezone) this.setTimezone(user) 
        if(user.experience) this.setExperience(user) 
        if(user.functions) this.setFunctions(user)
    }

    fullNameRef = React.createRef()
    lastNameRef = React.createRef()

    async onSubmit(){
        this.setState({errorMsg : false})
        const {dispatch} = this.props.context
        let userE = {}
        for (var key in this.state.userEdit) {
            if(key === "experience" || key === "country" || key === "timezone"){
                if(this.state.userEdit[key].value) 
                    userE[key] = this.state.userEdit[key].value
            }else{
                userE[key] = this.state.userEdit[key]
            }
        }

        userE.skills = userE.skills.filter((s) => s.value !== "")
        userE.education = userE.education.filter((s) => s.value !== 0)
        userE.language = userE.language.filter((s) => s.value !== 0)
        userE.functions = userE.functions.filter((s) => s.value !== 0)

        var error = false
        var errors = this.state.errors

        errors.full_name = this.fullNameRef.current.value === ""
        errors.last_name = this.lastNameRef.current.value === ""

        if(this.state.userEdit.website && this.state.userEdit.website !== ""){
            errors.website = !validator.isURL(this.state.userEdit.website)
        }
        if(this.state.userEdit.linked_in){
            errors.linked_in = this.state.userEdit.linked_in.match("^(http(s)?://)?([w]+.)?linkedin.com/(pub|in|profile)") == null
        }
        error = errors.full_name || errors.last_name || errors.website || errors.linked_in

        if(error){
            this.setState({errors, errorMsg : "Please, fix the fields highlighted in red"})
        }else{
            const data = new FormData()   
            for (key in userE) {
                var v = userE[key]

                if(Array.isArray(userE[key])){
                    v = []
                    for(var i in userE[key]){
                        v.push(userE[key][i].value)
                    }
                }
                data.append(key, v)
            }
            this.setState({sendingForm : true})
            const userEdit = await updateUser(data)
            
            if(userEdit && userEdit.status === "success"){
                dispatch({type: ActionTypes.GET_USER})
                var u = this.state.userEdit
                u.profileFile = null
                u.resumeFile = null
                this.setState({successForm : true, errorMsg : false, errorForm : false, userEdit: u}) 
                const script = document.createElement("script");
                const scriptText = document.createTextNode(`window.Intercom("update", {
                    name: "${u.full_name}", 
                    email: "${u.email}", 
                    last_request_at: ${parseInt((new Date()).getTime()/1000) } 
                })`);
                script.appendChild(scriptText);
                document.head.appendChild(script);
                this.props.history.push('/profile-view')
            }else{
                if(userEdit && userEdit.code && userEdit.code === 301){
                    errors.email = true
                    this.setState({errors, errorMsg: "The email is already registered!", successForm : false}) 
                }else{
                    this.setState({successForm : false, errorMsg: "An error ocurred"}) 
                }
            }
            this.setState({sendingForm : false})
        } 
    }

    onWait = () => {
        return
    }

    render(){
        const {context:{user}} = this.props;
        
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Profile edit</title>
                </Helmet>
                <Header />
                <div className="global-header-1">
                    <div className="global-header-2">
                    <h1 className="global-header-3">My profile</h1>
                    <div className="global-headerbread-1">
                        <NavLink to="/dashboard" className="global-headerbread-2">Dashboard</NavLink>
                        <div className="global-headerbread-3">/</div>
                        <div className="global-headerbread-3">My profile</div>
                    </div>
                    </div>
                </div>
                <div className="aon-section-1">
                    <div className="aon-webflowdefault-1 w-form">
                    <form id="profile" name="profile" action="/profile" onSubmit={this.onSubmit} data-name="Email Form" className="aon-webflowdefault-2">
                        <div className="aon-areaswrapper-1">
                        <User modeSave={true} onSubmit={this.onSubmit} onWait={this.onWait} onChange={this.functionsChange} functionValue={this.state.userEdit.functions} sendingForm={this.state.sendingForm} />
                        <div className="aon-areatwo-1">
                            <span id="first" ></span>
                            <div className="aon-two-top-1">
                            <div className="aon-two-toplinks-1">
                                <a href="#first" className={`aon-two-toplink-1 ${this.state.activeSection.first ? "w--current" : ""}`}>My info</a>
                                <a href="#second" className={`aon-two-toplink-1 ${this.state.activeSection.second ? "w--current" : ""}`}>Professional</a>
                                <a href="#third" className={`aon-two-toplink-1 ${this.state.activeSection.third ? "w--current" : ""}`}>Location</a>
                                <a href="#fourth" className={`aon-two-toplink-1 ${this.state.activeSection.fourth ? "w--current" : ""}`}>Company</a>
                                </div>
                            </div>
                            <div className="aon-two-bottom-1">
                            {this.state.errorMsg && 
                            <div className="aon-error-1"><img src={require('../../assets/images/times7x_1times7x.png')} alt="" onClick={() => this.setState({errorMsg : false})} className="aon-erroricon-1"/>
                                <div className="aon-errortext-1">{this.state.errorMsg}</div>
                            </div>
                            }
                            <div ref={this.firstRef} className="aon-two-bottomsection-1 view">
                                <div className="aon-two-bottomheading-1">
                                <h2 className="aon-two-bottomheading-2">My info</h2>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">First name</div>
                                    <div className="aon-two-bottomitemcontent-2"><input type="text" defaultValue={user.full_name} ref={this.fullNameRef} className={`${this.state.errors.full_name ? "warning" : ""} aon-two-bottomtextfield-1 w-input`} maxLength="50" name="full_name" data-name="First name" placeholder="John" id="full_name" required="" onChange={this.inputChange}/></div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1 hide">
                                    <div className="aon-two-bottomitemname-1">Last name</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1">{user.last_name}</div>
                                    </div>
                                </div>
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Last name</div>
                                    <div className="aon-two-bottomitemcontent-2"><input type="text" defaultValue={user.last_name} ref={this.lastNameRef} className={`${this.state.errors.last_name ? "warning" : ""} aon-two-bottomtextfield-1 w-input`} maxLength="50" name="last_name" data-name="Last name" placeholder="Curtains" id="last_name" required=""  onChange={this.inputChange}/></div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Contact email address</div>
                                    <div className="aon-two-bottomitemcontent-2"><input type="text" defaultValue={user.email} className={`aon-two-bottomtextfield-1 w-input`} maxLength="100" name="email" data-name="Contact email address" placeholder="johnrt@email.com" id="email" required="" readOnly="readonly"/></div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Phone number</div>
                                    
                                        <Phones onChange={this.onChangePhone} onBlur={this.onBlur} name="contact_no" width={this.state.widthPhone} value={(user.contact_no) ? user.contact_no : "" } />
                                    
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">                                
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Age</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <Select options={AGE_OPTIONS} name="age" value={AGE_OPTIONS.find((a) => a.value === this.state.userEdit.age)} onChange={this.onChange} styles={customStyles} className='customDropdown'/>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Language</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                    <Drop options={LANGUAGES} onChange={this.onChange} onRemove={this.onRemoveDrop} value={this.state.userEdit.language} name="language" btnName ="Add a language" />
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Resume</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                    <div className="aon-two-bottomitemattach-1">
                                        <label htmlFor={"resume"}  className="aon-two-bottomitemattach-2 w-inline-block"></label>
                                        <input type="file" name="resume" accept="application/pdf" id="resume" className="inputfile" onChange={this.inputFileChange} />
                                        <label htmlFor={"resume"} className="aon-two-bottomitemattach-5 w-inline-block">
                                            <div className="aon-two-bottomitemattach-6">{this.state.resumeFile !== "" ? this.state.resumeFile : (user.resume.length > 0) ? this.formatPicture(user.resume[0].resume_file) : ""}</div>
                                            {this.state.resumeFile === "" &&
                                            <div className="aon-two-bottomitemattach-7">Upload file...</div>
                                            }
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <span id="second"></span>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Profile picture</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                    <div className="aon-two-bottomitemattach-1">
                                        <label htmlFor={"profileFile"} className="aon-two-bottomitemattach-2 attachphoto2 w-inline-block" style={(user.profile_file) ? {'backgroundImage' : 'url('+user.profile_file+')'} : {}}></label>
                                        <input type="file" name="profileFile" accept="image/*" id="profileFile" className="inputfile" onChange={this.inputFileChange} />
                                        <label htmlFor={"profileFile"} className="aon-two-bottomitemattach-5 w-inline-block">
                                        <div className="aon-two-bottomitemattach-6">{this.state.profileFile !== "" ? this.state.profileFile : (user.profile_file) ? this.formatPicture(user.profile_file) : ""}</div>
                                        {this.state.profileFile === "" &&
                                        <div className="aon-two-bottomitemattach-7">Upload file...</div>
                                        }
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div ref={this.secondRef} className="aon-two-bottomsection-1 view">
                                <div className="aon-two-bottomheading-1">
                                <h2 className="aon-two-bottomheading-2">Professional</h2>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Education</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <Drop options={EDUCATION} onChange={this.onChange} onRemove={this.onRemoveDrop} value={this.state.userEdit.education} name="education" btnName ="Add education" />
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">English level</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <Select options={ENGLISH_LEVEL} name="english_proficiency" value={this.setLevelEnglish(this.state.userEdit.english_proficiency)} onChange={this.onChange} styles={customStyles} className='customDropdown'/>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">LinkedIn</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <input type="text" maxLength="128" name="linked_in" data-name="linked_in" defaultValue={(user.linked_in) ? user.linked_in : ""} onChange={this.inputChange} id="linked_in" className={`${this.state.errors.linked_in ? "warning" : ""} aon-two-bottomtextfield-1 w-input`}/></div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Profile details</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <textarea data-name="Profile details" maxLength="255" id="about" name="about" defaultValue={(user.about) ? user.about : ""} onChange={this.inputChange} className="aon-two-bottomtextfield-2 w-input"/></div>
                                </div>
                                <span id="third" ></span>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Skills and expertise</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <Drop options={this.state.skills} onChange={this.onChange} onRemove={this.onRemoveDrop} value={this.state.userEdit.skills} name="skills" btnName ="Add skill" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div ref={this.thirdRef} className="aon-two-bottomsection-1 view">
                                <div className="aon-two-bottomheading-1">
                                <h2 className="aon-two-bottomheading-2">Location</h2>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Address 1</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <input type="text" defaultValue={(user.street) ? user.street : ""} maxLength="100" name="street"  onChange={this.inputChange} data-name="street" id="street" className="aon-two-bottomtextfield-1 w-input"/>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Address 2</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <input type="text" defaultValue={(user.area) ? user.area : ""} maxLength="100" name="area"  onChange={this.inputChange} data-name="area" id="area" className="aon-two-bottomtextfield-1 w-input"/>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">City</div>
                                    <div className="aon-two-bottomitemcontent-2"><input type="text" maxLength="100" name="city" data-name="city" id="city" defaultValue={(user.city) ? user.city : ""} onChange={this.inputChange} className="aon-two-bottomtextfield-1 w-input"/></div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">State / Province</div>
                                    <div className="aon-two-bottomitemcontent-2"><input type="text" defaultValue={(user.state) ? user.state : ""} maxLength="100" name="state"  onChange={this.inputChange} data-name="State / Province" id="state" className="aon-two-bottomtextfield-1 w-input"/></div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Country</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <Select name="country" options={countries} styles={customStyles} onChange={this.onChange} value={this.setCountry(this.state.userEdit.country)} className='customDropdown'/>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <span id="fourth" ></span>
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Timezone</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <Select name="timezone" options={this.state.zones} styles={customStyles} onChange={this.onChange} value={this.state.zones.find((z)=> z.value === this.state.userEdit.timezone)} className='customDropdown'/>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div ref={this.fourthRef} className="aon-two-bottomsection-1 view">
                                <div className="aon-two-bottomheading-1">
                                <h2 className="aon-two-bottomheading-2">Company info</h2>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Business name</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <input type="text" maxLength="100" name="company_name" defaultValue={(user.company_name) ? user.company_name : ""} data-name="Business name" id="company_name" className="aon-two-bottomtextfield-1 w-input" onChange={this.inputChange}/></div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Website</div>
                                    <div className="aon-two-bottomitemcontent-2"><input type="text" maxLength="128" name="website" defaultValue={(user.website) ? user.website : ""} data-name="website" id="website" className={`${this.state.errors.website ? "warning" : ""} aon-two-bottomtextfield-1 w-input`} onChange={this.inputChange}/></div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Company phone</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <Phones onChange={this.onChangePhoneCompany} onBlur={this.onBlur} width={this.state.widthPhone} name="company_contact" value={(user.company_contact) ? user.company_contact : ""} />
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Tagline</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                        <input type="text" maxLength="200" name="tagline" defaultValue={(user.tagline) ? user.tagline : ""} data-name="tagline" id="tagline" className="aon-two-bottomtextfield-1 w-input" onChange={this.inputChange}/></div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitemedit-1">
                                    <div className="aon-two-bottomitemname-2">Experience</div>
                                    <div className="aon-two-bottomitemcontent-2">
                                    <Select name="experience" options={EXPERIENCE} styles={customStyles} onChange={this.onChange} value={EXPERIENCE.find((z)=> z.value === this.state.userEdit.experience)} className='customDropdown'/>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {this.state.sendingForm &&
                            <div className="aon-one-profilebutton-1 border-0 p-0 pt-2 d-lg-none">
                                <button type="button" onClick={this.onWait} className="aon-one-savebutton-1 w-button">Save updates</button>
                            </div>
                            }
                            {!this.state.sendingForm &&
                            <div className="aon-one-profilebutton-1 border-0 p-0 pt-2 d-lg-none">
                                <button type="button" onClick={this.onSubmit} className="aon-one-savebutton-1 w-button">Save updates</button>
                            </div>
                            }
                            </div>
                        </div>
                        <Links />
                        </div>
                    </form>
                    {this.state.successForm &&
                    <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    }
                    {this.state.errorForm &&
                    <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                    }
                    </div>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(WrapperConsumer(EditProfileComponent));