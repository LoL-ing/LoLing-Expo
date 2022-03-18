import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';

export default function SelectMyLineChampScreen({
  navigation,
}: RootStackScreenProps<'SelectMyLineChamp'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Select My Line and champ</Text>
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
