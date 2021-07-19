import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import '../assets/css/style.css';


class ResetPasswordSuccessComponent extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render(props){

        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Recover password</title>
                </Helmet>                
                <div className="aoi-section">
                    <div className="_3psection1_lp-2">
                    <div className="aoi-pic-1"></div>
                    <div className="aoi-content-1">
                        <div className="aoi-wrapper-1">
                        <div className="aoi-logo-1">
                            <a href="/" className="aio-logocontainer-1 w-inline-block"><img src={require('../assets/images/-a3x.png')} alt="" className="aoi-logo-2"/></a></div>
                        <div className="aoi-backlink-1">
                            <div className="aoi-backwrapper-1">
                            <h1 className="aoi-headline-1">Success!</h1>
                            <div className="aoi-description-1">Your password was successfully changed. Log into your account.</div>
                            </div>
                        </div>
                        <div className="aoi-buttonwrapper-1">
                            <NavLink to="/login" className="aoi-button-1 w-inline-block">
                                <div className="aoi-button-2 alt-1">Continue</div>
                            </NavLink>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default WrapperConsumer(ResetPasswordSuccessComponent);