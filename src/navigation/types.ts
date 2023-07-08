import {NavigationProp} from '@react-navigation/native';

export enum Screens {
  Home = 'Home',
  Profile = 'Profile',
}
export type ScreenParams = {
  Home: undefined;
  Profile: undefined;
};

export type NavigationType = NavigationProp<ScreenParams>;
