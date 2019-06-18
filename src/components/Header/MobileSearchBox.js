import React from 'react';
import PropTypes from 'prop-types';

const MobileSearchBox = (props) => {
  const { displayState } = props;
  return (
    <form
      method="get"
      action="#"
      id="search-form-mobile"
      className={`form-mobile ${displayState}`}
    >
      <input
        className="mobile-search-input"
        placeholder="Search ..."
      />
    </form>
  );
};

MobileSearchBox.propTypes = {
  displayState: PropTypes.string.isRequired,
};

export default MobileSearchBox;
