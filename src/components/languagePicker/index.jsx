import PropTypes from 'prop-types';
import React from 'react';

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: 'en', symbol: '🇺🇸' },
    { code: 'emoji', symbol: '😊' },
  ];

  return (
    <div data-testid="component-languge-picker">
      {languages.map((language) => (
        <button
          type="button"
          data-testid="language-icon"
          key={language.code}
          onClick={() => setLanguage(language.code)}
        >
          {language.symbol}
        </button>
      ))}
    </div>
  );
};

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};

export default LanguagePicker;
