import React from 'react';
import PropTypes from 'prop-types';

// DigitButton component with prop validation
function DigitButton({ digit, onClick }) {
  return (
    <button type="button" className="digit-button" onClick={() => onClick(digit)}>{ digit }</button>
  );
}
DigitButton.propTypes = {
  digit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
};

// OpertorButton component with prop validation
function OperatorButton({ operator, onClick }) {
  return (
    <button type="button" className="operator-button" onClick={() => onClick(operator)}>{ operator }</button>
  );
}
OperatorButton.propTypes = {
  operator: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { DigitButton, OperatorButton };
