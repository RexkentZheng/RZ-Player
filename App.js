/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import Home from './components/index.jsx';
import Details from './components/details/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'mobx-react';
import GlobleStore from './stores/globle';

const MainStack = createStackNavigator();

const App = () => {
  return (
    <Provider store={GlobleStore}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Home">
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Details"
            component={Details}
            options={{headerShown: false}}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
