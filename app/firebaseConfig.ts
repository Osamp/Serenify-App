import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase configuration object
const firebaseConfig = {
apiKey: process.env.EXPO_PUBLIC_apiKey,
authDomain: process.env.EXPO_PUBLIC_authDomain,
projectId: process.env.EXPO_PUBLIC_projectId,
storageBucket: process.env.EXPO_PUBLIC_storageBucket,
messagingSenderId: process.env.EXPO_PUBLIC_messagingSenderId,
appId: process.env.EXPO_PUBLIC_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with persistence using AsyncStorage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
