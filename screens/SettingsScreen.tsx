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

import Arrow from '../assets/icons/svg/arrow-left.svg';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Styles from '../constants/Styles';
import { RootStackScreenProps } from '../types';

const { StatusBarManager } = NativeModules;

export default function SettingsScreen({
  navigation,
}: RootStackScreenProps<'Settings'>) {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData: { height: any }) => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);

  return (
    <View style={[Styles.fullscreen, styles.fullscreen]}>
      <View style={[styles.header, dstyle(statusBarHeight).headerPadding]}>
        <Arrow width={Layout.Width * 0.075} />
        <Text>환경설정</Text>
      </View>
    </View>
  );
}

const dstyle = (ios: number) =>
  StyleSheet.create({
    headerPadding: {
      ...Platform.select({
        ios: {
          paddingTop: ios,
        },
      }),
    },
  });

const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: Colors.backgroundNavy,
  },
  header: {
    width: Layout.Width,
    //height: Layout.Height * 0.086,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
