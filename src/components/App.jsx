import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { GuessedWords, Input } from '.';
import { getSecretWord } from '../actions';
import store from '../store';
import '../styles/global.css';
import Congrats from './congrats';

const App = () => {
  const guessedWords = [];

  const success = false;
  const secretWord = 'party';

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <Provider store={store}>
      <div className="container" data-testid="component-app">
        <h1>Jotto</h1>
        <Input secretWord={secretWord} />
        <Congrats success={success} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    </Provider>
  );
};

export default App;
