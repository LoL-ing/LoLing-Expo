import { useNavigationState } from '@react-navigation/native';
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
  StatusBar,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Arrow from '../assets/icons/svg/arrow-left.svg';
import OverflowMenu from '../assets/icons/svg/overflow-menu.svg';
import SendMessage from '../assets/icons/svg/send-message.svg';
import ChatAcceptText from '../assets/text_images/chat-accept-text.svg';
import AcceptChatButton from '../assets/icons/svg/accept-chat.svg';
import DenyChatButton from '../assets/icons/svg/deny-chat.svg';

import SingleMessage from '../components/SingleMessage';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Styles from '../constants/Styles';
import { RootStackScreenProps } from '../types';

import { RootStackScreenProps } from '../types';

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
      content: `저랑 듀오같이 해보실래요? 저랑 듀오같이 해보실래요? 저랑 듀오같이 해보실래요?
저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?
저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?
저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?
저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?
저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?
저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?
저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?
저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?저랑 듀오같이 해보실래요?`,
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
      content: `같이하기 싫네요.같이하기 싫네요.같이하기 싫네요.같이하기 싫네요.같이하기 싫네요.
같이하기 싫네요.같이하기 싫네요.같이하기 싫네요.같이하기 싫네요.같이하기 싫네요.
같이하기 싫네요.같이하기 싫네요.같이하기 싫네요.같이하기 싫네요.`,
      createdAt: '00:50AM',
    },
  ],
};
const contents = ({ navigation }: any) => {
  const [message, setMessage] = useState('');
  const [textInput, setTextInput] = useState('');

  return (
    <>
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          onPress={() => navigation.goBack()}
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
      <FlatList
        // style={{
        //   paddingVertical: Layout.Height * 0.01,
        // }}
        data={data.messages}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chatContainer}
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
      <View style={styles.sendMessageContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="메세지를 입력하세요."
          placeholderTextColor={Colors.textGray}
          value={textInput}
          maxLength={200}
          onChangeText={text => {
            setMessage(text);
            setTextInput(text);
          }}
          returnKeyType="send"
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
    </>
  );
};

const acceptModal = ({ navigation }: any) => {
  const [acceptModalVisible, setAcceptModalVisible] = useState(true);
  return acceptModalVisible ? (
    <View style={styles.modalContainer}>
      <ChatAcceptText
        width={Layout.Width * 0.875}
        height={Layout.Height * 0.114}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: Layout.Width,
        }}
      >
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          onPress={() => {
            setAcceptModalVisible(false);
            //친구 요청에서 삭제, 친구 처리, 채팅방에 추가
          }}
        >
          <AcceptChatButton
            width={Layout.Width * 0.42}
            style={styles.acceptButton}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          onPress={() => {
            navigation.goBack();
            //친구 요청에서 삭제
          }}
        >
          <DenyChatButton
            width={Layout.Width * 0.42}
            style={styles.acceptButton}
          />
        </Pressable>
      </View>
    </View>
  ) : undefined;
};

export default function chatroomScreen({
  navigation,
}: RootStackScreenProps<'ChatRoom'>) {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const statusBarHeightAndroid = StatusBar.currentHeight;
  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData: { height: any }) => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);

  return (
    <View>
      <View
        style={[dstyle(statusBarHeight, statusBarHeightAndroid).fullscreen]}
      >
        <StatusBar backgroundColor={Colors.backgroundBlack} />
        {Platform.OS == 'ios' ? (
          <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: Colors.backgroundNavy }}
            behavior={'padding'}
            //keyboardVerticalOffset={statusBarHeight}
          >
            {contents({ navigation })}
          </KeyboardAvoidingView>
        ) : (
          contents({ navigation })
        )}
        {acceptModal({ navigation })}
      </View>
    </View>
  );
}

const dstyle = (ios: number, android: any) =>
  StyleSheet.create({
    fullscreen: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      backgroundColor: Colors.backgroundBlack,
      ...Platform.select({
        ios: {
          paddingTop: ios,
        },
        android: {
          paddingTop: android,
          backgroundColor: Colors.backgroundNavy,
        },
      }),
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
    //flex: 1,
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
    justifyContent: 'center',
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
  modalContainer: {
    height: Layout.Height * 0.27,
    width: Layout.Width,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.textUnfocusedPurple,
    paddingTop: Layout.Height * 0.03,
  },
  acceptButton: {
    marginHorizontal: Layout.Width * 0.0167,
  },
});
