import * as React from 'react';
import { useRef } from 'react';
import {
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';
import { TextInput, Image, Keyboard } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Shadow } from 'react-native-shadow-2';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale;

//여기는 로그인 스크린이다.

const loginData = [
  {
    name: 'yejin',
    email: 'kyj0032@korea.ac.kr',
    password: '1234',
  },
];

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isIDFocused, setisIDFocused] = useState(false);
  const [isPWFocused, setisPWFocused] = useState(false);
  const [signin, setSignin] = useState(true);

  const passwordField = useRef<TextInput>(null);

  const isSigninTrue = (email: string, password: string) => {
    alert(`email: ${email} password: ${password}`);
    if (loginData[0].password != password) setSignin(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.fullscreen}>
        <View style={{ backgroundColor: Colors.backgroundBlack }}>
          <View style={styles.signinContainer}>
            <View style={styles.signinTextInputContainer}>
              <TextInput
                style={[
                  styles.textInput,
                  isIDFocused
                    ? styles.focusedTextInput
                    : styles.unfocusedTextInput,
                ]}
                placeholder="아이디 / 이메일을 입력하세요"
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
                onChangeText={text => setEmail(text)}
                value={email}
                onSubmitEditing={() => passwordField.current?.focus}
                blurOnSubmit={false}
                clearButtonMode="while-editing"
              />
              <TextInput
                style={[
                  styles.textInput,
                  signin
                    ? isPWFocused
                      ? styles.focusedTextInput
                      : styles.unfocusedTextInput
                    : styles.signinFailedTextInput,
                ]}
                placeholder="비밀번호를 입력하세요"
                placeholderTextColor={
                  isPWFocused ? Colors.textWhite : Colors.textGray
                }
                secureTextEntry={true}
                onFocus={() => {
                  setisPWFocused(true);
                }}
                onBlur={() => {
                  setisPWFocused(false);
                }}
                onChangeText={text => setPassword(text)}
                value={password}
                ref={passwordField}
                onSubmitEditing={() => {
                  isSigninTrue(email, password);
                }}
                clearButtonMode="while-editing"
              />
            </View>
            <View
              style={[
                styles.signinFailedContainer,
                { opacity: signin ? 0.5 : 1 },
              ]}
            >
              <Image
                source={require('../assets/images/exclamation-circle.png')}
                style={{ width: Width * 0.1, height: Width * 0.1 }}
              />
              <Text style={styles.signinFailedText}>
                잘못된 비밀번호입니다. 다시 입력하세요.
              </Text>
            </View>

            <View style={styles.twoButtonContainer}>
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  alignItems: 'center',
                })}
              >
                <Text style={styles.findIDText}>아이디 / 비밀번호 찾기</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  alignItems: 'center',
                })}
              >
                <Text
                  style={{
                    fontSize: FontScale * 15,
                    color: Colors.textFocusedPurple,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontWeight: 'bold',
                    }}
                  >
                    회원가입
                  </Text>
                  하러 가기
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontWeight: 'bold',
                    }}
                  >
                    {'  >'}
                  </Text>
                </Text>
              </Pressable>
            </View>

            <Shadow
              startColor={'#C5A3FF77'}
              distance={9}
              containerViewStyle={{ marginHorizontal: 15, marginVertical: 30 }}
            >
              <View style={styles.LOGINButton}>
                <Pressable
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                    paddingVertical: 5,
                    alignItems: 'center',
                    alignSelf: 'center',
                  })}
                  onPress={() => isSigninTrue(email, password)}
                >
                  <View style={styles.LOGINButton}>
                    <Text style={styles.LOGINtext}>LOG IN</Text>
                  </View>
                </Pressable>
              </View>
            </Shadow>
          </View>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}
          >
            <View style={styles.socialSigninButton}>
              <Image
                source={require('../assets/images/kakao.png')}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.socialText}>
                <Text style={styles.innerText}>카카오</Text>로 로그인하기
              </Text>
              <FontAwesome
                name="arrow-circle-o-up"
                size={30}
                color={Colors.backgroundNavy}
              ></FontAwesome>
            </View>
          </Pressable>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}
          >
            <View style={styles.socialSigninButton}>
              <Image
                source={require('../assets/images/naver.png')}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.socialText}>
                <Text style={styles.innerText}>네이버</Text>로 로그인하기
              </Text>
              <FontAwesome
                name="arrow-circle-o-up"
                size={30}
                color={Colors.backgroundNavy}
              ></FontAwesome>
            </View>
          </Pressable>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}
          >
            <View style={styles.socialSigninButton}>
              <Image
                source={require('../assets/images/google.png')}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.socialText}>
                <Text style={styles.innerText}>구글</Text>로 로그인하기
              </Text>
              <FontAwesome
                name="arrow-circle-o-up"
                size={30}
                color={Colors.backgroundNavy}
              ></FontAwesome>
            </View>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  signinContainer: {
    marginTop: Height * 0.2,
    backgroundColor: Colors.backgroundBlack,
  },
  socialLoginContainers: {
    width: Width,
    backgroundColor: Colors.backgroundBlack,
    alignItems: 'center',
  },
  textInput: {
    color: Colors.textWhite,
    fontSize: FontScale * 18,
    fontWeight: 'bold',
    padding: FontScale * 15,
  },
  innerText: {
    color: Colors.textWhite,
    fontSize: FontScale * 16,
    fontWeight: 'bold',
  },
  findIDText: {
    color: Colors.textWhite,
    fontSize: FontScale * 15,
  },
  LOGINButton: {
    width: Width * 0.87,
    height: Height * 0.062,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundPurple,
    borderRadius: 40,
  },
  LOGINtext: {
    color: Colors.textWhite,
    fontSize: FontScale * 15,
    fontWeight: 'bold',
  },
  socialSigninButton: {
    width: Width * 0.87,
    height: Height * 0.06,
    margin: Height * 0.012,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 30,
    backgroundColor: Colors.backgroundNavy,
  },
  socialText: {
    color: Colors.textWhite,
    fontSize: FontScale * 16,
  },
  signinTextInputContainer: {
    padding: 20,
    paddingBottom: 10,
    backgroundColor: Colors.backgroundBlack,
  },
  focusedTextInput: {
    borderBottomColor: Colors.textFocusedPurple,
    borderBottomWidth: 1,
  },
  unfocusedTextInput: {
    borderBottomColor: Colors.textUnfocusedPurple,
    borderBottomWidth: 1,
  },
  signinFailedTextInput: {
    borderBottomColor: Colors.textRed,
    borderBottomWidth: 1,
  },
  signinFailedContainer: {
    paddingLeft: Width * 0.05,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  signinFailedText: {
    color: Colors.textRed,
    fontSize: FontScale * 15,
    marginLeft: 5,
  },
  twoButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
});
