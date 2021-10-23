import * as React from 'react';
import { Pressable, ScrollView, StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import color from '../constants/Colors'
import navigation from '../navigation';

const DATA = [
  {
    id : 1,
    profileImg: require('../assets/images/Nunu.png'),
    username: '하아아푸움'
  },
  {
    id : 2,
    profileImg: require('../assets/images/Irelia.png'),
    username: '모닝글라스'
  },
  {
    id : 3,
    profileImg: require('../assets/images/Teemo.png'),
    username: '개란말이개미'
  }
]

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.SafeAreaView}>
      <Pressable style={styles.profile}>
        <Text style={styles.profiletext}>
          하아아아품
        </Text>
      </Pressable >
      <View style={styles.container}>
        <Text style={styles.title}>
          LoL-ing 친구들
        </Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) =>
          <View style={{backgroundColor: color.dark.background2, alignItems: 'center', marginHorizontal : '10'}} >
            <View>
            <Image style={styles.imagestyle} source={item.profileImg}></Image>
            </View>
            <View>
            <Text style = {{color:color.light.text}}>{item.username}</Text>
            </View>
          </View>}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          />
        
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>
              매칭 가능한 LoL-ing 유저들
        </Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => 
          <View style={{backgroundColor: color.dark.background2}}>
            <Image style={styles.imagestyle} source={item.profileImg}></Image>
            <Text style = {{color:color.light.text}}>{item.username}</Text>
          </View>}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          />
      </View>
   </ScrollView>
  );
}


const styles = StyleSheet.create({
  SafeAreaView: {
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
  container: {
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
  },
});

function createStackNavigator(arg0: { Home: () => JSX.Element; Details: any; }, arg1: { initialRouteName: string; }) {
  throw new Error('Function not implemented.');
}

