import React from 'react'

function MobileSearchBox(props) {
    const screenWidth = props.screenWidth;
    if (screenWidth <= 800) {
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
    } else return (null);
}

export default MobileSearchBox;