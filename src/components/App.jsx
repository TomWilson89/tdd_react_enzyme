import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GuessedWords, Input } from '.';
import { getSecretWord } from '../actions';
import '../styles/global.css';
import Congrats from './congrats';

const App = () => {
  const { guessWords } = useSelector((state) => state);

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className="container" data-testid="component-app">
      <h1>Jotto</h1>
      <Input secretWord={guessWords.secretWord} />
      <Congrats success={guessWords.success} />
      <GuessedWords guessedWords={guessWords.guessedWords} />
    </div>
  );
};

export default App;
