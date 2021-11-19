import { mount } from 'enzyme';
import React from 'react';
import { Congrats } from '../../../src/components';
import languageContext from '../../../src/context/language';
import successContext from '../../../src/context/success';
import { findByTestAttribute } from '../../utils';

const defaultSuccess = false;
const defaultContext = {
  language: 'en',
};

const makeSut = ({ context = defaultContext, successContextValue = defaultSuccess } = {}) => {
  const sut = mount(
    <languageContext.Provider value={context}>
      <successContext.SuccessProvider value={[successContextValue, jest.fn()]}>
        <Congrats />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  );
  return { sut };
};

describe('Congrats component', () => {
  test('should render without error', () => {
    const { sut } = makeSut();
    const component = findByTestAttribute(sut, 'component-congrats');
    expect(component.length).toBe(1);
  });

  test('should not render success text when success  is false', () => {
    const { sut } = makeSut();
    const successText = findByTestAttribute(sut, 'success-text');
    expect(successText.exists()).toBe(false);
  });

  test('should render success text when success  is true', () => {
    const { sut } = makeSut({ successContextValue: true });
    const successText = findByTestAttribute(sut, 'success-text');
    expect(successText.exists()).toBe(true);
    expect(successText.text()).toBe('Congratulations! You guessed the word!');
  });
});

describe('LanguagePicker', () => {
  test('should render congrats in english', () => {
    const { sut } = makeSut({
      context: { language: 'en' },
      successContextValue: true,
    });
    const congrats = findByTestAttribute(sut, 'success-text');
    expect(congrats.text()).toBe('Congratulations! You guessed the word!');
  });

  test('should render congrats in emoji', () => {
    const { sut } = makeSut({ context: { language: 'emoji' }, successContextValue: true });
    const congrats = findByTestAttribute(sut, 'success-text');
    expect(congrats.text()).toBe('🎯🎉');
  });
});
