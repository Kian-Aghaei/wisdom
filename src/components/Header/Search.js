import React from 'react';

class HeaderSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: '',
            close: '',
            visibility: 'searchVisible',
            inputValue: '',
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
                square: '',
                close: '',
                visibility: 'searchVisible',
            });
        }
    }

    escFunction (event) {
        if (event.keyCode === 27) {
           if (this.state.square === 'square') {
               this.setState({
                   square: '',
                   close: '',
                   visibility: 'searchVisible',
                   inputValue: '',
               });
               event.target.blur();
           }
        }
    }

    checkTheExpandedSearchBox() {
        if (this.props.screenWidth < 800 && this.state.square === 'square' ) {
            this.setState({
                square: '',
                close: '',
                visibility: 'searchVisible',
                inputValue: '',
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
        const value = event.target.value;
        this.setState ({
            inputValue: value,
        })
    };

    toggleSearch = () => {
        const screenWidth = this.props.screenWidth;
        if (screenWidth > 800 ) {
            if (this.state.square === '') {
                this.setState({
                    square: 'square',
                    close: 'close',
                    visibility: 'searchHidden',
                });
                this.focus();
            } else {
                this.setState({
                    square: '',
                    close: '',
                    visibility: 'searchVisible',
                    inputValue: '',
                });
            }
        } else {
            if (this.props.displayState === 'mobileSearchHidden') {
                this.props.listenForCloseButton('mobileSearchVisible');
            } else {
                this.props.listenForCloseButton('mobileSearchHidden');
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
                    className={`input ${this.state.square}`}
                    id="search-input">
                </input>
                <button
                    onClick={() => {this.toggleSearch();}}
                    type="reset"
                    className={`search ${this.state.close}`}
                    id="search-btn">
                </button>
            </form>
        );
    }
}

export default HeaderSearch;