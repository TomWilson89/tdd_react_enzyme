import { guessWord } from '../../../src/actions';
import { storeFactory } from '../../utils';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { guessWords: { secretWord, guessedWords: [], success: false } };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('should update state correctly for unsuccessfull guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const expectedState = {
        ...initialState.guessWords,
        success: false,
        guessedWords: [{ guessedWord: unsuccessfulGuess, letterMatchCount: 3 }],
      };
      const { guessWords } = store.getState();

      expect(guessWords).toEqual(expectedState);
    });

    test('should update state correctly for successfull guess', () => {
      store.dispatch(guessWord(secretWord));
      const expectedState = {
        ...initialState.guessWords,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };
      const { guessWords } = store.getState();

      expect(guessWords).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessWords: { secretWord, guessedWords, success: false } };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('should update state correctly for unsuccessfull guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const expectedState = {
        ...initialState.guessWords,
        success: false,
        guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }],
      };
      const { guessWords } = store.getState();

      expect(guessWords).toEqual(expectedState);
    });

    test('should update state correctly for successfull guess', () => {
      store.dispatch(guessWord(secretWord));
      const expectedState = {
        ...initialState.guessWords,
        success: true,
        guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }],
      };

      const { guessWords } = store.getState();

      expect(guessWords).toEqual(expectedState);
    });
  });
});
