import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
const backgroundImage = require('../../../assets/images/login_bg.jpg');
const backgroundLogo = require('../../../assets/images/logo_light.png');
import BackgroundScreenWrapper from '@/src/components/BackgroundScreenWrapper';
import SerenifyText from '@/src/components/SerenifyText';
import SerenifyTextInput from '@/src/components/SerenifyTextInput';
import SerenifyButton from '@/src/components/SerenifyButton';
import { NavigationProp } from '@react-navigation/native';
import useAuthentication from '@/src/hooks/useAuthentication';

interface LoginScreenProps {
    navigation: NavigationProp<any>;
}

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const { login } = useAuthentication();
  const[credentials, setCredentials]=React.useState({
      email: '',
      password: '',
  })

  // console.log('credentials', credentials);

  const handleLogin = async () => {
    Alert.alert("Trying to login...");
    try {
      await login(credentials.email, credentials.password);
      Alert.alert("Login successful");
      // Navigate to the next screen after successful login
      navigation.navigate('Home'); // Replace 'Home' with your target screen
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  
  return (
      <BackgroundScreenWrapper image={backgroundImage}>
        <View style={styles.container}>
          <View style={styles.inputsWrapper}>
            <Image source={backgroundLogo} style={styles.logo} />
            <SerenifyText heading bold>Serenify</SerenifyText>
            <SerenifyText>find a moment of Peace</SerenifyText>
            <View style={styles.inputWrapper}>
              <SerenifyTextInput
                placeholder="Email"
                value='Obedansah83@gmail.com'
                onChangeText={(text) =>
                  setCredentials((prevState) => ({
                    ...prevState,
                    email: text.trim(),
                  }))
                }
              />
              <SerenifyTextInput
                placeholder="Password"
                secureTextEntry
                value='yawsampong1010'
                onChangeText={(text) =>
                  setCredentials((prevState) => ({
                    ...prevState,
                    password: text,
                  }))
                }
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <SerenifyButton onPress={handleLogin}>Login</SerenifyButton>
            </View>
            <View style={{ marginTop: 15 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
              >
                <SerenifyText>Don't have an account? Signup</SerenifyText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BackgroundScreenWrapper>
    );
  };


export default LoginScreen;

const styles = StyleSheet.create({
    container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      textTitle: {
          fontSize: 24,
          color: '#fff',
          fontWeight:'bold'
      },
      inputsWrapper:{
          width: '100%',
          justifyContent: 'center',
          alignItems:'center',
          marginBottom: 50,
      },
      logo:{
          width: 100,
          height: 100,
          marginBottom:10
      },
       inputWrapper:{
          marginTop:15,
         
       }
  
  
  });