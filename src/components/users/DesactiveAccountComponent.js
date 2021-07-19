import React, {Fragment} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {Helmet} from "react-helmet";
import WrapperConsumer from '../../store';
import '../../assets/css/style.css';
import Header from '../HeaderComponent';
import Footer from './Footer';

import { desactiveAccount } from '../../services/user'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ConfirmDesactivation(props) {
    const send = () => {
        props.onHide("ok")
    }
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter text-center ">
          Deactivate account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="my-4 centered text-center heading1_lt">
            Are you sure to deactivate your account?
          </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" className="button_lm w-button" onClick={send}>
                Deactivate
            </Button>
            <Button variant="secundary" className="button_lm w-button cancel" onClick={props.onHide}>
                Cancel
            </Button>
        </Modal.Footer>
      </Modal>
    );
  }

class DesactiveAccountComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            successForm : false,
            errorForm : false,
            modalShow: false,
            display: "none"
        }
    }

    desactiveAccount = (e) => {
        e.preventDefault()
        this.setModalShow(true)
    }

    setModalShow = (val, v) => {
        this.setState({modalShow : val})
        if(v === "ok" ){
            this.desactive()
        }
    }

    desactive = async () => {
        console.log('desactive')
        
        var res = await desactiveAccount()
        this.setModalShow(false)
        if (res.status === 'success'){
            this.setState({successForm : true, errorForm : false})
            setTimeout(() =>{
                this.props.history.push("/logout")
            }, 1800)
        }else{
            this.setState({successForm : false, errorForm : true})
        }
    }

    render(){
        const {context:{user}} = this.props;
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Profile Deactivate account</title>
                </Helmet>
                <Header />
                <ConfirmDesactivation
                    show={this.state.modalShow}
                    onHide={(v) => this.setModalShow(false, v)}
                    variable = {`my variable`}
                />
                <div className="global-header-1">
                    <div className="global-header-2">
                    <h1 className="global-header-3">Account settings</h1>
                    </div>
                </div>
                <div className="div-block">
                    <div className="cc_6">
                    <div className="acc_7">
                        <div className="aleftbar_md">
                        <div className="abuttonsection_md">
                            <NavLink to="/account-settings" className="alinkbuttnsection_md w-inline-block">
                            <div className="atextbutton_md">Password and security</div>
                            </NavLink>
                        </div>
                        <div className="abuttonsection_md">
                            <NavLink to="/account-deactivate-account" aria-current="page" className="alinkbuttnsection_md w-inline-block w--current">
                            <div className="atextbutton_md">Deactivate account</div>
                            </NavLink>
                        </div>
                        <div className="abuttonsection_md">
                            <NavLink data-w-id="f997e58a-83dc-5ee6-f145-f8aeffab6dd3" onMouseEnter={() => this.setState({display : "block"})} onMouseLeave={() => this.setState({display : "none"})} to="#comingsoonmd-1" className="alinkbuttnsection_md w-inline-block">
                            <div className="atextbutton_md">Payments</div>
                            <div className="comingsoonmd" style={{display : this.state.display}}>
                                <div className="comingsoonmd-1" >Coming soon</div>
                            </div>
                            </NavLink>
                        </div>
                        </div>
                    </div>
                    <div className="cc_8">
                        <div className="section1_ll">
                        <div className="containsection_lm">
                            <div className="formsection_lm">
                            <div className="form_lm w-form">
                                <div data-name="Email Form" className="form1_lm">
                                <div className="section2_lm">
                                    <div className="headsection1_lm2">
                                    <h2 className="headings_lm2">Deactivate account</h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="formsection_lm">
                            <div className="form_lm w-form">
                                {this.state.successForm === false && user.state_id === true &&
                                <form action="/desactive-account" onSubmit={this.desactiveAccount} id="email-form" name="email-form" data-name="Email Form" className="form1_lm">
                                <div className="section2_lm">
                                    <div className="headsection1_lm">
                                    <h3 className="headings_lm">Permanently deactivate this account</h3>
                                    </div>
                                    <div className="bodysection_lm">
                                    <div className="bodytextsection_lm">The account will no longer be available, and all data will be permanently deactivated.</div>
                                    </div>
                                    <div className="buttonsection_lm"><button type="submit" className="button_lm w-button">Deactivate account</button></div>
                                </div>
                                </form>
                                }
                                {(this.state.successForm || user.state_id === false) &&
                                <div className="successmsjform_lm w-form-done">
                                <div className="textform_lm">Your account has been deactivated.</div>
                                </div>
                                }
                                {this.state.errorForm &&
                                <div className="errormsjform_lm w-form-fail">
                                <div className="textform_lm">Oops! Something went wrong while submitting the form.</div>
                                </div>
                                }
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(WrapperConsumer(DesactiveAccountComponent));