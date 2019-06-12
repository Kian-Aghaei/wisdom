import React from 'react';

class HeaderSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: '',
            close: '',
            visibility: 'visible'
        };
    }

    toggleSearch = () => {
        if (this.state.square === '') {
            this.setState({
                square: 'square',
                close: 'close',
                visibility: 'hidden'
            })
        } else {
            this.setState({
                square: '',
                close: '',
                visibility: 'visible',
            })
        }
    };

    render() {
        return (
            <form className="" id="searchForm">
                <p className={`searchIndex ${this.state.visibility}`}>SEARCH</p>
                <input type="text" name="input" className={`input ${this.state.square}`} id="search-input"></input>
                <button onClick={this.toggleSearch} type="reset" className={`search ${this.state.close}`} id="search-btn"></button>
            </form>
        );
    }
}

export default HeaderSearch;