import guessWord from '../../../src/reducers/guessWord';
import { GUESS_WORD } from '../../../src/types';

describe('guessWordsReducer', () => {
  describe('Success case', () => {
    const initialState = {
      success: false,
      guessedWords: [],
      secretWord: 'party',
    };

    test('should return previous state if unkown type is provided', () => {
      const oldState = guessWord(initialState, {});

      const newState = guessWord(initialState, { type: 'UNKNOWN' });
      expect(newState).toEqual(oldState);
    });

    test('should return true if SUCCESS type is provided', () => {
      const newState = guessWord(initialState, { type: GUESS_WORD.SUCCESS });
      expect(newState).toEqual({ ...initialState, success: true });
    });
  });
});
