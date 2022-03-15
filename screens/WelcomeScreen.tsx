import { FontAwesome } from '@expo/vector-icons';
import { visitWithTypeInfo } from 'graphql';
import * as React from 'react';
import { useRef, useState } from 'react';
import { StyleSheet, Pressable, Dimensions } from 'react-native';
import { TextInput, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default function WelcomeScreen() {
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
    <View style={Styles.fullscreen}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>환영합니다!</Text>
      </View>
      <View>
        <Text>닉네임</Text>
        <Text
          style={[
            styles.descriptionText,
            {
              color: isNicknameInit
                ? isNicknameFocused
                  ? Colors.textFocusedPurple
                  : Colors.textUnfocusedPurple
                : isCheckedDuplicateNickname
                ? Colors.textFocusedPurple
                : Colors.textRed,
            },
          ]}
        >
          {isNicknameInit === false
            ? '사용 가능한 비밀번호입니다!'
            : `영어 대문자, 소문자, 특수문자 중 2가지 이상의 조합으로 8자 이상`}
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
            isNicknameFocused ? Colors.textWhite : Colors.textUnfocusedPurple
          }
          returnKeyType="next"
          secureTextEntry={true}
          onFocus={() => {
            setIsNicknameFocused(true);
          }}
          onBlur={() => {
            // setIsNicknameInit(false);
            setIsNicknameFocused(false);

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
        />
      </View>
      <View>
        <Text>유저들에게 한 마디</Text>
        <Text>50자 내외로 작성해주세요.</Text>
        <TextInput
          style={[
            styles.fullTextInput,
            isDescriptionFocused
              ? styles.focusedTextInput
              : styles.unfocusedTextInput,
          ]}
          placeholder="최대 50자"
          placeholderTextColor={
            isNicknameFocused ? Colors.textWhite : Colors.textUnfocusedPurple
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
            backgroundColor:
              isCheckedDuplicateNickname === true
                ? //챔피언 , 라인까지 모두 선택시 바뀌도록 나중에 추가
                  Colors.textFocusedPurple
                : Colors.textUnfocusedPurple,
          },
        ]}
      >
        <Text style={styles.socialText}>매칭 시작</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: Height * 0.4,
    marginBottom: Height * 0.8,
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 24,
    fontWeight: 'bold',
    marginVertical: Height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
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

  signUpContainer: {
    width: Width,
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  subtitleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 14,
    fontWeight: 'normal',
  },
  descriptionText: {
    color: Colors.textFocusedPurple,
    fontSize: FontScale * 10,
    fontWeight: 'normal',
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
    marginBottom: Height * 0.05,
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
  subContainer: {
    width: Width * 0.9,
    height: Height * 0.1,
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
