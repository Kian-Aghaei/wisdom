import React from 'react';
import '../../css/main.css';
import '../../css/base.css';
import '../../css/fonts.css';
import '../../css/vendor.css';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import Search from './Search';
import HeaderLogo from './HeaderLogo';
import Social from './Social';
import Menu from './Menu';
import MobileSearchBox from './MobileSearchBox';
import { desktopScreenSizeLimit, mobileSearchBoxVisibility } from '../config';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: desktopScreenSizeLimit + 1,
      mobileSearchBoxDisplay: mobileSearchBoxVisibility[0],
    };
    this.updateScreenWidthState = this.updateScreenWidthState.bind(this);
    this.listenForCloseButtonAndEsc = this.listenForCloseButtonAndEsc.bind(this);
    this.handleClickOnBurger = this.handleClickOnBurger.bind(this);
  }

  componentDidMount() {
    this.updateScreenWidthState();
    window.addEventListener('resize', this.updateScreenWidthState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenWidthState);
  }

  handleClickOnBurger() {
    const { burgerCondition } = this.state;
    this.setState({
      burgerCondition: !burgerCondition,
    });
  }

  updateScreenWidthState() {
    const { width } = this.state;

    if (width > desktopScreenSizeLimit) {
      this.setState({
        width: window.innerWidth,
      });
    } else {
      this.setState({
        width: window.innerWidth,
        mobileSearchBoxDisplay: mobileSearchBoxVisibility[0],
      });
    }
  }

  listenForCloseButtonAndEsc(requiredClass) {
    this.setState({
      mobileSearchBoxDisplay: requiredClass,
    });
  }

  render() {
    const { width, mobileSearchBoxDisplay } = this.state;

    return (
      <section className="s-pageheader s-pageheader--home">
        <header className="header">
          <div className="header__content row">

            <HeaderLogo />
            <Social />
            <Search
              screenWidth={width}
              listenForCloseButtonAndEsc={this.listenForCloseButtonAndEsc}
              displayState={mobileSearchBoxDisplay}
            />
            <Menu />

          </div>
        </header>
        {width <= desktopScreenSizeLimit
          && (
            <MobileSearchBox
              screenWidth={width}
              displayState={mobileSearchBoxDisplay}
            />
          )
        }
      </section>
    );
  }
}

export default Header;
