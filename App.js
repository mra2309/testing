import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//ini root aplikasi
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello adi feri</Text>
      <StatusBar style="auto" />
    </View>
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
