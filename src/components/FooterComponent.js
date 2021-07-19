import React, {Fragment} from 'react'
import WrapperConsumer from '../store';
import { NavLink } from 'react-router-dom'
import '../assets/css/normalize.css';
import '../assets/css/components.css';
import '../assets/css/oghelp.css';

class FooterComponent extends React.Component{

    render(){
        return(
            <Fragment>
                <div className="footer-amc-1">
                    <div className="footer-amc-2">
                    <div className="container-footer-amc-1">
                        <div className="footer-amc-4">
                        <div className="footer-amc-5"><NavLink to="/" aria-current="page" className="link-amc-1 w-inline-block w--current"><img src={require('../assets/images/-a3x.png')} alt="" className="image-footer-amc-1"/></NavLink></div>
                        <div className="footer-amc-6">
                            <div className="footer-amc-7">
                            <div className="footer-amc-8">
                                <NavLink to="/how-it-works" className="link-amc-2 w-inline-block">
                                <div className="text-link-footer-amc-1">How it works</div>
                                </NavLink>
                            </div>
                            <div className="footer-amc-8">
                                <NavLink to="/functions" className="link-amc-2 w-inline-block">
                                <div className="text-link-footer-amc-1">Functions</div>
                                </NavLink>
                            </div>
                            <div className="footer-amc-8">
                                <NavLink to="/about" className="link-amc-2 w-inline-block">
                                <div className="text-link-footer-amc-1">About us</div>
                                </NavLink>
                            </div>
                            <div className="footer-amc-8">
                                <NavLink to="/contact" className="link-amc-2 w-inline-block">
                                <div className="text-link-footer-amc-1">Contact</div>
                                </NavLink>
                            </div>
                            <div className="footer-amc-8">
                                <NavLink to="/login" className="link-amc-2 w-inline-block">
                                <div className="text-link-footer-amc-1">Log in</div>
                                </NavLink>
                            </div>
                            <div className="footer-amc-8">
                                <NavLink to="/create-account" className="link-amc-2 w-inline-block">
                                <div className="text-link-footer-amc-1">Sign up</div>
                                </NavLink>
                            </div>
                            <div className="footer-amc-8">
                                <NavLink to="/terms-of-service" className="link-amc-2 w-inline-block">
                                <div className="text-link-footer-amc-1">Terms</div>
                                </NavLink>
                            </div>
                            <div className="footer-amc-8">
                                <NavLink to="/privacy" className="link-amc-2 w-inline-block">
                                <div className="text-link-footer-amc-1">Privacy</div>
                                </NavLink>
                            </div>
                            <div id="w-node-2a02b6a4c703-7c211334" className="footer-amc-8 alt-2"><a href="https://www.facebook.com/Oil-Gas-Help-wwwoghelpcom-2297380927180557" className="link-amc-2 w-inline-block"><img src={require('../assets/images/facebook-brands.svg')} alt="" className="footer-smi-1"/></a></div>
                            <div id="w-node-3696e803cf9d-7c211334" className="footer-amc-8 alt-1"><a href="http://www.youtube.com/channel/UC-Rk3bfqaeEFxlfrv_bWnMg" className="link-amc-2 w-inline-block"><img src={require('../assets/images/youtube-brands.svg')}alt="" className="footer-smi-1"/></a></div>
                            <div id="w-node-9a73f9901f20-7c211334" className="footer-amc-8 alt-1"><a href="https://www.linkedin.com/company/65013059" className="link-amc-2 w-inline-block"><img src={require('../assets/images/linkedin-brands.svg')} alt="" className="footer-smi-1"/></a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="footer-amc-3">
                    <div className="container-footer-amc-1">
                        <div className="footer-amc-9">
                        <div className="footer-amc-10">
                            <div className="footer-text-1">Copyright 2019 - 2020 OGHelp Global Inc.</div>
                        </div>
                        <div className="footer-amc-11">
                            <div className="footer-text-1">Powered By OGHelp Freelancing Platform. Hosted on OGHelp Cloud Services.</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default WrapperConsumer(FooterComponent);