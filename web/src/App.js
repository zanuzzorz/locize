import React from 'react';
import { useTranslation } from 'react-i18next';
import './tools/i18n';

function App() {
  const { t } =  useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <p>{t('userName')}</p>
      </header>
    </div>
  );
}

export default App;
