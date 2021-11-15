import { shallow } from 'enzyme';
import React from 'react';
import { GuessedWords } from '../../src/components';
import { checkProps, findByTestAttribute } from '../utils';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const makeSut = (props = defaultProps) => {
  const sut = shallow(<GuessedWords {...props} />);
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

  test('should nopt throw warning with expected props', () => {
    const expectedProps = {
      guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
    };
    checkProps(GuessedWords, expectedProps);
  });
});
