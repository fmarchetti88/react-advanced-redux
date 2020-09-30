import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsIt from './it.json';
import translationsEn from './en.json';

const translations = {
  it: { translation: translationsIt },
  en: { translation: translationsEn }
};

i18n.use(initReactI18next).init({
  lng: 'it',
  fallbackLng: 'en',
  debug: true,
  resources: translations
});

export default i18n;
