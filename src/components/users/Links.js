import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import WrapperConsumer from '../../store';

class Footer extends Component {

    render() {
        return (
            <div className="aon-areathree-1">
                <div className="aon-three-wrapper-1">
                {this.props.mode !== "feeds" &&
                <NavLink to="/my-feeds-coming-soon" aria-current="page" className="aon-three-item-1 w-inline-blockgit add ">
                    <div className="aon-three-itemhead-1">
                    <div className="aon-three-itemname-1">My Feeds</div>
                    <div className="aon-three-itemlink-1">View all</div>
                    </div>
                    <div className="aon-three-itemdummy-1">
                    <div className="aon-three-item-2">Required Data Scientist Experi..<br/>Need a Technician Manufactur..</div>
                    </div>
                    <div className="aon-three-more-1">
                    <div className="aon-three-more-2">Learn more</div>
                    </div>
                </NavLink>
                }
                {this.props.mode !== "jobs" &&
                <NavLink to="/my-jobs-coming-soon" className="aon-three-item-1 w-inline-block">
                    <div className="aon-three-itemhead-1">
                    <div className="aon-three-itemname-1">My Jobs</div>
                    <div className="aon-three-itemlink-1">View all</div>
                    </div>
                    <div className="aon-three-itemdummy-1">
                    <div className="aon-three-item-2">Well Design Engineer Required..<br/>Mega Project Well Architect Re..</div>
                    </div>
                    <div className="aon-three-more-1">
                    <div className="aon-three-more-2">Learn more</div>
                    </div>
                </NavLink>
                }
                {this.props.mode !== "proposals" &&
                <NavLink to="/my-proposals-coming-soon" className="aon-three-item-1 w-inline-block">
                    <div className="aon-three-itemhead-1">
                    <div className="aon-three-itemname-1">My Proposals</div>
                    <div className="aon-three-itemlink-1">View all</div>
                    </div>
                    <div className="aon-three-itemdummy-1">
                    <div className="aon-three-item-2">Small Project CADDesigner  SL..<br/>Architectural Design Refinery R..</div>
                    </div>
                    <div className="aon-three-more-1">
                    <div className="aon-three-more-2">Learn more</div>
                    </div>
                </NavLink>
                }
                {this.props.mode !== "short_list" &&
                <NavLink to="/my-shortlist-coming-soon" className="aon-three-item-1 w-inline-block">
                    <div className="aon-three-itemhead-1">
                    <div className="aon-three-itemname-1">My Short List</div>
                    <div className="aon-three-itemlink-1">View all</div>
                    </div>
                    <div className="aon-three-itemdummy-1">
                    <div className="aon-three-item-2">Technician Helper Require IM..<br/>Electro-Mechanical Expertise..</div>
                    </div>
                    <div className="aon-three-more-1">
                    <div className="aon-three-more-2">Learn more</div>
                    </div>
                </NavLink>
                }
                {this.props.mode !== "payments" &&
                <NavLink to="/payments-history-coming-soon" className="aon-three-item-1 w-inline-block">
                    <div className="aon-three-itemhead-1">
                    <div className="aon-three-itemname-1">My Payments</div>
                    <div className="aon-three-itemlink-1">View all</div>
                    </div>
                    <div className="aon-three-itemdummy-1">
                    <div className="aon-three-item-2">Job ID#198324 Project Design..<br/>Job ID#198456 Highly Skilled E..</div>
                    </div>
                    <div className="aon-three-more-1">
                    <div className="aon-three-more-2">Learn more</div>
                    </div>
                </NavLink>
                }
                </div>
            </div>
        );
    }
}

export default WrapperConsumer(Footer);