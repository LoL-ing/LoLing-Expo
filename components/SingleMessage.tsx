import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  Text,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import ProfileCardExit from '../assets/icons/svg/profilecard-exit.svg';

import ProfileCard from '../components/ProfileCard';
import getFriends from '../data/Friends';
type propsType = {
  sender: string;
  senderId: number;
  profileImg: ImageSourcePropType;
  isSenderSame: boolean;
  content: string;
  createdAt: string;
};
const profileData = getFriends()[0];
const partnerChat = (
  props: propsType,
  messageColor: StyleProp<ViewStyle>,
  messageBorderStyle: StyleProp<ViewStyle>,
  setProfileModalVisible: { (value: React.SetStateAction<boolean>): void },
) => {
  return (
    <View
      style={[
        styles.chatContainer,
        styles.partnerChatContainer,
        props.isSenderSame
          ? { marginTop: Layout.Height * 0.003 }
          : { marginTop: Layout.Height * 0.016 },
      ]}
    >
      <View>
        {props.isSenderSame ? (
          <View style={styles.profileImg} />
        ) : (
          <Pressable
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            onPress={() => {
              setProfileModalVisible(true);
            }}
          >
            <Image source={props.profileImg} style={styles.profileImg} />
          </Pressable>
        )}
      </View>
      <View style={[styles.messageStyle, messageColor, messageBorderStyle]}>
        <Text style={styles.contentText}>{props.content}</Text>
      </View>
      <Text style={styles.timeText}>{props.createdAt}</Text>
    </View>
  );
};

const myChat = (
  props: propsType,
  messageColor: StyleProp<ViewStyle>,
  messageBorderStyle: StyleProp<ViewStyle>,
) => {
  return (
    <View
      style={[
        styles.chatContainer,
        styles.myChatContainer,
        props.isSenderSame
          ? { marginTop: Layout.Height * 0.003 }
          : { marginTop: Layout.Height * 0.016 },
      ]}
    >
      <Text style={styles.timeText}>{props.createdAt}</Text>
      <View style={[styles.messageStyle, messageColor, messageBorderStyle]}>
        <Text style={styles.contentText}>{props.content}</Text>
      </View>
    </View>
  );
};

type userDataType = {
  nickname: string;
  profileImg: ImageSourcePropType;
  tier: string;
  line: string;
  lolingId: string;
  mannerTierImg: ImageSourcePropType;
  championImg: ImageSourcePropType;
  rank: string;
  winRate: string;
  winLose: string;
  lineImg_1: ImageSourcePropType;
  lineImg_2: ImageSourcePropType;
  line_winRate_1: string;
  line_winRate_2: string;
  line_kda_1: string;
  line_kda_2: string;
  championImg_1: ImageSourcePropType;
  championImg_2: ImageSourcePropType;
  championImg_3: ImageSourcePropType;
  champ_winRate_1: string;
  champ_winRate_2: string;
  champ_winRate_3: string;
  champ_kda_1: string;
  champ_kda_2: string;
  champ_kda_3: string;
  description: string;
};

const modal = (
  props: userDataType,
  profilemodalVisible: boolean,
  setProfileModalVisible: { (value: React.SetStateAction<boolean>): void },
) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={profilemodalVisible}
      onRequestClose={() => {}}
    >
      <TouchableWithoutFeedback onPress={() => setProfileModalVisible(false)}>
        <View
          style={{
            width: Layout.Width,
            height: Layout.Height,
            backgroundColor: 'black',
            opacity: 0.7,
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: Layout.Height * 0.08,
              left: Layout.Width * 0.8,
            }}
          >
            <Pressable
              onPress={() => {
                setProfileModalVisible(false);
              }}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <ProfileCardExit />
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          position: 'absolute',
          top: Layout.Height * 0.12,
          left: Layout.Width * 0.12,
        }}
      >
        <View
          style={{
            alignItems: 'flex-end',
            width: Layout.Width * 0.75,
            paddingBottom: Layout.Height * 0.01,
          }}
        ></View>
        <ProfileCard
          lolingId={props.lolingId}
          mannerTierImg={props.mannerTierImg}
          championImg={props.championImg}
          rank={props.rank}
          nickname={props.nickname}
          winRate={props.winRate}
          winLose={props.winLose}
          lineImg_1={props.lineImg_1}
          lineImg_2={props.lineImg_2}
          line_winRate_1={props.line_winRate_1}
          line_winRate_2={props.line_winRate_2}
          line_kda_1={props.line_kda_1}
          line_kda_2={props.line_kda_2}
          championImg_1={props.championImg_1}
          championImg_2={props.championImg_2}
          championImg_3={props.championImg_3}
          champ_winRate_1={props.champ_winRate_1}
          champ_winRate_2={props.champ_winRate_2}
          champ_winRate_3={props.champ_winRate_3}
          champ_kda_1={props.champ_kda_1}
          champ_kda_2={props.champ_kda_2}
          champ_kda_3={props.champ_kda_3}
          description={props.description}
        />
      </View>
    </Modal>
  );
};

export default function ChattingRoom(props: propsType) {
  const messageColor =
    props.senderId == 1
      ? { backgroundColor: Colors.backgroundBlack }
      : { backgroundColor: Colors.textUnfocusedPurple };
  const messageBorderStyle = props.isSenderSame
    ? undefined
    : props.senderId == 1
    ? styles.myDifferentMessageBorder
    : styles.partnerDifferentMessageBorder;

  const [profilemodalVisible, setProfileModalVisible] = useState(false);
  return (
    <View>
      {modal(profileData, profilemodalVisible, setProfileModalVisible)}
      {props.senderId == 1
        ? myChat(props, messageColor, messageBorderStyle)
        : partnerChat(
            props,
            messageColor,
            messageBorderStyle,
            setProfileModalVisible,
          )}
    </View>
  );
}

const styles = StyleSheet.create({
  profileImg: {
    width: Layout.Width * 0.11,
    height: Layout.Width * 0.11,
    marginRight: Layout.Width * 0.04,
  },
  chatContainer: {
    backgroundColor: Colors.backgroundNavy,
    width: Layout.Width,
    //height: Layout.Width * 0.11,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: Layout.Width * 0.06,
    marginBottom: Layout.Width * 0.01,
  },
  myChatContainer: { justifyContent: 'flex-end' },
  partnerChatContainer: {},
  contentText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 11,
  },
  messageStyle: {
    maxWidth: Layout.Width * 0.7,
    //height: Layout.Width * 0.11,
    minHeight: Layout.Width * 0.11,
    //maxHeight: Layout.Width * 1,
    backgroundColor: Colors.textUnfocusedPurple,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Layout.Width * 0.042,
    borderRadius: 10,
  },
  myDifferentMessageBorder: {
    borderBottomEndRadius: 0,
  },
  partnerDifferentMessageBorder: {
    borderBottomLeftRadius: 0,
  },
  timeText: {
    paddingHorizontal: Layout.Width * 0.02,
    fontSize: Layout.FontScale * 8,
    color: Colors.textUnfocusedPurple,
  },
});
