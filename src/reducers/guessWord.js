import { getLetterMatchCount } from '../helpers';
import { GUESS_WORD } from '../types/index';

const initialState = {
  success: false,
  guessedWords: [],
  secretWord: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GUESS_WORD.SET_SECRET_GUESS: {
      return {
        ...state,
        secretWord: action.payload,
      };
    }
    case GUESS_WORD.SUCCESS: {
      return {
        ...state,
        success: true,
      };
    }

    case GUESS_WORD.GUESS: {
      const newGuessedWords = {
        guessedWord: action.payload,
        letterMatchCount: getLetterMatchCount(action.payload, state.secretWord),
      };

      const success = state.secretWord === action.payload;

      return {
        ...state,
        guessedWords: [...state.guessedWords, newGuessedWords],
        success,
      };
    }
    default:
      return state;
  }
};
