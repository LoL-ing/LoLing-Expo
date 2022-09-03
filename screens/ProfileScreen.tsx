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

export default function ProfileScreen({
  navigation,
}: RootStackScreenProps<'Profile'>) {
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
        <Text>Picker</Text>
      </View>
      {/* <ProfileCard /> */}
      <CircularButton
        onPress={() => navigation.navigate('ProfileEdit')}
        bottom={0.15}
        left={0.39}
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
