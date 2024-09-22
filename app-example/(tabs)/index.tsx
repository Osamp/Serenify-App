import { Image, StyleSheet,View, Text, } from 'react-native';
import { StatusBar } from 'expo-status-bar';




export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Serenify</Text>
      <StatusBar style="auto" />
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#fff',
  },
  
});
