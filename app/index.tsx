import { Image, StyleSheet,View, Text, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from '@/src/navigation/AuthStack';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
       <StatusBar style="auto" />
    <Navigator>
      <Screen 
        options={{
           headerShown: false,
        }}
        name="AuthStack" 
        component={AuthStack}
         />
        {/* <Screen name="MainStack" component={AppStack} /> */}
      </Navigator>  
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#95d3d2',
  },
   headerText:{
    fontSize: 50,
    color: '#756c6c',
    fontWeight: 'bold',
   }
  
});
