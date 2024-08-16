import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
import Route from './src/routes/route'

export default function App() {
  return (
    <NavigationContainer>
      <Route/>
      <StatusBar style='auto' />
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Let's build notws app</Text>
    //   <StatusBar style="auto" />
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
