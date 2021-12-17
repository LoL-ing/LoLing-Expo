import * as React from 'react';
import { useRef } from 'react';
import {
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { TextInput, Image, Keyboard } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Shadow } from 'react-native-shadow-2';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

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
  const [log, setLogin] = useState(true);

  const refFirst = useRef<TextInput>(null);

  const isLoginTrue = (email: string, password: string) => {
    alert(`email: ${email} password: ${password}`);
    if (loginData[0].password != password) setLogin(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.fullscreen}>
        <View style={{ backgroundColor: Colors.backgroundBlack }}>
          <View style={styles.loginContainer}>
            <View
              style={{
                padding: 20,
                paddingBottom: 10,
                backgroundColor: Colors.backgroundBlack,
              }}
            >
              <TextInput
                style={[
                  styles.textInput,
                  isIDFocused
                    ? {
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.textFocusedPurple,
                      }
                    : {
                        borderBottomColor: Colors.textUnfocusedPurple,
                        borderBottomWidth: 1,
                      },
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
                onSubmitEditing={() => refFirst.current?.focus}
                blurOnSubmit={false}
                clearButtonMode="while-editing"
              />
              <TextInput
                style={[
                  styles.textInput,
                  log
                    ? isPWFocused
                      ? {
                          borderBottomWidth: 1,
                          borderBottomColor: Colors.textFocusedPurple,
                        }
                      : {
                          borderBottomWidth: 1,
                          borderBottomColor: Colors.textUnfocusedPurple,
                        }
                    : { borderBottomColor: 'red', borderBottomWidth: 1 },
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
                ref={refFirst}
                onSubmitEditing={() => {
                  isLoginTrue(email, password);
                }}
                clearButtonMode="while-editing"
              />
            </View>
            <View
              style={[
                {
                  paddingLeft: Width * 0.05,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: Colors.backgroundBlack,
                },
                log ? { opacity: 0 } : { opacity: 1 },
              ]}
            >
              <Image
                source={require('../assets/images/exclamation-circle.png')}
                style={{ width: 45, height: 45 }}
              />
              <Text
                style={{
                  color: '#FA585C',
                  fontSize: 15,
                  marginLeft: 5,
                }}
              >
                잘못된 비밀번호입니다. 다시 입력하세요.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: Colors.backgroundBlack,
              }}
            >
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  paddingVertical: 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                })}
              >
                <Text style={styles.findIDText}>아이디 / 비밀번호 찾기</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  paddingVertical: 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                })}
              >
                <Text style={{ fontSize: 15, color: Colors.textFocusedPurple }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: Colors.textFocusedPurple,
                    }}
                  >
                    회원가입
                  </Text>
                  하러 가기
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: Colors.textFocusedPurple,
                    }}
                  >
                    {'  >'}
                  </Text>
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                padding: 15,
                paddingTop: 30,
                paddingBottom: 30,
                alignItems: 'center',
                backgroundColor: Colors.backgroundBlack,
              }}
            >
              <Shadow startColor={'#C5A3FF77'} distance={9}>
                <View style={styles.LOGINButton}>
                  <Pressable
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.5 : 1,
                      paddingVertical: 5,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    })}
                    onPress={() => isLoginTrue(email, password)}
                  >
                    <View style={styles.LOGINButton}>
                      <Text style={styles.LOGINtext}>LOG IN</Text>
                    </View>
                  </Pressable>
                </View>
              </Shadow>
            </View>
          </View>

          <View style={styles.socialLoginContainers}>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <View style={styles.socialLoginButton}>
                <View style={{ backgroundColor: Colors.backgroundNavy }}>
                  <Image
                    source={require('../assets/images/kakao.png')}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
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
              })}
            >
              <View style={styles.socialLoginButton}>
                <View style={{ backgroundColor: Colors.backgroundNavy }}>
                  <Image
                    source={require('../assets/images/naver.png')}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
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
              })}
            >
              <View style={styles.socialLoginButton}>
                <View style={{ backgroundColor: Colors.backgroundNavy }}>
                  <Image
                    source={require('../assets/images/google.png')}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
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
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 130,

    backgroundColor: Colors.backgroundBlack,
  },
  socialLoginContainers: {
    width: '100%',

    backgroundColor: Colors.backgroundBlack,
    alignItems: 'center',
  },
  textInput: {
    color: Colors.textWhite,
    fontSize: 18,
    fontWeight: 'bold',

    padding: 15,
  },
  innerText: {
    fontWeight: 'bold',
  },
  findIDText: {
    color: Colors.textWhite,
    fontSize: 15,
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
    fontSize: Height * 0.02,
    fontWeight: 'bold',
  },
  socialLoginButton: {
    width: Width * 0.87,
    height: Height * 0.06,
    margin: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    borderRadius: 30,
    backgroundColor: Colors.backgroundNavy,
  },
  socialText: {
    color: Colors.textWhite,
    fontSize: Height * 0.017,
  },
});
