import React from 'react';
import '../../css/main.css';
import '../../css/base.css';
import '../../css/fonts.css';
import '../../css/vendor.css';
import HeaderLogo from './HeaderLogo';
import Social from './Social';
import Menu from './Menu';
import Search from './Search';
import MobileSearchBox from './MobileSearchBox';
import { desktopScreenSizeLimit } from '../config';
import { mobileSearchBoxVisibility } from '../config';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: desktopScreenSizeLimit + 1,
            height: 0,
            mobileSearchBoxDisplay: mobileSearchBoxVisibility[0],
        };
        this.updateScreenWidthState = this.updateScreenWidthState.bind(this);
        this.listenForCloseButtonAndEsc = this.listenForCloseButtonAndEsc.bind(this);
    }

    updateScreenWidthState() {
        if ( this.state.width > desktopScreenSizeLimit) {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        } else {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight,
                mobileSearchBoxDisplay: mobileSearchBoxVisibility[0]
            })
        }
    }

    componentDidMount() {
        this.updateScreenWidthState();
        window.addEventListener('resize', this.updateScreenWidthState);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenWidthState);
    }

    listenForCloseButtonAndEsc(requiredClass) {
        this.setState ({
            mobileSearchBoxDisplay: requiredClass,
        });
    }

    render() {
        return (
            <section className="s-pageheader s-pageheader--home">
                <header className="header">
                    <div className="header__content row">

                        <HeaderLogo/>
                        <Social/>
                        <Search
                            screenWidth={this.state.width}
                            listenForCloseButtonAndEsc={this.listenForCloseButtonAndEsc}
                            displayState={this.state.mobileSearchBoxDisplay}
                        />
                        <a className="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>
                        <Menu/>

                    </div>
                </header>
                <MobileSearchBox
                    screenWidth={this.state.width}
                    displayState={this.state.mobileSearchBoxDisplay}
                />
            </section>
        )
    }
}

export default Header;
