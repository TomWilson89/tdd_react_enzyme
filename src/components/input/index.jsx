/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import languageContext from '../../context/language';
import successContext from '../../context/success';
import stringModule from '../../helpers/string';

const Input = ({ secretWord }) => {
  const [state, setState] = useState({
    currentGuess: '',
  });

  const { language } = useContext(languageContext);
  const [success] = successContext.useSuccess();

  const handleChange = (e) => {
    setState({
      currentGuess: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setState({
      currentGuess: '',
    });
  };

  if (success) {
    return <div data-testid="component-input" />;
  }

  return (
    <div data-testid="component-input">
      <form className="form-inline">
        <input
          className="mb-2 sm-3"
          type="text"
          placeholder={stringModule.getStringByLanguage(language, 'guessInputPlaceholder')}
          data-testid="input-box"
          value={state.currentGuess}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-primary mb-2"
          data-testid="submit-button"
          onClick={handleClick}
        >
          {stringModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
export default Input;
