import { auth } from "@/app/firebaseConfig"; // Updated import for Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";

const validate = (email: string, password: string) => {
  if (!email || !password) {
    return false;
  }
  return true;
};

const useAuthentication = () => {
  const register = async (email: string, password: string) => {
    if (!validate(email, password)) {
      return Alert.alert('Invalid email or password');
    }
    try {
      const registerUser = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', registerUser);
    } catch (error) {
      console.log('Error registering user:', error);
    }
  };

  const login = async (email: string, password: string) => {
    if (!validate(email, password)) {
      return Alert.alert('Invalid email or password');
    }
    try {
      const loggedInUser = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', loggedInUser);
    } catch (error) {
      console.log('Error logging in user:', error);
    }
  };

  return {
    register,
    login,
  };
};

export default useAuthentication;
