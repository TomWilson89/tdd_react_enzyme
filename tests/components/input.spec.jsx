import { shallow } from 'enzyme';
import React from 'react';
import { Input } from '../../src/components';
import { checkProps, findByTestAttribute } from '../utils';

const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => {
  const original = jest.requireActual('react');
  return {
    ...original,
    useState: (initialState) => [initialState, mockSetCurrentGuess],
  };
});
const defaultProps = {
  secretWord: 'party',
  success: false,
};

const makeSut = (props = defaultProps) => {
  const sut = shallow(<Input {...props} />);

  return {
    sut,
  };
};

describe('Input component', () => {
  describe('success is true', () => {
    let sut;
    beforeEach(() => {
      const props = { ...defaultProps, success: true };
      sut = makeSut(props).sut;
    });

    test('should render withour error', () => {
      const appComponent = findByTestAttribute(sut, 'component-input');
      expect(appComponent.length).toBe(1);
    });

    test('should not render input and button', () => {
      const input = findByTestAttribute(sut, 'input-box');
      const button = findByTestAttribute(sut, 'submit-button');
      expect(input.exists()).toBe(false);
      expect(button.exists()).toBe(false);
    });
  });

  describe('success is false', () => {
    let sut;
    beforeEach(() => {
      const props = { ...defaultProps, success: false };
      sut = makeSut(props).sut;
    });

    test('should render withour error', () => {
      const appComponent = findByTestAttribute(sut, 'component-input');
      expect(appComponent.length).toBe(1);
    });

    test('should render input and button', () => {
      const input = findByTestAttribute(sut, 'input-box');
      const button = findByTestAttribute(sut, 'submit-button');
      expect(input.exists()).toBe(true);
      expect(button.exists()).toBe(true);
    });
  });

  test('should not throw warning with expected props', () => {
    const props = { ...defaultProps };
    checkProps(Input, props);
  });

  describe('state control', () => {
    let sut;

    beforeEach(() => {
      jest.clearAllMocks();
      sut = makeSut().sut;
      const inputBox = findByTestAttribute(sut, 'input-box');
      const mockEvent = { target: { value: 'train' } };
      inputBox.simulate('change', mockEvent);
    });

    test('should update with value of input box change', () => {
      const expectedState = {
        currentGuess: 'train',
      };
      expect(mockSetCurrentGuess).toHaveBeenCalledWith(expectedState);
    });

    test('should update input with correct values when state change ', () => {
      const expectedState = {
        currentGuess: 'train',
      };
      expect(mockSetCurrentGuess).toHaveBeenCalledWith(expectedState);
    });

    test('should clear state when submit button is clicked', () => {
      const submitButton = findByTestAttribute(sut, 'submit-button');
      submitButton.simulate('click', { preventDefault: () => {} });
      const expectedState = {
        currentGuess: '',
      };
      expect(mockSetCurrentGuess).toHaveBeenCalledWith(expectedState);
    });
  });
});
