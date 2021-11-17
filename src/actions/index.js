import axios from 'axios';
import { GUESS_WORD } from '../types';

export const getSecretWord = async () => {
  const { data } = await axios.get('http://localhost:3030');
  return data;
};

// eslint-disable-next-line no-unused-vars
export const guessWord = (guessedWord) => (dispatch) => {
  dispatch({
    type: GUESS_WORD.GUESS,
    payload: guessedWord,
  });
};
