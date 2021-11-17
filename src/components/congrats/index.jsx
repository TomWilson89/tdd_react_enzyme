import PropTypes from 'prop-types';
import React from 'react';

const Congrats = ({ success }) => {
  return (
    <div data-testid="component-congrats">
      {success && (
        <span className="alert alert-success" data-testid="success-text">
          Congrats!
        </span>
      )}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
