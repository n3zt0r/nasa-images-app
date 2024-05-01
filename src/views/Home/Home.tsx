import React from 'react';
import {Platform, View, StyleSheet} from 'react-native';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View
      style={[styles.container, Platform.OS === 'android' && {paddingTop: 0}]}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 17},
});
