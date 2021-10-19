import * as React from 'react';
import { Pressable, ScrollView, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.profile}>
        <Text style={styles.profiletext}>
          하아아아품
        </Text>
      </Pressable>
      <ScrollView contentContainerStyle={styles.container2} horizontal={true}>
        <Text style={styles.title}>
          LoL-ing 친구들
        </Text>
      </ScrollView>
      <ScrollView contentContainerStyle={styles.container2} horizontal={true}>
        <Text style={styles.title}>
          매칭 가능한 LoL-ing 유저들
        </Text>
        <Image source = {require('../assets/images/Nunu.png')}>
        </Image>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#161627',
    padding: 10,
  },
  profile: {
    height: 150,
    width: '95%',
    backgroundColor: '#C5A3FF',
    borderRadius: 10,
    padding: 10
  },
  container2: {
    height : 150,
    width: '95%',
    borderRadius : 10,
    backgroundColor: '#23233F',
    padding: 10, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C5A3FF',
  },
  profiletext: {
    fontSize: 20,
    color: '#000000'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

