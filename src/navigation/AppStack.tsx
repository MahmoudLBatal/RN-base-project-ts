import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {Easing} from 'react-native-reanimated';
import {Home} from 'screens/Home';
import {Profile} from 'screens/Profile';

const Stack = createNativeStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 100,
    easing: Easing.linear,
  },
};
const option = {
  transitionSpec: {
    open: config,
    close: config,
  },
};

export const AppNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: 'horizontal',
          headerShown: false,
          ...(option as any),
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </View>
  );
};
