import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text, // "text" is used to display text
  View, // view is like "div"
} from 'react-native';

// View is mapped to 'UIView' for IOS and 'AndroidView' for Android
// React Native will translate the components to their native widgets

export default function App() {
  let x = 1;
  console.log('app executed');
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style='auto' />
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
