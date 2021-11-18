import { shallow } from 'enzyme';
import React from 'react';
import { GuessedWords } from '../../../src/components';
import { checkProps, findByTestAttribute } from '../../utils';

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

  test('should not throw warning with expected props', () => {
    const expectedProps = {
      guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
    };
    checkProps(GuessedWords, expectedProps);
  });
  describe('Without words guessed', () => {
    test('should render component without guessed words', () => {
      const { sut } = makeSut({ guessedWords: [] });
      const guessedWordsComponent = findByTestAttribute(sut, 'guessed-words');
      expect(guessedWordsComponent.length).toBe(0);
    });

    test('should render no guessed words message', () => {
      const { sut } = makeSut({ guessedWords: [] });
      const guessedWordsMessage = findByTestAttribute(sut, 'no-guessed-words-message');
      expect(guessedWordsMessage.length).toBe(1);
      expect(guessedWordsMessage.text()).toBe('Try to guess the secret word!');
    });
  });

  describe('With word guessed', () => {
    let guessedWordsProps;

    beforeEach(() => {
      guessedWordsProps = {
        guessedWords: [
          { guessedWord: 'train', letterMatchCount: 3 },
          { guessedWord: 'agile', letterMatchCount: 1 },
          { guessedWord: 'party', letterMatchCount: 5 },
        ],
      };
    });
    test('should render component with guessed words', () => {
      const { sut } = makeSut();
      const guessedWordsNode = findByTestAttribute(sut, 'guessed-words');
      expect(guessedWordsNode.length).toBe(1);
    });

    test('should render guessed words', () => {
      const { sut } = makeSut(guessedWordsProps);
      const guessedWordsNodes = findByTestAttribute(sut, 'guessed-word');
      expect(guessedWordsNodes.length).toBe(3);
    });
  });
});

describe('LanguagePicker', () => {
  test('should render guess instruction in english', () => {
    const { sut } = makeSut({ guessedWords: [] });
    const guessInstruction = findByTestAttribute(sut, 'no-guessed-words-message');
    expect(guessInstruction.text()).toBe('Try to guess the secret word!');
  });

  test('should render guess instruction in emoji', () => {
    const mockUseContext = jest.fn().mockReturnValue({ language: 'emoji' });
    jest.spyOn(React, 'useContext').mockImplementation(mockUseContext);

    const { sut } = makeSut({ guessedWords: [] });
    const guessInstruction = findByTestAttribute(sut, 'no-guessed-words-message');
    expect(guessInstruction.text()).toBe('🤔🤫🔤');
  });
});
