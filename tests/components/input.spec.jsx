import { shallow } from 'enzyme';
import React from 'react';
import { Input } from '../../src/components';
import { checkProps, findByTestAttribute } from '../utils';

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
});
