import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
const backgroundImage = require('../../../assets/images/signup_bg.jpg');
const backgroundLogo = require('../../../assets/images/logo_light.png');
import BackgroundScreenWrapper from '@/src/components/BackgroundScreenWrapper';
import SerenifyText from '@/src/components/SerenifyText';
import SerenifyTextInput from '@/src/components/SerenifyTextInput';
import SerenifyButton from '@/src/components/SerenifyButton';
import { NavigationProp } from '@react-navigation/native';

interface SignupScreenProps {
    navigation: NavigationProp<any>;
}

const SignupScreen = ({navigation}: SignupScreenProps) => {
     
    const[credentials, setCredentials]=React.useState({
        email: '',
        password: '',
    })

     console.log('credentials', credentials);
  return (
    <BackgroundScreenWrapper image={backgroundImage}>
        <View style={styles.container}>
          <View style={styles.inputsWrapper}> 
              <Image source={backgroundLogo} style={styles.logo} />
              <SerenifyText heading bold>Serenify</SerenifyText>
              <SerenifyText>
                find a moment of Peace
              </SerenifyText>
              <View style={styles.inputWrapper}>
            {Object.keys(credentials).map((key: string) => (
              <SerenifyTextInput
                key={key}
                placeholder={key === 'email' ? 'Email' : 'Password'}
                onChangeText={(text) =>
                  setCredentials((prevState) => ({
                    ...prevState,
                    [key]: text,
                  }))
                }
              />
            ))}
          </View>
          <View style={{marginTop:15}}>
            <SerenifyButton>
                Signup
            </SerenifyButton>
        </View>
        <View style={{marginTop:2}}>
         <TouchableOpacity
            onPress={() => {
                 navigation.navigate('Login')
            }}
            >
         <SerenifyText>Have an account? Login</SerenifyText>
         </TouchableOpacity>
         </View> 
        </View>
      </View>
    </BackgroundScreenWrapper>
  );
};


export default SignupScreen;

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
