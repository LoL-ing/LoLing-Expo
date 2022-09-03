import * as React from 'react';
import { useRef, useState } from 'react';
import {
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../atoms/atom';
import { api_getAccessToken } from '../api/main';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import Layout from '../constants/Layout';
import { RootStackScreenProps } from '../types';
import { AsyncStorage } from 'react-native';
import FindIdPassword from '../assets/text_images/findIdPassword.svg';
import GoToSignUp from '../assets/text_images/goToSignUp.svg';
import LoginButton from '../assets/text_images/loginButton.svg';
import KaKao from '../assets/text_images/kakaoLogin.svg';
import Naver from '../assets/text_images/naverLogin.svg';
import Google from '../assets/text_images/googleLogin.svg';

export default function SignInScreen({
  navigation,
}: RootStackScreenProps<'SignIn'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isIDFocused, setisIDFocused] = useState(false);
  const [isPWFocused, setisPWFocused] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const passwordField = useRef<TextInput>(null);

  // const [token, setToken] = useRecoilState(accessTokenState);

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
                  signIn
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
                clearButtonMode="while-editing"
              />
            </View>
            <View
              style={[
                styles.signinFailedContainer,
                { opacity: signIn ? 0 : 1 },
              ]}
            >
              <Image
                source={require('../assets/images/exclamation-circle.png')}
                style={{
                  width: Layout.Width * 0.1,
                  height: Layout.Width * 0.1,
                }}
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
                <FindIdPassword width={Layout.Width * 1} />
              </Pressable>
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  alignItems: 'center',
                })}
                onPress={() => navigation.navigate('ToS')}
              >
                <View style={{ marginRight: Layout.Width * 0.13 }}>
                  <GoToSignUp />
                </View>
              </Pressable>
            </View>

            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                paddingVertical: 5,
                alignItems: 'center',
              })}
              onPress={async function () {
                const response = await api_getAccessToken({
                  email: email,
                  password: password,
                });

                if (response.data) {
                  // setToken(response.data);

                  /* 로컬 스토리지에 토큰을 저장함 */
                  await AsyncStorage.setItem('token', response.data);

                  navigation.navigate('Root');
                }
              }}
            >
              <LoginButton />
            </Pressable>
          </View>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}
          >
            <KaKao />
          </Pressable>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}
          >
            <Naver />
          </Pressable>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}
          >
            <Google />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  signinContainer: {
    marginTop: Layout.Height * 0.2,
    backgroundColor: Colors.backgroundBlack,
  },
  textInput: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 18,
    fontWeight: 'bold',
    padding: Layout.FontScale * 15,
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
    paddingLeft: Layout.Width * 0.05,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  signinFailedText: {
    color: Colors.textRed,
    fontSize: Layout.FontScale * 15,
    marginLeft: 5,
  },
  twoButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
});
