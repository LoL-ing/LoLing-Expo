import * as React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import getHomeScreenFriends from '../data/HomeScreenFriends';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;
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
                  source={item.mostChampImg}
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
      <View style={[styles.listContainer, { height: 500 }]}>
        <Text style={styles.titleText}>매칭 가능한 LoL-ing 유저들</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.matchingContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.userText}>{item.username}</Text>
                <Text style={styles.rankText}>{item.tier}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: 10,
                }}
              >
                <View style={styles.matchingInfoContainer}>
                  <Image
                    style={styles.matchingImg}
                    source={item.mostChampImg}
                  ></Image>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.winRateText}>
                      {item.mostChampWinRate}
                    </Text>
                    <Text style={styles.KDAText}>{item.mostChampKDA}</Text>
                  </View>
                </View>

                <View style={styles.matchingInfoContainer}>
                  <Image
                    style={styles.matchingImg}
                    source={item.mostLineImg}
                  ></Image>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.winRateText}>
                      {item.mostLineWinRate}
                    </Text>
                    <Text style={styles.KDAText}>{item.mostLineKDA}</Text>
                  </View>
                </View>
              </View>
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
    width: Width,
    height: Height,
    padding: 10,

    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: Colors.backgroundBlack,
  },
  matchingContainer: {
    width: Width * 0.5,
    height: Height * 0.15,
    marginHorizontal: 10,
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 30,
    shadowOpacity: 30,
    elevation: 30,
  },
  titleContainer: {
    width: Width * 0.45,
    height: Height * 0.04,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.backgroundPurple,
    borderRadius: 30,
  },
  profileContainer: {
    width: Width * 0.95,
    height: 150,
    padding: 10,
    margin: 10,

    backgroundColor: Colors.backgroundPurple,
    borderRadius: 10,
  },
  listContainer: {
    width: Width * 0.95,
    //height: 200,
    padding: 10,
    margin: 10,

    backgroundColor: Colors.backgroundBlack,
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
  matchingInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  matchingImg: {
    width: Width * 0.09,
    height: Height * 0.045,
    borderRadius: 50,
  },
  winRateText: {
    color: Colors.textFocusedPurple,
    fontSize: FontScale * 12,
    fontWeight: 'normal',
  },
  KDAText: {
    color: Colors.textGray,
    fontSize: FontScale * 12,
    fontWeight: 'normal',
  },
  userText: {
    color: Colors.textWhite,
    fontSize: FontScale * 10,
    fontWeight: 'normal',
  },
  rankText: {
    color: Colors.textWhite,
    fontSize: FontScale * 12,
    fontWeight: 'bold',
  },
});
