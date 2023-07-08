/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {enableFreeze, enableScreens} from 'react-native-screens';

enableScreens();
enableFreeze();
AppRegistry.registerComponent(appName, () => App);
