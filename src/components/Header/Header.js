import React from 'react';
import '../../css/main.css';
import '../../css/base.css';
import '../../css/fonts.css';
import '../../css/vendor.css';
import HeaderLogo from './HeaderLogo'
import Social from './Social'
import Menu from './Menu'
import Search from './Search'
import MobileSearchBox from './MobileSearchBox'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 801,
            height: 0,
            mobileSearchBoxDisplay: 'mobileSearchHidden',
        };
        this.updateScreenWidthState = this.updateScreenWidthState.bind(this);
        this.listenForCloseButton = this.listenForCloseButton.bind(this);
    }

    updateScreenWidthState() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    componentDidMount() {
        this.updateScreenWidthState();
        window.addEventListener('resize', this.updateScreenWidthState);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenWidthState);
    }

    listenForCloseButton(requiredClass) {
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
                            listenForCloseButton={this.listenForCloseButton}
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
