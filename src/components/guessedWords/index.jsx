/* eslint-disable react/no-array-index-key */
import React from 'react';
import guessedWordsContext from '../../context/guessWord';
import languageContext from '../../context/language';
import stringModule from '../../helpers/string';

const GuessedWords = () => {
  const { language } = React.useContext(languageContext);
  const [guessedWords] = guessedWordsContext.useGuessWords();

  return (
    <div data-testid="component-guessed-words">
      {guessedWords.length ? (
        <div data-testid="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>{stringModule.getStringByLanguage(language, 'guessedWords')}</th>
                <th>{stringModule.getStringByLanguage(language, 'matchingLettersColumnHeader')}</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, index) => {
                return (
                  <tr data-testid="guessed-word" key={index}>
                    <td>{index + 1}</td>
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <span data-testid="no-guessed-words-message">
          {stringModule.getStringByLanguage(language, 'guessPrompt')}
        </span>
      )}
    </div>
  );
};

export default GuessedWords;
