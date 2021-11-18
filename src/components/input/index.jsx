import PropTypes from 'prop-types';
import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const Input = ({ secretWord, success }) => {
  const [state, setState] = useState({
    currentGuess: '',
  });

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
          placeholder="enter guess"
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
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};
export default Input;
