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
          <Image style={styles.profileImg} source={MyProfile.profileImg} />

          <View
            style={{
              height: Height * 0.1,
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.profileNicknameText}>{MyProfile.nickname}</Text>
            <Text style={styles.profileTierText}>{MyProfile.tier}</Text>
            <View
              style={{
                width: Width * 0.4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.profileInfoText}>
                승률 {MyProfile.winrate}
              </Text>
              <Text style={styles.profileInfoText}>KDA {MyProfile.KDA}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: Width * 0.48,
              paddingVertical: Height * 0.025,
              marginLeft: Width * 0.025,
            }}
          >
            <Text style={styles.profileSubtitleText}>CHAMPION</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={styles.winRateAndKDAContainer}>
                <Image
                  style={styles.championImg}
                  source={require('../assets/images/Teemo.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text style={styles.profileWinRateText}>
                    {MyProfile.champ1Winrate}
                  </Text>
                  <Text style={styles.profileKDAText}>
                    / {MyProfile.champ1KDA}
                  </Text>
                </View>
              </View>
              <View style={styles.winRateAndKDAContainer}>
                <Image
                  style={styles.championImg}
                  source={require('../assets/images/Irelia.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text style={styles.profileWinRateText}>
                    {MyProfile.champ2Winrate}
                  </Text>
                  <Text style={styles.profileKDAText}>
                    / {MyProfile.champ2KDA}
                  </Text>
                </View>
              </View>
              <View style={styles.winRateAndKDAContainer}>
                <Image
                  style={styles.championImg}
                  source={require('../assets/images/Nunu.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text style={styles.profileWinRateText}>
                    {MyProfile.champ3Winrate}
                  </Text>
                  <Text style={styles.profileKDAText}>
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
            <Text style={styles.profileSubtitleText}>POSITION</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={styles.winRateAndKDAContainer}>
                <Image
                  style={styles.positionImg}
                  source={require('../assets/images/lineTop.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text style={styles.profileWinRateText}>
                    {MyProfile.champ1Winrate}
                  </Text>
                  <Text style={styles.profileKDAText}>
                    / {MyProfile.champ1KDA}
                  </Text>
                </View>
              </View>
              <View style={styles.winRateAndKDAContainer}>
                <Image
                  style={styles.positionImg}
                  source={require('../assets/images/lineJungle.png')}
                />
                <View
                  style={{ flexDirection: 'row', marginTop: Height * 0.01 }}
                >
                  <Text style={styles.profileWinRateText}>
                    {MyProfile.champ2Winrate}
                  </Text>
                  <Text style={styles.profileKDAText}>
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
              <View style={styles.userInfoContainer}>
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
                    style={styles.championImg}
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
                    style={styles.championImg}
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

      <View style={[styles.listContainer]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: Height * 0.03,
          }}
        >
          <Text style={styles.titleText}>실시간 인기 게시물</Text>
          <Pressable>
            <FontAwesome
              name="chevron-right"
              size={20}
              color={Colors.textWhite}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fullScreenView: {
    width: Width,
    height: Height,
    paddingVertical: Height * 0.065,
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
  },
  userInfoContainer: {
    width: Width * 0.45,
    height: Height * 0.04,
    marginVertical: Height * 0.013,
    paddingHorizontal: Width * 0.03,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.backgroundPurple,
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
    paddingHorizontal: Width * 0.025,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundPurple,
    borderRadius: 20,
  },
  profileImg: {
    width: Width * 0.2,
    height: Width * 0.2,
    marginHorizontal: Width * 0.05,
    borderRadius: Width * 0.1,
  },
  profileNicknameText: {
    color: Colors.textWhite,
    fontSize: FontScale * 20,
    fontWeight: 'bold',
  },
  profileTierText: {
    color: Colors.textWhite,
    fontSize: FontScale * 16,
    fontWeight: '900',
  },
  profileSubtitleText: {
    color: Colors.textGray,
    fontSize: FontScale * 6,
    marginBottom: Height * 0.01,
  },
  profileWinRateText: {
    color: Colors.textFocusedPurple,
    fontSize: FontScale * 9,
  },
  profileKDAText: {
    color: Colors.textWhite,
    fontSize: FontScale * 9,
  },
  winRateAndKDAContainer: {
    width: Width * 0.15,
    alignItems: 'center',
  },
  listContainer: {
    width: Width * 0.9,
    marginVertical: Height * 0.008,
    backgroundColor: Colors.backgroundBlack,
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 16,
    fontWeight: 'bold',
  },
  profileInfoText: {
    color: Colors.textWhite,
    fontSize: FontScale * 12,
    fontWeight: '600',
    opacity: 0.7,
  },
  matchingInfoContainer: {
    paddingVertical: Height * 0.013,
    flexDirection: 'row',
    alignItems: 'center',
  },
  championImg: {
    width: Width * 0.09,
    height: Height * 0.045,
    borderRadius: 50,
  },
  winRateText: {
    color: Colors.textFocusedPurple,
    fontSize: FontScale * 12,
  },
  KDAText: {
    color: Colors.textGray,
    fontSize: FontScale * 12,
  },
  positionImg: {
    width: Width * 0.09,
    height: Height * 0.045,
  },
  userText: {
    color: Colors.textWhite,
    fontSize: FontScale * 10,
  },
  rankText: {
    color: Colors.textWhite,
    fontSize: FontScale * 12,
    fontWeight: 'bold',
  },
});
