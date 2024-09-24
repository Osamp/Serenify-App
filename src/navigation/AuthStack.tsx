import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '@/src/screens/auth/SignupScreen';
import LoginScreen from '@/src/screens/auth/LoginScreen';
import HomeScreen from '@/src/screens/homescreen/Homescreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // If you want to hide the header
      />
    </Stack.Navigator>
  );
};

export default AuthStack;