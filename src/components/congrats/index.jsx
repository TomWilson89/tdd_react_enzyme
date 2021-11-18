import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import languageContext from '../../context/language';
import stringModule from '../../helpers/string';

const Congrats = ({ success }) => {
  const { language } = useContext(languageContext);

  return (
    <div data-testid="component-congrats">
      {success && (
        <span className="alert alert-success" data-testid="success-text">
          {stringModule.getStringByLanguage(language, 'congrats')}
        </span>
      )}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
