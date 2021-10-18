import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function MatchingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoLing</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161627'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});