import * as React from 'react';
import { StyleSheet, Pressable, Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Pressable style = {styles.profileBox}>
         <View style = {{backgroundColor: Colors.dark.background3}}>
         <Image //프로필 이미지
         source = {require('../assets/images/Irelia.png')}
         style = {styles.profileImg}/>
         </View>
         <View style = {{backgroundColor: Colors.dark.background3, height: '50%', marginHorizontal: 10, justifyContent: 'space-around'}}>
          <Text style = {styles.username}>
            하아아푸움
          </Text>
          <View style = {{backgroundColor: Colors.dark.background3, flexDirection: 'row'}}>
            <Text style = {styles.tier}>
             Gold 1
            </Text>
            <Text style = {styles.LP}>
             25LP
            </Text>
          </View>
          <Text style = {styles.level}>
            lv.100
          </Text>
         </View>
      </Pressable>
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
  profileBox: {
    width: '80%',
    height: '30%',
    backgroundColor: Colors.dark.background3,
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  tier: {
    fontWeight: 'normal',
    fontSize: 15,
    color: '#000',
  },
  LP: {
    fontWeight: 'normal',
    fontSize: 10,
    color: '#000',
  },
  level: {
    fontWeight: 'normal',
    fontSize: 10,
    color: '#000',
  },

});

