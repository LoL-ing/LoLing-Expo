import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Pressable,
  Image,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  NativeModules,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Arrow from '../assets/icons/svg/arrow-left.svg';
import OverflowMenu from '../assets/icons/svg/overflow-menu.svg';
import SendMessage from '../assets/icons/svg/send-message.svg';

import SingleMessage from '../components/SingleMessage';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Styles from '../constants/Styles';

const { StatusBarManager } = NativeModules;

const data = {
  //데이터 관리를 어떻게 하는지 모르겠어서 일단은 임시로
  //실제로는 sender_id로 닉네임이랑 프로필 이미지 불러올 거 같음
  sender: '유렉가',
  profileImg: require('../assets/images/Irelia.png'),
  messages: [
    {
      senderId: 5,
      content: '안녕하세요.',
      createdAt: '00:47AM',
    },
    {
      senderId: 1,
      content: '반갑습니다 ~~~',
      createdAt: '00:47AM',
    },
    {
      senderId: 5,
      content: '괜찮으시다면',
      createdAt: '00:49AM',
    },
    {
      senderId: 5,
      content: '저랑 듀오같이 해보실래요?',
      createdAt: '00:49AM',
    },
    {
      senderId: 1,
      content: '프로필보니까',
      createdAt: '00:49AM',
    },
    {
      senderId: 1,
      content: '같이하기 싫네요.',
      createdAt: '00:50AM',
    },
    {
      senderId: 1,
      content: '같이하기 싫네요.',
      createdAt: '00:50AM',
    },
    {
      senderId: 1,
      content: '같이하기 싫네요.',
      createdAt: '00:50AM',
    },
  ],
};

export default function chatroomScreen() {
  const [message, setMessage] = useState('');
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData: { height: any }) => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[dstyle(statusBarHeight).fullscreen]}>
        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            onPress={() => {}}
          >
            <Arrow width={Layout.Width * 0.075} />
          </Pressable>
          <Text style={styles.chatRoomTitle}>{data.sender}</Text>
          <Pressable
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            onPress={() => {}}
          >
            <OverflowMenu width={Layout.Width * 0.075} />
          </Pressable>
        </View>
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: Colors.backgroundNavy }}
          behavior={'padding'}
          //keyboardVerticalOffset={statusBarHeight}
        >
          <View style={styles.chatContainer}>
            <FlatList
              // style={{
              //   paddingVertical: Layout.Height * 0.01,
              // }}
              data={data.messages}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <SingleMessage
                    sender={data.sender}
                    senderId={item.senderId}
                    profileImg={data.profileImg}
                    createdAt={item.createdAt}
                    content={item.content}
                    isSenderSame={
                      index != 0
                        ? item.senderId === data.messages[index - 1].senderId
                        : false
                    }
                  />
                );
              }}
            />
          </View>
          <View style={styles.sendMessageContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="메세지를 입력하세요."
              placeholderTextColor={Colors.textGray}
              value={textInput}
              onChangeText={text => {
                setMessage(text);
                setTextInput(text);
              }}
              returnKeyType="send"
              //return key 누른 후 전송 작업
            />
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => {
                Keyboard.dismiss();
                setTextInput('');
                //전송 작업
              }}
            >
              <SendMessage width={Layout.Width * 0.11} style={{}} />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const dstyle = (param1: number) =>
  StyleSheet.create({
    fullscreen: {
      paddingTop: param1,
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      backgroundColor: Colors.backgroundBlack,
    },
  });

const styles = StyleSheet.create({
  header: {
    width: Layout.Width,
    height: Layout.Height * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Layout.Width * 0.028,
    backgroundColor: Colors.backgroundBlack,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundNavy,
  },
  chatRoomTitle: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: Layout.FontScale * 14,
    textAlign: 'center',
  },
  sendMessageContainer: {
    width: Layout.Width,
    height: Layout.Height * 0.08,
    paddingBottom: Layout.Height * 0.015,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.textUnfocusedPurple,
    paddingLeft: Layout.Width * 0.064,
    paddingRight: Layout.Width * 0.016,
    // position: 'absolute',
    // bottom: 0,
  },
  textInput: {
    height: Layout.Width * 0.11,
    width: Layout.Width * 0.78,
    borderBottomColor: Colors.textGray,
    borderBottomWidth: 1,
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 12,
  },
});
