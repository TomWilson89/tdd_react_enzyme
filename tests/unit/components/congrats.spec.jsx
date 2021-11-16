import { shallow } from 'enzyme';
import React from 'react';
import { Congrats } from '../../../src/components';
import { checkProps, findByTestAttribute } from '../../utils';

const defaultProps = { success: false };

const makeSut = (props = defaultProps) => {
  const sut = shallow(<Congrats {...props} />);
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
    const { sut } = makeSut({ success: true });
    const successText = findByTestAttribute(sut, 'success-text');
    expect(successText.exists()).toBe(true);
    expect(successText.text()).toBe('Congrats!');
  });

  test('should not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
  });
});
