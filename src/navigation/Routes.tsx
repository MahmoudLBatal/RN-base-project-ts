import {
  NavigationContainerRefWithCurrent,
  StackActions,
} from '@react-navigation/native';
import {ScreenParams, Screens} from './types';
import React from 'react';

export const navigationRef =
  React.createRef<NavigationContainerRefWithCurrent<ScreenParams>>();

export const navigate = <T extends `${Screens}`>(
  screenName: T,
  screenParams: ScreenParams[T],
) => {
  navigationRef.current?.navigate(
    screenName as T | String | any,
    screenParams as ScreenParams[T],
  );
};

export const goBack = () => navigationRef.current?.goBack();

export const goPopBack = (num?: number) => {
  navigationRef.current?.dispatch(StackActions.pop(num));
};
export const goPopTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

export const goHome = (params?: ScreenParams['Home']) =>
  navigate('Home', params);
export const goProfile = (params?: ScreenParams['Profile']) =>
  navigate('Profile', params);
