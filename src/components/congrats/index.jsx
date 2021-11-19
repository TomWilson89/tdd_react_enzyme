import React, { useContext } from 'react';
import languageContext from '../../context/language';
import successContext from '../../context/success';
import stringModule from '../../helpers/string';

const Congrats = () => {
  const { language } = useContext(languageContext);
  const [success] = successContext.useSuccess();

  return (
    <div data-testid="component-congrats" className="mt-3 mb-3">
      {success && (
        <span className="alert alert-success " data-testid="success-text">
          {stringModule.getStringByLanguage(language, 'congrats')}
        </span>
      )}
    </div>
  );
};

export default Congrats;
