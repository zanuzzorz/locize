import i18next from "i18next";
import Locize from 'i18next-locize-backend';
import { initReactI18next } from 'react-i18next';
export const DEFAULT_LANGUAGE = 'pt-BR';

i18next
  .use(Locize)
  .use(initReactI18next)
  .use({
    type: 'languageDetector',
    detect: () => navigator.language,
    init: () => {},
    cacheUserLanguage: () => {},
  })
  .init({
    debug: false,
    initImmediate: false,
    saveMissing: true,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: ['app'],
    defaultNS: 'app',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },

    backend: {
      projectId: process.env.REACT_APP_LOCIZE_PROJECT_ID,
      apiKey: process.env.REACT_APP_LOCIZE_API_KEY,
      referenceLng: DEFAULT_LANGUAGE,
      setContentTypeJSON: true,
    },
  });

export default i18next;
