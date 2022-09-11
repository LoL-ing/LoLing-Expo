import Chevron_Right from '../assets/icons/svg/fi_chevron-right.svg';
import * as React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  Text,
  View,
} from 'react-native';
import { useRecoilValue } from 'recoil';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getFriendsSelector, getLoLAccountSelector } from '../atoms/selector';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import HomeScreenFriendList from '../components/HomeScreenFriendList';
import getMyProfile from '../data/MyProfile';
import { RootTabScreenProps } from '../types';
import { api_getProfile } from '../api/main';
import { accessTokenState } from '../atoms/atom';
import jwt_decode from 'jwt-decode';

const MyProfile = getMyProfile();
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const friends = useRecoilValue(getFriendsSelector);
  const MatchableUsers = useRecoilValue(getLoLAccountSelector);

  //  여기에서 토큰 -> lol_name 추출 해서 넣기
  // const myJWT = useRecoilValue(accessTokenState);

  // console.log(myJWT);

  //const payload = jwt.decode(String(myJWT).split('.')[1]);
  //console.log(jwt_decode(String(myJWT).split('.')[1]));
  return (
    <View
      style={{
        width: Layout.Width,
        height: Layout.Height,
        backgroundColor: Colors.backgroundBlack,
        paddingTop: useSafeAreaInsets().top,
        paddingBottom:
          Layout.AndroidBottomBarHeight + 49 + useSafeAreaInsets().bottom,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileContainer}>
          <View style={styles.profileSummaryContainer}>
            <Image style={styles.profileImg} source={MyProfile.profileImg} />

            <View
              style={{
                height: Layout.Height * 0.1,
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.profileNicknameText}>
                {MyProfile.nickname}
              </Text>
              <Text style={styles.profileTierText}>{MyProfile.tier}</Text>
              <View
                style={{
                  width: Layout.Width * 0.4,
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
                width: Layout.Width * 0.48,
                paddingVertical: Layout.Height * 0.025,
                marginLeft: Layout.Width * 0.025,
              }}
            >
              <Text style={styles.profileSubtitleText}>CHAMPION</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={styles.winRateAndKDAContainer}>
                  <Image
                    style={styles.championImg}
                    source={require('../assets/images/Teemo.png')}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Layout.Height * 0.01,
                    }}
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
                    style={{
                      flexDirection: 'row',
                      marginTop: Layout.Height * 0.01,
                    }}
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
                    style={{
                      flexDirection: 'row',
                      marginTop: Layout.Height * 0.01,
                    }}
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
                width: Layout.Width * 0.315,
                paddingVertical: Layout.Height * 0.025,
                marginLeft: Layout.Width * 0.05,
              }}
            >
              <Text style={styles.profileSubtitleText}>POSITION</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={styles.winRateAndKDAContainer}>
                  <Image
                    style={styles.positionImg}
                    source={require('../assets/images/lineTop.png')}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Layout.Height * 0.01,
                    }}
                  >
                    <Text style={styles.profileWinRateText}>
                      {MyProfile.line1Winrate}
                    </Text>
                    <Text style={styles.profileKDAText}>
                      / {MyProfile.line1KDA}
                    </Text>
                  </View>
                </View>
                <View style={styles.winRateAndKDAContainer}>
                  <Image
                    style={styles.positionImg}
                    source={require('../assets/images/lineJungle.png')}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Layout.Height * 0.01,
                    }}
                  >
                    <Text style={styles.profileWinRateText}>
                      {MyProfile.line2Winrate}
                    </Text>
                    <Text style={styles.profileKDAText}>
                      / {MyProfile.line2KDA}
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
              marginVertical: Layout.Height * 0.03,
            }}
          >
            <Text style={styles.titleText}>매칭 가능한 유저들</Text>
            <Pressable>
              <Chevron_Right />
            </Pressable>
          </View>
          <FlatList
            data={MatchableUsers}
            renderItem={({ item }) => (
              <View style={styles.matchingContainer}>
                <View style={styles.userInfoContainer}>
                  <Text
                    style={styles.userText}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                  >
                    {item.lol_name}
                  </Text>
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
                      source={require('../assets/images/Teemo.png')}
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
                      source={require('../assets/images/Teemo.png')}
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
              marginVertical: Layout.Height * 0.03,
            }}
          >
            <Text style={styles.titleText}>친구 목록</Text>
            <Pressable onPress={() => navigation.navigate('Social')}>
              <Chevron_Right />
            </Pressable>
          </View>
          <FlatList
            data={friends}
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
              marginVertical: Layout.Height * 0.03,
            }}
          >
            <Text style={styles.titleText}>실시간 인기 게시물</Text>
            <Pressable>
              <Chevron_Right />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
  },
  matchingContainer: {
    width: Layout.Width * 0.5,
    height: Layout.Height * 0.15,
    marginRight: Layout.Width * 0.05,
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 30,
  },
  userInfoContainer: {
    width: Layout.Width * 0.45,
    height: Layout.Height * 0.04,
    marginVertical: Layout.Height * 0.013,
    paddingHorizontal: Layout.Width * 0.03,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.backgroundPurple,
    borderRadius: 30,
  },
  profileContainer: {
    marginTop: +Layout.Height * 0.02,
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.32,
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 20,
  },
  profileSummaryContainer: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.18,
    paddingHorizontal: Layout.Width * 0.025,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundPurple,
    borderRadius: 20,
  },
  profileImg: {
    width: Layout.Width * 0.2,
    height: Layout.Width * 0.2,
    marginHorizontal: Layout.Width * 0.05,
    borderRadius: Layout.Width * 0.1,
  },
  profileNicknameText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 20,
    fontWeight: 'bold',
  },
  profileTierText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 16,
    fontWeight: '900',
  },
  profileSubtitleText: {
    color: Colors.textGray,
    fontSize: Layout.FontScale * 6,
    marginBottom: Layout.Height * 0.01,
  },
  profileWinRateText: {
    color: Colors.textFocusedPurple,
    fontSize: Layout.FontScale * 9,
  },
  profileKDAText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 9,
  },
  winRateAndKDAContainer: {
    width: Layout.Width * 0.15,
    alignItems: 'center',
  },
  listContainer: {
    width: Layout.Width * 0.9,
    marginVertical: Layout.Height * 0.008,
    backgroundColor: Colors.backgroundBlack,
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 16,
    fontWeight: 'bold',
  },
  profileInfoText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 12,
    fontWeight: '600',
    opacity: 0.7,
  },
  matchingInfoContainer: {
    paddingVertical: Layout.Height * 0.013,
    flexDirection: 'row',
    alignItems: 'center',
  },
  championImg: {
    width: Layout.Width * 0.09,
    height: Layout.Height * 0.045,
    borderRadius: 50,
  },
  winRateText: {
    color: Colors.textFocusedPurple,
    fontSize: Layout.FontScale * 12,
  },
  KDAText: {
    color: Colors.textGray,
    fontSize: Layout.FontScale * 12,
  },
  positionImg: {
    width: Layout.Width * 0.09,
    height: Layout.Height * 0.045,
  },
  userText: {
    width: Layout.Width * 0.2,
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 10,
  },
  rankText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 12,
    fontWeight: 'bold',
  },
});
