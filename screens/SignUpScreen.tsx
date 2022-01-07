import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Pressable, Dimensions } from 'react-native';
import { TextInput, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import passwordValidator from '../constants/passwordValidator';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isIDFocused, setisIDFocused] = useState(false);
  const [isPWFocused, setisPWFocused] = useState(false);
  const [isVerifyingPWFocused, setisVerifyingPWFocused] = useState(false);
  const [isVerifyingID, setisVerifyingID] = useState(false);
  const [isPWValid, setisPWValid] = useState(false);
  const [isPWInit, setisPWInit] = useState(true);
  const [isPWcorrect, setisPWCorrect] = useState(false);
  const [isPWInit2, setisPWInit2] = useState(true);

  const isIDTrue = (input: string) => {
    if (input === '') {
      alert(`아이디를 입력해주세요 \n${email}`);
    } else if (isVerifyingID) {
      alert(`이미 중복 확인하셨습니다\n${email}`);
    } else {
      alert(`사용 가능한 아이디입니다!\n${email}`);
      setisVerifyingID(true);
    }
  };

  return (
    <View style={styles.fullscreen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>회원 가입</Text>
        <View>
          <Text style={styles.subtitleText}>아이디</Text>
          <View style={styles.IDtextInputGroup}>
            <TextInput
              style={[
                styles.textInput,
                isIDFocused
                  ? styles.focusedTextInput
                  : styles.unfocusedTextInput,
                { width: Width * 0.7 },
              ]}
              placeholder="아이디 / 이메일"
              placeholderTextColor={
                isIDFocused ? Colors.textWhite : Colors.textGray
              }
              returnKeyType="next"
              onFocus={() => {
                setisIDFocused(true);
              }}
              onBlur={() => {
                setisIDFocused(false);
              }}
              onChangeText={text => {
                setEmail(text);
                setisVerifyingID(false);
              }}
              value={email}
            />
            <Pressable
              style={({ pressed }) => [
                styles.verifyingIDContainer,
                {
                  opacity: pressed ? 0.5 : 1,
                  backgroundColor: isVerifyingID
                    ? Colors.textFocusedPurple
                    : Colors.textUnfocusedPurple,
                },
              ]}
              onPress={() => {
                isIDTrue(email);
              }}
            >
              <Text style={styles.verifyingIDText}>중복 확인</Text>
            </Pressable>
          </View>

          <Text style={styles.subtitleText}>비밀번호</Text>
          <TextInput
            style={[
              styles.textInput,
              isPWInit
                ? isPWFocused
                  ? styles.focusedTextInput
                  : styles.unfocusedTextInput
                : isPWValid
                ? isPWFocused
                  ? styles.focusedTextInput
                  : styles.unfocusedTextInput
                : styles.errorTextInput,
            ]}
            placeholder="비밀번호"
            placeholderTextColor={
              isPWFocused ? Colors.textWhite : Colors.textGray
            }
            returnKeyType="next"
            secureTextEntry={true}
            onFocus={() => {
              setisPWFocused(true);
            }}
            onBlur={() => {
              setisPWInit(false);
              setisPWFocused(false);
              if (passwordValidator(password)) {
                setisPWValid(true);
              } else setisPWValid(false);

              if (password2 === password && password2 != '') {
                setisPWCorrect(true);
              } else setisPWCorrect(false);
            }}
            onChangeText={text => {
              setPassword(text);
            }}
            value={password}
          />

          <Text
            style={[
              styles.descriptionText,
              {
                color: isPWInit
                  ? isPWFocused
                    ? Colors.textFocusedPurple
                    : Colors.textUnfocusedPurple
                  : isPWValid
                  ? Colors.textFocusedPurple
                  : Colors.textRed,
              },
            ]}
          >
            {isPWInit === false && isPWValid === true
              ? '사용 가능한 비밀번호입니다!'
              : `영어 대문자, 소문자, 특수문자 중 2가지 이상의 조합으로 8자 이상`}
          </Text>

          <Text style={styles.subtitleText}>비밀번호 확인</Text>
          <TextInput
            style={[
              styles.textInput,
              isPWInit2
                ? isVerifyingPWFocused
                  ? styles.focusedTextInput
                  : styles.unfocusedTextInput
                : isPWcorrect
                ? isVerifyingPWFocused
                  ? styles.focusedTextInput
                  : styles.unfocusedTextInput
                : styles.errorTextInput,
            ]}
            placeholder="비밀번호를 한번 더 입력해주세요."
            placeholderTextColor={
              isVerifyingPWFocused ? Colors.textWhite : Colors.textGray
            }
            onFocus={() => {
              setisVerifyingPWFocused(true);
            }}
            onBlur={() => {
              setisPWInit2(false);
              setisVerifyingPWFocused(false);
              if (password2 === password && password2 != '') {
                setisPWCorrect(true);
              } else setisPWCorrect(false);
            }}
            returnKeyType="next"
            secureTextEntry={true}
            onChangeText={text => {
              setPassword2(text);
            }}
            value={password2}
          />
        </View>

        <Text
          style={[
            styles.descriptionText,
            {
              color:
                isPWcorrect === false
                  ? Colors.textRed
                  : Colors.textFocusedPurple,
            },
          ]}
        >
          {isPWInit2
            ? ''
            : isPWcorrect
            ? `비밀번호가 일치합니다.`
            : `비밀번호가 일치하지 않습니다.`}
        </Text>

        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
          onPress={() => {
            if (!(isVerifyingID === true && isPWcorrect === true)) {
              alert(`아이디 중복확인 및 비밀번호 확인을 해주세요.`);
            }
          }}
        >
          <View
            style={[
              styles.socialContainer,
              {
                backgroundColor:
                  isVerifyingID === true && isPWcorrect === true
                    ? Colors.textFocusedPurple
                    : Colors.textUnfocusedPurple,
              },
            ]}
          >
            <Text style={styles.socialText}>가입 완료</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    width: Width,
    height: Height,
    flexDirection: 'column',
    paddingHorizontal: Width * 0.05,
    backgroundColor: Colors.backgroundBlack,
  },
  contentContainer: {
    marginLeft: 20,
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 24,
    fontWeight: 'bold',
    marginVertical: Height * 0.1,
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
    marginBottom: Height * 0.03,
  },
  textInput: {
    color: Colors.textWhite,
    fontSize: FontScale * 12,
    fontWeight: 'normal',
    paddingVertical: FontScale * 12,
  },
  separator: {
    width: Width,
    height: 1,
    marginVertical: 10,
    backgroundColor: Colors.textFocusedPurple,
  },
  verifyingIDContainer: {
    width: Width * 0.2,
    height: Height * 0.04,
    marginBottom: Height * 0.02,
    //flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  IDtextInputGroup: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
  },
  verifyingIDText: {
    color: Colors.textWhite,
    fontSize: FontScale * 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  socialContainer: {
    width: Width * 0.9,
    height: Height * 0.062,
    marginTop: Height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.textUnfocusedPurple,
    borderRadius: 30,
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
});
