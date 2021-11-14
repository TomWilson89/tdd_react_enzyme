import React from 'react';

const Congrats = ({ success }) => {
  return (
    <div data-testid="component-congrats">
      {success && <span data-testid="success-text">Congrats!</span>}
    </div>
  );
};

export default Congrats;
