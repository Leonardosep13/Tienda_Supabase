import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import DASHBOARD from "./Dashboard"

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LOGIN" component={LOGIN}  options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={DASHBOARD}  options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}