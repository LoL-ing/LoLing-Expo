import * as React from 'react';
import { useState } from 'react';

import Delete from '../assets/icons/svg/delete-icon.svg';
import {
  Pressable,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import Top from '../assets/icons/svg/top-icon-selected.svg';
import Bottom from '../assets/icons/svg/bottom-icon-selected.svg';
import Mid from '../assets/icons/svg/middle-icon-selected.svg';
import Jungle from '../assets/icons/svg/jungle-icon-selected.svg';
import Support from '../assets/icons/svg/support-icon-selected.svg';

export default function DeleteFriend(props: {
  nickname: string;
  profileImg: ImageSourcePropType;
  tier: string;
  line: string;
}) {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        paddingHorizontal: Layout.Width * 0.077,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Layout.Width,
        height: Layout.Height * 0.11,
        backgroundColor: selected ? 'gray' : Colors.backgroundBlack,
      })}
      onPress={() => setSelected(!selected)}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={props.profileImg} style={styles.profileImg}></Image>
        <View
          style={{
            marginHorizontal: Layout.Width * 0.06,
            height: Layout.Height * 0.06,
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.nickname}>{props.nickname}</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={styles.tier}>{props.tier}</Text>

            {props.line == 'top' ? (
              <Top width={Layout.Width * 0.05} style={{ marginLeft: 10 }} />
            ) : props.line == 'bottom' ? (
              <Bottom width={Layout.Width * 0.05} style={{ marginLeft: 10 }} />
            ) : props.line == 'mid' ? (
              <Mid width={Layout.Width * 0.05} style={{ marginLeft: 10 }} />
            ) : props.line == 'jungle' ? (
              <Jungle width={Layout.Width * 0.05} style={{ marginLeft: 10 }} />
            ) : (
              <Support width={Layout.Width * 0.05} style={{ marginLeft: 10 }} />
            )}
          </View>
        </View>
      </View>
      <Delete />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  modalView: {
    width: Layout.Width,
    height: Layout.Height * 0.3,
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 20,
    borderTopWidth: 1,
    top: Layout.Height * 0.7,
    position: 'absolute',
    alignItems: 'center',
    paddingTop: Layout.Height * 0.047,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileImg: {
    width: 60,
    height: 60,
  },
  nickname: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: 15,
  },
  tier: {
    color: Colors.textWhite,
    opacity: 0.7,

    fontSize: 12,
  },

  star: {
    width: 30,
    height: 30,
    margin: 10,
  },

  pressableText: {
    color: Colors.textBlack,
    fontSize: 20,
  },
});
