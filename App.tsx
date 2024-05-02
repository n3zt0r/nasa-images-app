import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './src/views/Home';

const backgroundColor = 'rgba(7,26,93,255)';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={backgroundColor} />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor},
});
