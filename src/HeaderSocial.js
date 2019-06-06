import React from 'react';

class HeaderSocial extends React.Component {
    render() {
        return (
                <ul className="header_social">
                    <li>
                        <a href="#0"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#0"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#0"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#0"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                    </li>
                </ul>
        );
    }
}

export default HeaderSocial;