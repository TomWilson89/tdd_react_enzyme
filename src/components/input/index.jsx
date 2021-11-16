import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line no-unused-vars
const Input = ({ secretWord }) => {
  const [state, setState] = React.useState({
    currentGuess: '',
  });

  const handleChange = (e) => {
    setState({
      currentGuess: e.target.value,
    });
  };
  return (
    <div data-testid="component-input">
      <form className="form-inline">
        <input
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          data-testid="input-box"
          value={state.currentGuess}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary mb-2" data-testid="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
export default Input;
