import React from 'react';
import PropTypes from 'prop-types';

// DigitButton component with prop validation
function DigitButton({ digit }) {
  return (
    <button type="button" className="digit-button">{ digit }</button>
  );
}
DigitButton.propTypes = {
  digit: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
};

// OpertorButton component with prop validation
function OperatorButton({ operator }) {
  return (
    <button type="button" className="operator-button">{ operator }</button>
  );
}
OperatorButton.propTypes = {
  operator: PropTypes.string.isRequired,
};

// Calculator App
function Calculator() {
  const Operators = ['÷', 'x', '-', '+', '='];
  const Digits = ['AC', '+ / -', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

  // Create button elements from Operators array using OperatorButton component
  const operatorList = Operators.map((operator) => (
    <OperatorButton key={operator} operator={operator} />
  ));

  // Create button elements from Digits array using DigitButton component
  const digitList = Digits.map((digit) => (
    <DigitButton key={digit} digit={digit} />
  ));

  return (
    <div className="calculator-wrapper">
      <div className="display-panel">0</div>
      <div className="digit-wrapper">
        {digitList}
      </div>
      <div className="operator-wrapper">
        {operatorList}
      </div>
    </div>
  );
}

export default Calculator;
