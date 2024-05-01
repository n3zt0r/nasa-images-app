import React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/views/Home';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(7,26,93,255)'},
});
