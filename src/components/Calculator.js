import React from 'react';
import PropTypes from 'prop-types';
import DigitButton from './DigitButton';

function OperatorButton({ operator }) {
  return (
    <button type="button" className="operator-button">{ operator }</button>
  );
}

OperatorButton.propTypes = {
  operator: PropTypes.string.isRequired,
  // digit: PropTypes.oneOfType(string, number).isRequired,
};

function Calculator() {
  const Operators = ['/', 'x', '-', '+', '='];
  const Digits = ['AC', '+ / -', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

  const operatorList = Operators.map((operator) => (
    <OperatorButton key={operator} operator={operator} />
  ));

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
