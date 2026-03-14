import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ExpoRoot } from "expo-router";
export default function App() {
  const ctx = (require as any).context("./src/app", true);

  return <ExpoRoot context={ctx} />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
