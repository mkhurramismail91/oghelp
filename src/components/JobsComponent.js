import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import '../assets/css/normalize.css';
import '../assets/css/components.css';
import '../assets/css/oghelp.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class JobsComponent extends React.Component{
    render(){

        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Jobs</title>
                </Helmet>
                <Header />
                <div className="section-ale-0">
                    <div className="section-ale-1">
                    <div className="container-ale-1">
                        <div className="section-ale-2">
                        <div className="section-ale-4">
                            <h2 className="heading-ale-1">Search for Jobs</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="doc-ale-1">
                    <div className="doc-ale-3">
                        <div className="doc-ale-4">
                        <div className="doc-ale-10"></div>
                        <div className="doc-ale-11">
                            <div className="doc-ale-17">
                            <div className="doc-ale-20">
                                <div className="rich-text-ale-2 w-richtext">
                                <h2>Jobs</h2>
                                <p>On this page you will be able to find details of the jobs that you have been awarded and working on!</p>
                                <p>Make sure to complete your profile as we are working very hard to connect clients with service providers through out our revolutionary platform.</p>
                                <figure style={{'maxWidth':'939px'}} id="w-node-febdc9ded65e-547f2e16" className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                    <div><img src={require('../assets/images/PsUmK_qVbVURr39NBwGfmixr8pTrdt-oL-ocJzzD9nOGdd60PKghuEk7l2Groq2SwDLDGHK-9oCb-NU-OP5kVPFTCZYIknya2ItqCCypZPBEPYaIPvas84cu8DvGsHMrO5aDgog.jpeg')} alt="" /></div>
                                </figure>
                                <p>‍</p>
                                <p>Please share with your colleagues in joining <strong>OG</strong>Help Oil &amp; Gas Freelancing Community! </p>
                                <p>
                                    <p className="text-decoration">Please <NavLink to="/">see our demo video</NavLink> and <NavLink to="/how-it-works">how it works page</NavLink><br/></p>
                                    <br/></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="section-ale-10"></div>
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

export default WrapperConsumer(JobsComponent);