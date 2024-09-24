import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '@/src/screens/homescreen/Homescreen';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <> 
      <StatusBar style="light" />
      <Navigator>
        <Screen options={STANDARD_NAVIGATION_OPTIONS} name="Home" component={HomeScreen} />
       
      </Navigator>

   </>    
  );
};

export default AuthStack;


