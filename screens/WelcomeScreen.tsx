import { tsConstructorType } from '@babel/types';
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  InteractionManagerStatic,
} from 'react-native';
import { TextInput, Text, View, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import { RootStackScreenProps } from '../types';
import Layout from '../constants/Layout';
import Welcome from '../assets/text_images/welcome.svg';
import Nickname from '../assets/text_images/nickname.svg';
import Description from '../assets/text_images/description.svg';
import MatchingStartUnfocused from '../assets/text_images/matchingStart-unfocused.svg';
import LolaccountUnfocused from '../assets/text_images/lolaccount-unfocused.svg';
import SignupCompleteFocused from '../assets/text_images/signupComplete-focused.svg';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default function WelcomeScreen({
  navigation,
}: RootStackScreenProps<'Welcome'>) {
  const [nickname, setNickname] = useState('');
  const [description, setDescription] = useState('');
  const [countvalue, setCount] = useState(0);

  const [isNicknameFocused, setIsNicknameFocused] = useState(false);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  const [isNicknameInit, setIsNicknameInit] = useState(true);
  const [isCheckedDuplicateNickname, setIsCheckedDuplicateNickname] =
    useState(false);

  const nicknameField = useRef<TextInput>(null);
  const descriptionField = useRef<TextInput>(null);

  const checkDuplicateNickname = (input: string) => {
    if (input === '') {
      setIsNicknameInit(true);
    } else if (input === '김수돌') {
      setIsCheckedDuplicateNickname(false);
      setIsNicknameInit(false);
    } else {
      setIsCheckedDuplicateNickname(true);
      setIsNicknameInit(false);
    }
  };
  /* animation */
  const settingAnim = useRef(new Animated.Value(0)).current;
  const welcomeUpAnim = useRef(new Animated.Value(Height * 0.9)).current;
  const changeMatchingBtnAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // + signupscreen에서 fadeout 200ms
      Animated.parallel([
        Animated.timing(welcomeUpAnim, {
          toValue: Height * 0.25,
          duration: 1200,
          useNativeDriver: true,
          delay: 300,
        }),
        Animated.timing(changeMatchingBtnAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
          delay: 300,
        }),
      ]),
      Animated.parallel([
        Animated.timing(settingAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          delay: 800,
        }),
        Animated.timing(welcomeUpAnim, {
          toValue: Height * 0.01,
          duration: 600,
          useNativeDriver: true,
          delay: 800,
        }),
      ]),
    ]).start();
  }, []);
  /* end of animation */

  const countValue = (input: string) => {
    setCount(input.length);
  };

  return (
    <SafeAreaView style={[Styles.fullscreen, { alignItems: 'center' }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
      >
        <Animated.View
          style={{
            alignItems: 'center',
            transform: [{ translateY: welcomeUpAnim }],
          }}
        >
          <View style={[styles.titleContainer, { alignItems: 'center' }]}>
            <Welcome width={Layout.Width * 0.35} />
          </View>
        </Animated.View>

        <Animated.View
          style={{
            opacity: settingAnim,
          }}
        >
          <View style={styles.subContainer}>
            <Nickname width={Layout.Width * 0.12} />
            <Text
              style={[
                styles.descriptionText,
                {
                  color: isNicknameInit
                    ? Colors.textGray
                    : isCheckedDuplicateNickname
                    ? Colors.textFocusedPurple
                    : Colors.textRed,
                },
              ]}
            >
              {isNicknameInit
                ? `8자 이내로 입력해주세요`
                : isCheckedDuplicateNickname
                ? `사용 가능한 닉네임입니다!`
                : `사용 중인 닉네임입니다.`}
            </Text>
            <TextInput
              style={[
                styles.fullTextInput,
                isNicknameInit
                  ? isNicknameFocused
                    ? styles.focusedTextInput
                    : styles.unfocusedTextInput
                  : isCheckedDuplicateNickname
                  ? isNicknameFocused
                    ? styles.focusedTextInput
                    : styles.unfocusedTextInput
                  : styles.errorTextInput,
              ]}
              placeholder="닉네임"
              placeholderTextColor={
                isNicknameFocused
                  ? Colors.textWhite
                  : Colors.textUnfocusedPurple
              }
              returnKeyType="next"
              onFocus={() => {
                setIsNicknameFocused(true);
              }}
              onBlur={() => {
                // setIsNicknameInit(false);
                setIsNicknameFocused(false);
                setIsCheckedDuplicateNickname(false);
                checkDuplicateNickname(nickname);
                // if (checkpassword === password && checkpassword != '') {
                //   setIsPasswordCorrect(true);
                // } else setIsPasswordCorrect(false);
              }}
              onChangeText={text => {
                setNickname(text);
              }}
              value={nickname}
              onSubmitEditing={() => {
                nicknameField.current?.focus();
              }}
              maxLength={8}
              textAlign={'center'}
              clearButtonMode="while-editing"
            />
          </View>
          <View style={styles.subContainer}>
            <Description width={Layout.Width * 0.35} />
            <Text
              style={[
                styles.descriptionText,
                {
                  color:
                    isDescriptionFocused && countvalue !== 0
                      ? Colors.textFocusedPurple
                      : Colors.textGray,
                },
              ]}
            >
              {countvalue == 0
                ? '50자 이내로 작성해주세요.'
                : countvalue + ' / 50'}
            </Text>
            <TextInput
              style={[
                styles.fullTextInput,
                isDescriptionFocused
                  ? styles.focusedTextInput
                  : styles.unfocusedTextInput,
              ]}
              placeholder="최대 50자"
              placeholderTextColor={
                isDescriptionFocused
                  ? Colors.textWhite
                  : Colors.textUnfocusedPurple
              }
              returnKeyType="next"
              onFocus={() => {
                setIsDescriptionFocused(true);
              }}
              onBlur={() => {
                setIsDescriptionFocused(false);
              }}
              onChangeText={text => {
                setDescription(text);
                countValue(text);
              }}
              value={description}
              onSubmitEditing={() => {
                descriptionField.current?.focus();
              }}
              maxLength={50}
              textAlign={'center'}
              clearButtonMode="while-editing"
              multiline={true}
            />
          </View>
        </Animated.View>

        <View style={{ height: Height * 0.07 }}></View>

        <Animated.View
          style={[
            styles.socialContainer,
            {
              position: 'absolute',
              top: Height * 0.82,
              opacity: changeMatchingBtnAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
          ]}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.log('height:', layout.height);
            console.log('width:', layout.width);
            console.log('x:', layout.x);
            console.log('y:', layout.y);
          }}
        >
          <SignupCompleteFocused />
        </Animated.View>

        <Animated.View style={{ opacity: settingAnim }}>
          <Pressable
            style={({ pressed }) => [
              styles.socialContainer,
              {
                opacity: pressed ? 0.5 : 1,
                backgroundColor: isCheckedDuplicateNickname
                  ? Colors.backgroundPurple
                  : Colors.backgroundNavy,
                marginBottom: Height * 0.1,
              },
            ]}
            onPress={() => navigation.navigate('SelectMyLineChamp')}
          >
            <LolaccountUnfocused />
          </Pressable>
        </Animated.View>

        <Animated.View
          style={{
            opacity: changeMatchingBtnAnim,
            position: 'absolute',
            top: Height * 0.82,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              styles.socialContainer,
              {
                backgroundColor: Colors.textUnfocusedPurple,
                // isCheckedDuplicateNickname === true
                //   ? //챔피언 , 라인까지 모두 선택시 바뀌도록 나중에 추가
                //     Colors.textFocusedPurple
                //   : Colors.textUnfocusedPurple,
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <MatchingStartUnfocused />
          </Pressable>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: Height * 0.1,
    marginBottom: Height * 0.1,
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 24,
    fontWeight: 'bold',
    marginTop: Height * 0.05,
    marginBottom: Height * 0.1,
  },
  focusedTextInput: {
    borderBottomColor: Colors.textFocusedPurple,
    borderBottomWidth: 1,
    marginBottom: Height * 0.02,
  },
  unfocusedTextInput: {
    borderBottomColor: Colors.textUnfocusedPurple,
    borderBottomWidth: 1,
    marginBottom: Height * 0.02,
  },
  errorTextInput: {
    borderBottomColor: Colors.textRed,
    borderBottomWidth: 1,
    marginBottom: Height * 0.02,
  },
  subtitleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 14,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: Colors.textGray,
    fontSize: FontScale * 10,
    fontWeight: 'normal',
    marginVertical: Height * 0.01,
  },
  subContainer: {
    alignItems: 'center',
    marginVertical: Height * 0.027,
  },

  signUpContainer: {
    width: Width,
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  separator: {
    width: Width,
    height: 1,
    marginVertical: 10,
    backgroundColor: Colors.textFocusedPurple,
  },
  verifyingIdContainer: {
    width: Width * 0.2,
    height: Height * 0.04,
    marginBottom: Height * 0.02,
    //flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  IdtextInputGroup: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
  },
  verifyingIdText: {
    color: Colors.textWhite,
    fontSize: FontScale * 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.textUnfocusedPurple,
    borderRadius: 30,
    marginVertical: Height * 0.01,
  },
  focusedsocialContainer: {
    backgroundColor: Colors.backgroundPurple,
  },
  socialText: {
    color: Colors.textWhite,
    fontSize: FontScale * 14,
    fontWeight: 'bold',
    padding: 17,
  },
  innerText: {
    fontWeight: 'bold',
  },

  descriptionSubContainer: {
    width: Width * 0.9,
    height: Height * 0.125,
    marginBottom: Height * 0.027,
  },

  fullTextInput: {
    width: Width * 0.9,
    height: Height * 0.06,
    color: Colors.textWhite,
    fontSize: FontScale * 14,
    fontWeight: 'normal',
  },
  halfTextInput: {
    width: Width * 0.4,
    height: Height * 0.06,
    color: Colors.textWhite,
    fontSize: FontScale * 14,
    fontWeight: 'normal',
  },
  pickerholderContainer: {
    width: Width * 0.2,
    height: Height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: Colors.textUnfocusedPurple,
  },
  pickerholderText: {
    color: Colors.textUnfocusedPurple,
    fontSize: FontScale * 14,
    fontWeight: 'normal',
  },
  textInputAndButtonContainer: {
    width: Width * 0.7,
    height: Height * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  authRequestButton: {
    width: Width * 0.2,
    height: Height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  authRequestText: {
    color: 'white',
    fontSize: FontScale * 10,
    fontWeight: 'bold',
  },
  alertText: {
    left: Width * 0.23,
    color: Colors.textFocusedPurple,
    fontSize: FontScale * 10,
    marginBottom: Height * 0.04,
    marginTop: Height * 0.01,
  },
});
