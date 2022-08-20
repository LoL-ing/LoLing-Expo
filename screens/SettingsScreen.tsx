import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, NativeModules } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Styles from '../constants/Styles';
import { RootStackScreenProps } from '../types';

import Arrow from '../assets/icons/svg/arrow-left.svg';

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
    height: Layout.Height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundBlack,
  },
});
