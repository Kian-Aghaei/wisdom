import React from 'react';
import { desktopScreenSizeLimit } from '../config';
import { escKeyCode } from '../config';
import { mobileSearchBoxVisibility } from '../config';

class HeaderSearch extends React.Component {
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

    shrinkWhenClickedAnywhere() {
        if (this.state.inputValue === '') {
            this.setState({
                ...this.defaultState,
            });
        }
    }

    escFunction (event) {
        if (event.keyCode === escKeyCode) {
           this.props.listenForCloseButtonAndEsc(mobileSearchBoxVisibility[0]);
           if (this.state.openSearchBox === 'openSearchBox') {
               this.setState({
                   ...this.defaultState,
               });
               event.target.blur();
           }
        }
        else return null;
    }

    checkTheExpandedSearchBox() {
        if (this.props.screenWidth < desktopScreenSizeLimit && this.state.openSearchBox === 'openSearchBox' ) {
            this.setState({
                ...this.defaultState,
            });
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
        window.addEventListener('resize', this.checkTheExpandedSearchBox, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
        window.removeEventListener('resize', this.checkTheExpandedSearchBox, false);
    }

    focus() {
        this.textInput.current.focus();
    }

    changeValueOfInput (event) {
        const { value } = event.target;
        this.setState ({
            inputValue: value,
        })
    };

    toggleSearch = () => {
        const screenWidth = this.props.screenWidth;
        if (screenWidth > desktopScreenSizeLimit ) {
            if (this.state.openSearchBox === '') {
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
        } else {
            if (this.props.displayState === mobileSearchBoxVisibility[0]) {
                this.props.listenForCloseButtonAndEsc(mobileSearchBoxVisibility[1]);
            } else {
                this.props.listenForCloseButtonAndEsc(mobileSearchBoxVisibility[0]);
            }
        }
    };

    render() {
        return (
            <form className="" id="searchForm">
                <p className={`searchIndex ${this.state.visibility}`}>SEARCH</p>
                <input
                    role="search"
                    method="get"
                    action="#"
                    value={this.state.inputValue}
                    onChange={this.changeValueOfInput}
                    // onBlur={this.shrinkWhenClickedAnywhere}
                    ref={this.textInput}
                    type="text"
                    name="input"
                    className={`input ${this.state.openSearchBox}`}
                    id="search-input">
                </input>
                <button
                    onClick={() => {this.toggleSearch();}}
                    type="reset"
                    className={`search ${this.state.closedSearchBox}`}
                    id="search-btn">
                </button>
            </form>
        );
    }
}

export default HeaderSearch;
