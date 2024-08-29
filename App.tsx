import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
export default function App() {
  return (
    <View style={styles.container} >
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
