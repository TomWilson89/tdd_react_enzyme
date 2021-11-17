/* eslint-disable no-unused-vars */
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../../../src/components/App';
import { findByTestAttribute, storeFactory } from '../../utils';

jest.mock('../../../src/actions');

const defaultState = {
  guessWords: {
    success: false,
    guessedWords: [],
    secretWord: 'party',
  },
};

const makeSut = (state = defaultState) => {
  const store = storeFactory(state);
  const sut = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputBox = findByTestAttribute(sut, 'input-box');
  const mockEvent = { target: { value: 'test' } };
  inputBox.simulate('change', mockEvent);
  const submitButton = findByTestAttribute(sut, 'submit-button');
  submitButton.simulate('click', { preventDefault: () => {} });

  return { sut };
};

describe('Main App Component ', () => {
  describe('no words have been guessed', () => {
    let sut;

    beforeEach(() => {
      sut = makeSut().sut;
    });

    test('should create GuessedWords table with one row', () => {
      const guessedWords = findByTestAttribute(sut, 'guessed-word');
      expect(guessedWords).toHaveLength(1);
    });
  });

  describe('some words have been guessed', () => {
    let sut;

    beforeEach(() => {
      const state = {
        guessWords: {
          secretWord: 'party',
          success: false,
          guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
        },
      };
      sut = makeSut(state).sut;
    });

    test('should add new row to guessed words table', () => {
      const guessedWords = findByTestAttribute(sut, 'guessed-word');
      expect(guessedWords).toHaveLength(2);
    });
  });

  describe('guessed secret word', () => {
    let sut;

    beforeEach(() => {
      const state = {
        guessWords: {
          secretWord: 'party',
          success: false,
          guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
        },
      };

      sut = makeSut(state).sut;
      const inputBox = findByTestAttribute(sut, 'input-box');
      const mockEvent = { target: { value: 'party' } };
      inputBox.simulate('change', mockEvent);
      const submitButton = findByTestAttribute(sut, 'submit-button');
      submitButton.simulate('click', { preventDefault: () => {} });
    });

    test('should add a new row to the guessed words table', () => {
      const guessedWords = findByTestAttribute(sut, 'guessed-word');
      expect(guessedWords).toHaveLength(3);
    });

    test('should display congrats component', () => {
      const congrats = findByTestAttribute(sut, 'component-congrats');
      expect(congrats.text().length).toBeGreaterThan(0);
    });

    test('should not display input component contents', () => {
      const inputBox = findByTestAttribute(sut, 'input-box');
      expect(inputBox.length).toBe(0);

      const submitButton = findByTestAttribute(sut, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });
});
