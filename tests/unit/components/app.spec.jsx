import { shallow } from 'enzyme';
import React from 'react';
import App from '../../../src/components/App';
import { findByTestAttribute } from '../../utils';

const makeSut = () => {
  const sut = shallow(<App />);

  return { sut };
};

describe('App component', () => {
  test('should render withour any errors', () => {
    const { sut } = makeSut();
    const appComponent = findByTestAttribute(sut, 'component-app');
    expect(appComponent.length).toBe(1);
  });
});
