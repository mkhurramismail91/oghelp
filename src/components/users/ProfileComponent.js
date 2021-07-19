import React, {Fragment} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {Helmet} from "react-helmet";
import WrapperConsumer from '../../store';
import '../../assets/css/style.css';
import Header from '../HeaderComponent';
import Footer from './Footer';
import User from './User'
import Links from './Links'
import {LANGUAGES, EDUCATION, ENGLISH_LEVEL, EXPERIENCE, countries, getAllZones, AGE_OPTIONS} from '../../services/utils'
import {S3_BUCKET} from '../../services/user'
import { formatPhoneNumberIntl } from 'react-phone-number-input'

class ProfileComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user : {},
            zones : [],
            activeSection : {
                first : true,
                second : false,
                third : false,
                fourth : false
            }
        }
        this.onScroll = this.onScroll.bind(this);
    }

    firstRef = React.createRef()
    secondRef = React.createRef()    
    thirdRef = React.createRef()
    fourthRef = React.createRef()

    onScroll() {
        var scroll = window.scrollY + 80

        var sections = {
            first : false,
            second : false,
            third : false,
            fourth : false
        }
        console.log(scroll, this.secondRef.current.offsetTop)
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

    componentDidMount(){
        this.getAllZones()
        document.addEventListener("scroll", this.onScroll)
    }

    componentWillUnmount(){
        document.removeEventListener("scroll", this.onScroll)
    }

    async getAllZones(){
        const res = await getAllZones()
        if(res.status === "success"){
            this.setState({zones: res.zones})
        }
        
    }

    setEducation(e){
        e = EDUCATION.find((ed) => ed.value === e)
        return (e) ? e.label : "Any"
    }

    setLanguaje(e){
        e = LANGUAGES.find((ed) => ed.value === e)
        return (e) ? e.label : "Any"
    }

    setLevelEnglish(level){
        level = ENGLISH_LEVEL.find((ed) => ed.value === level)
        return (level) ? level.label : "..."
    }

    getCountry(country){
        country = countries.find((c) => String(c.label) === country)
        return  (country) ? country.label : "..."
    }

    setTimezone(e){
        e = this.state.zones.find((z) => String(z.id) === e)
        return (e) ? e.zone_name : "..."
    }
    getExperience(e){
        e = EXPERIENCE.find((ed) => ed.value === e)
        return (e) ? e.label : "..."
    }

    formatPicture(p){
        p = p.split("/")
        p = p.pop()
        return p
    }

    render(){
        const {context:{user}} = this.props;
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Profile view</title>
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
                    <div id="profile" name="profile" data-name="Email Form" className="aon-webflowdefault-2">
                        <div className="aon-areaswrapper-1">
                        <User modeView={true} />
                        <div className="aon-areatwo-1">
                            <span id="first" ></span>
                            <div className="aon-two-top-1">
                            <div className="aon-two-toplinks-1">
                                <a href="#first" className={`aon-two-toplink-1 ${this.state.activeSection.first ? "w--current" : ""}`}>My info</a>
                                <a href="#second" className={`aon-two-toplink-1 ${this.state.activeSection.second ? "w--current" : ""}`}>Professional</a>
                                <a href="#third" className={`aon-two-toplink-1 ${this.state.activeSection.third ? "w--current" : ""}`}>Location</a>
                                <a href="#fourth" className={`aon-two-toplink-1 ${this.state.activeSection.fourth ? "w--current" : ""}`}>Company</a></div>
                            </div>
                            <div className="aon-two-bottom-1">
                            <div ref={this.firstRef} className="aon-two-bottomsection-1 view">
                                <div className="aon-two-bottomheading-1">
                                <h2 className="aon-two-bottomheading-2">My info</h2>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">First name</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                        <div className="aon-two-bottomitemtext-1 text-break-all">{user.full_name}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Last name</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{user.last_name}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Contact email address</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{user.email}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Phone number</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1">
                                        {(user.contact_no) ? formatPhoneNumberIntl(user.contact_no)  : "..." }
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Age</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                        <div className="aon-two-bottomitemtext-1">{(user.age) ? AGE_OPTIONS.find((a) => a.value === user.age).label : "..." }</div>                                    
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Language</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemmultiple-1">
                                    {user.languajes.length > 0 &&
                                        user.languajes.map((l) =>
                                            <div key={`lan-${l.user_languaje_id}`} className="aon-two-bottomitemmultiple-2">
                                                <div className="aon-two-bottomitemmultiple-3">{(l.language_id) ? LANGUAGES.find((ll) => ll.value === l.language_id).label : "..." }</div>
                                            </div>
                                        )
                                    }{user.languajes.length === 0 &&
                                        <span>...</span>
                                    }
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                <div className="aon-two-bottomitemname-1">Resume</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemattach-1">
                                        {user.resume.length > 0 ?
                                        <a href={S3_BUCKET+user.resume[0].resume_file} target="_blank" rel="noopener noreferrer" className="aon-two-bottomitemattach-2 w-inline-block">...</a>
                                        :
                                        <button type="button" className="aon-two-bottomitemattach-2 w-inline-block"></button>
                                        }
                                        <div className="aon-two-bottomitemattach-3">
                                            <div className="aon-two-bottomitemattach-4">{(user.resume.length > 0) ? this.formatPicture(user.resume[0].resume_file) : ""}</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <span id="second"></span>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Profile picture</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemattach-1"><div className="aon-two-bottomitemattach-2 attachphoto2 w-inline-block" style={(user.profile_file) ? {'backgroundImage' : 'url('+user.profile_file+')'} : {}}></div>
                                        <div className="aon-two-bottomitemattach-3">
                                        <div className="aon-two-bottomitemattach-4"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            <div id="" ref={this.secondRef} className="aon-two-bottomsection-1 view">
                                <div className="aon-two-bottomheading-1">
                                <h2 className="aon-two-bottomheading-2">Professional</h2>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Education</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemmultiple-1">
                                        {user.educations.length > 0 &&
                                            user.educations.map((e) => 
                                                <div key={`edu-${e.education_id}`} className="aon-two-bottomitemmultiple-2">
                                                    <div className="aon-two-bottomitemmultiple-3">{this.setEducation(e.education_id)}</div>
                                                </div>
                                            )
                                        }{user.educations.length === 0 &&
                                            <span>...</span>
                                        }
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">English level</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1">{this.setLevelEnglish(user.english_proficiency)}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">LinkedIn</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{(user.linked_in) ? user.linked_in : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <span id="third" ></span>
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Profile details</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{(user.about) ? user.about : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Skills and expertise</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemmultiple-1">
                                        {user.skills.length > 0 && 
                                            user.skills.map((s) =>
                                                <div key={`skl-${s.user_skill_id}`} className="aon-two-bottomitemmultiple-2">
                                                    <div className="aon-two-bottomitemmultiple-3">{s.skill.title_skill}</div>
                                                </div>
                                            )
                                        }
                                        {user.skills.length === 0 && 
                                            <span>...</span>
                                        }
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div ref={this.thirdRef} className="aon-two-bottomsection-1 view">
                                <div className="aon-two-bottomheading-1">
                                <h2 className="aon-two-bottomheading-2">Location</h2>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Address 1</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{(user.street) ? user.street : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Address 2</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{(user.area) ? user.area : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">City</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{(user.city) ? user.city : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">State / Province</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{(user.state) ? user.state : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Country</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1">{(user.country) ? countries.find((c) => c.value === user.country).label : "..." }</div>
                                    </div>
                                </div>
                                <span id="fourth" ></span>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Timezone</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1">{(user.timezone) ? this.setTimezone(user.timezone) : "..."}</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div ref={this.fourthRef} className="aon-two-bottomsection-1 view">
                                <div className="aon-two-bottomheading-1">
                                <h2 className="aon-two-bottomheading-2">Company info</h2>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Business name</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{(user.company_name) ? user.company_name : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Website</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{(user.website) ? user.website : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Company phone</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1">{(user.company_contact) ? formatPhoneNumberIntl(user.company_contact) : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Tagline</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1 text-break-all">{(user.tagline) ? user.tagline : "..."}</div>
                                    </div>
                                </div>
                                </div>
                                <div className="aon-two-bottomitem-1">
                                <div className="aon-two-bottomitempreview-1">
                                    <div className="aon-two-bottomitemname-1">Experience</div>
                                    <div className="aon-two-bottomitemcontent-1">
                                    <div className="aon-two-bottomitemtext-1">{(user.experience) ? this.getExperience(user.experience) : "..."}</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <Links />
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(WrapperConsumer(ProfileComponent));