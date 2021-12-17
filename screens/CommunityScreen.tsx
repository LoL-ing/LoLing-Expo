import * as React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function CommnunityScreen({
  navigation,
}: RootTabScreenProps<'Community'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LoLing</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
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
    color: Colors.textWhite,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    width: '80%',
    marginVertical: 30,

    height: 1,
  },
});
