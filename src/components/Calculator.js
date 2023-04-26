import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calculate from '../logic/calculate';

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

// Calculator App
function Calculator() {
  const [obj, setObj] = useState(Calculate({}, 'AC'));

  const onClickHandler = (btn) => setObj(Calculate(obj, btn));

  const Operators = ['÷', 'x', '-', '+', '='];
  const Digits = ['AC', '+ / -', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

  // Create button elements from Operators array using OperatorButton component
  const operatorList = Operators.map((operator) => (
    <OperatorButton
      key={operator}
      operator={operator}
      onClick={onClickHandler}
    />
  ));

  // Create button elements from Digits array using DigitButton component
  const digitList = Digits.map((digit) => (
    <DigitButton
      key={digit}
      digit={digit}
      onClick={onClickHandler}
    />
  ));

  return (
    <div className="calculator-wrapper">
      <div className="display-panel">
        {obj.total}
        {' '}
        {obj.operation}
        {' '}
        {obj.next}
      </div>
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
