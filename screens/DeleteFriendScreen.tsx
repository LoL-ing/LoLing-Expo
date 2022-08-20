import * as React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, View, Modal, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import DeleteFriend from '../components/DeleteFriend';
import getFriends from '../data/Friends';
import { RootStackScreenProps } from '../types';

import Cancel from '../assets/text_images/cancel.svg';
import Complete from '../assets/text_images/complete.svg';
import FriendList from '../assets/icons/svg/friend-list.svg';
import DeleteNo from '../assets/icons/svg/delete-no.svg';
import DeleteYes from '../assets/icons/svg/delete-yes.svg';
import FriendDeleteM1 from '../assets/icons/svg/friend-delete-m1.svg';
import FriendDeleteM2 from '../assets/icons/svg/friend-delete-m2.svg';

const originFriends = getFriends();

export default function DeleteFriendScreen({
  navigation,
}: RootStackScreenProps<'DeleteFriend'>) {
  const [friendDeleteModalVisible, setFriendDeleteModalVisible] =
    useState(false);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={friendDeleteModalVisible}
        onRequestClose={() => {
          setFriendDeleteModalVisible(!friendDeleteModalVisible);
        }}
      >
        <View style={styles.ModalContainer}>
          <View style={styles.ModalMessagesContainer}>
            <FriendDeleteM1
              width={Layout.Width * 0.586}
              height={Layout.Height * 0.022}
            />
            <FriendDeleteM2
              width={Layout.Width * 0.336}
              height={Layout.Height * 0.017}
            />
          </View>
          <View style={styles.ModalButtonsContainer}>
            <Pressable
              onPress={() => {
                setFriendDeleteModalVisible(false);
              }}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <DeleteNo width={Layout.Width * 0.35} />
            </Pressable>
            <Pressable
              onPress={() => {
                setFriendDeleteModalVisible(false);
                navigation.navigate('Social');
              }}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <DeleteYes width={Layout.Width * 0.35} />
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.Container}>
        <View style={styles.flatListTitleContainer}>
          <FriendList />
        </View>

        <FlatList
          data={originFriends}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <DeleteFriend
              nickname={item.nickname}
              profileImg={item.profileImg}
              tier={item.tier}
              line={item.line}
            />
          )}
        />
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={{
              width: Layout.Width * 0.5,
              height: Layout.Height * 0.06,
              position: 'absolute',
              left: 0,
              bottom: Layout.AndroidBottomBarHeight,
              backgroundColor: Colors.textUnfocusedPurple,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Social')}
          >
            <Cancel width={Layout.Width * 0.08} />
          </Pressable>

          <Pressable
            style={{
              width: Layout.Width * 0.5,
              height: Layout.Height * 0.06,
              right: 0,
              position: 'absolute',
              bottom: Layout.AndroidBottomBarHeight,
              backgroundColor: Colors.backgroundPurple,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setFriendDeleteModalVisible(true)}
          >
            <Complete width={Layout.Width * 0.08} />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: Layout.Width,
    height: Layout.Height,
    paddingTop: Layout.AndroidStatusBarHeight,
    backgroundColor: Colors.backgroundBlack,
  },
  flatListTitleContainer: {
    width: Layout.Width,
    paddingHorizontal: Layout.Width * 0.077,
    paddingTop: Layout.Height * 0.02,
    marginBottom: Layout.Height * 0.02,
    justifyContent: 'flex-start',
  },
  ModalContainer: {
    position: 'absolute',
    width: Layout.Width * 0.83,
    height: Layout.Height * 0.2,
    top: Layout.Height * 0.4 - Layout.AndroidBottomBarHeight,
    left: Layout.Width * 0.083,
    backgroundColor: Colors.backgroundNavy,
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 15,
    paddingTop: Layout.Height * 0.047,
  },
  ModalMessagesContainer: {
    width: Layout.Width * 0.8,
    height: Layout.Height * 0.046,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ModalButtonsContainer: {
    width: Layout.Width * 0.72,
    height: Layout.Height * 0.057,
    marginTop: Layout.Height * 0.0135,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
