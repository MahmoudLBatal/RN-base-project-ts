import {Platform, I18nManager} from 'react-native';
import {moderateScale, scale} from './Scalling';

export const Constants = {
  baseURL: 'BASE_URL',
  phoneCode: '+20',
  app_name: 'Suplift Partners',
  twitter_account: 'suplifter',
  whatsapp_number: '+966581294006',
  instagram_account: 'suplift_partners',
};

export const fonts = {
  regular: 'LamaSans-Regular',
  medium: 'LamaSans-Medium',
  bold: 'LamaSans-Bold',
};

export const fontSize = (size: number) => {
  const FONT_SCALE = 1;
  return FONT_SCALE * moderateScale(size) || moderateScale(15);
};

export const map = {
  apiKey: 'AIzaSyDJjC1lOAS3Ez6dauyg2F3Hhn8Le9uOlDs',
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
  ksaLocation: {
    latitude: 24.25554774134379,
    latitudeDelta: 0.49077916345565953,
    longitude: 46.74909560754895,
    longitudeDelta: 0.35235006362199783,
  },
};

export const IS_IOS = Platform.OS === 'ios';
export const IS_RTL = I18nManager.isRTL;
export const LAYOUT_SPACING = scale(20);
