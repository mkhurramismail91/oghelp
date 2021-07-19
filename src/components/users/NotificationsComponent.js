import React, {Fragment} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {Helmet} from "react-helmet";
import WrapperConsumer from '../../store';
import '../../assets/css/style.css';
import Header from '../HeaderComponent';
import Footer from './Footer';

class NotificationsComponent extends React.Component{
    render(){
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Notifications (Coming soon)</title>
                </Helmet>
                <Header />
                <div className="global-header-1">
                    <div className="global-header-2">
                    <h1 className="global-header-3">Notifications</h1>
                    <div className="global-headerbread-1"><NavLink to="/dashboard" className="global-headerbread-2">Dashboard</NavLink>
                        <div className="global-headerbread-3">/</div>
                        <div className="global-headerbread-3">Notifications</div>
                    </div>
                    </div>
                </div>
                <div className="aon-section-1">
                    <div className="aon-webflowdefault-1 w-form">
                    <div className="aon-webflowdefault-2">
                        <div className="aon-areaswrapper-1">
                        <div className="aon-areaone-1 alt-1"></div>
                        <div className="aon-areatwo-1">
                            <div className="aon-two-comingsoon-1">
                            <div className="aon-two-comingsoon-2 w-richtext">
                                <p>Welcome to the OGHelp Platform, please make sure to <NavLink to="/profile-view">complete your profile</NavLink>! </p>
                                <p>‍</p>
                                <p>New Notifications will appear here. <br/></p>
                            </div>
                            </div>
                        </div>
                        <div className="aon-areathree-1"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(WrapperConsumer(NotificationsComponent));