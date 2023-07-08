import {I18n} from 'i18n-js';
import {I18nManager} from 'react-native';
import ar from './ar.json';
import en from './en.json';
const i18n = new I18n({
  ar,
  en,
});

i18n.enableFallback = true;
i18n.defaultLocale = I18nManager.isRTL ? 'ar' : 'en';
i18n.locale = I18nManager.isRTL ? 'ar' : 'en';

export const t = (text: string) => i18n.t(text);

export default i18n;
