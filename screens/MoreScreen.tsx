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
  LayoutAnimation,
  UIManager,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Styles from '../constants/Styles';
import Menu from '../components/Menu';
import { RootTabScreenProps } from '../types';

import ProfileEdit from '../assets/text_images/profileEdit.svg';
import ProfileDetail from '../assets/text_images/profileDetail.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const data = {
  request: [
    {
      profileImg: require('../assets/images/Irelia.png'),
      nickname: '하아아아아품',
      email: 'fmadudid@gmail.com',
    },
  ],
};
const { StatusBarManager } = NativeModules;

export default function MoreScreen({ navigation }: RootTabScreenProps<'More'>) {
  const transAnim = useRef(new Animated.Value(0)).current;
  const transAnim2 = useRef(new Animated.Value(0)).current;
  const offset = useRef(new Animated.Value(0)).current;
  const [textAnim, setTextAnim] = useState('center');
  const [value, setValue] = useState(0);
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const changeTextStyle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    offset.addListener(({ value }) => {
      setValue(value);
    });
    setTextAnim(value < HEADER - AFTERHEADER ? 'center' : 'flex-start');
  };

  useEffect(() => {
    changeTextStyle();
    console.log(textAnim);
  }, [offset]);
  const HEADER = Layout.Height * 0.375;
  const AFTERHEADER = Layout.Height * 0.158;

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
          position: 'absolute',
          top: 0,
        }}
      />

      <Animated.View
        style={[
          {
            height: transAnim2.interpolate({
              inputRange: [0, 1],
              outputRange: [HEADER, Layout.Height * 0.12], // 나중에 height 조절
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
            width: Layout.Width,
            height: HEADER,

            height: offset.interpolate({
              inputRange: [0, HEADER - AFTERHEADER],
              outputRange: [HEADER, AFTERHEADER],
              extrapolate: 'clamp',
            }),
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            // alignItems: 'center',
            // justifyContent: 'center',
            paddingTop: Layout.Height * 0.05,
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
          <Animated.Image
            source={data.request[0].profileImg}
            style={[
              styles.profileImg,
              {
                transform: [
                  {
                    translateX: offset.interpolate({
                      inputRange: [0, HEADER - AFTERHEADER],
                      outputRange: [0, -Layout.Width * 0.34],
                      extrapolate: 'clamp',
                    }),
                  },
                  {
                    translateY: offset.interpolate({
                      inputRange: [0, HEADER - AFTERHEADER],
                      outputRange: [0, -Layout.Height * 0.035],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
          />
          <View
            style={[
              styles.textContainer,
              textAnim === 'center'
                ? { alignItems: 'center' }
                : { alignItems: 'flex-start' },
            ]}
          >
            <Animated.Text
              style={[
                styles.profileNickName,
                {
                  transform: [
                    {
                      translateX: offset.interpolate({
                        inputRange: [0, HEADER - AFTERHEADER],
                        outputRange: [0, -Layout.Width * 0.04],
                        extrapolate: 'clamp',
                      }),
                    },
                    {
                      translateY: offset.interpolate({
                        inputRange: [0, HEADER - AFTERHEADER],
                        outputRange: [0, -Layout.Height * 0.12],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}
            >
              {data.request[0].nickname}
            </Animated.Text>
            <Animated.Text
              style={[
                styles.profileEmail,
                {
                  transform: [
                    {
                      translateY: offset.interpolate({
                        inputRange: [0, HEADER - AFTERHEADER],
                        outputRange: [0, -Layout.Height * 0.12],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}
            >
              {data.request[0].email}
            </Animated.Text>
          </View>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
            onPress={() => navigation.navigate('Profile')}
          >
            <Animated.View
              style={[
                styles.buttonsContainer,
                {
                  width: offset.interpolate({
                    inputRange: [0, HEADER - AFTERHEADER],
                    outputRange: [Layout.Width * 0.866, Layout.Width * 0.12],
                    extrapolate: 'clamp',
                  }),
                  backgroundColor: offset.interpolate({
                    inputRange: [0, HEADER - AFTERHEADER],
                    outputRange: ['#7B43DB', '#8C55EA'],
                    extrapolate: 'clamp',
                  }),
                  transform: [
                    {
                      translateX: offset.interpolate({
                        inputRange: [0, HEADER - AFTERHEADER],
                        outputRange: [0, Layout.Width * 0.37],
                        extrapolate: 'clamp',
                      }),
                    },
                    {
                      translateY: offset.interpolate({
                        inputRange: [0, HEADER - AFTERHEADER],
                        outputRange: [0, -Layout.Height * 0.2],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}
            >
              <Animated.View
                style={{
                  transform: [
                    {
                      translateX: offset.interpolate({
                        inputRange: [0, HEADER - AFTERHEADER],
                        outputRange: [0, Layout.Width * 0.11],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                }}
              >
                <ProfileEdit style={{ width: Layout.Width * 0.0388 }} />
              </Animated.View>
              <Animated.View
                style={{
                  transform: [
                    {
                      translateX: offset.interpolate({
                        inputRange: [0, HEADER - AFTERHEADER],
                        outputRange: [0, Layout.Width * 0.11],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                  opacity: offset.interpolate({
                    inputRange: [0, HEADER - AFTERHEADER],
                    outputRange: [1, 0],
                  }),
                }}
              >
                <ProfileDetail
                  style={{
                    width: Layout.Width * 0.22,
                    marginLeft: Layout.Width * 0.033,
                  }}
                />
              </Animated.View>
            </Animated.View>
          </Pressable>
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
          {
            useNativeDriver: false,
          },
        )}
      >
        <Animated.View
          style={{
            opacity: transAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            backgroundColor: Colors.backgroundNavy,
            marginTop: AFTERHEADER,
            paddingTop: HEADER - AFTERHEADER,
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
    width: Layout.Width * 0.87,
    height: Layout.Height * 0.055,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7B43DB',
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Layout.Height * 0.06,
  },
});
