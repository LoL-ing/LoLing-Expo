import * as React from 'react';
import Logout from '../assets/text_images/logout.svg';
import { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Platform,
  NativeModules,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Styles from '../constants/Styles';
import Menu from '../components/Menu';
import { RootTabScreenProps } from '../types';

import ProfileEdit from '../assets/text_images/profileEdit.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
  const transAnim = useRef(new Animated.Value(0)).current;
  const transAnim2 = useRef(new Animated.Value(0)).current;
  const offset = useRef(new Animated.Value(0)).current;

  const [animValue, setAnimValue] = useState(0);
  const onPressAnimation = () => {
    Animated.sequence([
      Animated.timing(transAnim, {
        toValue: 1,
        useNativeDriver: false,
        duration: 300,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(transAnim2, {
        toValue: 1,
        useNativeDriver: false,
        duration: 1200,
        easing: Easing.out(Easing.exp),
      }),
    ]).start(() => {
      setTimeout(() => {
        transAnim.setValue(0);
        transAnim2.setValue(0);
      }, 100);
    });
    return;
  };

  const onPressAnimationReverse = () => {
    Animated.sequence([
      Animated.timing(transAnim2, {
        toValue: 0,
        useNativeDriver: false,
        duration: 1200,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(transAnim, {
        toValue: 0,
        useNativeDriver: false,
        duration: 300,
        easing: Easing.out(Easing.quad),
      }),
    ]).start(() => {
      // setTimeout(() => {
      //   transAnim.setValue(0);
      //   transAnim2.setValue(0);
      // }, 100);
    });
    return;
  };

  return (
    <View
      style={[
        {
          width: Layout.Width,
          height: Layout.Height,
          flexDirection: 'column',
          paddingBottom:
            Layout.AndroidBottomBarHeight + 49 + useSafeAreaInsets().bottom,
          backgroundColor: Colors.backgroundNavy,
        },
      ]}
    >
      <Animated.View
        style={{
          height: useSafeAreaInsets().top,
          backgroundColor: transAnim2.interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.backgroundPurple, Colors.backgroundBlack],
          }),
        }}
      />

      <Animated.View
        style={[
          styles.header,
          {
            height: transAnim2.interpolate({
              inputRange: [0, 1],
              outputRange: [Layout.Height * 0.3, Layout.Height * 0.12], // 나중에 height 조절
            }),
            backgroundColor: transAnim2.interpolate({
              inputRange: [0, 1],
              outputRange: [Colors.backgroundPurple, Colors.backgroundBlack],
            }),
            borderBottomLeftRadius: transAnim2.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0],
            }),
            borderBottomRightRadius: transAnim2.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0],
            }),
          },
          {
            height: offset.interpolate({
              inputRange: [0, Layout.Height * 0.3],
              outputRange: [Layout.Height * 0.3, Layout.Height * 0.158],
              extrapolate: 'clamp',
            }),
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            transform: [
              {
                translateY: offset.interpolate({
                  inputRange: [0, Layout.Height * 0.3],
                  outputRange: [0, -Layout.Height * 0.142],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <Animated.View
          style={[
            styles.headerContents,
            {
              opacity: transAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
          ]}
        >
          <Image
            source={data.request[0].profileImg}
            style={styles.profileImg}
          />
          <View style={styles.textContainer}>
            <Text style={styles.profileNickName}>
              {data.request[0].nickname}
            </Text>
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
          </View>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}
        style={{
          paddingTop: Layout.Height * 0.142,
          position: 'absolute',
          top: Layout.Height * 0.158,
          left: 0,
          right: 0,
          zIndex: -10,
          height: Layout.Height * 0.842,
        }}
      >
        <Animated.View
          style={{
            opacity: transAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            backgroundColor: Colors.backgroundNavy,
          }}
        >
          <View style={styles.settingBox}>
            <View style={styles.settingfaqText}>
              <Text style={{ color: 'gray', fontSize: Layout.FontScale * 12 }}>
                설정
              </Text>
            </View>
            <Menu
              title="환경설정"
              destination="Settings"
              onPressAnimation={onPressAnimation}
              onPressAnimationReverse={onPressAnimationReverse}
            ></Menu>

            <Menu
              title="앱 가이드"
              destination="ToS"
              onPressAnimation={onPressAnimation}
            ></Menu>

            <Menu
              title="약관 및 정책"
              destination="Welcome"
              onPressAnimation={onPressAnimation}
            ></Menu>

            <Menu
              title="현재 버전 1.0.0"
              destination="SelectMyLineChamp"
              onPressAnimation={onPressAnimation}
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
              onPressAnimation={onPressAnimation}
            ></Menu>
            <Menu
              title="FAQ"
              destination="ChatRoom"
              onPressAnimation={onPressAnimation}
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
              onPressAnimation={onPressAnimation}
            ></Menu>
            <Menu
              title="FAQ"
              destination="ChatRoom"
              onPressAnimation={onPressAnimation}
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
              onPressAnimation={onPressAnimation}
            ></Menu>
            <Menu
              title="FAQ"
              destination="ChatRoom"
              onPressAnimation={onPressAnimation}
            ></Menu>
          </View>
        </Animated.View>
      </Animated.ScrollView>
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
    height: Layout.Height * 0.3,
  },
  headerContents: {
    width: Layout.Width,
    height: Layout.Height * 0.3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  profileImg: {
    width: Layout.Width * 0.139,
    height: Layout.Width * 0.139,
    borderRadius: Layout.Width * 0.07,
    marginTop: Layout.Height * 0.03,
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
