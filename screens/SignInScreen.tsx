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
import { Shadow } from 'react-native-shadow-2';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import Layout from '../constants/Layout';

import FindIdPassword from '../assets/text_images/findIdPassword.svg';
import GoToSignUp from '../assets/text_images/goToSignUp.svg';
import LoginButton from '../assets/text_images/loginButton.svg';
import KaKao from '../assets/text_images/kakaoLogin.svg';
import Naver from '../assets/text_images/naverLogin.svg';
import Google from '../assets/text_images/googleLogin.svg';
import { RootStackScreenProps } from '../types';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale;

//여기는 로그인 스크린이다.

// const getSalt = () => 'itisloling';
const userAccounts = [
  {
    name: 'yejin',
    email: 'kyj0032@korea.ac.kr',
    password: '1234',
  },
  {
    name: 'chaeyoung',
    email: 'ekqlek9@naver.com',
    password: '1234',
  },
  {
    name: 'heewoong',
    email: '19990708@naver.com',
    password: '1234',
  },
  {
    name: 'yeoreum',
    email: 'fmadudid@korea.ac.kr',
    password: '1234',
  },
  {
    name: 'admin',
    email: '1234',
    password: '1234',
  },
];

export default function SignInScreen({
  navigation,
}: RootStackScreenProps<'SignIn'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isIDFocused, setisIDFocused] = useState(false);
  const [isPWFocused, setisPWFocused] = useState(false);
  const [signIn, setSignIn] = useState(true);

  const signInCheck = async (email: string, plainPassword: string) => {
    // const hashedPassword: string = await makeHashedPassword(plainPassword);
    setSignIn(await requestAuth(email, plainPassword));
    // setSignIn(await requestAuth(email, hashedPassword));
  };

  const requestAuth = async (email: string, hashedPassword: string) => {
    const index = userAccounts.findIndex(
      account => account.email.trim() === email.trim(),
    );
    if (index >= 0) {
      if (
        hashedPassword === userAccounts[index].password
        // hashedPassword ===
        // (await makeHashedPassword(userAccounts[index].password))
      ) {
        alert('로그인 성공');
        navigation.navigate('Root');
        return true;
      }
      alert('비밀번호가 올바르지 않습니다.');
      return false;
    }
    alert('사용자 정보가 존재하지 않습니다.');
    return false;
  };

  // const makeHashedPassword = async (plainPassword: string) => {
  //   const salt = getSalt();
  //   const hashed = await crypto.digestStringAsync(
  //       crypto.CryptoDigestAlgorithm.SHA512,
  //       plainPassword + salt,
  //   );
  //   return hashed;
  // };

  const passwordField = useRef<TextInput>(null);

  // const isSigninTrue = (email: string, password: string) => {
  //   alert(`email: ${email} password: ${password}`);
  //   if (userAccounts[0].password != password) setSignin(false);
  // };

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
                onSubmitEditing={() => {
                  signInCheck(email, password);
                }}
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
                <FindIdPassword width={Layout.Width * 1} />
              </Pressable>
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  alignItems: 'center',
                })}
                onPress={() => navigation.navigate('ToS')}
              >
                <View style={{ marginRight: Width * 0.13 }}>
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
              onPress={() => signInCheck(email, password)}
            >
              <LoginButton width={Layout.Width} />
            </Pressable>
          </View>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}
          >
            <KaKao width={Layout.Width * 0.86} />
          </Pressable>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}
          >
            <Naver width={Layout.Width} />
          </Pressable>

          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              alignSelf: 'center',
            })}
          >
            <Google width={Layout.Width} />
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
