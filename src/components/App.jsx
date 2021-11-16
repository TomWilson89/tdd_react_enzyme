import React from 'react';
import { GuessedWords, Input } from '.';
import '../styles/global.css';
import Congrats from './congrats';

const App = () => {
  const guessedWords = [];

  const success = false;
  const secretWord = 'party';

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
