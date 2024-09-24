import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
const backgroundImage = require('../../../assets/images/signup_bg.jpg');
const backgroundLogo = require('../../../assets/images/logo_light.png');
import BackgroundScreenWrapper from '@/src/components/BackgroundScreenWrapper';
import SerenifyText from '@/src/components/SerenifyText';
import SerenifyTextInput from '@/src/components/SerenifyTextInput';
import SerenifyButton from '@/src/components/SerenifyButton';
import { NavigationProp } from '@react-navigation/native';
import useAuthentication from '@/src/hooks/useAuthentication';

interface SignupScreenProps {
    navigation: NavigationProp<any>;
}

// Define the keys as a union type
type CredentialKeys = 'email' | 'password';

const SignupScreen = ({ navigation }: SignupScreenProps) => {
    const [credentials, setCredentials] = React.useState<{
        email: string;
        password: string;
    }>({
        email: '',
        password: '',
    });

    const { register } = useAuthentication();

    // console.log('credentials', credentials);

    return (
        <BackgroundScreenWrapper image={backgroundImage}>
            <View style={styles.container}>
                <View style={styles.inputsWrapper}>
                    <Image source={backgroundLogo} style={styles.logo} />
                    <SerenifyText heading bold>Serenify</SerenifyText>
                    <SerenifyText>Find a moment of Peace</SerenifyText>
                    <View style={styles.inputWrapper}>
                        {(['email', 'password'] as CredentialKeys[]).map((key) => (
                            <SerenifyTextInput
                                key={key}
                                placeholder={key === 'email' ? 'Email' : 'Password'}
                                secureTextEntry={key === 'password'} // Hide password input
                                value={credentials[key]} // Access the value correctly
                                onChangeText={(text) => setCredentials((prevState) => ({
                                    ...prevState,
                                    [key]: text,
                                }))}
                            />
                        ))}
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <SerenifyButton
                            onPress={() => register(credentials.email, credentials.password)}
                        >
                            Signup
                        </SerenifyButton>
                    </View>
                    <View style={{ marginTop: 2 }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Login');
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
        fontWeight: 'bold',
    },
    inputsWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    inputWrapper: {
        marginTop: 15,
    },
});
