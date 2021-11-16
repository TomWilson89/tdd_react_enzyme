import React from 'react';
import { GuessedWords, Input } from '.';
import { getLetterMatchCount } from '../helpers';
import '../styles/global.css';
import Congrats from './congrats';

const App = () => {
  const guessedWords = [];

  const success = false;
  const secretWord = 'party';

  const handleSubmit = (values) => {
    console.log(values);
    const letterMatchCount = getLetterMatchCount(secretWord, values);
    const result = {
      guessedWord: values,
      letterMatchCount,
    };

    guessedWords.push(result);
  };
  return (
    <div className="container" data-testid="component-app">
      <h1>Jotto</h1>
      <Input secretWord={secretWord} success={success} handleSubmit={handleSubmit} />
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};

export default App;
