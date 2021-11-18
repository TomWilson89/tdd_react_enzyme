import React, { useEffect } from 'react';
import { GuessedWords, Input } from '.';
import { getSecretWord } from '../actions';
import { GUESS_WORDS } from '../constants/types';
import '../styles/global.css';
import Congrats from './congrats';

const initialState = {
  success: false,
  secretWord: null,
  guessedWords: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESS_WORDS.SET_SECRET_WORD: {
      return {
        ...state,
        secretWord: action.payload,
      };
    }

    default:
      throw new Error(`Action type: ${action.type} not supported`);
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = (secretWord) => [
    dispatch({ type: GUESS_WORDS.SET_SECRET_WORD, payload: secretWord }),
  ];

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div data-testid="component-spinner" className="container">
        <div role="status" className="spinner-border">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container" data-testid="component-app">
      <h1>Jotto</h1>
      <Input secretWord={state.secretWord} success={state.success} />
      <Congrats success={state.success} />
      <GuessedWords guessedWords={state.guessedWords} />
    </div>
  );
};

export default App;
