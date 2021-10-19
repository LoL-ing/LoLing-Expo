import * as React from 'react';
import { Pressable, ScrollView, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import color from '../constants/Colors'
import navigation from '../navigation';
import ProfileScreen from '../screens/ProfileScreen';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.profile}>
        <Text style={styles.profiletext}>
          하아아아품
        </Text>
      </Pressable >
      <View style={styles.container2}>
        <Text style={styles.title}>
          LoL-ing 친구들
        </Text>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Image source = {require('../assets/images/Nunu.png')} 
          style={styles.imagestyle}>
          </Image>
          <Image source = {require('../assets/images/Irelia.png')} 
          style={styles.imagestyle}>
          </Image>
          <Image source = {require('../assets/images/Teemo.png')} 
          style={styles.imagestyle}>
          </Image>
        </ScrollView>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>
              매칭 가능한 LoL-ing 유저들
        </Text>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Image source = {require('../assets/images/Nunu.png')} 
          style={styles.imagestyle}>
          </Image>
          <Image source = {require('../assets/images/gold.png')} 
          style={styles.imagestyle}>
          </Image>
          <Image source = {require('../assets/images/diamond.png')} 
          style={styles.imagestyle}>
          </Image>
        </ScrollView>
      </View>
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
    //justifyContent: 'flex-start',
    backgroundColor: color.dark.background,
    padding: 10,
  },
  profile: {
    height: 150,
    width: '95%',
    backgroundColor: '#C5A3FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    tintColor: color.dark.tint,
  },
  container2: {
    height : 200,
    width: '95%',
    borderRadius : 10,
    backgroundColor: color.dark.background2, 
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.dark.text,
    marginBottom: 35,
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
  imagestyle: {
    height: 100,
    width: 100,
    marginLeft: 20,
    marginRight: 20,
  },
});

function createStackNavigator(arg0: { Home: () => JSX.Element; Details: any; }, arg1: { initialRouteName: string; }) {
  throw new Error('Function not implemented.');
}

