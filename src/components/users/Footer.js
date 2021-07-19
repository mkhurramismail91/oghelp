import React, { Component } from 'react'
import WrapperConsumer from '../../store';

class Footer extends Component {

    render() {
        return (
            <div className="at-footer-1">
            <div className="at-footer-2 w-richtext">
              <p>Powered By OGHelp Freelancing Platform. Hosted on OGHelp Cloud Services.</p>
            </div>
          </div>
        );
    }
}

export default WrapperConsumer(Footer);