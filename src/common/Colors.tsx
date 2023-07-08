import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const COLORS = {
  main: '#FF5D5D',
  primary: '#04ddc5',
  mainLight: 'rgba(255, 93, 93, 0.05)',
  black: '#000000',
  blackNoDark: '#000000',
  blackLight: '#555',
  white: '#FFF',
  whiteNoDark: '#FFF',
  smoothWhite: '#FBFAF5',
  appBg: '#FFF',
  gray: '#eee',
  grayLight: '#f7f7f7',
  grayDark: '#b0b0b5',
  borderLine: '#eee',
  inputBlack: '#000',
  placeholder: '#eee',
  bgOpacity: 'rgba(0, 0, 0, 0.35)',
  blood: 'red',
  star: '#FFC300',
  black2: '#161615',
  inputBorder: '#bbbfcb',
  inputPlaceholder: '#6c7b8a',
  // Status colors
  inReview: '#65c4d5',
  brightTeal: '#00e8c5',
  sunYellow: '#ffcb2b',
  error: '#DA0037',
  blueBadge: '#18a2f2',
  instagram: '#d62977',
  twitter: '#1e9cea',
  whatsapp: '#22cd62',
  smoothBlue: '#336ee1',
  shimmerHighLight: '#F2F8FC',
  shimmerBackground: '#E1E9EE',
  bluishGray: '#FDFDFE',
  yellow: '#fff7e3',
  whitebluishGray: '#FFF',
};

export const lightTheme = {
  ...DefaultTheme,
  ...COLORS,
};

export const darkTheme = {
  ...DarkTheme,
  main: '#db3b3b',
  primary: '#04ddc5',
  mainLight: '#1c0f0f',
  black: '#FFF',
  blackNoDark: '#000000',
  blackLight: '#bdbdbd',
  white: '#000',
  whiteNoDark: '#FFF',
  smoothWhite: '#141414',
  appBg: '#000',
  gray: '#919090',
  borderLine: '#545457',
  grayLight: '#0f0f0f',
  grayDark: '#7e7e80',
  inputBlack: '#FFFFFF',
  placeholder: '#1c1c1c',
  bgOpacity: 'rgba(255, 255, 255, 0.35)',
  blood: '#870303',
  star: '#FFC300',
  black2: '#8a8a81',
  inputBorder: '#575b66',
  inputPlaceholder: '#3a424a',
  // Status colors
  inReview: '#376e78',
  brightTeal: '#027362',
  sunYellow: '#94771e',
  error: '#DA0037',
  blueBadge: '#18a2f2',
  instagram: '#d62977',
  twitter: '#1e9cea',
  whatsapp: '#22cd62',
  smoothBlue: '#336ee1',
  shimmerHighLight: '#919090',
  shimmerBackground: '#21262e',
  bluishGray: '#21262e',
  yellow: '#fff7e3',
  whitebluishGray: '#21262e',
};

export interface ColorsInterface {
  // Default Colors of react navigation
  colors: {
    background: string;
    border: string;
    card: string;
    notification: string;
    primary: string;
    text: string;
  };
  dark: false;
  // Theme new Colors Names
  main: string;
  primary: string;
  mainLight: string;
  black: string;
  blackNoDark: string;
  blackLight: string;
  white: string;
  whiteNoDark: string;
  smoothWhite: string;
  appBg: string;
  gray: string;
  grayLight: string;
  grayDark: string;
  inputBlack: string;
  placeholder: string;
  bgOpacity: string;
  blood: string;
  star: string;
  black2: string;
  inputBorder: string;
  inputPlaceholder: string;
  // Status colors
  inReview: string;
  brightTeal: string;
  sunYellow: string;
  error: string;
  blueBadge: string;
  instagram: string;
  twitter: string;
  whatsapp: string;
  smoothBlue: string;
  shimmerHighLight: string;
  shimmerBackground: string;
  borderLine: string;
  bluishGray: string;
  yellow: string;
  whitebluishGray: string;
}

export type ColorType =
  | 'main'
  | 'primary'
  | 'mainLight'
  | 'black'
  | 'blackNoDark'
  | 'blackLight'
  | 'white'
  | 'whiteNoDark'
  | 'smoothWhite'
  | 'appBg'
  | 'gray'
  | 'borderLine'
  | 'grayLight'
  | 'grayDark'
  | 'inputBlack'
  | 'placeholder'
  | 'bgOpacity'
  | 'blood'
  | 'star'
  | 'black2'
  | 'inputBorder'
  | 'inputPlaceholder'
  | 'inReview'
  | 'brightTeal'
  | 'sunYellow'
  | 'error'
  | 'blueBadge'
  | 'instagram'
  | 'twitter'
  | 'whatsapp'
  | 'smoothBlue'
  | 'shimmerHighLight'
  | 'shimmerBackground'
  | 'bluishGray'
  | 'yellow'
  | 'whitebluishGray';
