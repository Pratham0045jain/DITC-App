import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';

import Estimate from './Screens/Estimate';
import TmtBarsScreen from './Screens/TmtBarsScreen';
import Login from './Screens/Login'; 
import SignUp from './Screens/SignUp.js'

import StackNavigator from './components/StackNavigator'



export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}


const SwitchNavigator = createSwitchNavigator({
  Login:{screen:Login}, 
  StackNavigator:{screen: StackNavigator}, 
  
  
})


const AppContainer = createAppContainer(SwitchNavigator);

/* in here, to use bottom bar, we need to use everything in version 5, so I am getting the erreo that react navigation in not a module....
We need to declare it first to use switch navigator...  */



