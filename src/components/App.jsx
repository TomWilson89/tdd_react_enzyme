import React, { useEffect } from 'react';
import { GuessedWords, Input } from '.';
import { getSecretWord } from '../actions';
import { GUESS_WORDS, LANGUAGES } from '../constants/types';
import guessWordsContext from '../context/guessWord';
import languageContext from '../context/language';
import successContext from '../context/success';
import '../styles/global.css';
import Congrats from './congrats';
import LanguagePicker from './languagePicker';

const initialState = {
  success: false,
  secretWord: null,
  guessedWords: [],
  language: 'en',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESS_WORDS.SET_SECRET_WORD: {
      return {
        ...state,
        secretWord: action.payload,
      };
    }

    case LANGUAGES.SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }

    default:
      throw new Error(`Action type: ${action.type} not supported`);
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = (secretWord) => {
    dispatch({ type: GUESS_WORDS.SET_SECRET_WORD, payload: secretWord });
  };

  const setLanguage = (language) => {
    dispatch({ type: LANGUAGES.SET_LANGUAGE, payload: language });
  };

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  const contextState = React.useMemo(() => ({ language: state.language }), [state.language]);

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
    <languageContext.Provider value={contextState}>
      <div className="container" data-testid="component-app">
        <h1>Jotto</h1>
        <LanguagePicker setLanguage={setLanguage} />
        <guessWordsContext.GuessWordsProvider>
          <successContext.SuccessProvider>
            <Input secretWord={state.secretWord} />
            <Congrats />
          </successContext.SuccessProvider>
        </guessWordsContext.GuessWordsProvider>

        <GuessedWords />
      </div>
    </languageContext.Provider>
  );
};

export default App;
