import axios from 'axios';
import { SUCCESS_TYPES } from '../types';

export const getSecretWord = async () => {
  const { data } = await axios.get('http://localhost:3030');
  return data;
};

export const correctGuess = () => {
  return {
    type: SUCCESS_TYPES.SUCCESS,
  };
};
