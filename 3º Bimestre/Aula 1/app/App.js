import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.rootScreen}>
        <StartGameScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#1e0538',
  },
});
