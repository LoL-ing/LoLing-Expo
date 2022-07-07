import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

export default function DeleteFriendScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LoLing</Text>
      <View style={styles.separator} />
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
    color: Colors.textWhite,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    width: '80%',
    marginVertical: 30,

    height: 1,
    backgroundColor: 'white',
  },
});
