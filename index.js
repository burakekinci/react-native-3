/**
 * @format
 */

import 'react-native-safe-area-context';
import {AppRegistry} from 'react-native';
import Router  from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>Router);
