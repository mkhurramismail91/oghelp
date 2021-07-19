import React, {Fragment} from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Player from '@vimeo/player';
import WrapperConsumer from '../store';
import {Helmet} from "react-helmet";
import '../assets/css/style.css';
import '../assets/css/index.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { getFunctions } from '../services/functions'

class IndexComponent extends React.Component{
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    state = {
        showVideo: false,
        functions : [],
        activeTab : 1
    }

    getAllFunctions = async (e) => {
        var functions = await getFunctions() 
        if(functions && functions.categories){
            functions = functions.categories
            functions = functions.map((option) => {
                const category = option.label[0].toUpperCase();
                return {
                category: /[0-9]/.test(category) ? '0-9' : category,
                ...option,
                };
            });
            this.setState({ functions: functions })
        }
    }

    componentDidMount(){
        //const {user, dispatch} = this.props.context
        this.getAllFunctions()
    }

    showVideo (val){
        this.setState({showVideo: val})
        
        const iframe = this.myRef.current
        const player = new Player(iframe);

        if (val === true) {player.play(); player.setCurrentTime(0) } else player.pause()

    }

    goFunction = (f) => {
        //console.log(f)
        this.props.history.push("/functions")
    }

    changeTab(tab) {
        setTimeout(()=>{
            this.setState({activeTab : tab})
        },300)
        
    }

    render(){
        //const {context:{user, dispatch}} = this.props;
        const functionsOptions = this.state.functions

        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>OGhelp</title>
                </Helmet>
                <Header />
                <div className="bubble-float-1"><NavLink to="/contact" className="bubble-float-2 w-inline-block"></NavLink></div>
                <div className={this.state.showVideo ? 'aog-video-1 active' : 'aog-video-1'}>
                    <div className="aog-video-2">
                    <div className="aog-embed-1 w-embed w-iframe w-script">
                        <div style={{padding:'56.25% 0 0 0', position:'relative'}}><iframe title="vimeo-oghelp" ref={this.myRef} src="https://player.vimeo.com/video/428382124?title=0&byline=0&portrait=0" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen=""></iframe></div>
                    </div><a data-w-id="f74842c5-5817-268c-be53-33d4924d7a16" href="/#" onClick={() => this.showVideo(false)} className="aog-close-1 w-inline-block">
                        <img src={require('../assets/images/close6x_1.png')} alt="" className="aog-close-2"/></a></div>
                </div>
                <div className="aoa-structure-7">
                    <div className="aoa-structure-6">
                    <div className="aoa-structure-4">
                        <div className="aoa-structure-3">
                        <div className="aoa-structure-2">
                            <div className="aoa-structure-1">
                            <div className="aoa-content-8">
                                <div className="aoa-content-7">
                                <div className="aoa-content-6">
                                    <div id="w-node-f2479ef74363-057f2e0e" className="aoa-content-3">
                                    <div className="aoa-content-2">
                                        <h1 className="aoa-content-1">Oil &amp; Gas Professionals | Tradesperson?</h1>
                                    </div>
                                    <div className="aoa-tagline-1">
                                        <div className="aoa-tagline-2">Work your way</div>
                                    </div>
                                    </div>
                                    <div id="w-node-cceeef316f67-057f2e0e" className="aoa-cta-1">
                                    <div className="aoa-search-1">
                                        <div id="contactForm" action="/search" className="amj-searchblock-1 w-form">
                                        <Autocomplete
                                            id="grouped-demo"
                                            options={functionsOptions}
                                            groupBy={(option) => option.category}
                                            getOptionLabel={(option) => option.label}
                                            style={{ width: '100%' }}
                                            onChange={(event, newValue) => {
                                                this.goFunction(newValue)
                                            }}
                                            renderInput={(params) => <TextField {...params} label="Search your function..." variant="outlined" />}
                                            />
                                        </div>
                                    </div>
                                    <div className="aoa-button-1"><NavLink to="/create-account" className="aoa-button-2">Build your profile</NavLink></div>
                                    </div>
                                    <div id="w-node-f2479ef74376-057f2e0e" className="aoa-contentb-21">
                                    <div className="aoa-contentbottom-1">On-Demand Jobs</div>
                                    <div className="aoa-contentbottom-1">On-Demand Service Providers</div>
                                    </div>
                                    <div id="w-node-af6fa459c1e7-057f2e0e" className="aoa-contentc-21">
                                    <a data-w-id="1e542576-8446-77c7-f047-bed29a6e6ec3" href="/#" onClick={() => this.showVideo(true)} className="aoa-videobutton-1 w-inline-block">
                                        <div className="aoa-videobutton-2"><img src={require('../assets/images/play16x.png')} alt="" className="aoa-videoicon-1"/></div>
                                        <div className="aoa-videobutton-3">
                                        <div className="aoa-videobutton-4">Watch a demo</div>
                                        </div>
                                    </a>
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
                <div className="aob-section-1">
                    <div className="aob-section-2">
                    <div className="aob-section-3">
                        <div className="aob-parent-1">
                        <div className="aob-child-1">
                            <div className="aob-section-image-1"><img src={require('../assets/images/ExxonIcon.png')} srcSet={require('../assets/images/ExxonIcon-p-500.png') + ' 500w, ' + require('../assets/images/ExxonIcon-p-800.png') + ' 800w, ' + require('../assets/images/ExxonIcon-p-1080.png')+' 1080w,' +  require('../assets/images/ExxonIcon.png')+' 1200w'} sizes="(max-width: 767px) 45px, (max-width: 991px) 70px, 90px" alt="" className="aob-image-1"/></div>
                        </div>
                        <div className="aob-child-1">
                            <div className="aob-section-image-1"><img src={require('../assets/images/BPicon.png')} srcSet={require('../assets/images/BPicon-p-500.png') + ' 500w, ' + require('../assets/images/BPicon-p-800.png') + ' 800w, ' + require('../assets/images/BPicon-p-1080.png')+' 1080w,' +  require('../assets/images/BPicon.png')+' 1200w'} sizes="(max-width: 767px) 24px, (max-width: 991px) 30px, 37.5px" alt="" className="aob-image-1"/></div>
                        </div>
                        <div className="aob-child-1">
                            <div className="aob-section-image-1"><img src={require('../assets/images/NaborsIcon.png')} srcSet={require('../assets/images/NaborsIcon-p-500.png') + ' 500w, ' + require('../assets/images/NaborsIcon-p-800.png') + ' 800w'} sizes="(max-width: 767px) 45px, (max-width: 991px) 70px, 90px" alt="" className="aob-image-1"/></div>
                        </div>
                        <div className="aob-child-1">
                            <div className="aob-section-image-1"><img src={require('../assets/images/PetrobrasIcon.png')} srcSet={require('../assets/images/PetrobrasIcon-p-500.png') + ' 500w'} sizes="(max-width: 767px) 45px, (max-width: 991px) 67.640625px, 84.5625px" alt="" className="aob-image-1"/></div>
                        </div>
                        <div className="aob-child-1">
                            <div className="aob-section-image-1"><img src={require('../assets/images/ShellIcon.png')} srcSet={require('../assets/images/ShellIcon-p-500.png') + ' 500w, ' + require('../assets/images/ShellIcon-p-800.png') + ' 800w, ' + require('../assets/images/ShellIcon-p-1080.png')+' 1080w,' +  require('../assets/images/ShellIcon.png')+' 1200w'} sizes="(max-width: 767px) 34.53125px, (max-width: 991px) 43.15625px, 53.953125px" alt="" className="aob-image-1"/></div>
                        </div>
                        <div className="aob-child-1">
                            <div className="aob-section-image-1"><img src={require('../assets/images/ChevronIcon.png')} srcSet={require('../assets/images/ChevronIcon-p-500.png') + ' 500w, ' + require('../assets/images/ChevronIcon-p-800.png') + ' 800w, ' +  require('../assets/images/ChevronIcon.png')+' 1200w'} sizes="(max-width: 767px) 28.625px, (max-width: 991px) 35.78125px, 44.734375px" alt="" className="aob-image-1"/></div>
                        </div>
                        <div className="aob-child-1">
                            <div className="aob-section-image-1"><img src={require('../assets/images/PetroChinaIcon.png')} srcSet={require('../assets/images/PetroChinaIcon-p-500.png') + ' 500w, ' + require('../assets/images/PetroChinaIcon-p-800.png') + ' 800w, ' + require('../assets/images/PetroChinaIcon-p-1080.png')+' 1080w,' +  require('../assets/images/PetroChinaIcon.png')+' 1200w'} sizes="(max-width: 767px) 30.234375px, (max-width: 991px) 37.78125px, 47.234375px" alt="" className="aob-image-1"/></div>
                        </div>
                        <div className="aob-child-1">
                            <div className="aob-section-image-1"><img src={require('../assets/images/ENIIcon.png')} srcSet={require('../assets/images/ENIIcon-p-500.png') + ' 500w, ' + require('../assets/images/ENIIcon-p-800.png') + ' 800w, ' + require('../assets/images/ENIIcon-p-1080.png')+' 1080w,' +  require('../assets/images/ENIIcon.png')+' 1200w'} sizes="(max-width: 767px) 26.046875px, (max-width: 991px) 32.5625px, 40.703125px" alt="" className="aob-image-1"/></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="aoc-section-01">
                    <div className="aoc-container-1">
                    <div className="aoc-section-1">
                        <div className="aoc-section-2">
                        <div className="aoc-section-3">
                            <h2 className="aoc-heading-1">Join Our Growing Community<br/></h2>
                        </div>
                        </div>
                        <div className="aoc-section-4">
                        <div id="w-node-6fa0d83cbdf3-057f2e0e" className="aoc-headline-1">
                            <NavLink to="/create-account" className="aoc-headline-4 w-inline-block">
                            <div className="aoc-headline-2">Work remotely</div><img src={require('../assets/images/arrow_1arrow.png')} alt="" className="aoc-headline-3"/></NavLink>
                        </div>
                        <div id="w-node-8c5bbe4c4991-057f2e0e" className="aoc-headline-1">
                            <NavLink to="/create-account" className="aoc-headline-4 w-inline-block">
                            <div className="aoc-headline-2">Work on-premise</div><img src={require('../assets/images/arrow_1arrow.png')} alt="" className="aoc-headline-3"/></NavLink>
                        </div>
                        <div id="w-node-ad6d6629aee5-057f2e0e" className="aoc-section-5">
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _1"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">CAD Designer</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Ted Y.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _2"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Project Management</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Patrick P.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _3"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Marketing</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Jolie L.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _4"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Data Scientist</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Rahul T.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _5"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Product Development</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Russell E.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _6"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Geoscientist</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Rick B.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div id="w-node-4a7b1d9abd01-057f2e0e" className="aoc-section-5">
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _7"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Drilling Operations</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">George E.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _8"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">MWD Engineer</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Arias J.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _9"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Safety Officer</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Anna R.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _10"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Quality Assurance</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Berry H.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _11"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Field Technician</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Deangelo C.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-section-23">
                            <div className="aoc-section-13">
                                <div className="aoc-section-6">
                                <div className="aoc-section-7"><img src="https://uploads-ssl.webflow.com/5ce58550ce3f6b64e230072b/5da9d787975912c03533f72f_Rectangle%201017%402x.png" alt="" className="aoc-image-1"/>
                                    <div className="aoc-background-image-1 _12"></div>
                                </div>
                                </div>
                                <div className="aoc-section-8">
                                <div className="aoc-section-10">
                                    <div className="aoc-text-3">Materials Management</div>
                                </div>
                                <div className="aoc-section-11">
                                    <div className="aoc-text-4">Aron T.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="aoc-border-1"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="aod-section-1">
                    <div className="aod-container-1">
                    <div className="aod-box-1">
                        <div className="aod-header-1">
                        <h2 className="aod-headline-1">Functions<br /></h2>
                        </div>
                        <div className="aod-middle-1">
                        <div className="aod-boxes-1">
                            <div id="w-node-8edbbe866ff6-057f2e0e" className="aod-box-2"><NavLink to="/functions#DrillingRig3x" className="aod-box-3 w-inline-block"><img src={require('../assets/images/DrillingRig3x.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Drilling / Rig</div></NavLink></div>
                            <div id="w-node-625aff081f99-057f2e0e" className="aod-box-2"><NavLink to="/functions#eng_1eng" className="aod-box-3 w-inline-block"><img src={require('../assets/images/eng_1eng.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Engineering &amp; Services</div></NavLink></div>
                            <div id="w-node-e8128698bff2-057f2e0e" className="aod-box-2"><NavLink to="/functions#finances_1finances" className="aod-box-3 w-inline-block"><img src={require('../assets/images/finances_1finances.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Finance &amp; Accounting</div></NavLink></div>
                            <div id="w-node-0fd88e49e726-057f2e0e" className="aod-box-2"><NavLink to="/functions#Geoscience_1Geoscience" className="aod-box-3 w-inline-block"><img src={require('../assets/images/Geoscience_1Geoscience.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Geoscience</div></NavLink></div>
                            <div id="w-node-f813e3167d29-057f2e0e" className="aod-box-2"><NavLink to="/functions#HR_1HR" className="aod-box-3 w-inline-block"><img src={require('../assets/images/HR_1HR.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">HR</div></NavLink></div>
                            <div id="w-node-5ede48a1ffdb-057f2e0e" className="aod-box-2"><NavLink to="/functions#HSE_1HSE" className="aod-box-3 w-inline-block"><img src={require('../assets/images/HSE_1HSE.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">HSE</div></NavLink></div>
                            <div id="w-node-6967c81cd5ec-057f2e0e" className="aod-box-2"><NavLink to="/functions#IT_1IT" className="aod-box-3 w-inline-block"><img src={require('../assets/images/IT_1IT.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">IT</div></NavLink></div>
                            <div id="w-node-605ec813171a-057f2e0e" className="aod-box-2"><NavLink to="/functions#maint_1maint" className="aod-box-3 w-inline-block"><img src={require('../assets/images/maint_1maint.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Maintenance &amp; Inspection</div></NavLink></div>
                            <div id="w-node-51acb9098aea-057f2e0e" className="aod-box-2"><NavLink to="/functions#Maritime_1Maritime" className="aod-box-3 w-inline-block"><img src={require('../assets/images/Maritime_1Maritime.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Maritime</div></NavLink></div>
                            <div id="w-node-2b5244e1f577-057f2e0e" className="aod-box-2"><NavLink to="/functions#oil_1oil" className="aod-box-3 w-inline-block"><img src={require('../assets/images/oil_1oil.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Oilfield Services</div></NavLink></div>
                            <div id="w-node-6f4e35930043-057f2e0e" className="aod-box-2"><NavLink to="/functions#proc_1proc" className="aod-box-3 w-inline-block"><img src={require('../assets/images/proc_1proc.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Procurement &amp; Construction</div></NavLink></div>
                            <div id="w-node-2931ad92f7f1-057f2e0e" className="aod-box-2"><NavLink to="/functions#Production_1Production" className="aod-box-3 w-inline-block"><img src={require('../assets/images/Production_1Production.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Production</div></NavLink></div>
                            <div id="w-node-e8ebe60c6d25-057f2e0e" className="aod-box-2"><NavLink to="/functions#ref_1ref" className="aod-box-3 w-inline-block"><img src={require('../assets/images/ref_1ref.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Refining &amp; Petrochem</div></NavLink></div>
                            <div id="w-node-dbb081687d6b-057f2e0e" className="aod-box-2"><NavLink to="/functions#tem_1tem" className="aod-box-3 w-inline-block"><img src={require('../assets/images/tem_1tem.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Sales, Business &amp; Management</div></NavLink></div>
                            <div id="w-node-1626d4ba0af7-057f2e0e" className="aod-box-2"><NavLink to="/functions#traad_1traad" className="aod-box-3 w-inline-block"><img src={require('../assets/images/traad_1traad.png')} alt="" className="aod-icon-1"/><div className="aod-boxtext-1">Trades &amp; Technicians</div></NavLink></div>
                        </div>
                        </div>
                        <div className="aod-bottom-1">
                        <div className="aod-buttonwrapper-1"><NavLink to="/create-account" className="aoe-button-1 w-button">Sign up as Service Provider</NavLink></div>
                        <div className="aod-linkwrapper-1">
                            <NavLink to="/functions" className="aod-link-2 w-inline-block">
                            <div className="aod-link-1">Or view all functions</div>
                            </NavLink>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="section-alx-1">
                    <div className="container-alx-1">
                    <div className="section-alx-2">
                        <div className="section-alx-3">
                        <div className="section-alx-4">
                            <div className="section-alx-6">
                            <h2 className="alx-headline-1">The OGHelp Process<br /></h2>
                            </div>
                        </div>
                        <div data-duration-in="300" data-duration-out="100" className="section-alx-5 w-tabs">
                            <div className="section-alx-7 w-tab-menu">
                            <a href="#w-tabs-0-data-w-pane-0" data-w-tab="Tab 3" className={`section-alx-9 w-inline-block w-tab-link ${this.state.activeTab === 1 ? "w--current" : ""}`} onClick={() => this.changeTab(1)}>
                                <div className="section-link-alx-1">
                                <div className="text-alx-1">1. Sign up!</div>
                                </div>
                            </a>
                            <a href="#w-tabs-0-data-w-pane-1" data-w-tab="Tab 4" className={`section-alx-9 w-inline-block w-tab-link ${this.state.activeTab === 2 ? "w--current" : ""}`} onClick={() => this.changeTab(2)}>
                                <div className="section-link-alx-1">
                                <div className="text-alx-1">2. Review Matching Jobs</div>
                                </div>
                            </a>
                            <a href="#w-tabs-0-data-w-pane-2" data-w-tab="Tab 5" className={`section-alx-9 w-inline-block w-tab-link ${this.state.activeTab === 3 ? "w--current" : ""}`} onClick={() => this.changeTab(3)}>
                                <div className="section-link-alx-1">
                                <div className="text-alx-1">3. Submit Proposal</div>
                                </div>
                            </a>
                            <a href="#w-tabs-0-data-w-pane-3" data-w-tab="Tab 6" className={`section-alx-9 w-inline-block w-tab-link ${this.state.activeTab === 4 ? "w--current" : ""}`} onClick={() => this.changeTab(4)}>
                                <div className="section-link-alx-1">
                                <div className="text-alx-1">4. Perform Work</div>
                                </div>
                            </a>
                            <a href="#w-tabs-0-data-w-pane-4" data-w-tab="Tab 7" className={`section-alx-9 w-inline-block w-tab-link ${this.state.activeTab === 5 ? "w--current" : ""}`} onClick={() => this.changeTab(5)}>
                                <div className="section-link-alx-1">
                                <div className="text-alx-1">5. Send Invoices</div>
                                </div>
                            </a>
                            <a href="#w-tabs-0-data-w-pane-5" data-w-tab="Tab 8" className={`section-alx-9 w-inline-block w-tab-link ${this.state.activeTab === 6 ? "w--current" : ""}`} onClick={() => this.changeTab(6)}>
                                <div className="section-link-alx-1">
                                <div className="text-alx-1">6. Get Paid!</div>
                                </div>
                            </a>
                            </div>
                            <div className="section-alx-8 w-tab-content">
                            <div data-w-tab="Tab 3" className={`section-alx-123 w-tab-pane ${this.state.activeTab === 1 ? "w--tab-active" : ""}`} id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">
                                <div className="section-alx-82">
                                <div className="section-alx-10">
                                    <div className="section-alx-11"><img src={require('../assets/images/howto3x.png')} srcSet={require('../assets/images/howto3x-p-500.png') + ' 500w, ' + require('../assets/images/howto3x-p-800.png') + ' 800w, ' +  require('../assets/images/howto3x.png')+' 1032w'} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 235.609375px, 341.640625px" alt="" className="image-alx-1"/></div>
                                    <div className="section-alx-12">
                                    <div className="section-alx-15">
                                        <div className="text-alx-2">1. Sign Up</div>
                                        <div className="section-alx-19">Oil &amp; Gas professionals, consultants and companies can provide their services by Signing Up as a <strong>Service Provider. </strong>If you are looking to get your jobs done and collaborate with industry experts – you will soon be able to sign up as a <strong>Client.</strong><br /></div>
                                    </div>
                                    <div className="section-alx-16">
                                        <div className="section-alx-17">
                                        <NavLink to="/create-account" className="link-alx-3 w-inline-block">
                                            <div className="text-link-alx-1">Become a service provider</div>
                                        </NavLink>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="section-alx-13"></div>
                                </div>
                            </div>
                            <div data-w-tab="Tab 4" className={`section-alx-123 w-tab-pane ${this.state.activeTab === 2 ? "w--tab-active" : ""}`} id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
                                <div className="section-alx-82">
                                <div className="section-alx-10">
                                    <div className="section-alx-11"><img src={require('../assets/images/slice113x.png')} srcSet={require('../assets/images/slice113x-p-500.png') + ' 500w, ' + require('../assets/images/slice113x-p-800.png') + ' 800w, ' +  require('../assets/images/slice113x.png')+' 879w'} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 155.015625px, 224.78125px" alt="" className="image-alx-1"/></div>
                                    <div className="section-alx-12">
                                    <div className="section-alx-15">
                                        <div className="text-alx-2">2. Review Matching Jobs</div>
                                        <div className="section-alx-19">You will be able to <strong><em>review and track</em> posted jobs</strong> that match your skills and functions.<br /></div>
                                    </div>
                                    <div className="section-alx-16">
                                        <div className="section-alx-17">
                                        <NavLink to="/create-account" className="link-alx-3 w-inline-block">
                                            <div className="text-link-alx-1">Become a service provider</div>
                                        </NavLink>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="section-alx-13"></div>
                                </div>
                            </div>
                            <div data-w-tab="Tab 5" className={`section-alx-123 w-tab-pane ${this.state.activeTab === 3 ? "w--tab-active" : ""}`} id="w-tabs-0-data-w-pane-2" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-2">
                                <div className="section-alx-82">
                                <div className="section-alx-10">
                                    <div className="section-alx-11"><img src={require('../assets/images/slice123x.png')} srcSet={require('../assets/images/slice123x-p-500.png') + ' 500w, ' + require('../assets/images/slice123x-p-800.png') + ' 800w, ' +  require('../assets/images/slice123x.png')+' 879w'} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 186.03125px, 269.734375px" alt="" className="image-alx-1"/></div>
                                    <div className="section-alx-12">
                                    <div className="section-alx-15">
                                        <div className="text-alx-2">3. Submit Proposal</div>
                                        <div className="section-alx-19">You will be able to <strong><em>submit proposals</em></strong> for your matching jobs and win jobs! You will also be able to <strong><em>collaborate </em></strong>with other Oil &amp; Gas professionals and experts on bigger jobs.</div>
                                    </div>
                                    <div className="section-alx-16">
                                        <div className="section-alx-17">
                                        <NavLink to="/create-account" className="link-alx-3 w-inline-block">
                                            <div className="text-link-alx-1">Become a service provider</div>
                                        </NavLink>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="section-alx-13"></div>
                                </div>
                            </div>
                            <div data-w-tab="Tab 6" className={`section-alx-123 w-tab-pane ${this.state.activeTab === 4 ? "w--tab-active" : ""}`} id="w-tabs-0-data-w-pane-3" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-3">
                                <div className="section-alx-82">
                                <div className="section-alx-10">
                                    <div className="section-alx-11"><img src={require('../assets/images/slice133x.png')} srcSet={require('../assets/images/slice133x-p-500.png') + ' 500w, ' + require('../assets/images/slice133x-p-800.png') + ' 800w, ' +  require('../assets/images/slice133x.png')+' 840w'} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 167.15625px, 242.375px" alt="" className="image-alx-1"/></div>
                                    <div className="section-alx-12">
                                    <div className="section-alx-15">
                                        <div className="text-alx-2">4. Perform Work</div>
                                        <div className="section-alx-19">As you perform the work, you can<strong><em> send updates, communicate and manage the job</em></strong> with the client, directly on OGhelp.<br /></div>
                                    </div>
                                    <div className="section-alx-16">
                                        <div className="section-alx-17">
                                        <NavLink to="/create-account" className="link-alx-3 w-inline-block">
                                            <div className="text-link-alx-1">Become a service provider</div>
                                        </NavLink>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="section-alx-13"></div>
                                </div>
                            </div>
                            <div data-w-tab="Tab 7" className={`section-alx-123 w-tab-pane ${this.state.activeTab === 5 ? "w--tab-active" : ""}`} id="w-tabs-0-data-w-pane-4" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-4">
                                <div className="section-alx-82">
                                <div className="section-alx-10">
                                    <div className="section-alx-11"><img src={require('../assets/images/ogh.png')} srcSet={require('../assets/images/ogh-p-500.png') + ' 500w, ' + require('../assets/images/ogh-p-800.png') + ' 800w, ' +  require('../assets/images/ogh.png')+' 818w'} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 190.671875px, 276.46875px" alt="" className="image-alx-1"/></div>
                                    <div className="section-alx-12">
                                    <div className="section-alx-15">
                                        <div className="text-alx-2">5. Send Invoices</div>
                                        <div className="section-alx-19">As you perform work on your jobs, you can<strong><em> submit invoices</em></strong>. OGhelp will help you manage all of your jobs and track all the work you have done so you can focus on getting your jobs done!<br /></div>
                                    </div>
                                    <div className="section-alx-16">
                                        <div className="section-alx-17">
                                        <NavLink to="/create-account" className="link-alx-3 w-inline-block">
                                            <div className="text-link-alx-1">Become a service provider</div>
                                        </NavLink>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="section-alx-13"></div>
                                </div>
                            </div>
                            <div data-w-tab="Tab 8" className={`section-alx-123 w-tab-pane ${this.state.activeTab === 6 ? "w--tab-active" : ""}`} id="w-tabs-0-data-w-pane-5" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-5">
                                <div className="section-alx-82">
                                <div className="section-alx-10">
                                    <div className="section-alx-11"><img src={require('../assets/images/slice153x.png')} srcSet={require('../assets/images/slice153x-p-500.png') + ' 500w, ' +  require('../assets/images/slice153x.png')+' 789w'} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 165.40625px, 239.828125px" alt="" className="image-alx-1"/></div>
                                    <div className="section-alx-12">
                                    <div className="section-alx-15">
                                        <div className="text-alx-2">6. Get Paid!</div>
                                        <div className="section-alx-19">As you complete work, <strong><em>submit invoices and get paid</em></strong>, OGhelp will help you manage all your transactions, including transfer of funds to your bank account, safely and securely.</div>
                                    </div>
                                    <div className="section-alx-16">
                                        <div className="section-alx-17">
                                        <NavLink to="/create-account" className="link-alx-3 w-inline-block">
                                            <div className="text-link-alx-1">Become a service provider</div>
                                        </NavLink>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="section-alx-13"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="aoe-section-1">
                    <div className="aoe-container-1">
                    <div className="aoe-box-1">
                        <div className="aoe-upper-1">
                        <h2 className="aoe-headline-1">Join Our Growing Professionals Community<br /></h2>
                        </div>
                        <div className="aoe-middle-1">
                        <a data-w-id="9ff4185f-6bc5-4c24-f696-d39b427dddd0" href="/#" onClick={() => this.showVideo(true)} className="aoe-videobutton-1 w-inline-block">
                            <div className="aoe-videobutton-2"><img src={require('../assets/images/play16x.png')} alt="" className="aoe-videoicon-1"/></div>
                            <div className="aoe-videobutton-3">
                            <div className="aoe-videobutton-4">Watch a demo</div>
                            </div>
                        </a>
                        </div>
                        <div className="aoe-bottom-1"><NavLink to="/create-account" className="aoe-button-1 w-button">Sign up as Service Provider</NavLink></div>
                    </div>
                    </div>
                </div>
                <div className="aof-section-1">
                    <div className="aof-section-2">
                    <div className="aof-section-3">
                        <div className="aof-section-4">
                        <div className="aof-section-5">
                            <div className="aof-section-7">
                            <h2 className="aof-text-1">Oil &amp; Gas News</h2>
                            </div>
                        </div>
                        <div className="aof-section-6">
                            <div className="aof-section-8">
                            <div className="aof-section-9">
                                <a href="https://feeds.feedburner.com/OilGasJournal-GeneralInterest" target="_blank" rel="noopener noreferrer" className="aof-link-1 w-inline-block">
                                <div className="aof-image-section-1">
                                    <div className="aof-image-1 alt-image-1-abs"></div>
                                </div>
                                <div className="aof-section-10">
                                    <div className="aof-section-11">
                                    <div className="aof-text-2">General Interest</div>
                                    </div>
                                </div>
                                <div className="aof-section-13">
                                    <div className="abs-link-alx-3">
                                    <div className="aof-linktext-1">Read more</div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="aof-section-9">
                                <a href="https://feeds.feedburner.com/OilGasJournal-ExplorationDevelopment" target="_blank" rel="noopener noreferrer" className="aof-link-1 w-inline-block">
                                <div className="aof-image-section-1">
                                    <div className="aof-image-1 alt-image-2-abs"></div>
                                </div>
                                <div className="aof-section-10">
                                    <div className="aof-section-11">
                                    <div className="aof-text-2">Exploration &amp; Development</div>
                                    </div>
                                </div>
                                <div className="aof-section-13">
                                    <div className="abs-link-alx-3">
                                    <div className="aof-linktext-1">Read more</div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="aof-section-9">
                                <a href="https://feeds.feedburner.com/OilGasJournal-DrillingProduction" target="_blank" rel="noopener noreferrer" className="aof-link-1 w-inline-block">
                                <div className="aof-image-section-1">
                                    <div className="aof-image-1 alt-image-3-abs"></div>
                                </div>
                                <div className="aof-section-10">
                                    <div className="aof-section-11">
                                    <div className="aof-text-2">Drilling &amp; Production</div>
                                    </div>
                                    <div className="aof-section-13">
                                    <div className="abs-link-alx-3">
                                        <div className="aof-linktext-1">Read more</div>
                                    </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                    
                <Footer />
            </Fragment>
        );
    }
}

export default withRouter(WrapperConsumer(IndexComponent));