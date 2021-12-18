import * as React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  Text,
  View
} from 'react-native';
import Colors from '../constants/Colors';
import getHomeScreenFriends from '../data/HomeScreenFriends';

const DATA = getHomeScreenFriends();

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.fullScreenView}>
      <Pressable style={styles.profileContainer}>
        <Text style={styles.profileText}>하아아아품</Text>
      </Pressable>
      <View style={styles.listContainer}>
        <Text style={styles.titleText}>LoL-ing 친구들</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: Colors.backgroundNavy,
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            >
              <View style={{ backgroundColor: Colors.backgroundNavy }}>
                <Image
                  style={styles.profileImgStyle}
                  source={item.profileImg}
                ></Image>
              </View>
              <View style={{ backgroundColor: Colors.backgroundNavy }}>
                <Text style={{ color: Colors.textWhite }}>{item.username}</Text>
              </View>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.titleText}>매칭 가능한 LoL-ing 유저들</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: Colors.backgroundNavy,
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            >
              <Image
                style={styles.profileImgStyle}
                source={item.profileImg}
              ></Image>
              <Text style={{ color: Colors.textWhite }}>{item.username}</Text>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fullScreenView: {
    width: '100%',
    height: '100%',
    padding: 10,

    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: Colors.backgroundBlack,
  },
  profileContainer: {
    width: '95%',
    height: 150,
    padding: 10,
    margin: 10,

    backgroundColor: Colors.backgroundPurple,
    borderRadius: 10,
  },
  listContainer: {
    width: '95%',
    height: 200,
    padding: 10,
    margin: 10,

    backgroundColor: Colors.backgroundNavy,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textFocusedPurple,

    marginBottom: 35,
  },
  profileText: {
    fontSize: 20,
    color: Colors.textBlack,
  },
  profileImgStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});
