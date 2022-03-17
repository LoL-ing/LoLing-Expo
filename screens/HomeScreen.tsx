import { FontAwesome } from '@expo/vector-icons';
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
import getFriends from '../data/Friends';
import HomeScreenFriendList from '../components/HomeScreenFriendList';
import { RootTabScreenProps } from '../types';
import getMyProfile from '../data/MyProfile';
import { Shadow } from 'react-native-shadow-2';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;
const MyFriends = getFriends();
const MatchableUsers = getHomeScreenFriends();
const MyProfile = getMyProfile();

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView contentContainerStyle={styles.fullScreenView}>
      <View style={styles.profileContainer}>
        <View style={styles.profileSummaryContainer}>
          <Image
            style={{
              width: Width * 0.2,
              height: Width * 0.2,
              borderRadius: Width * 0.1,
              marginHorizontal: Width * 0.05,
            }}
            source={MyProfile.profileImg}
          />

          <View
            style={{
              height: Height * 0.1,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: Colors.textWhite,
                fontWeight: 'bold',
                fontSize: FontScale * 20,
              }}
            >
              {MyProfile.nickname}
            </Text>
            <Text
              style={{
                color: Colors.textWhite,
                fontWeight: '900',
                fontSize: FontScale * 16,
              }}
            >
              {MyProfile.tier}
            </Text>
            <View
              style={{
                width: Width * 0.4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  color: Colors.textWhite,
                  fontWeight: '700',
                  opacity: 0.7,
                  fontSize: FontScale * 12,
                }}
              >
                승률 {MyProfile.winrate}
              </Text>
              <Text
                style={{
                  color: Colors.textWhite,
                  fontWeight: '600',
                  opacity: 0.7,
                  fontSize: FontScale * 12,
                }}
              >
                KDA {MyProfile.KDA}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: Width * 0.51,
              paddingVertical: Height * 0.025,
              paddingLeft: Width * 0.03,
            }}
          >
            <Text
              style={{
                color: Colors.textGray,
                fontSize: FontScale * 6,
                marginBottom: Height * 0.01,
              }}
            >
              CHAMPION
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: Width * 0.09,
                    height: Height * 0.045,
                    borderRadius: 50,
                  }}
                  source={require('../assets/images/Teemo.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontSize: FontScale * 9,
                    }}
                  >
                    {MyProfile.champ1Winrate}
                  </Text>
                  <Text
                    style={{ color: Colors.textWhite, fontSize: FontScale * 9 }}
                  >
                    / {MyProfile.champ1KDA}
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: Width * 0.09,
                    height: Height * 0.045,
                    borderRadius: 50,
                  }}
                  source={require('../assets/images/Irelia.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontSize: FontScale * 9,
                    }}
                  >
                    {MyProfile.champ2Winrate}
                  </Text>
                  <Text
                    style={{ color: Colors.textWhite, fontSize: FontScale * 9 }}
                  >
                    / {MyProfile.champ2KDA}
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: Width * 0.09,
                    height: Height * 0.045,
                    borderRadius: 50,
                  }}
                  source={require('../assets/images/Nunu.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontSize: FontScale * 9,
                    }}
                  >
                    {MyProfile.champ3Winrate}
                  </Text>
                  <Text
                    style={{ color: Colors.textWhite, fontSize: FontScale * 9 }}
                  >
                    / {MyProfile.champ3KDA}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              width: Width * 0.315,
              paddingVertical: Height * 0.025,
              marginLeft: Width * 0.05,
            }}
          >
            <Text
              style={{
                color: Colors.textGray,
                fontSize: FontScale * 6,
                marginBottom: Height * 0.01,
              }}
            >
              POSITION
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: Width * 0.09,
                    height: Height * 0.045,
                    borderRadius: 50,
                  }}
                  source={require('../assets/images/lineTop.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontSize: FontScale * 9,
                    }}
                  >
                    {MyProfile.champ1Winrate}
                  </Text>
                  <Text
                    style={{ color: Colors.textWhite, fontSize: FontScale * 9 }}
                  >
                    / {MyProfile.champ1KDA}
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: Width * 0.09,
                    height: Height * 0.045,
                    borderRadius: 50,
                  }}
                  source={require('../assets/images/lineJungle.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontSize: FontScale * 9,
                    }}
                  >
                    {MyProfile.champ2Winrate}
                  </Text>
                  <Text
                    style={{ color: Colors.textWhite, fontSize: FontScale * 9 }}
                  >
                    / {MyProfile.champ2KDA}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.listContainer]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: Height * 0.03,
          }}
        >
          <Text style={styles.titleText}>매칭 가능한 유저들</Text>
          <Pressable>
            <FontAwesome
              name="chevron-right"
              size={20}
              color={Colors.textWhite}
            />
          </Pressable>
        </View>
        <FlatList
          data={MatchableUsers}
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

      <View style={styles.listContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: Height * 0.03,
          }}
        >
          <Text style={styles.titleText}>친구 목록</Text>
          <Pressable onPress={() => navigation.navigate('Social')}>
            <FontAwesome
              name="chevron-right"
              size={20}
              color={Colors.textWhite}
            />
          </Pressable>
        </View>
        <FlatList
          data={MyFriends}
          renderItem={({ item }) => (
            <HomeScreenFriendList
              nickname={item.nickname}
              profileImg={item.profileImg}
            />
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
    paddingVertical: Height * 0.07,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  matchingContainer: {
    width: Width * 0.5,
    height: Height * 0.15,
    marginRight: Width * 0.05,
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
    backgroundColor: '#9F70F1',
    borderRadius: 30,
  },
  profileContainer: {
    width: Width * 0.9,
    height: Height * 0.32,
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 20,
  },
  profileSummaryContainer: {
    width: Width * 0.9,
    height: Height * 0.18,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#9F70F1',
    borderRadius: 20,
  },
  listContainer: {
    width: Width * 0.9,
    marginVertical: Height * 0.01,
    backgroundColor: Colors.backgroundBlack,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textWhite,
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
