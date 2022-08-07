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
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

type propsType = {
  sender: string;
  senderId: number;
  profileImg: ImageSourcePropType;
  isSenderSame: boolean;
  content: string;
  createdAt: string;
};

const partnerChat = (
  props: propsType,
  messageColor: StyleProp<ViewStyle>,
  messageBorderStyle: StyleProp<ViewStyle>,
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
            onPress={() => {}}
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

  return (
    <View>
      {props.senderId == 1
        ? myChat(props, messageColor, messageBorderStyle)
        : partnerChat(props, messageColor, messageBorderStyle)}
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
    height: Layout.Width * 0.11,
    backgroundColor: Colors.textUnfocusedPurple,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Layout.Width * 0.042,
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
