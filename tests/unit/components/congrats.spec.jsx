import { mount } from 'enzyme';
import React from 'react';
import { Congrats } from '../../../src/components';
import languageContext from '../../../src/context/language';
import { checkProps, findByTestAttribute } from '../../utils';

const defaultProps = { success: false };
const defaultContext = {
  language: 'en',
};

const makeSut = ({ props = defaultProps, context = defaultContext } = {}) => {
  const sut = mount(
    <languageContext.Provider value={context}>
      <Congrats {...props} />
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

  test('should not render success text when success props is false', () => {
    const { sut } = makeSut();
    const successText = findByTestAttribute(sut, 'success-text');
    expect(successText.exists()).toBe(false);
  });

  test('should render success text when success props is true', () => {
    const { sut } = makeSut({ props: { success: true } });
    const successText = findByTestAttribute(sut, 'success-text');
    expect(successText.exists()).toBe(true);
    expect(successText.text()).toBe('Congratulations! You guessed the word!');
  });

  test('should not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
  });
});

describe('LanguagePicker', () => {
  test('should render congrats in english', () => {
    const { sut } = makeSut({ context: { language: 'en' }, props: { success: true } });
    const congrats = findByTestAttribute(sut, 'success-text');
    expect(congrats.text()).toBe('Congratulations! You guessed the word!');
  });

  test('should render congrats in emoji', () => {});
});
