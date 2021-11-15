import { shallow } from 'enzyme';
import React from 'react';
import { Input } from '../../src/components';
import { findByTestAttribute } from '../utils';

const makeSut = () => {
  const sut = shallow(<Input />);

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
});
