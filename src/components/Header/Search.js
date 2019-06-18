import React from 'react';
import PropTypes from 'prop-types';
import {
  mobileSearchBoxVisibility,
  desktopScreenSizeLimit,
  escKeyCode,
} from '../config';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      openSearchBox: '',
      closedSearchBox: '',
      visibility: 'searchVisible',
      inputValue: '',
    };
    this.state = {
      ...this.defaultState,
    };
    this.textInput = React.createRef();
    this.focus = this.focus.bind(this);
    this.escFunction = this.escFunction.bind(this);
    this.changeValueOfInput = this.changeValueOfInput.bind(this);
    this.shrinkWhenClickedAnywhere = this.shrinkWhenClickedAnywhere.bind(this);
    this.checkTheExpandedSearchBox = this.checkTheExpandedSearchBox.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
    window.addEventListener('resize', this.checkTheExpandedSearchBox, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
    window.removeEventListener('resize', this.checkTheExpandedSearchBox, false);
  }

  shrinkWhenClickedAnywhere() {
    const { inputValue } = this.state;
    if (inputValue === '') {
      this.setState({
        ...this.defaultState,
      });
    }
  }

  escFunction(event) {
    const { listenForCloseButtonAndEsc } = this.props;
    const { openSearchBox } = this.state;

    if (event.keyCode === escKeyCode) {
      listenForCloseButtonAndEsc(mobileSearchBoxVisibility[0]);
      if (openSearchBox === 'openSearchBox') {
        this.setState({
          ...this.defaultState,
        });
        event.target.blur();
      }
    }
  }

  checkTheExpandedSearchBox() {
    const { screenWidth } = this.props;
    const { openSearchBox } = this.state;

    if (screenWidth < desktopScreenSizeLimit && openSearchBox === 'openSearchBox') {
      this.setState({
        ...this.defaultState,
      });
    }
  }

  focus() {
    this.textInput.current.focus();
  }

  changeValueOfInput(event) {
    const { value } = event.target;
    this.setState({
      inputValue: value,
    });
  }

  toggleSearch() {
    const {
      screenWidth,
      displayState,
      listenForCloseButtonAndEsc,
    } = this.props;
    const { openSearchBox } = this.state;

    if (screenWidth > desktopScreenSizeLimit) {
      if (openSearchBox === '') {
        this.setState({
          openSearchBox: 'openSearchBox',
          closedSearchBox: 'closedSearchBox',
          visibility: 'searchHidden',
        });
        this.focus();
      } else {
        this.setState({
          ...this.defaultState,
        });
      }
    } else if (displayState === mobileSearchBoxVisibility[0]) {
      listenForCloseButtonAndEsc(mobileSearchBoxVisibility[1]);
    } else {
      listenForCloseButtonAndEsc(mobileSearchBoxVisibility[0]);
    }
  }

  render() {
    const {
      inputValue, closedSearchBox, visibility, openSearchBox,
    } = this.state;

    return (
      <form className="" id="searchForm">
        <p className={`searchIndex ${visibility}`}>SEARCH</p>
        <input
          method="get"
          action="#"
          value={inputValue}
          onChange={this.changeValueOfInput}
          // onBlur={this.shrinkWhenClickedAnywhere}
          ref={this.textInput}
          type="text"
          name="input"
          className={`input ${openSearchBox}`}
          id="search-input"
        />
        {/* eslint-disable-next-line react/button-has-type */}
        <button
          onClick={() => { this.toggleSearch(); }}
          type="reset"
          className={`search ${closedSearchBox}`}
          id="search-btn"
        />
      </form>
    );
  }
}

Search.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  displayState: PropTypes.string.isRequired,
  listenForCloseButtonAndEsc: PropTypes.func.isRequired,
};

export default Search;
