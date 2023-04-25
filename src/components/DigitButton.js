import React from 'react';
import PropTypes from 'prop-types';

function DigitButton({ digit }) {
  // const { digit } = props;
  return (
    <button type="button" className="digit-button">{ digit }</button>
  );
}

DigitButton.propTypes = {
  digit: PropTypes.string.isRequired,
  // digit: PropTypes.oneOfType(string, number).isRequired,
};

export default DigitButton;

// npm install prop-types --save
// npm i -S prop-types
