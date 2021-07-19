import React, {Fragment} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {Helmet} from "react-helmet";
import WrapperConsumer from '../../store';
import '../../assets/css/style.css';
import Header from '../HeaderComponent';
import Footer from './Footer';
import User from './User'
import Links from './Links'

class MyPaymentsComponent extends React.Component{
    render(){
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Payments history (Coming soon)</title>
                </Helmet>
                <Header />
                <div className="global-header-1">
                    <div className="global-header-2">
                    <h1 className="global-header-3">My Payments</h1>
                    <div className="global-headerbread-1"><NavLink to="/dashboard" className="global-headerbread-2">Dashboard</NavLink>
                        <div className="global-headerbread-3">/</div>
                        <div className="global-headerbread-3">My Payments</div>
                    </div>
                    </div>
                </div>
                <div className="aon-section-1">
                    <div className="aon-webflowdefault-1 w-form">
                    <div className="aon-webflowdefault-2">
                        <div className="aon-areaswrapper-1">
                        <User />
                        <div className="aon-areatwo-1">
                            <div className="aon-two-comingsoon-1 hide">
                            <div className="aon-two-comingsoon-2 w-richtext">
                                <p>Coming soon...</p>
                            </div>
                            </div>
                            <div className="aon-richtext-1 w-richtext">
                            <h2>My Payments</h2>
                            <p>On this page you will be able to find the invoices and payments you have received for your jobs.</p>
                            <p>Make sure to <NavLink to="/profile-view">complete your profile</NavLink> as we are working very hard to connect clients with service providers throughout our revolutionary platform.</p>
                            <figure style={{maxWidth:"1600px"}} id="w-node-ab88b0c20290-687f2e28" className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                <div><img src={require('../../assets/images/kJYYVfIaRFvYkqx0kcihSV9e-d95KXn-5fGhREOhe5_JjQ3YIo8bz36olQB1Fff5MAJ4GLySWHajG6NJES7Ujgu0tF_wuRlrNHrZ_Nf2WPzMfKT53g_u193GqJKjeidiAerJ61w.jpeg')} alt=""/></div>
                            </figure>
                            <p>Please share with your colleagues in joining <strong>OG</strong>Help Oil &amp; Gas Freelancing Community!</p>
                            <p className="text-decoration">Please <NavLink to="/">see our demo video</NavLink> and <NavLink to="/how-it-works">how it works page</NavLink><br/></p>
                            </div>
                        </div>
                        <Links mode={"payments"} />
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(WrapperConsumer(MyPaymentsComponent));