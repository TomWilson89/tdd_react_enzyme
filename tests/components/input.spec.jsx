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
};

const makeSut = (props = defaultProps) => {
  const sut = shallow(<Input {...props} />);

  return {
    sut,
  };
};

describe('Input component', () => {
  test('should render withour error', () => {
    const { sut } = makeSut();
    const appComponent = findByTestAttribute(sut, 'component-input');
    expect(appComponent.length).toBe(1);
  });

  test('should not throw warning with expected props', () => {
    const expectedProps = {
      secretWord: 'party',
    };
    checkProps(Input, expectedProps);
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
