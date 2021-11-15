import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line no-unused-vars
const Input = ({ secretWord }) => {
  return <div data-testid="component-input" />;
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
export default Input;
