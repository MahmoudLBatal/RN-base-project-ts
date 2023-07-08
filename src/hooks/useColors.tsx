import {useTheme} from '@react-navigation/native';
import {ColorsInterface} from '../common/Colors';

export const useColors = () => useTheme() as ColorsInterface;
export const colors = () => useTheme() as ColorsInterface;
