import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';
import { ptBR as pt_BR, enUS as en_US } from 'date-fns/locale';

import en from './en-US';
import pt from './pt-BR';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
};

const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

export const getLanguage = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(
    translateNormalize,
  );
  return iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'en_US');
};

const dateLanguages = { pt_BR, en_US };

// date-fns language based in your locale
export const dateLanguage = dateLanguages[getLanguage()];

getLanguage();

export default function translate(key) {
  return I18n.t(key);
}
