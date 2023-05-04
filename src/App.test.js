import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculate from './logic/calculate';
import Operate from './logic/operate';
import HomePage from './components/HomePage';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';

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

  test('calculate 1 ÷ 4 AC', () => {
    // Arrange
    const obj = { total: 0, next: null, operation: null };

    // Act
    const clickOnFirstTwo = Calculate(obj, '1');
    const clickOnX = Calculate(clickOnFirstTwo, '÷');
    const clickOnSecondTwo = Calculate(clickOnX, '4');
    const clickOnEqualButton = Calculate(clickOnSecondTwo, 'AC');

    // Assert
    expect(clickOnEqualButton.total).toBe('0');
  });

  test('calculate 8 + / -', () => {
    // Arrange
    const obj = { total: 0, next: null, operation: null };

    // Act
    const clickOnFirstTwo = Calculate(obj, '8');
    const clickOnX = Calculate(clickOnFirstTwo, '+ / -');

    // Assert
    expect(clickOnX.next).toBe('-8');
  });
});

describe('operations', () => {
  test('operation 16 x 2', () => {
    // Arrange
    const items = [16, 2, 'x'];

    // Act
    const result = Operate(...items);

    // Assert
    expect(result).toBe('32');
  });

  test('operation 56 ÷ 0.5', () => {
    // Arrange
    const items = [56, 0.5, '÷'];

    // Act
    const result = Operate(...items);

    // Assert
    expect(result).toBe('112');
  });

  test('operation 1021 - 30', () => {
    // Arrange
    const items = [1021, 30, '-'];

    // Act
    const result = Operate(...items);

    // Assert
    expect(result).toBe('991');
  });
  //  start changes
  test('operation 102 + 30', () => {
    // Arrange
    const items = [102, 30, '+'];

    // Act
    const result = Operate(...items);

    // Assert
    expect(result).toBe('132');
  });

  test('operation 46 ÷ 0', () => {
    // Arrange
    const items = [46, 0, '÷'];

    // Act
    const result = Operate(...items);

    // Assert
    expect(result).toBe('Can\'t divide by 0.');
  });

  test('operation 46 % 0', () => {
    // Arrange
    const items = [46, 0, '%'];

    // Act
    const result = Operate(...items);

    // Assert
    expect(result).toBe('Can\'t find modulo as can\'t divide by 0.');
  });

  test('operation 4 $ 6', () => {
    // Arrange
    const items = [4, 6, '^'];
    const expectedErrorMessage = /Unknown operation '\^'/;

    // Act and Assert
    expect(() => Operate(...items)).toThrowError(expectedErrorMessage);
  });
});

describe('App snapshots', () => {
  it('renders correctly', () => {
    const homepage = renderer
      .create(<HomePage page="/">Math-magician</HomePage>)
      .toJSON();
    expect(homepage).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const calculatorpage = renderer
      .create(<Calculator page="/calculator">Math-magician/calculator</Calculator>)
      .toJSON();
    expect(calculatorpage).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const quotepage = renderer
      .create(<Quote page="/quote">Math-magician/quote</Quote>)
      .toJSON();
    expect(quotepage).toMatchSnapshot();
  });
});

describe('App simulate user interaction', () => {
  it('renders Homepage component', () => {
    render(<HomePage />);
  });

  it('renders Calculator component', () => {
    render(<Calculator />);
  });

  it('renders Quote component', () => {
    render(<Quote />);
  });
});
