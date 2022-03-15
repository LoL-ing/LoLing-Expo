import { FontAwesome } from '@expo/vector-icons';
import { visitWithTypeInfo } from 'graphql';
import * as React from 'react';
import { useRef, useState } from 'react';
import {
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import { TextInput, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import stringLength from 'string-length';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default function CommunityScreen() {
  const [nickname, setNickname] = useState('');
  const [description, setDescription] = useState('');

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

  return (
    <SafeAreaView style={[Styles.fullscreen, { alignItems: 'center' }]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 25,
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.titleText}>환영합니다!</Text>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subtitleText}>닉네임</Text>
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
            <Text style={styles.subtitleText}>유저들에게 한 마디</Text>
            <Text style={[styles.descriptionText, { color: Colors.textGray }]}>
              50자 이내로 작성해주세요.
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
          <View
            style={[
              styles.socialContainer,
              {
                backgroundColor:
                  isCheckedDuplicateNickname === true
                    ? Colors.textFocusedPurple
                    : Colors.backgroundNavy,
              },
            ]}
          >
            <Text style={styles.socialText}>롤 계정 인증하기</Text>
          </View>
          <View
            style={[
              styles.socialContainer,
              {
                backgroundColor: Colors.textUnfocusedPurple,
                // isCheckedDuplicateNickname === true
                //   ? //챔피언 , 라인까지 모두 선택시 바뀌도록 나중에 추가
                //     Colors.textFocusedPurple
                //   : Colors.textUnfocusedPurple,
              },
            ]}
          >
            <Text style={styles.socialText}>매칭 시작</Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: Height * 0.2,
    marginBottom: Height * 0.2,
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
    width: Width * 0.9,
    height: Height * 0.062,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.textUnfocusedPurple,
    borderRadius: 30,
    marginVertical: Height * 0.01,
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

/*
커뮤니티 원래 코드
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

export default function CommnunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LoLing</Text>
      <View
        style={styles.separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#161627',
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    width: '80%',
    marginVertical: 30,

    height: 1,
    backgroundColor : 'white',
  },
});
 
 */
