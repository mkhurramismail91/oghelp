import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import '../assets/css/normalize.css';
import '../assets/css/components.css';
import '../assets/css/oghelp.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class HowItWorksComponent extends React.Component{
    render(){
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>How it works</title>
                </Helmet>
                <Header />
                <div className="section-ale-1">
                    <div className="container-ale-1">
                    <div className="section-ale-2">
                        <div className="section-ale-4">
                        <h2 className="heading-ale-1">How it works</h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="aoj-section-1">
                    <div className="aoj-container-1">
                    <div className="aoj-section-10">
                        <div className="aoj-section-11"><img src={require('../assets/images/howto3x.png')} srcSet={require('../assets/images/howto3x-p-500.png')+" 500w, "+require('../assets/images/howto3x-p-800.png')+" 800w, "+require('../assets/images/howto3x.png')+" 1032w"} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 47vw, (max-width: 1439px) 35vw, 400.546875px" alt="" className="aoj-image-1" /></div>
                        <div className="aoj-section-12">
                        <div className="aoj-section-15">
                            <div className="aoj-text-2">1. Sign up</div>
                            <div className="aoj-section-19">Oil &amp; Gas professionals, consultants and companies can provide their services by Signing Up as a <strong>Service Provider.<br/><br/>‍</strong>If you are looking to get your jobs done and collaborate with industry experts – you will soon be able to sign up as a <strong>Client.</strong></div>
                        </div>
                        <div className="aoj-section-16">
                            <div className="aoj-section-17">
                            <NavLink to="/create-account" className="aoj-link-3 w-inline-block">
                                <div className="aoj-text-link-1">Get started today</div>
                            </NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="aoj-section-10 inverse">
                        <div className="aoj-section-11 inverse"><img src={require('../assets/images/slice113x.png')} srcSet={require('../assets/images/slice113x-p-500.png')+" 500w, "+require('../assets/images/slice113x-p-800.png')+" 800w, "+require('../assets/images/slice113x.png')+" 879w"} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, 263.53125px" alt="" className="aoj-image-1"/></div>
                        <div className="aoj-section-12">
                        <div className="aoj-section-15">
                            <div className="aoj-text-2">2. Review Matching Jobs</div>
                            <div className="aoj-section-19">You will be able to <strong><em>review and track</em> posted jobs</strong> that match your skills and functions.<br/></div>
                        </div>
                        </div>
                    </div>
                    <div className="aoj-section-10">
                        <div className="aoj-section-11"><img src={require('../assets/images/slice123x.png')} srcSet={require('../assets/images/slice123x-p-500.png')+" 500w, "+require('../assets/images/slice123x-p-800.png')+" 800w, "+require('../assets/images/slice123x.png')+" 879w"} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, 316.25px" alt="" className="aoj-image-1"/></div>
                        <div className="aoj-section-12">
                        <div className="aoj-section-15">
                            <div className="aoj-text-2">3. Submit Proposal</div>
                            <div className="aoj-section-19">You will be able to <strong><em>submit proposals</em></strong> for your matching jobs and win jobs!<br/><br/>You will also be able to <strong><em>collaborate </em></strong>with other Oil &amp; Gas professionals and experts on bigger jobs.<br/></div>
                        </div>
                        </div>
                    </div>
                    <div className="aoj-section-10 inverse">
                        <div className="aoj-section-11 inverse"><img src={require('../assets/images/slice133x.png')} srcSet={require('../assets/images/slice133x-p-500.png')+" 500w, "+require('../assets/images/slice133x-p-800.png')+" 800w, "+require('../assets/images/slice133x.png')+" 840w"} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, 284.171875px" alt="" className="aoj-image-1"/></div>
                        <div className="aoj-section-12">
                        <div className="aoj-section-15">
                            <div className="aoj-text-2">4. Perform Work</div>
                            <div className="aoj-section-19">As you perform the work, you can<strong><em> send updates, communicate and manage the job</em></strong> with the client, directly on OGhelp.</div>
                        </div>
                        </div>
                    </div>
                    <div className="aoj-section-10">
                        <div className="aoj-section-11"><img src={require('../assets/images/ogh.png')} srcSet={require('../assets/images/ogh-p-500.png')+" 500w, "+require('../assets/images/ogh-p-800.png')+" 800w, "+require('../assets/images/ogh.png')+" 818w"} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, 324.140625px" alt="" className="aoj-image-1"/></div>
                        <div className="aoj-section-12">
                        <div className="aoj-section-15">
                            <div className="aoj-text-2">5. Send Invoices</div>
                            <div className="aoj-section-19">As you perform work on your jobs, you can<strong><em> submit invoices</em></strong>. OGhelp will help you manage all of your jobs and track all the work you have done so you can focus on getting your jobs done!<br/></div>
                        </div>
                        </div>
                    </div>
                    <div className="aoj-section-10 inverse">
                        <div className="aoj-section-11 inverse"><img src={require('../assets/images/slice153x.png')} srcSet={require('../assets/images/slice153x-p-500.png')+" 500w, "+require('../assets/images/slice153x.png')+" 789w"} sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, 281.1875px" alt="" className="aoj-image-1"/></div>
                        <div className="aoj-section-12">
                        <div className="aoj-section-15">
                            <div className="aoj-text-2">6. Get Paid!</div>
                            <div className="aoj-section-19">As you complete work, <strong><em>submit invoices and get paid</em></strong>, OGhelp will help you manage all your transactions, including transfer of funds to your bank account, safely and securely.<br/></div>
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

export default WrapperConsumer(HowItWorksComponent);