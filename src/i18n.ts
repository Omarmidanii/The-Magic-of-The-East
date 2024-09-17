import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { InitOptions } from 'i18next';
import translationEN from './en.json';
import translationAR from './ar.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

const i18nOptions: InitOptions = {
    resources,
    lng: 'ar',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  };
  i18n.use(initReactI18next).init(i18nOptions);
export default i18n;