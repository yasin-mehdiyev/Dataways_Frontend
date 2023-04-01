import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import React-Router-Dom
import { BrowserRouter as Router } from 'react-router-dom';

// React-Intl
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Redux
import { store } from './store/root/store';
import { Provider } from 'react-redux';

// Helpers
import { defaultLanguage } from './helpers/constants';

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['az', 'en', 'ru'],
    fallbackLng: defaultLanguage,
    lng: defaultLanguage,
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/{{lng}}.json',
    },
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);
