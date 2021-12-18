import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MatchingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LoLing</Text>
      <View
        style={styles.separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#161627',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    width: '80%',
    height: 1,
    marginVertical: 30,

    backgroundColor: 'white',
  },
});
