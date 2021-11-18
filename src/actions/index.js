import axios from 'axios';

export const getSecretWord = async (callback) => {
  const { data } = await axios.get('http://localhost:3030');
  callback(data);
};
