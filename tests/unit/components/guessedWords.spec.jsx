/* eslint-disable react/jsx-no-constructed-context-values */
import { mount } from 'enzyme';
import React from 'react';
import { GuessedWords } from '../../../src/components';
import guessedWordsContext from '../../../src/context/guessWord';
import languageContext from '../../../src/context/language';
import { findByTestAttribute } from '../../utils';

const defaultGuessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];

const makeSut = ({ guessWordsContextValue = defaultGuessedWords } = {}) => {
  const mockUseGuessedWords = jest.fn().mockReturnValue([guessWordsContextValue, jest.fn()]);
  guessedWordsContext.useGuessWords = mockUseGuessedWords;

  const sut = mount(
    <languageContext.Provider value={{ language: 'en' }}>
      <GuessedWords />
    </languageContext.Provider>
  );
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

  describe('Without words guessed', () => {
    test('should render component without guessed words', () => {
      const { sut } = makeSut({ guessWordsContextValue: [] });
      const guessedWordsComponent = findByTestAttribute(sut, 'guessed-words');
      expect(guessedWordsComponent.length).toBe(0);
    });

    test('should render no guessed words message', () => {
      const { sut } = makeSut({ guessWordsContextValue: [] });
      const guessedWordsMessage = findByTestAttribute(sut, 'no-guessed-words-message');
      expect(guessedWordsMessage.length).toBe(1);
      expect(guessedWordsMessage.text()).toBe('Try to guess the secret word!');
    });
  });

  describe('With word guessed', () => {
    let guessedWordsProps;

    beforeEach(() => {
      guessedWordsProps = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
      ];
    });
    test('should render component with guessed words', () => {
      const { sut } = makeSut();
      const guessedWordsNode = findByTestAttribute(sut, 'guessed-words');
      expect(guessedWordsNode.length).toBe(1);
    });

    test('should render guessed words', () => {
      const { sut } = makeSut({ guessWordsContextValue: guessedWordsProps });
      const guessedWordsNodes = findByTestAttribute(sut, 'guessed-word');
      expect(guessedWordsNodes.length).toBe(3);
    });
  });
});

describe('LanguagePicker', () => {
  test('should render guess instruction in english', () => {
    const { sut } = makeSut({ guessWordsContextValue: [] });
    const guessInstruction = findByTestAttribute(sut, 'no-guessed-words-message');
    expect(guessInstruction.text()).toBe('Try to guess the secret word!');
  });

  test('should render guess instruction in emoji', () => {
    const mockUseContext = jest.fn().mockReturnValue({ language: 'emoji' });
    jest.spyOn(React, 'useContext').mockImplementation(mockUseContext);

    const { sut } = makeSut({ guessWordsContextValue: [] });
    const guessInstruction = findByTestAttribute(sut, 'no-guessed-words-message');
    expect(guessInstruction.text()).toBe('🤔🤫🔤');
  });
});
