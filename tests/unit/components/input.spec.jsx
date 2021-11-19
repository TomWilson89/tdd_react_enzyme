/* eslint-disable no-console */
import { mount } from 'enzyme';
import React from 'react';
import { Input } from '../../../src/components';
import languageContext from '../../../src/context/language';
import successContext from '../../../src/context/success';
import { checkProps, findByTestAttribute } from '../../utils';

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

const defaultLanguageContextValue = {
  language: 'en',
};
const defaultSuccessContextValue = false;

const makeSut = ({
  props = defaultProps,
  languageContextValue = defaultLanguageContextValue,
  successContextValue = defaultSuccessContextValue,
} = {}) => {
  const sut = mount(
    <languageContext.Provider value={languageContextValue}>
      <successContext.SuccessProvider value={[successContextValue, jest.fn()]}>
        <Input {...props} />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  );

  return {
    sut,
  };
};

describe('Input component', () => {
  describe('success is true', () => {
    let sut;
    beforeEach(() => {
      sut = makeSut({ successContextValue: true }).sut;
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
      sut = makeSut({ successContextValue: false }).sut;
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

  describe('LanguagePicker', () => {
    const mockWarning = jest.fn();

    let originalConsoleWarn;
    beforeEach(() => {
      originalConsoleWarn = console.warn;
      console.warn = mockWarning;
    });

    afterEach(() => {
      console.warn = originalConsoleWarn;
    });

    test('should render place holder in english', () => {
      const { sut } = makeSut({ languageContextValue: { language: 'en' } });
      const inputBox = findByTestAttribute(sut, 'input-box');
      const placeholder = inputBox.prop('placeholder');
      expect(placeholder).toBe('enter guess');
    });

    test('should render place holder in emoji', () => {
      const { sut } = makeSut({ languageContextValue: { language: 'emoji' } });
      const inputBox = findByTestAttribute(sut, 'input-box');
      const placeholder = inputBox.prop('placeholder');
      expect(placeholder).toBe('⌨️🤔');
    });

    test('should render submit button in english', () => {
      const { sut } = makeSut({ languageContextValue: { language: 'en' } });
      const submitButton = findByTestAttribute(sut, 'submit-button');
      expect(submitButton.text()).toBe('Submit');
    });

    test('should render submit button in emoji', () => {
      const { sut } = makeSut({ languageContextValue: { language: 'emoji' } });
      const submitButton = findByTestAttribute(sut, 'submit-button');
      expect(submitButton.text()).toBe('🚀');
    });

    test('should run console warning if trying to access an inavlid language', () => {
      makeSut({ languageContextValue: { language: 'invalid' } });
      expect(mockWarning).toHaveBeenCalled();
    });
  });
});
