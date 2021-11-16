import React from 'react';
import { GuessedWords } from '.';
import '../styles/global.css';
import Congrats from './congrats';

const App = () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];
  return (
    <div className="container" data-testid="component-app">
      <h1>Jotto</h1>
      <Congrats success />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};

export default App;
