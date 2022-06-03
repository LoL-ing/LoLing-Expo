import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Pressable,
  Modal,
  Image,
} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Friend from '../components/Friend';
import getFriends from '../data/Friends';
import { useState } from 'react';

import DeleteFrined from '../assets/icons/svg/delete-frined-icon.svg';
import AddFrined from '../assets/icons/svg/add-frined-icon.svg';
import Searching from '../assets/icons/svg/search-icon.svg';
import ChevronRight from '../assets/icons/svg/fi_chevron-right.svg';

import Top from '../assets/icons/svg/top-icon-selected.svg';
import Bottom from '../assets/icons/svg/bottom-icon-selected.svg';
import Mid from '../assets/icons/svg/middle-icon-selected.svg';
import Jungle from '../assets/icons/svg/jungle-icon-selected.svg';
import Support from '../assets/icons/svg/support-icon-selected.svg';
import Delete from '../assets/icons/svg/delete-icon.svg';

import ProfileCollection from '../assets/icons/svg/profile-collection.svg';
import { Shadow } from 'react-native-shadow-2';

const originFriends = getFriends();

function searchedFriend(friendList: typeof originFriends, nickname: string) {
  if (nickname === '') {
    return originFriends;
  } else {
    return originFriends.filter(friend => friend.nickname.includes(nickname));
  }
}

export default function SocialScreen() {
  const [showFriendList, setShowFriendList] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            backgroundColor: Colors.backgroundBlack,
            height: Layout.Height,
          }}
        >
          <View
            style={{
              width: Layout.Width,
              justifyContent: 'flex-start',
              paddingHorizontal: Layout.Width * 0.077,
              marginTop: Layout.Height * 0.045,
              marginBottom: Layout.Height * 0.022,
            }}
          >
            <Text
              style={{
                color: Colors.textWhite,
                fontWeight: 'bold',
                fontSize: 18,
              }}
            >
              친구 목록
            </Text>
          </View>

          <FlatList
            data={originFriends}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  paddingHorizontal: Layout.Width * 0.077,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: Layout.Width,
                  height: Layout.Height * 0.11,
                })}
                onPress={() => setModalVisible(true)}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={item.profileImg}
                    style={styles.profileImg}
                  ></Image>
                  <View
                    style={{
                      marginHorizontal: Layout.Width * 0.06,
                      height: Layout.Height * 0.06,
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={styles.nickname}>{item.nickname}</Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Text style={styles.tier}>{item.tier}</Text>

                      {item.line == 'top' ? (
                        <Top
                          width={Layout.Width * 0.05}
                          style={{ marginLeft: 10 }}
                        />
                      ) : item.line == 'bottom' ? (
                        <Bottom
                          width={Layout.Width * 0.05}
                          style={{ marginLeft: 10 }}
                        />
                      ) : item.line == 'mid' ? (
                        <Mid
                          width={Layout.Width * 0.05}
                          style={{ marginLeft: 10 }}
                        />
                      ) : item.line == 'jungle' ? (
                        <Jungle
                          width={Layout.Width * 0.05}
                          style={{ marginLeft: 10 }}
                        />
                      ) : (
                        <Support
                          width={Layout.Width * 0.05}
                          style={{ marginLeft: 10 }}
                        />
                      )}
                    </View>
                  </View>
                </View>
                <Delete />
              </Pressable>
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

      <View
        style={{
          width: Layout.Width,
          height: Layout.Height * 0.058,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            width: Layout.Width * 0.4,
            flexDirection: 'row',
          }}
        >
          <Pressable
            onPress={() => setShowFriendList(true)}
            style={{
              width: Layout.Width * 0.2,
              height: Layout.Height * 0.058,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: showFriendList
                ? Colors.backgroundPurple
                : Colors.textUnfocusedPurple,
              borderBottomWidth: 2,
              flexDirection: 'row',
            }}
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
            style={{
              width: Layout.Width * 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: showFriendList
                ? Colors.textUnfocusedPurple
                : Colors.backgroundPurple,
              borderBottomWidth: 2,
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                color: showFriendList
                  ? Colors.textUnfocusedPurple
                  : Colors.backgroundPurple,
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              채팅방
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            width: Layout.Width * 0.24,
            height: Layout.Height * 0.058,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Pressable
            style={{ width: Layout.Width * 0.12 }}
            onPress={() => setModalVisible(true)}
          >
            <DeleteFrined width={Layout.Width * 0.07} />
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
              style={{
                width: Layout.Width * 0.86,
                height: Layout.Height * 0.05,
                borderBottomWidth: 2,
                borderBottomColor: Colors.textUnfocusedPurple,
                paddingHorizontal: 10,
                marginVertical: Layout.Height * 0.03,
                color: Colors.textWhite,
                fontSize: 15,
              }}
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
                <View
                  style={{
                    width: Layout.Width * 0.86,
                    height: Layout.Height * 0.1,
                    backgroundColor: Colors.backgroundNavy,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    borderRadius: 10,
                  }}
                >
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
            <View
              style={{
                width: Layout.Width,
                justifyContent: 'flex-start',
                paddingHorizontal: Layout.Width * 0.077,
                marginTop: Layout.Height * 0.045,
                marginBottom: Layout.Height * 0.022,
              }}
            >
              <Text
                style={{
                  color: Colors.textWhite,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}
              >
                친구 목록
              </Text>
            </View>
            <FlatList
              data={searchedFriend(originFriends, keyword)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Friend
                  nickname={item.nickname}
                  profileImg={item.profileImg}
                  tier={item.tier}
                  line={item.line}
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
  container: {
    width: Layout.Width,
    height: Layout.Height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundBlack,
    paddingVertical: Layout.Height * 0.05,
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
});
