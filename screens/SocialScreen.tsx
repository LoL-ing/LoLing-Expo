import * as React from 'react';
import { useRef, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Pressable,
  StatusBar,
  FlatList,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Friend from '../components/Friend';
import ChattingRoom from '../components/ChattingRoom';
import getChatRooms from '../data/ChatRooms';
import getFriends from '../data/Friends';
import { RootStackScreenProps } from '../types';

import DeleteFrinedIcon from '../assets/icons/svg/delete-frined-icon.svg';
import AddFrined from '../assets/icons/svg/add-frined-icon.svg';
import ChevronRight from '../assets/icons/svg/fi_chevron-right.svg';
import ProfileCollection from '../assets/icons/svg/profile-collection.svg';
import FriendRequest from '../assets/icons/svg/friend-request.svg';
import FriendList from '../assets/icons/svg/friend-list.svg';
import FriendOn from '../assets/icons/svg/friend-on.svg';
import FriendOff from '../assets/icons/svg/friend-off.svg';
import ChatRoomOn from '../assets/icons/svg/chatroom-on.svg';
import ChatRoomOff from '../assets/icons/svg/chatroom-off.svg';
import SearchIcon from '../assets/icons/svg/search-icon.svg';
import FriendRequestText from '../assets/text_images/friendRequestText.svg';
import FriendRequestExit from '../assets/icons/svg/profilecard-exit.svg';
import DeleteNo from '../assets/icons/svg/delete-no.svg';
import DeleteYes from '../assets/icons/svg/delete-yes.svg';

const originFriends = getFriends();
const chattingRooms = getChatRooms();

const totalNumberOfMessages = chattingRooms
  .map(chattingRoom => chattingRoom.numberOfMessage)
  .reduce((prev, curr) => prev + curr, 0);

function searchedFriend(friendList: typeof originFriends, nickname: string) {
  if (nickname === '') {
    return friendList;
  } else {
    return originFriends.filter(friend => friend.nickname.includes(nickname));
  }
}

function searchedChattingRoom(
  ChattingRoomList: typeof chattingRooms,
  nickname: string,
) {
  if (nickname === '') {
    return chattingRooms;
  } else {
    return chattingRooms.filter(room => room.nickname.includes(nickname));
  }
}

export default function SocialScreen({
  navigation,
}: RootStackScreenProps<'Social'>) {
  const [index, setIndex] = useState(0);
  const [friendKeyword, setFriendKeyword] = useState('');
  const [chattingRoomKeyword, setChattingRoomKeyword] = useState('');
  const [friendRequestKeyword, setFriendRequestKeyword] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  const [friendRequestModalVisible, setFriendRequestModalVisible] =
    useState(false);

  return (
    <View style={styles.topContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={friendRequestModalVisible}
        onRequestClose={() => {
          setFriendRequestModalVisible(!friendRequestModalVisible);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => setFriendRequestModalVisible(false)}
        >
          <View
            style={{
              width: Layout.Width,
              height: Layout.Height,
              backgroundColor: ' black',
              opacity: 0.7,
            }}
          ></View>
        </TouchableWithoutFeedback>
        <View
          style={{
            width: Layout.Width * 0.83,
            height: Layout.Height * 0.23,
            alignItems: 'center',
            backgroundColor: '#23233F',
            borderRadius: 10,
            position: 'absolute',
            top: Layout.Height * 0.38,
            left: Layout.Width * 0.08,
          }}
        >
          <View
            style={{
              width: Layout.Width * 0.75,
              height: Layout.Height * 0.06,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ width: Layout.Width * 0.066 }}></View>
            <FriendRequestText width={Layout.Width * 0.16} />
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => setFriendRequestModalVisible(false)}
            >
              <FriendRequestExit />
            </Pressable>
          </View>
          <View
            style={{
              width: Layout.Width * 0.72,
              height: Layout.Height * 0.055,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: Layout.Height * 0.01,
              backgroundColor: '#353565',
              borderRadius: 30,
            }}
          >
            <TextInput
              style={styles.searchFriendRequestTextInput}
              placeholder={'롤링 닉네임을 입력하세요.'}
              placeholderTextColor={Colors.textUnfocusedPurple}
              value={friendRequestKeyword}
              onChangeText={(text: string) => setFriendRequestKeyword(text)}
            />
            <SearchIcon
              style={{
                marginLeft: -(Layout.Width * 0.08),
              }}
              width={Layout.Width * 0.066}
              height={Layout.Height * 0.033}
            />
          </View>
          <View
            style={{
              width: Layout.Width * 0.75,
              height: Layout.Height * 0.06,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => setFriendRequestModalVisible(false)}
            >
              <DeleteNo width={Layout.Width * 0.35} />
            </Pressable>
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            >
              <DeleteYes width={Layout.Width * 0.35} />
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.fixedButtonContainer}>
        <View style={styles.friendOrChattingRoomButtonContainer}>
          <Pressable
            onPress={() => {
              scrollViewRef.current?.scrollTo({
                x: 0,
                animated: true,
              });
            }}
            style={[
              styles.friendOrChattingRoomButton,
              {
                borderBottomColor:
                  index < 1
                    ? Colors.backgroundPurple
                    : Colors.textUnfocusedPurple,
              },
            ]}
          >
            {index < 1 ? (
              <FriendOn
                width={Layout.Width * 0.083}
                height={Layout.Height * 0.025}
              />
            ) : (
              <FriendOff
                width={Layout.Width * 0.083}
                height={Layout.Height * 0.025}
              />
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              scrollViewRef.current?.scrollTo({
                x: Layout.Width,
                animated: true,
              });
            }}
            style={[
              styles.friendOrChattingRoomButton,
              {
                borderBottomColor:
                  index < 1
                    ? Colors.textUnfocusedPurple
                    : Colors.backgroundPurple,
              },
              {
                width:
                  totalNumberOfMessages > 999
                    ? Layout.Width * 0.3
                    : totalNumberOfMessages > 99
                    ? Layout.Width * 0.27
                    : totalNumberOfMessages > 0
                    ? Layout.Width * 0.24
                    : Layout.Width * 0.2,
              },
            ]}
          >
            {index < 1 ? (
              <ChatRoomOff
                width={Layout.Width * 0.125}
                height={Layout.Height * 0.025}
              />
            ) : (
              <ChatRoomOn
                width={Layout.Width * 0.125}
                height={Layout.Height * 0.025}
              />
            )}
            {totalNumberOfMessages > 0 ? (
              <View
                style={{
                  width:
                    totalNumberOfMessages > 999
                      ? Layout.Width * 0.1
                      : totalNumberOfMessages > 99
                      ? Layout.Width * 0.07
                      : Layout.Width * 0.05,
                  height: Layout.Width * 0.05,
                  borderRadius: Layout.Width * 0.05,
                  backgroundColor: Colors.backgroundPurple,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginLeft: 7,
                }}
              >
                {totalNumberOfMessages > 999 ? (
                  <Text
                    style={{
                      color: Colors.textWhite,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    999+
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: Colors.textWhite,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    {totalNumberOfMessages}
                  </Text>
                )}
              </View>
            ) : undefined}
          </Pressable>
        </View>
        <View style={styles.deleteOrAddFriendButtonContainer}>
          <Pressable
            style={{ width: Layout.Width * 0.12 }}
            onPress={() => navigation.navigate('DeleteFriend')}
          >
            <DeleteFrinedIcon width={Layout.Width * 0.07} />
          </Pressable>
          <Pressable
            style={{ width: Layout.Width * 0.12 }}
            onPress={() => setFriendRequestModalVisible(true)}
          >
            <AddFrined width={Layout.Width * 0.07} />
          </Pressable>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        ref={scrollViewRef}
        onScroll={e => {
          const newIndex = Math.round(
            e.nativeEvent.contentOffset.x / (Layout.Width * 0.86),
          );
          setIndex(newIndex);
        }}
      >
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <TextInput
                style={styles.searchFriendTextInput}
                placeholder={'친구 검색하기'}
                placeholderTextColor={Colors.textUnfocusedPurple}
                value={friendKeyword}
                onChangeText={(text: string) => setFriendKeyword(text)}
              />
              <SearchIcon
                style={{
                  marginLeft: -(Layout.Width * 0.067),
                  marginTop: Layout.Height * 0.04,
                }}
                width={Layout.Width * 0.067}
                height={Layout.Height * 0.033}
              />
            </View>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => navigation.navigate('FriendRequest')}
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
                    <FriendRequest
                      width={Layout.Width * 0.395}
                      height={Layout.Height * 0.044}
                    />
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
              <FriendList
                width={Layout.Width * 0.156}
                height={Layout.Height * 0.022}
              />
            </View>
            <FlatList
              data={searchedFriend(originFriends, friendKeyword)}
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
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <TextInput
                style={styles.searchFriendTextInput}
                placeholder={'채팅방 검색하기'}
                placeholderTextColor={Colors.textUnfocusedPurple}
                value={chattingRoomKeyword}
                onChangeText={(text: string) => setChattingRoomKeyword(text)}
              />
              <SearchIcon
                style={{
                  marginLeft: -(Layout.Width * 0.067),
                  marginTop: Layout.Height * 0.04,
                }}
                width={Layout.Width * 0.067}
                height={Layout.Height * 0.033}
              />
            </View>
            <FlatList
              data={searchedChattingRoom(chattingRooms, chattingRoomKeyword)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <ChattingRoom
                  nickname={item.nickname}
                  profileImg={item.profileImg}
                  recentMessage={item.recentMessage}
                  numberOfMessage={item.numberOfMessage}
                />
              )}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListTitleContainer: {
    width: Layout.Width,
    paddingHorizontal: Layout.Width * 0.077,
    marginTop: Layout.Height * 0.045,
    marginBottom: Layout.Height * 0.022,
    justifyContent: 'flex-start',
  },
  topContainer: {
    width: Layout.Width,
    height: Layout.Height,
    // paddingTop: StatusBar.currentHeight,
    paddingTop: Layout.Height * 0.045,
    paddingBottom: Layout.AndroidBottomBarHeight * 2,
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
    width: Layout.Width * 0.85,
    height: Layout.Height * 0.05,
    paddingHorizontal: Layout.Width * 0.01,
    marginVertical: Layout.Height * 0.03,
    borderBottomWidth: 2,
    borderBottomColor: Colors.textUnfocusedPurple,
    color: Colors.textWhite,
    fontSize: 15,
  },
  searchFriendRequestTextInput: {
    width: Layout.Width * 0.7,
    height: Layout.Height * 0.05,
    paddingHorizontal: Layout.Width * 0.05,
    marginVertical: Layout.Height * 0.03,
    color: Colors.textWhite,
    fontSize: 15,
  },
});
