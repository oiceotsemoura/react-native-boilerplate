import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import ptBR from './pt-br.json';
import en from './en.json';
import es from './es.json';

const resources = {
  'pt-BR': { translation: ptBR },
  en: { translation: en },
  es: { translation: es },
};

const languageDetector = {
  type: 'languageDetector' as const,
  async: true,
  detect: (callback: (lang: string) => void) => {
    const locales = RNLocalize.getLocales();
    const bestLanguage = locales[0]?.languageTag || 'en';
    callback(bestLanguage);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
