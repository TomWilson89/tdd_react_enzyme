import axios from 'axios';
import { GUESS_WORD } from '../types';

export const getSecretWord = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3030');
  dispatch({ type: GUESS_WORD.SET_SECRET_GUESS, payload: data });
};

export const guessWord = (guessedWord) => (dispatch) => {
  dispatch({
    type: GUESS_WORD.GUESS,
    payload: guessedWord,
  });
};
