import { shallow } from 'enzyme';
import React from 'react';
import LanguagePicker from '../../../src/components/languagePicker';
import { checkProps, findByTestAttribute } from '../../utils';

const mockSetLanguage = jest.fn();

const makeSut = (props = { setLanguage: mockSetLanguage }) => {
  const sut = shallow(<LanguagePicker {...props} />);

  return {
    sut,
  };
};

describe('LanguagePicker', () => {
  let sut;

  beforeEach(() => {
    sut = makeSut().sut;
  });

  test('should render without error', () => {
    const component = findByTestAttribute(sut, 'component-languge-picker');
    expect(component.exists()).toBe(true);
  });

  test('should not throw warning with expected props', () => {
    checkProps(LanguagePicker, { setLanguage: jest.fn() });
  });

  test('should non zero language icons', () => {
    const languageIcon = findByTestAttribute(sut, 'language-icon');
    expect(languageIcon.length).toBeGreaterThan(0);
  });

  test('should call setLanguage props upon click', () => {
    const languageIcon = findByTestAttribute(sut, 'language-icon');
    const firstIcon = languageIcon.first();
    firstIcon.simulate('click');
    expect(mockSetLanguage).toHaveBeenCalled();
  });
});
