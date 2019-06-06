import React from 'react';
import './css/main.css';
import './css/base.css';
import './css/fonts.css';
import './css/vendor.css';
// import './css/font-awesome/css/font-awesome.css'
import HeaderLogo from './HeaderLogo'
import HeaderSocial from './HeaderSocial'
import HeaderMenu from './HeaderMenu'
import HeaderSearch from './HeaderSearch'


class HeaderComp extends React.Component {
    render() {
        return (
            <section className="sec-pageheader sec-pageheader-home">
                <header className="header">
                    <div className="header_content row">

                        <HeaderLogo/>
                        <HeaderSocial/>
                        <HeaderSearch/>

                        {/*<div className="header__search">*/}

                            {/*<form role="search" method="get" className="header__search-form" action="#">*/}
                                {/*<label>*/}
                                    {/*<span className="hide-content">Search for:</span>*/}
                                    {/*<input type="search" className="search-field" placeholder="Type Keywords" value="" name="s" title="Search for:" autocomplete="off"></input>*/}
                                {/*</label>*/}
                                {/*<input type="submit" className="search-submit" value="Search"></input>*/}
                            {/*</form>*/}

                            {/*<a href="#0" title="Close Search" className="header__overlay-close">Close</a>*/}

                        {/*</div>*/}


                        {/*<a className="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>*/}

                        <HeaderMenu/>
                    </div>
                </header>
            </section>
        )
    }
}

export default HeaderComp