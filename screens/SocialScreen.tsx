import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Pressable,
  Modal,
} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Friend from '../components/Friend';
import getFriends from '../data/Friends';
import { useState } from 'react';

import DeleteFriend from '../components/DeleteFriend';
import DeleteFrinedIcon from '../assets/icons/svg/delete-frined-icon.svg';
import AddFrined from '../assets/icons/svg/add-frined-icon.svg';
import Searching from '../assets/icons/svg/search-icon.svg';
import ChevronRight from '../assets/icons/svg/fi_chevron-right.svg';
import ProfileCollection from '../assets/icons/svg/profile-collection.svg';
import { Shadow } from 'react-native-shadow-2';

const originFriends = getFriends();

function searchedFriend(friendList: typeof originFriends, nickname: string) {
  if (nickname === '') {
    return friendList;
  } else {
    return originFriends.filter(friend => friend.nickname.includes(nickname));
  }
}

export default function SocialScreen() {
  const [showFriendList, setShowFriendList] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.topContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.flatListTitleContainer}>
            <Text style={styles.flatListTitleText}>친구 목록</Text>
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
                width: 100,
                height: 100,
                backgroundColor: Colors.backgroundPurple,
              }}
              onPress={() => setModalVisible(false)}
            >
              <Text>취소</Text>
            </Pressable>

            <Pressable
              style={{
                width: 100,
                height: 100,
                backgroundColor: Colors.textUnfocusedPurple,
              }}
              onPress={() => setModalVisible(false)}
            >
              <Text>완료</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.fixedButtonContainer}>
        <View style={styles.friendOrChattingRoomButtonContainer}>
          <Pressable
            onPress={() => setShowFriendList(true)}
            style={[
              styles.friendOrChattingRoomButton,
              {
                borderBottomColor: showFriendList
                  ? Colors.backgroundPurple
                  : Colors.textUnfocusedPurple,
              },
            ]}
          >
            <Text
              style={{
                color: showFriendList
                  ? Colors.backgroundPurple
                  : Colors.textUnfocusedPurple,
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              친구
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setShowFriendList(false)}
            style={[
              styles.friendOrChattingRoomButton,
              {
                borderBottomColor: showFriendList
                  ? Colors.textUnfocusedPurple
                  : Colors.backgroundPurple,
              },
            ]}
          >
            <Text
              style={{
                color: showFriendList
                  ? Colors.textUnfocusedPurple
                  : Colors.backgroundPurple,
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              채팅방
            </Text>
          </Pressable>
        </View>
        <View style={styles.deleteOrAddFriendButtonContainer}>
          <Pressable
            style={{ width: Layout.Width * 0.12 }}
            onPress={() => setModalVisible(true)}
          >
            <DeleteFrinedIcon width={Layout.Width * 0.07} />
          </Pressable>
          <Pressable style={{ width: Layout.Width * 0.12 }}>
            <AddFrined width={Layout.Width * 0.07} />
          </Pressable>
        </View>
      </View>
      {showFriendList ? (
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <TextInput
              style={styles.searchFriendTextInput}
              placeholder={'친구 검색하기'}
              placeholderTextColor={Colors.textUnfocusedPurple}
              value={keyword}
              onChangeText={(text: string) => setKeyword(text)}
            />

            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Shadow startColor={'#04030550'} offset={[0, 6]} radius={40}>
                <View style={styles.receivedFriendRequestContainer}>
                  <ProfileCollection />
                  <View
                    style={{
                      width: Layout.Width * 0.4,
                      height: Layout.Height * 0.04,
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.textWhite,
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}
                    >
                      친구 요청
                    </Text>
                    <Text
                      style={{
                        color: Colors.textWhite,
                        fontSize: 12,
                        marginVertical: 5,
                      }}
                    >
                      새로운 친구들이 기다리고 있어요!
                    </Text>
                  </View>
                  <View
                    style={{
                      width: Layout.Width * 0.07,
                      height: Layout.Width * 0.07,
                      borderRadius: Layout.Width * 0.07,
                      backgroundColor: Colors.backgroundPurple,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text>5</Text>
                  </View>
                  <ChevronRight />
                </View>
              </Shadow>
            </Pressable>
            <View style={styles.flatListTitleContainer}>
              <Text style={styles.flatListTitleText}>친구 목록</Text>
            </View>
            <FlatList
              data={searchedFriend(originFriends, keyword)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Friend
                  lolingId={item.lolingId}
                  mannerTierImg={item.mannerTierImg}
                  championImg={item.championImg}
                  rank={item.rank}
                  nickname={item.nickname}
                  profileImg={item.profileImg}
                  tier={item.tier}
                  line={item.line}
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
              )}
            />
          </View>
        </ScrollView>
      ) : (
        <Text style={{ color: Colors.textWhite }}>채팅방 목록입니당</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: Layout.Height,
    backgroundColor: Colors.backgroundBlack,
  },
  flatListTitleContainer: {
    width: Layout.Width,
    paddingHorizontal: Layout.Width * 0.077,
    marginTop: Layout.Height * 0.045,
    marginBottom: Layout.Height * 0.022,
    justifyContent: 'flex-start',
  },
  flatListTitleText: {
    color: Colors.textWhite,
    fontSize: 18,
    fontWeight: 'bold',
  },
  topContainer: {
    width: Layout.Width,
    height: Layout.Height,
    paddingVertical: Layout.Height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  fixedButtonContainer: {
    width: Layout.Width,
    height: Layout.Height * 0.058,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  friendOrChattingRoomButtonContainer: {
    width: Layout.Width * 0.4,
    flexDirection: 'row',
  },
  friendOrChattingRoomButton: {
    width: Layout.Width * 0.2,
    height: Layout.Height * 0.058,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
  },
  deleteOrAddFriendButtonContainer: {
    width: Layout.Width * 0.24,
    height: Layout.Height * 0.058,
    flexDirection: 'row',
    alignItems: 'center',
  },
  receivedFriendRequestContainer: {
    width: Layout.Width * 0.86,
    height: Layout.Height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 10,
  },
  searchFriendTextInput: {
    width: Layout.Width * 0.86,
    height: Layout.Height * 0.05,
    paddingHorizontal: 10,
    marginVertical: Layout.Height * 0.03,
    borderBottomWidth: 2,
    borderBottomColor: Colors.textUnfocusedPurple,
    color: Colors.textWhite,
    fontSize: 15,
  },
});
