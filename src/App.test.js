// import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';
// npm install --save-dev react-test-renderer
import Calculate from './logic/calculate';
import Operate from './logic/operate';
// import HomePage from './components/HomePage';
// import Calculator from './components/Calculator';
// import Quote from './components/Quotes';

describe('calculations', () => {
  test('calculate 2 x 2 + 16', () => {
    // Arrange
    const obj = { total: 0, next: null, operation: null };

    // Act
    const clickOnFirst2 = Calculate(obj, '2');
    const clickOnx = Calculate(clickOnFirst2, 'x');
    const clickOnSecond2 = Calculate(clickOnx, '2');
    const clickOnX2 = Calculate(clickOnSecond2, '+');
    const clickOn16 = Calculate(clickOnX2, '16');
    const clickOnEqualButton = Calculate(clickOn16, '=');

    // Assert
    expect(clickOnEqualButton.total).toBe('20');
  });

  test('calculate 3 + 12 ÷ 3', () => {
    // Arrange
    const obj = { total: 0, next: null, operation: null };

    // Act
    const clickOnFirst3 = Calculate(obj, '3');
    const clickOnplus = Calculate(clickOnFirst3, '+');
    const clickOn12 = Calculate(clickOnplus, '12');
    const clickOndiv = Calculate(clickOn12, '÷');
    const clickOn3 = Calculate(clickOndiv, '3');
    const clickOnEqualButton = Calculate(clickOn3, '=');

    // Assert
    expect(clickOnEqualButton.total).toBe('5');
  });

  test('calculate 1 ÷ 4', () => {
    // Arrange
    const obj = { total: 0, next: null, operation: null };

    // Act
    const clickOnFirstTwo = Calculate(obj, '1');
    const clickOnX = Calculate(clickOnFirstTwo, '÷');
    const clickOnSecondTwo = Calculate(clickOnX, '4');
    const clickOnEqualButton = Calculate(clickOnSecondTwo, '=');

    // Assert
    expect(clickOnEqualButton.total).toBe('0.25');
  });
});
});
