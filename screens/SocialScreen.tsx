import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import Friend from '../components/Friend';
import getFriends from '../data/Friends';

const MarkedFriends = getFriends().filter(item => item.bookmark === true);

export default function SocialScreen({
  navigation,
}: RootTabScreenProps<'Social'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LoLing</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <FlatList
          data={MarkedFriends}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text style={{ color: Colors.textFocusedPurple }}>즐겨찾기</Text>
          }
          renderItem={({ item }) => (
            <Friend
              nickname={item.nickname}
              bookmark={item.bookmark}
              profileImg={item.profileImg}
            />
          )}
        />

        <FlatList
          data={getFriends()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text style={{ color: Colors.textFocusedPurple }}>친구</Text>
          }
          renderItem={({ item }) => (
            <Friend
              nickname={item.nickname}
              bookmark={item.bookmark}
              profileImg={item.profileImg}
            />
          )}
        />
      </ScrollView>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
