import successReducer from '../../../src/reducers/guessWord';
import { GUESS_WORD } from '../../../src/types';

describe('guessWordsReducer', () => {
  describe('Success case', () => {
    const initialState = {
      success: false,
    };
    test('should return false if previous state is undefined', () => {
      const newState = successReducer(undefined, {});
      expect(newState).toEqual(initialState);
    });

    test('should return previous state if unkown type is provided', () => {
      const oldState = successReducer(undefined, {});

      const newState = successReducer({ success: false }, { type: 'UNKNOWN' });
      expect(newState).toEqual(oldState);
    });

    test('should return true if SUCCESS type is provided', () => {
      const newState = successReducer(true, { type: GUESS_WORD.SUCCESS });
      expect(newState).toEqual({ success: true });
    });
  });
});
