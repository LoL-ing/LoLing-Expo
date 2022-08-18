import * as React from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  NativeModules,
  ScrollView,
} from 'react-native';
import { RootTabScreenProps } from '../types';
import Menu from '../components/Menu';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import ProfileEdit from '../assets/text_images/profileEdit.svg';
import Logout from '../assets/text_images/logout.svg';
import { useEffect, useState } from 'react';

const data = {
  request: [
    {
      profileImg: require('../assets/images/Irelia.png'),
      nickname: '하아아아푸움',
      email: 'fmadudid@gmail.com',
    },
  ],
};
const { StatusBarManager } = NativeModules;
export default function MoreScreen({ navigation }: RootTabScreenProps<'More'>) {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData: { height: any }) => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);
  return (
    <View style={[Styles.fullscreen]}>
      <View style={[styles.header, dstyle(statusBarHeight).headerPadding]}>
        <Image source={data.request[0].profileImg} style={styles.profileImg} />
        <View style={styles.textContainer}>
          <Text style={styles.profileNickName}>{data.request[0].nickname}</Text>
          <Text style={styles.profileEmail}>{data.request[0].email}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
            onPress={() => navigation.navigate('Profile')}
          >
            <ProfileEdit width={Layout.Width * 0.73} />
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Logout width={Layout.Width * 0.11} />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={styles.settingBox}>
          <View style={styles.settingfaqText}>
            <Text style={{ color: 'gray', fontSize: Layout.FontScale * 12 }}>
              설정
            </Text>
          </View>
          <Menu
            title="환경설정"
            destination="Settings"
            navigate={navigation.navigate}
          ></Menu>

          <Menu
            title="앱 가이드"
            destination="ToS"
            navigate={navigation.navigate}
          ></Menu>

          <Menu
            title="약관 및 정책"
            destination="Welcome"
            navigate={navigation.navigate}
          ></Menu>

          <Menu
            title="현재 버전 1.0.0"
            destination="SelectMyLineChamp"
            navigate={navigation.navigate}
          ></Menu>
        </View>
        <View style={styles.faqBox}>
          <View style={styles.settingfaqText}>
            <Text style={{ color: 'gray', fontSize: Layout.FontScale * 12 }}>
              문의
            </Text>
          </View>
          <Menu
            title="고객센터"
            destination="SignIn"
            navigate={navigation.navigate}
          ></Menu>

          <Menu
            title="FAQ"
            destination="ToS"
            navigate={navigation.navigate}
          ></Menu>
        </View>
      </ScrollView>
    </View>
  );
}

const dstyle = (ios: number) =>
  StyleSheet.create({
    headerPadding: {
      paddingTop: ios,
    },
  });

const styles = StyleSheet.create({
  header: {
    width: Layout.Width,
    height: Layout.Height * 0.375,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.backgroundPurple,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImg: {
    width: Layout.Width * 0.139,
    height: Layout.Width * 0.139,
    borderRadius: Layout.Width * 0.07,
    marginTop: Layout.Height * 0.06,
  },
  profileNickName: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: Layout.FontScale * 18,
  },
  profileEmail: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 'normal',
    fontSize: Layout.FontScale * 12,
  },
  settingBox: {
    width: Layout.Width * 0.86,
    height: Layout.Height * 0.32,
    marginTop: Layout.Height * 0.026,
    marginVertical: Layout.Height * 0.013,
    marginHorizontal: Layout.Width * 0.07,
    paddingVertical: Layout.Height * 0.015,
    backgroundColor: '#2F2F4E',
    alignItems: 'center',
    borderRadius: 10,
  },
  faqBox: {
    width: Layout.Width * 0.86,
    height: Layout.Height * 0.21,
    marginVertical: Layout.Height * 0.013,
    marginHorizontal: Layout.Width * 0.07,
    paddingVertical: Layout.Height * 0.015,
    backgroundColor: '#2F2F4E',
    alignItems: 'center',
    borderRadius: 10,
  },
  settingfaqText: {
    width: Layout.Width * 0.7,
    height: Layout.Height * 0.02,
    marginVertical: Layout.Height * 0.015,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: Layout.Width,
    alignItems: 'center',
    paddingHorizontal: Layout.Width * 0.06,
    justifyContent: 'space-around',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Layout.Height * 0.05,
  },
});
