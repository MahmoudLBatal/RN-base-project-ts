import React, {useEffect} from 'react';
import {
  I18nManager,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {setNetwork} from 'store';
import {useAppDispatch, useAppSelector} from 'hooks';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './AppStack';
import {darkTheme, lightTheme} from '../common/Colors';
import moment from 'moment';
import 'moment/locale/ar';
import {Toaster} from 'components';
import {navigationRef} from './Routes';

const RootAppNavigator = () => {
  const netInfo = useNetInfo();
  const {colorMode} = useAppSelector(state => state.general);
  const scheme = useColorScheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    moment.updateLocale(I18nManager.isRTL ? 'ar' : 'en', {});
  }, [I18nManager.isRTL]);

  useEffect(() => {
    netInfo.isInternetReachable != null &&
      dispatch(setNetwork(netInfo.isInternetReachable));
  }, [netInfo.isInternetReachable]);

  let isDark = colorMode ? colorMode == 'dark' : scheme === 'dark',
    currentTheme = isDark ? darkTheme : lightTheme;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: currentTheme.appBg}}>
      <StatusBar
        animated={true}
        backgroundColor={currentTheme.white}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />

      <NavigationContainer ref={navigationRef} theme={currentTheme}>
        <AppNavigator />
        <Toaster />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootAppNavigator;
