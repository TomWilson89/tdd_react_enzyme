import PropTypes from 'prop-types';
import React from 'react';

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-testid="component-guessed-words">
      {guessedWords.length ? (
        <div data-testid="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, index) => {
                return (
                  <tr key={word}>
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
        <span data-testid="guessed-words-intro">Guess the secret word!</span>
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
