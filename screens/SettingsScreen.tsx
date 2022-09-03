import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  NativeModules,
  Pressable,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Styles from '../constants/Styles';
import { RootStackScreenProps } from '../types';

import Arrow from '../assets/icons/svg/arrow-left.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { StatusBarManager } = NativeModules;

export default function SettingsScreen(
  { navigation }: RootStackScreenProps<'Settings'>,
  reverseAnimation: any,
) {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData: { height: any }) => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);

  return (
    <View
      style={{
        width: Layout.Width,
        height: Layout.Height,
        flexDirection: 'column',
        paddingBottom:
          Layout.AndroidBottomBarHeight + 49 + useSafeAreaInsets().bottom,
        backgroundColor: Colors.backgroundNavy,
      }}
    >
      <View style={[styles.header, dstyle(statusBarHeight).headerPadding]}>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          onPress={() => {
            reverseAnimation;
            setTimeout(() => navigation.goBack());
          }}
        >
          <Arrow width={Layout.Width * 0.075} />
        </Pressable>
        <Text style={styles.headerText}>환경설정</Text>
      </View>
      <View
        style={{
          width: Layout.Width,
          height: Layout.Height,
          backgroundColor: Colors.backgroundNavy,
        }}
      ></View>
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
    paddingTop: Layout.AndroidStatusBarHeight,
    paddingBottom: Layout.AndroidBottomBarHeight,
    backgroundColor: Colors.backgroundBlack,
  },
  header: {
    width: Layout.Width,
    //height: Layout.Height * 0.1,
    height: (Layout.Height - 48) * 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.backgroundBlack,
  },
  headerText: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: Layout.FontScale * 14,
    textAlign: 'center',
  },
});
