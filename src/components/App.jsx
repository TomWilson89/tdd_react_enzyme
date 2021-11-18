import React, { useEffect, useState } from 'react';
import { GuessedWords, Input } from '.';
import { getSecretWord } from '../actions';
import '../styles/global.css';
import Congrats from './congrats';

const App = () => {
  const [secretWord, setSecretWord] = useState('');
  const guessedWords = [];

  const success = false;

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  return (
    <div className="container" data-testid="component-app">
      <h1>Jotto</h1>
      <Input secretWord={secretWord} success={success} />
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};

export default App;
