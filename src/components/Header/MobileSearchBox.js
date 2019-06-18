import React from 'react';

const MobileSearchBox = props => {
    return (
        <form
            method="get"
            action="#"
            id="search-form-mobile"
            className={`form-mobile ${props.displayState}`}
        >
            <input
                className="mobile-search-input"
                placeholder="Search ..."
            >
            </input>
        </form>
    )
};

export default MobileSearchBox;
