import React from 'react';
import { desktopScreenSizeLimit } from '../config';

const MobileSearchBox = (props) => {
  if (props.screenWidth <= desktopScreenSizeLimit) {
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
        />
      </form>
    );
  } return (null);
};

export default MobileSearchBox;
