import React, {Fragment} from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../store';
import ActionTypes from '../store/actionTypes'
import {getToken} from '../services/user'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

import '../assets/css/normalize.css';
import '../assets/css/components.css';
import '../assets/css/oghelp.css';
import '../assets/css/index.css';
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href={"#toggle"}
      ref={ref}
      className="amz-profiledropdown-1 w-dropdown-toggle"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

class HeaderComponent extends React.Component{
    state = {
        drops : {
            showFindWorks : false,
            showJobs : false,
            showProfile : false,
            showNotifications : false,
            showNavbar : false,
            isOpen : false
        }
    }
    willNot = false
    componentDidMount(){
        window.scrollTo(0, 0)
        const {dispatch} = this.props.context
        const token = getToken()
        if(token){
            dispatch({type: ActionTypes.GET_USER})
        }
        

    }
    componentWillUnmount(){
        this.willNot = true
    }

    toggleDropdown(dropp, wait = 0){
        var dropState = this.state.drops
        setTimeout(() =>{
            dropState[dropp] = !dropState[dropp]
            if(!this.willNot)
                this.setState({drops : dropState})
        }, wait)
    }

    toggleNavbar(){
        console.log('click')
        var dropState = this.state.drops
        dropState.showNavbar = !dropState.showNavbar
        this.setState({drops : dropState})
    }
    toggleOpen = () => {
        this.setState(state => ({ isOpen: !state.isOpen }));
    };

    render(){
        const {context:{user}} = this.props;
        const { isOpen } = this.state;
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <script>
                        {user.full_name === "" ?
                           `window.Intercom('boot',{
                                app_id: "${process.env.REACT_APP_INTERCOM}",
                            });`
                        :
                            `window.Intercom('boot',{
                                app_id: "${process.env.REACT_APP_INTERCOM}",
                                name: "${user.full_name}", 
                                email: "${user.email}", 
                                created_at: ${parseInt((new Date()).getTime()/1000) }
                            });`
                        }
                    </script>
                </Helmet>
                {user.full_name === "" &&
                <div className="amz-nav-1">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={"py-3"}>
                    <div className="amz-sectiona-1"><NavLink to="/" className="amz-logowrapper-1 w-inline-block"><img src={require('../assets/images/-b3x.png')} alt="" className="amz-logo-1"/></NavLink></div>
                    <Nav className="mobil ml-auto">
                          <div className="amz-areac-1 px-1">
                          <div className="amz-login-1"><NavLink to="/login" className="amz-login-2">Login</NavLink></div>
                          <div className="amz-sign-1"><NavLink to="/create-account" className="amz-sign-2">Sign up</NavLink></div>                            
                          </div>
                    </Nav>
                    <Navbar.Toggle aria-controls="navbar-singout" className="mr-3 ml-3" />
                    <Navbar.Collapse id="navbar-singout" className="mt-2 mt-lg-0">
                        <Nav className="ml-auto amz-linksarea-1">
                              <div className="amz-navitem-1">
                              <NavLink to="/how-it-works" className="amz-navllink-1 w-inline-block">
                                  <div className="amz-navitemname-1">How it works</div>
                              </NavLink>
                              </div>
                              <div className="amz-navitem-1">
                              <NavLink to="/functions" className="amz-navllink-1 w-inline-block">
                                  <div className="amz-navitemname-1">Functions</div>
                              </NavLink>
                              </div>
                        </Nav>
                        <Nav className="bl desktop">
                          <div className="amz-areac-1">
                          <div className="amz-login-1"><NavLink to="/login" className="amz-login-2">Login</NavLink></div>
                          <div className="amz-sign-1"><NavLink to="/create-account" className="amz-sign-2">Sign up</NavLink></div>
                          </div>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
                }
                {user.full_name !== "" &&
                  <div className="amz-nav-1">
                  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={"py-3"}>
                      <div className="amz-sectiona-1"><NavLink to="/dashboard" className="amz-logowrapper-1 w-inline-block"><img src={require('../assets/images/-b3x.png')} alt="" className="amz-logo-1"/></NavLink></div>
                      <div className="amz-areac-1 mobil d-lg-none">
                          <Dropdown className="amz-profiledrop-1 w-dropdown">
                          <Dropdown.Toggle as={CustomToggle} id="dropdown-basic" className="">
                          <div className="amz-profilepic-1">
                              <div className="amz-profilepic-2" style={(user.profile_file) ? {'backgroundImage' : 'url('+user.profile_file+')'} : {}}></div>
                              </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="p-0">
                          <div className="amz-profiletop-1">
                              <div className="amz-profilebox-1">
                                  <div className="amz-profilepic-3">
                                  <div className="amz-profilepic-4" style={(user.profile_file) ? {'backgroundImage' : 'url('+user.profile_file+')'} : {}}></div>
                                  </div>
                                  <div className="amz-profilename-3" style={{width : "80%"}}>
                                  <div className="amz-profilename-4 text-break-all">{user.full_name + " "+ user.last_name}</div>
                                  <div className="amz-profilename-5">{user.email}</div>
                                  </div>
                              </div>
                              </div>
                              <NavLink to="/profile-view" className="amz-profilelink-1 w-inline-block">
                                  <div className="amz-profilelink-2">My profile</div>
                              </NavLink>
                              <NavLink to="/account-settings" className="amz-profilelink-1 w-inline-block">
                              <div className="amz-profilelink-2">Account settings</div>
                              </NavLink>
                              <NavLink to="/logout" className="amz-profilelink-1 w-inline-block">
                                  <div className="amz-profilelink-2">Sign out</div>
                              </NavLink>
                          </Dropdown.Menu>
                          </Dropdown>
                      </div>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mr-3" />
                      <Navbar.Collapse id="responsive-navbar-nav" className="mt-2 mt-lg-0">
                          <div className="amz-searcharea-1">
                              <form action="/search" className="amz-searchblock-1 w-form">
                              <input type="search" id="search" name="query" maxLength="256" required="" placeholder="Search..." className="amz-searchfield-1 w-input"/>
                              <input type="submit" className="amz-searchicon-1 w-button"/>
                              <NavLink to="/jobs" target="_blank" className="amz-temporary-link w-inline-block"></NavLink></form>
                          </div>
                          <Nav className="mr-auto ml-0 ml-lg-4">
                          <NavDropdown title="Jobs" id="collasible-nav-dropdown" className="mr-3 mr-lg-0 mt-3 mt-lg-0">
                              <NavLink to="/my-jobs-coming-soon" className="amz-dropitem-1 w-inline-block ">
                                  <div className="amz-dropitemname-1">My jobs</div>
                              </NavLink>
                              <NavLink to="/payments-history-coming-soon" className="amz-dropitem-1 w-inline-block">
                                  <div className="amz-dropitemname-1">Payments history</div>
                              </NavLink>
                          </NavDropdown>
                          <NavDropdown title="Find work" id="collasible-nav-dropdown" className="top-0 mr-3 mr-lg-0">
                                  <NavLink to="/my-feeds-coming-soon" className="amz-dropitem-1 w-inline-block">
                                      <div className="amz-dropitemname-1">My feeds</div>
                                  </NavLink>
                                  <NavLink to="/my-shortlist-coming-soon" className="amz-dropitem-1 w-inline-block">
                                      <div className="amz-dropitemname-1">My shortlist</div>
                                  </NavLink>
                                  <NavLink to="/my-proposals-coming-soon" className="amz-dropitem-1 w-inline-block">
                                      <div className="amz-dropitemname-1">Proposals</div>
                                  </NavLink>
                          </NavDropdown>
                          <Nav.Link href="/functions">Functions</Nav.Link>
                          <Nav.Link href="/contact">Help</Nav.Link>
                          <NotiDropdown
                            isOpen={isOpen}
                            onClose={this.toggleOpen}
                            target={
                                <div className="amz-notificationsdropbox-1 w-dropdown-toggle" onClick={this.toggleOpen}>
                                    <div className="amz-notificationsname-1">Notifications</div>
                                    <div className="amz-notifications-icon w-icon-dropdown-toggle"></div>
                                    <div className="amz-notificationbubble-1">
                                        <div className="amz-notificationbubble-2">1</div>
                                    </div>
                                </div>
                            }
                        >
                            {!user.complete &&
                                <NavLink to="/profile-view" className="amz-dropitem-1 w-inline-block">
                                <div className="amz-notificationbottom-2 w-richtext">
                                    <p>Welcome to the OGHelp Platform, please make sure to <span className="text-underline">complete your profile</span>!</p>
                                </div>
                                </NavLink>
                            }
                            <Nav.Item className="amz-dropitem-1 w-inline-block">
                            <div className="amz-notificationtop-1">
                            <div className="amz-notificationtop-2">1:38 PM Jan 19th 2020</div>
                            </div>
                            <div className="amz-notificationbottom-1">
                                <div className="amz-notificationbottom-2 w-richtext">
                                    <p><NavLink to="/notifications-coming-soon">Successful registration.</NavLink></p>
                                </div>
                            </div>
                            </Nav.Item>
                        </NotiDropdown>

                          <Dropdown className="amz-profiledrop-1 w-dropdown mx-4 d-none d-lg-flex">
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-basic" className="">
                                    <div className="amz-notificationsname-1">Notifications</div>
                                    <div className="amz-notifications-icon w-icon-dropdown-toggle"></div>
                                    <div className="amz-notificationbubble-1">
                                        <div className="amz-notificationbubble-2">1</div>
                                    </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="p-0 mt-3 p-3">
                                    {!user.complete &&
                                    <NavLink to="/profile-view" className="amz-dropitem-1 w-inline-block">
                                        <div className="amz-notificationbottom-2 w-richtext">
                                            <p>Welcome to the OGHelp Platform, please make sure to <span className="text-underline">complete your profile</span>!</p>
                                        </div>
                                    </NavLink>
                                    }
                                    <Nav.Item className="amz-dropitem-1 w-inline-block">
                                    <div className="amz-notificationtop-1">
                                        <div className="amz-notificationtop-2">1:38 PM Jan 19th 2020</div>
                                        </div>
                                        <div className="amz-notificationbottom-1">
                                            <div className="amz-notificationbottom-2 w-richtext">
                                                <p><NavLink to="/notifications-coming-soon">Successful registration.</NavLink></p>
                                            </div>
                                        </div>
                                    </Nav.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          </Nav>
                          <Nav className="bl">
                          
                          <div className="amz-areac-1">
                              <Dropdown className="amz-profiledrop-1 w-dropdown desktop">
                              <Dropdown.Toggle as={CustomToggle} id="dropdown-basic" className="">
                              <div className="amz-profilepic-1">
                                  <div className="amz-profilepic-2" style={(user.profile_file) ? {'backgroundImage' : 'url('+user.profile_file+')'} : {}}></div>
                                  </div>
                                  <div className="amz-profilename-1">
                                  <div className="amz-profilename-2 text-truncate" style={{ maxWidth: "150px" }}>{user.full_name}</div>
                                  </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="p-0">
                              <div className="amz-profiletop-1">
                              <div className="amz-profilebox-1">
                                  <div className="amz-profilepic-3">
                                  <div className="amz-profilepic-4" style={(user.profile_file) ? {'backgroundImage' : 'url('+user.profile_file+')'} : {}}></div>
                                  </div>
                                  <div className="amz-profilename-3" style={{width : "80%"}}>
                                  <div className="amz-profilename-4 text-break-all">{user.full_name + " "+ user.last_name}</div>
                                  <div className="amz-profilename-5">{user.email}</div>
                                  </div>
                              </div>
                              </div>
                              <NavLink to="/profile-view" className="amz-profilelink-1 w-inline-block">
                                  <div className="amz-profilelink-2">My profile</div>
                              </NavLink>
                              <NavLink to="/account-settings" className="amz-profilelink-1 w-inline-block">
                              <div className="amz-profilelink-2">Account settings</div>
                              </NavLink>
                              <NavLink to="/logout" className="amz-profilelink-1 w-inline-block">
                                  <div className="amz-profilelink-2">Sign out</div>
                              </NavLink>
                              </Dropdown.Menu>
                              </Dropdown>
                          </div>
                          </Nav>
                      </Navbar.Collapse>
                      </Navbar>
                  </div>
                }
            </Fragment>
        );
    }
}

const Menu = props => {
    return (
      <div className="menuNotifications pt-2"
        style={{
          zIndex: 2,
        }}
        {...props}
      />
    );
  };
  const Blanket = props => (
    <div
      css={{
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        position: 'fixed',
        zIndex: 1,
      }}
      {...props}
    />
  );
  const styleDropdown = {
     "position": 'relative',
  }
  const NotiDropdown = ({ children, isOpen, target, onClose }) => (
    <div style={styleDropdown} className="dropNotifications px-3 mt-2 mb-4 d-lg-none">
      {target}
      {isOpen ? <Menu>{children}</Menu> : null}
      {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
  );

export default WrapperConsumer(HeaderComponent);