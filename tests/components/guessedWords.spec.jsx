import { shallow } from 'enzyme';
import React from 'react';
import { GuessedWords } from '../../src/components';
import { findByTestAttribute } from '../utils';

const makeSut = () => {
  const sut = shallow(<GuessedWords />);
  return {
    sut,
  };
};

describe('GuessedWords', () => {
  test('should render without any errors', () => {
    const { sut } = makeSut();
    const appComponent = findByTestAttribute(sut, 'component-guessed-words');
    expect(appComponent.length).toBe(1);
  });
});
