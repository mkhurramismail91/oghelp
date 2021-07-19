import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import '../assets/css/normalize.css';
import '../assets/css/components.css';
import '../assets/css/oghelp.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class AboutComponent extends React.Component{
    render(){
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About</title>
                </Helmet>
                <Header />
                <div className="section-ale-0">
                    <div className="section-ale-1">
                    <div className="container-ale-1">
                        <div className="section-ale-2">
                        <div className="section-ale-4">
                            <h2 className="heading-ale-1">About Us</h2>
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
                                    <NavLink to="/about" aria-current="page" className="link-ale-3 w-inline-block w--current">
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
                                <p>Inspired by solving big problems and transitioning the Oil &amp; Gas into the future, OGHelp’s team joined forces in 2019 to accelerate human resource transition to the ‘Gig Economy’ and cloud based ecosystem. We are a Global collaborative platform enabling efficient human resource contracting by harvesting thousands of skilled freelancers and service providers.</p>
                                <p>OGHelp platform allows Oil &amp; Gas companies to access the right talent, while provides professionals and tradesperson access to the best opportunities. Our platform bridges the gap between the two, to maximize profits and growth potential.</p>
                                <figure style={{'maxWidth':'1012px'}} id="w-node-2145844eea33-377f2e17" className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                    <div><img src={require('../assets/images/RJ7JgVM8LimiiZgDWkKJYj7oRsI460y4hz4L9WJZAVOZsvdEp4-aEDXSd4FC860Jjo4pNX4mtU1FG5ladgJI05pAN4RC_SI3QlvSKdTHEJ2jdAhbKJYFIDQg1zqrFY99VgbFUuA.png')} alt=""/></div>
                                </figure>
                                <h2><br/></h2>
                                <p>OGHelp freelancing platform is designed to break the traditional barriers of labor resourcing in the Oil and Gas Industry by creating a closer balance between workforce supply and demand, thus help sustain a more manageable workforce investment. </p>
                                <blockquote><em>“We are committed to provide a collaborative Oil and Gas focused freelancing platform that allows for industry professionals, tradesperson and service providers access to opportunities worldwide”</em></blockquote>
                                <p><em> </em>– Shawn Z. CEO and Co-founder</p>
                                <p> <br/></p>
                                <p><strong>OGhelp Vision</strong></p>
                                <p>Our vision is to accelerate the industry transformation and shift industry’s collective focus from internal optimization, toward a Global collaborative one.</p>
                                <figure style={{'maxWidth':'964px'}} id="w-node-c74ae5c6e2c0-377f2e17" className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                    <div><img src={require('../assets/images/e5RZtxsbiTxhNdP_QaFcsA-9_qCwk-xE2pBO9SJYjF5zKuOS4NVuFQQEEv5Jg1EPtPM0hFk061Kr_ABnEH9GohMC5zpicjfA63I0oAPHI4YdsyaWwmRAAHOPMLuLshSVYHo95xg.png')} alt=""/></div>
                                </figure>
                                <h2><br/></h2>
                                <p><strong>OGHelp Goal</strong></p>
                                <p>Our goal is to help Oil &amp; Gas companies find a balance of technology and talent by providing a platform that allows collaboration between service providers globally and provide company’s ability to resource their project timely and at a lower cost.</p>
                                <figure id="w-node-254f72da7cdf-377f2e17" className="w-richtext-align-center w-richtext-figure-type-image">
                                    <div><img src={require('../assets/images/E6epPKJrGRlaDkwfICqoVS4Qe3VZNYHHaeDkZXf_3oquW4gJizAmaQFzyThR2R3KxZBzEfxDgEkioNJvH5Ra5PpdTpPuE89m-n0JxfQaWMAVsq7Uij9I351O24CHO8t_I19M2gY.png')} alt=""/></div>
                                </figure>
                                <h2><br/></h2>
                                <p><strong>OGHelp Mission</strong></p>
                                <p>Our mission is to connect the Global Oil and Gas community, in a simple and effective way and to bring people and companies together under a single platform to eliminate expertise, skill and wage imbalance caused by cyclical prices.</p>
                                <figure style={{'maxWidth':'846px'}} id="w-node-29239066adf4-377f2e17" className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                    <div><img src={require('../assets/images/TSz7ivRPgT8JRtTsNFc5GjFvqnJKfM2QXEl3vOiRLDG_p0qolsHyyDgqTkd_Qcl9myLw_IIURRGlh3zbBd6_XSBGIRa85MrdeNbGE34z1lKaEF1nE1i2MW72NaP5N8mCanU-3TI.png')} alt=""/></div>
                                </figure>
                                <p><br/></p>
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
                                    <a href={"mailto:partners@oghelp.com"} className="link-ale-2 w-inline-block">
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
                                    <a href={"mailto:sales@oghelp.com"} className="link-ale-2 w-inline-block">
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
                                    <NavLink to="/contact" target="_blank" className="link-ale-2 w-inline-block">
                                    <div className="section-icon-ale-1"><img src="images/email-us3x_1email-us3x.png" alt="" className="icon-image-ale-1"/></div>
                                    <div className="text-link-ale-1">Email us</div>
                                    </NavLink>
                                </div>
                                <div className="section-ale-16">
                                    <NavLink to="/contact" className="link-ale-2 w-inline-block">
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

export default WrapperConsumer(AboutComponent);