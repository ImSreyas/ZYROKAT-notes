import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <StatusBar backgroundColor={ '#FFF' } animated={ true }/>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>good morning</Text>
        </View>
        <View style={styles.card} backgroundColor={"#0f111a"}>
          <Text>good night</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    height: '50%',
    backgroundColor: '#0f111a'
  }
});
