import * as React from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import Colors from '../constants/Colors';

import Arrow from '../assets/icons/svg/arrow-left.svg';
import OverflowMenu from '../assets/icons/svg/overflow-menu.svg';

import FriendRequest from '../components/FriendRequest';

import { RootStackScreenProps } from '../types';

const Width = Dimensions.get('screen').width; //스크린 너비 초기화
const Height = Dimensions.get('screen').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

const data = {
  request: [
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '하아아아푸움',
      isFriendrequest: true,
    },
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '겨드랑이에낀손',
      isFriendrequest: false,
    },
    {
      proflieImg: require('../assets/images/Irelia.png'),
      nickname: '즐거운프리핸드',
      isFriendrequest: true,
    },
  ],
};

export default function FriendRequestScreen({
  navigation,
}: RootStackScreenProps<'FriendRequest'>) {
  return (
    <View style={styles.fullScreenView}>
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          onPress={() => {
            navigation.navigate('Social');
          }}
        >
          <Arrow width={Width * 0.075} />
        </Pressable>
        <Text style={styles.roomTitle}>친구/매칭 요청</Text>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          onPress={() => {}}
        >
          <OverflowMenu width={Width * 0.075} />
        </Pressable>
      </View>

      <FlatList
        data={data.request}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <FriendRequest
              proflieImg={item.proflieImg}
              nickname={item.nickname}
              isFriendrequest={item.isFriendrequest}
            />
          );
        }}
      />
    </View>
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
  header: {
    width: Width,
    height: Height * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Width * 0.028,
    backgroundColor: Colors.backgroundBlack,
  },
  roomTitle: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: FontScale * 14,
    textAlign: 'center',
  },
});
