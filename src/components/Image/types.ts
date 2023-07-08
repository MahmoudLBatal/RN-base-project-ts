import type {StyleProp, ImageStyle} from 'react-native';
import type {FastImageProps} from 'react-native-fast-image';

export interface ImageProps extends Omit<FastImageProps, 'source' | 'style'> {
  uri?: string | null;
  size?: number;
  circle?: boolean;
  style?: StyleProp<ImageStyle>;
  priority?: 'high' | 'low' | 'normal';
}
