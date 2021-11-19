import PropTypes from 'prop-types';
import React from 'react';
import languageContext from '../../context/language';
import stringModule from '../../helpers/string';

const GuessedWords = ({ guessedWords }) => {
  const { language } = React.useContext(languageContext);

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
                  <tr data-testid="guessed-word" key={word}>
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

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default GuessedWords;
