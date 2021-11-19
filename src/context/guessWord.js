import React from 'react';

const guessWordsContext = React.createContext();

const useGuessWords = () => {
  const context = React.useContext(guessWordsContext);
  if (!context) {
    throw new Error('useGuessWords must be used within a GuessWordsProvider');
  }
  return context;
};

const GuessWordsProvider = (props) => {
  const [guessedWords, setGuessedWords] = React.useState([]);
  const value = React.useMemo(() => [guessedWords, setGuessedWords], [guessedWords]);
  return <guessWordsContext.Provider value={value} {...props} />;
};

export default {
  GuessWordsProvider,
  useGuessWords,
};
