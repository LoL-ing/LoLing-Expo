import * as React from 'react';
import { useRef, useState } from 'react';
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Styles from '../constants/Styles';
import passwordValidator from '../constants/passwordValidator';
import { RootStackScreenProps } from '../types';

import Id from '../assets/text_images/Id.svg';
import Password from '../assets/text_images/password.svg';
import PasswordCheck from '../assets/text_images/passwordCheck.svg';
import Name from '../assets/text_images/name.svg';
import Email from '../assets/text_images/email.svg';
import SignUp from '../assets/text_images/signUp.svg';
import ChevronDown from '../assets/icons/svg/chevron_down.svg';
import SignUpComplete from '../assets/text_images/signUpComplete.svg';

export default function SignUpScreen({
  navigation,
}: RootStackScreenProps<'SignUp'>) {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkpassword, setCheckPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [authNum, setAuthNum] = useState('');

  const [isIdFocused, setIsIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isCheckPasswordFocused, setIsCheckPasswordFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumFocused, setIsPhoneNumFocused] = useState(false);
  const [isAuthNumFocused, setIsAuthNumFocused] = useState(false);

  const [isCheckedDuplicateId, setIsCheckedDuplicateId] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordInit, setIsPasswordInit] = useState(true);
  const [isPasswordcorrect, setIsPasswordCorrect] = useState(false);
  const [isCheckPasswordInit, setIsPasswordInit2] = useState(true);

  const [authRequested, setAuthRequested] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  const passwordField = useRef<TextInput>(null);
  const nameField = useRef<TextInput>(null);
  const emailField = useRef<TextInput>(null);

  const insets = useSafeAreaInsets();
  const scrollViewRef = useRef<TextInput>(null);

  let measurements: any;
  const checkDuplicateId = (input: string) => {
    if (input === '') {
      alert(`아이디를 입력해주세요.`);
    } else if (isCheckedDuplicateId) {
      alert(`이미 중복 확인하셨습니다.`);
    } else {
      alert(`사용 가능한 아이디입니다!`);
      setIsCheckedDuplicateId(true);
    }
  };

  return (
    // <SafeAreaView style={[Styles.fullscreen, styles.fullscreen]}>
    <View
      style={{
        width: Layout.Width,
        height: Layout.Height,
        backgroundColor: Colors.backgroundBlack,
        paddingTop: useSafeAreaInsets().top,
        paddingBottom:
          Layout.AndroidBottomBarHeight + useSafeAreaInsets().bottom,
        alignItems: 'center',
      }}
    >
      <KeyboardAwareScrollView
        enableOnAndroid={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            ref={scrollViewRef}
          >
            <View style={styles.titleContainer}>
              <SignUp />
            </View>
            <View>
              <View style={[styles.subContainer, { marginTop: 0 }]}>
                <Id />
                <View style={styles.IdtextInputGroup}>
                  <TextInput
                    style={[
                      styles.fullTextInput,
                      isIdFocused
                        ? styles.focusedTextInput
                        : styles.unfocusedTextInput,
                      { width: Layout.Width * 0.7 },
                    ]}
                    placeholder="아이디"
                    placeholderTextColor={
                      isIdFocused
                        ? Colors.textWhite
                        : Colors.textUnfocusedPurple
                    }
                    onFocus={() => {
                      setIsIdFocused(true);
                    }}
                    onBlur={() => {
                      setIsIdFocused(false);
                    }}
                    onChangeText={text => {
                      setId(text);
                      setIsCheckedDuplicateId(false);
                    }}
                    value={id}
                  />
                  <Pressable
                    style={({ pressed }) => [
                      styles.verifyingIdContainer,
                      {
                        opacity: pressed ? 0.5 : 1,
                        backgroundColor: isCheckedDuplicateId
                          ? Colors.textFocusedPurple
                          : Colors.textUnfocusedPurple,
                      },
                    ]}
                    onPress={() => {
                      checkDuplicateId(id);
                    }}
                  >
                    <Text style={styles.verifyingIdText}>중복 확인</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.descriptionSubContainer}>
                <Password />
                <TextInput
                  style={[
                    styles.fullTextInput,
                    isPasswordInit
                      ? isPasswordFocused
                        ? styles.focusedTextInput
                        : styles.unfocusedTextInput
                      : isPasswordValid
                      ? isPasswordFocused
                        ? styles.focusedTextInput
                        : styles.unfocusedTextInput
                      : styles.errorTextInput,
                  ]}
                  placeholder="비밀번호"
                  placeholderTextColor={
                    isPasswordFocused
                      ? Colors.textWhite
                      : Colors.textUnfocusedPurple
                  }
                  returnKeyType="next"
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsPasswordFocused(true);
                  }}
                  onBlur={() => {
                    setIsPasswordInit(false);
                    setIsPasswordFocused(false);
                    if (passwordValidator(password)) {
                      setIsPasswordValid(true);
                    } else setIsPasswordValid(false);

                    if (checkpassword === password && checkpassword != '') {
                      setIsPasswordCorrect(true);
                    } else setIsPasswordCorrect(false);
                  }}
                  onChangeText={text => {
                    setPassword(text);
                  }}
                  value={password}
                  onSubmitEditing={() => {
                    passwordField.current?.focus();
                  }}
                />
                <Text
                  style={[
                    styles.descriptionText,
                    {
                      color: isPasswordInit
                        ? isPasswordFocused
                          ? Colors.textFocusedPurple
                          : Colors.textUnfocusedPurple
                        : isPasswordValid
                        ? Colors.textFocusedPurple
                        : Colors.textRed,
                    },
                  ]}
                >
                  {isPasswordInit === false && isPasswordValid === true
                    ? '사용 가능한 비밀번호입니다!'
                    : `영어 대문자, 소문자, 특수문자 중 2가지 이상의 조합으로 8자 이상`}
                </Text>
              </View>
              <View style={styles.descriptionSubContainer}>
                <PasswordCheck />
                <TextInput
                  style={[
                    styles.fullTextInput,
                    isCheckPasswordInit
                      ? isCheckPasswordFocused
                        ? styles.focusedTextInput
                        : styles.unfocusedTextInput
                      : isPasswordcorrect
                      ? isCheckPasswordFocused
                        ? styles.focusedTextInput
                        : styles.unfocusedTextInput
                      : styles.errorTextInput,
                  ]}
                  placeholder="비밀번호를 한번 더 입력해주세요."
                  placeholderTextColor={
                    isCheckPasswordFocused
                      ? Colors.textWhite
                      : Colors.textUnfocusedPurple
                  }
                  onFocus={() => {
                    setIsCheckPasswordFocused(true);
                  }}
                  onBlur={() => {
                    setIsPasswordInit2(false);
                    setIsCheckPasswordFocused(false);
                    if (checkpassword === password && checkpassword != '') {
                      setIsPasswordCorrect(true);
                    } else setIsPasswordCorrect(false);
                  }}
                  returnKeyType="next"
                  secureTextEntry={true}
                  onChangeText={text => {
                    setCheckPassword(text);
                  }}
                  value={checkpassword}
                  onSubmitEditing={() => {
                    nameField.current?.focus();
                  }}
                  ref={passwordField}
                />
                <Text
                  style={[
                    styles.descriptionText,
                    {
                      color:
                        isPasswordcorrect === false
                          ? Colors.textRed
                          : Colors.textFocusedPurple,
                    },
                  ]}
                >
                  {isCheckPasswordInit
                    ? ''
                    : isPasswordcorrect
                    ? `비밀번호가 일치합니다.`
                    : `비밀번호가 일치하지 않습니다.`}
                </Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <Name />
              <TextInput
                style={[
                  styles.fullTextInput,
                  isNameFocused
                    ? styles.focusedTextInput
                    : styles.unfocusedTextInput,
                ]}
                placeholder="이름을 입력하세요."
                placeholderTextColor={
                  isNameFocused ? Colors.textWhite : Colors.textUnfocusedPurple
                }
                maxLength={8}
                returnKeyType="next"
                onFocus={() => {
                  setIsNameFocused(true);
                }}
                onBlur={() => {
                  setIsNameFocused(false);
                }}
                onChangeText={text => setName(text)}
                value={name}
                onSubmitEditing={() => {
                  emailField.current?.focus();
                }}
                ref={nameField}
              />
            </View>
            <View style={styles.subContainer}>
              <Email />
              <TextInput
                style={[
                  styles.fullTextInput,
                  isEmailFocused
                    ? styles.focusedTextInput
                    : styles.unfocusedTextInput,
                ]}
                placeholder="예) loling123@loling.com"
                placeholderTextColor={
                  isEmailFocused ? Colors.textWhite : Colors.textUnfocusedPurple
                }
                onFocus={() => {
                  setIsEmailFocused(true);
                }}
                onBlur={() => {
                  setIsEmailFocused(false);
                }}
                onChangeText={text => setEmail(text)}
                value={email}
                ref={emailField}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: Layout.Height * 0.025,
              }}
            >
              <View style={styles.pickerholderContainer}>
                <Text style={styles.pickerholderText}>통신사</Text>
                <ChevronDown />
              </View>
              <View style={styles.textInputAndButtonContainer}>
                <TextInput
                  style={[
                    styles.halfTextInput,
                    isPhoneNumFocused
                      ? styles.focusedTextInput
                      : styles.unfocusedTextInput,
                    { marginBottom: 0 },
                  ]}
                  placeholder="휴대폰 번호"
                  placeholderTextColor="#484868"
                  maxLength={11}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  onFocus={() => {
                    setIsPhoneNumFocused(true);
                  }}
                  onBlur={() => {
                    setIsPhoneNumFocused(false);
                  }}
                  onChangeText={(text: string) => setPhoneNum(text)}
                  value={phoneNum}
                />
                <Pressable
                  style={({ pressed }) => [
                    {
                      opacity: pressed ? 0.5 : 1,
                      backgroundColor:
                        phoneNum.length === 11 && !authRequested
                          ? Colors.backgroundPurple
                          : Colors.textUnfocusedPurple,
                    },
                    styles.verifyingIdContainer,
                    { marginBottom: 0 },
                  ]}
                  onPress={() => setAuthRequested(true)}
                >
                  <Text style={styles.verifyingIdText}>인증 요청</Text>
                </Pressable>
              </View>
            </View>
            {authRequested ? (
              <View
                style={[
                  {
                    left: Layout.Width * 0.2,
                    marginVertical: Layout.Height * 0.01,
                  },
                  styles.textInputAndButtonContainer,
                ]}
              >
                <TextInput
                  style={[
                    styles.halfTextInput,
                    isAuthNumFocused
                      ? styles.focusedTextInput
                      : styles.unfocusedTextInput,
                    { marginBottom: 0 },
                  ]}
                  placeholder="인증번호 4자리"
                  placeholderTextColor={Colors.textUnfocusedPurple}
                  maxLength={11}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  onFocus={() => setIsAuthNumFocused(true)}
                  onBlur={() => setIsAuthNumFocused(false)}
                  onChangeText={(text: string) => setAuthNum(text)}
                />
                <Pressable
                  style={({ pressed }) => [
                    {
                      opacity: pressed ? 0.5 : 1,
                      backgroundColor:
                        authNum.length === 4 && !authChecked
                          ? Colors.backgroundPurple
                          : Colors.textUnfocusedPurple,
                    },
                    styles.verifyingIdContainer,
                    { marginBottom: 0 },
                  ]}
                  onPress={() => setAuthChecked(true)}
                >
                  <Text style={styles.verifyingIdText}>인증 확인</Text>
                </Pressable>
              </View>
            ) : (
              <View></View>
            )}
            {authRequested ? (
              authChecked ? (
                <Text style={styles.alertText}>인증이 완료되었습니다!</Text>
              ) : (
                <Pressable
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                >
                  <Text style={styles.alertText}>
                    인증 번호가 오지 않았나요?
                  </Text>
                </Pressable>
              )
            ) : undefined}
            <View
              style={[
                Styles.startMatchingButton,
                {
                  backgroundColor: true
                    ? Colors.backgroundPurple
                    : Colors.textUnfocusedPurple,
                },
              ]}
            >
              <Pressable
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                  },
                  styles.socialContainer,
                ]}
                onPress={() => {
                  scrollViewRef.current?.scrollToEnd({ animated: true });
                  setTimeout(() => {
                    navigation.navigate('Welcome');
                  }, 500);
                }}
              >
                <SignUpComplete width={Layout.Width * 0.17} />
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: Layout.Height * 0.1,
    marginBottom: Layout.Height * 0.1,
  },
  contentContainer: {
    marginLeft: 20,
  },
  descriptionText: {
    color: Colors.textFocusedPurple,
    fontSize: Layout.FontScale * 10,
    fontWeight: 'normal',
  },
  verifyingIdContainer: {
    width: Layout.Width * 0.2,
    height: Layout.Height * 0.04,
    marginBottom: Layout.Height * 0.02,
    justifyContent: 'center',
    borderRadius: 30,
  },
  IdtextInputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyingIdText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  socialContainer: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.072,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  focusedTextInput: {
    borderBottomColor: Colors.textFocusedPurple,
    borderBottomWidth: 1,
    marginBottom: Layout.Height * 0.02,
  },
  unfocusedTextInput: {
    borderBottomColor: Colors.textUnfocusedPurple,
    borderBottomWidth: 1,
    marginBottom: Layout.Height * 0.02,
  },
  errorTextInput: {
    borderBottomColor: Colors.textRed,
    borderBottomWidth: 1,
    marginBottom: Layout.Height * 0.02,
  },
  descriptionSubContainer: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.125,
    marginBottom: Layout.Height * 0.027,
  },
  subContainer: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.1,
    marginBottom: Layout.Height * 0.027,
  },
  fullTextInput: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.06,
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 14,
    fontWeight: 'normal',
  },
  halfTextInput: {
    width: Layout.Width * 0.4,
    height: Layout.Height * 0.06,
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 14,
    fontWeight: 'normal',
  },
  pickerholderContainer: {
    width: Layout.Width * 0.2,
    height: Layout.Height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: Colors.textUnfocusedPurple,
  },
  pickerholderText: {
    color: Colors.textUnfocusedPurple,
    fontSize: Layout.FontScale * 14,
    fontWeight: 'normal',
  },
  textInputAndButtonContainer: {
    width: Layout.Width * 0.7,
    height: Layout.Height * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  alertText: {
    left: Layout.Width * 0.23,
    color: Colors.textFocusedPurple,
    fontSize: Layout.FontScale * 10,
    marginBottom: Layout.Height * 0.04,
    marginTop: Layout.Height * 0.01,
  },
});
