import * as React from 'react';
import { useState } from 'react';
import Good from '../assets/icons/svg/good.svg';
import GoodOff from '../assets/icons/svg/good-off.svg';
import Bad from '../assets/icons/svg/bad.svg';
import BadOff from '../assets/icons/svg/bad-off.svg';
import Report from '../assets/icons/svg/report.svg';
import Chat from '../assets/icons/svg/chat.svg';
import Profile from '../assets/icons/svg/profile.svg';
import FriendEsc from '../assets/icons/svg/friend-esc.svg';
import {
  Pressable,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Modal,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import Top from '../assets/icons/svg/top-icon-selected.svg';
import Bottom from '../assets/icons/svg/bottom-icon-selected.svg';
import Mid from '../assets/icons/svg/middle-icon-selected.svg';
import Jungle from '../assets/icons/svg/jungle-icon-selected.svg';
import Support from '../assets/icons/svg/support-icon-selected.svg';

export default function Friend(props: {
  nickname: string;
  profileImg: ImageSourcePropType;
  tier: string;
  line: string;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [goodOn, setGoodOn] = useState(false);
  const [badOn, setBadOn] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              width: Layout.Width,
              height: Layout.Height * 0.8,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              backgroundColor: 'black',
              opacity: 0.7,
              paddingVertical: Layout.Height * 0.11,
              paddingHorizontal: Layout.Width * 0.05,
            }}
          >
            <Pressable onPress={() => setModalVisible(false)}>
              <FriendEsc width={Layout.Width * 0.08} />
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: 'row',
              width: Layout.Width * 0.8,
              height: Layout.Height * 0.1,
              marginBottom: Layout.Height * 0.04,
            }}
          >
            <Image
              source={props.profileImg}
              style={{
                width: Layout.Width * 0.19,
                height: Layout.Width * 0.19,
                borderRadius: Layout.Width * 0.19,
              }}
            ></Image>
            <View
              style={{
                marginHorizontal: Layout.Width * 0.07,
                width: Layout.Width * 0.45,
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: 22,
                  fontWeight: 'bold',
                }}
              >
                {props.nickname}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Pressable
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                  onPress={() => {
                    if (badOn) setBadOn(false);
                    setGoodOn(!goodOn);
                  }}
                >
                  {goodOn ? (
                    <Good width={Layout.Width * 0.08} />
                  ) : (
                    <GoodOff width={Layout.Width * 0.08} />
                  )}
                </Pressable>
                <Pressable
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                  onPress={() => {
                    if (goodOn) setGoodOn(false);
                    setBadOn(!badOn);
                  }}
                >
                  {badOn ? (
                    <Bad width={Layout.Width * 0.08} />
                  ) : (
                    <BadOff width={Layout.Width * 0.08} />
                  )}
                </Pressable>
                <Pressable
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                >
                  <Report width={Layout.Width * 0.23} />
                </Pressable>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: Layout.Width * 0.86,
              height: Layout.Height * 0.05,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Chat width={Layout.Width * 0.4} />
            </Pressable>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Profile width={Layout.Width * 0.4} />
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          paddingHorizontal: Layout.Width * 0.077,
          flexDirection: 'row',
          alignItems: 'center',
          width: Layout.Width,
          height: Layout.Height * 0.11,
        })}
        onPress={() => setModalVisible(true)}
      >
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
      </Pressable>
    </View>
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
