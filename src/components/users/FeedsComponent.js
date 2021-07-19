import React, {Fragment} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {Helmet} from "react-helmet";
import WrapperConsumer from '../../store';
import '../../assets/css/style.css';
import Header from '../HeaderComponent';
import Footer from './Footer';
import User from './User'
import Links from './Links'
class FeedsComponent extends React.Component{

    render(){

        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My fees (Coming soon)</title>
                </Helmet>
                <Header />
                <div className="global-header-1">
                    <div className="global-header-2">
                    <h1 className="global-header-3">My Feeds</h1>
                    <div className="global-headerbread-1"><NavLink to="/dashboard" className="global-headerbread-2">Dashboard</NavLink>
                        <div className="global-headerbread-3">/</div>
                        <div className="global-headerbread-3">My Feeds</div>
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
                            <h2><strong>My Feeds</strong></h2>
                            <p>On this page you will see jobs matched to your function(s) and skill(s) – you will be notified as your feed starts to populate with jobs in the next coming months. Stay Tuned!</p>
                            <p>Make sure to <NavLink to="/profile-view">complete your profile</NavLink> as we are working very hard to connect clients with service providers throughout our revolutionary platform.</p>
                            <figure style={{maxWidth:"1600px"}} id="w-node-1e89d5fac748-537f2e24" className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                <div><img src={require('../../assets/images/3nF4A3Hz7pZ1ISHl2JLPzOKEtfCe2nzpFizBcwumf6LlzdpD9Rk0ID1EpoNGxOvwITl6DADpY5SyHa707uCV2ooJCl18tV80SdxJ9FtORpyYYRVz6B4sIh8YbMSSulH57NYWudw.jpeg')} alt=""/></div>
                            </figure>
                            <p>Please share with your colleagues in joining <strong>OG</strong>Help Oil &amp; Gas Freelancing Community!</p>
                            <p className="text-decoration">Please <NavLink to="/">see our demo video</NavLink> and <NavLink to="/how-it-works">how it works page</NavLink><br/></p>
                            </div>
                        </div>
                        <Links mode={"feeds"} />
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(WrapperConsumer(FeedsComponent));