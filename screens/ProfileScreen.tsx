import * as React from 'react';
import { StyleSheet, Pressable, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import ProfileCard from '../components/ProfileCard';
import Arrow from '../assets/icons/svg/arrow-left.svg';
import CircularButton from '../components/CircularButton';
import ProfileEdit from '../assets/icons/svg/profile-edit.svg';
import { RootStackScreenProps } from '../types';

import getProfileCard from '../data/ProfileCard';

const profileCard = getProfileCard();
export default function ProfileScreen({
  navigation,
}: RootStackScreenProps<'Profile'>) {
  const item = profileCard[0];
  return (
    <View
      style={{
        width: Layout.Width,
        height: Layout.Height,
        backgroundColor: Colors.backgroundBlack,
        paddingTop: useSafeAreaInsets().top,
        paddingBottom:
          Layout.AndroidBottomBarHeight + useSafeAreaInsets().bottom,
      }}
    >
      <View
        style={{
          width: Layout.Width,
          //height: Layout.Height * 0.1,
          height: Layout.Height * 0.1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.backgroundBlack,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            { position: 'absolute', left: Layout.Width * 0.05 },
          ]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Arrow width={Layout.Width * 0.075} />
        </Pressable>
        <Text style={{ color: Colors.textWhite }}>Picker</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: Layout.Height * 0.15,
          left: Layout.Width * 0.13,
        }}
      >
        <ProfileCard
          lolingId={item.lolingId}
          mannerTierImg={item.mannerTierImg}
          profileImg={item.championImg}
          rank={item.rank}
          nickname={item.nickname}
          winRate={item.winRate}
          winLose={item.winLose}
          lineImg_1={item.lineImg_1}
          lineImg_2={item.lineImg_2}
          line_winRate_1={item.line_winRate_1}
          line_winRate_2={item.line_winRate_2}
          line_kda_1={item.line_kda_1}
          line_kda_2={item.line_kda_2}
          championImg_1={item.championImg_1}
          championImg_2={item.championImg_2}
          championImg_3={item.championImg_3}
          champ_winRate_1={item.champ_winRate_1}
          champ_winRate_2={item.champ_winRate_2}
          champ_winRate_3={item.champ_winRate_3}
          champ_kda_1={item.champ_kda_1}
          champ_kda_2={item.champ_kda_2}
          champ_kda_3={item.champ_kda_3}
          description={item.description}
        />
      </View>
      <CircularButton
        onPress={() => navigation.navigate('ProfileEdit')}
        bottom={0.06}
        left={0.41}
        svgImage={<ProfileEdit />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  profileContainer: {
    width: '80%',
    height: '30%',
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: Colors.backgroundPurple,
    borderRadius: 15,
  },
  profileImg: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 50,
  },
  usernameText: {
    color: Colors.textBlack,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tierText: {
    color: Colors.textBlack,
    fontSize: 15,
    fontWeight: 'normal',
  },
  LPText: {
    color: Colors.textBlack,
    fontSize: 10,
    fontWeight: 'normal',
  },
  levelText: {
    color: Colors.textBlack,
    fontSize: 10,
    fontWeight: 'normal',
  },
});
