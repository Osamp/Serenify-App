import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Navigator>
      <Screen options={STANDARD_NAVIGATION_OPTIONS} name="Signup" component={SignupScreen} />
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  container: {}
});
