import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

let isPortrait = () => width < height;
export const guidelineBaseWidth = isPortrait() ? 428 : 926;

export const guidelineBaseHeight = isPortrait() ? 926 : 428;

export const widthRatio = width / guidelineBaseWidth;

export const heightRatio = height / guidelineBaseHeight;

export const scale = (size: number) =>
  isPortrait() ? widthRatio * size : heightRatio * size;

export const verticalScale = (size: number) =>
  isPortrait() ? heightRatio * size : widthRatio * size;

export const defaultModerateFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

export const moderateScale = (size: number, factor = defaultModerateFactor) =>
  size + (scale(size) - size) * factor;
