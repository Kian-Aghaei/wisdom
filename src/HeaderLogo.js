import React from 'react';
import Logo from './images/logo.svg'

class HeaderLogo extends React.Component {
    render() {
        return(
                <div className="header_logo">
                    <a className="logo" href="index.html">
                        <img src={Logo} alt="Homepage"></img>
                    </a>
                </div>
        );
    }
}

export default HeaderLogo;
