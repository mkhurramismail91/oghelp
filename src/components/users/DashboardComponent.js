import React, {Fragment} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {Helmet} from "react-helmet";
import WrapperConsumer from '../../store';
import '../../assets/css/style.css';
import Header from '../HeaderComponent';
import Footer from './Footer';
import User from './User'
import Links from './Links'
import {categoryIcon} from '../../services/utils'

class DashboardComponent extends React.Component{
    constructor(props) {
        super(props);
        var icons = ["IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png","IT_1IT.png"]

        this.state = {
            user : {},
            icons : icons
        }
    }

    componentDidMount(){
        var icons = []
        categoryIcon.forEach((c) => {
            icons[c.key] = c.icon
        })
        this.setState({icons: icons})
    }

    render(){
        const {context:{user}} = this.props;
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dashboard</title>
                </Helmet>
                <Header />
                <div className="global-header-1">
                    <div className="global-header-2">
                    <h1 className="global-header-3">Dashboard</h1>
                    <div className="global-headerbread-1">
                        <div className="global-headerbread-3"></div>
                        <div className="global-headerbread-3"></div>
                    </div>
                    </div>
                </div>
                <div className="aon-section-1">
                    <div className="aon-webflowdefault-1 w-form">
                    <div className="aon-webflowdefault-2">
                        <div className="aon-areaswrapper-1">
                        <User />
                        <div className="aon-areatwo-1">
                            <div className="aon-two-functionsbox-1">
                            <div className="aon-two-functionshead-2">
                                <h2 className="aon-two-functionsheading-1">My functions</h2>
                            </div>
                            <div className="aon-two-functionslist-1">
                            {user.functions.map((f) =>
                                <NavLink key={`f-${f.function_id}`} to="#myfunctions" className="aon-two-function-1 w-inline-block">
                                    <img src={require('../../assets/images/'+this.state.icons[f.tbl_function.category_id])} alt="" className="aon-two-functionpic-1"/>
                                    <div className="aon-two-functionname-1">{f.tbl_function.title_function}</div></NavLink>
                            )}
                                <NavLink to="/profile-edit" className="aon-two-function-12 w-inline-block">
                                    <div className="aon-two-functionname-12">Manage</div>
                                </NavLink>
                            </div>
                            </div>
                            {user.skills.length > 0 && 
                                <div className="aon-two-skillsbox-1">
                                    <div className="aon-two-skillshead-2">
                                        <h2 className="aon-two-skillssheading-1">My skills</h2>
                                    </div>
                                    <div className="aon-two-skillsslist-1">
                                    {user.skills.map((s) =>
                                        <NavLink key={`s-${s.user_skill_id}`} to="#" className="aon-two-skill-1 w-inline-block">
                                        <div className="aon-two-skillname-1">{s.skill.title_skill}</div>
                                        </NavLink>
                                    )}
                                        <NavLink to="/profile-edit" className="aon-two-skill-12 w-inline-block">
                                            <div className="aon-two-skillname-12">Manage</div>
                                        </NavLink>
                                    </div>
                                </div>
                            }
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

export default withRouter(WrapperConsumer(DashboardComponent));