import { FontAwesome } from '@expo/vector-icons';
import { visitWithTypeInfo } from 'graphql';
import * as React from 'react';
import { useRef, useState } from 'react';
import { StyleSheet, Pressable, Dimensions, SafeAreaView } from 'react-native';
import { TextInput, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import passwordValidator from '../constants/passwordValidator';
import Layout from '../constants/Layout';
import Id from '../assets/text_images/Id.svg';
import Password from '../assets/text_images/password.svg';
import PasswordCheck from '../assets/text_images/passwordCheck.svg';
import Name from '../assets/text_images/name.svg';
import Email from '../assets/text_images/email.svg';
import SignUpButtonOn from '../assets/text_images/signUpButton_on.svg';
import SignUpButtonOff from '../assets/text_images/signUpButton_off.svg';
import SignUp from '../assets/text_images/signUp.svg';
import IdentifyButtonOn from '../assets/text_images/identifyButton_on.svg';
import IdentifyButtonOff from '../assets/text_images/identifyButton_off.svg';
import IdCheck_off from '../assets/text_images/idCheck_off.svg';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default function SignUpScreen() {
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
    <SafeAreaView style={styles.fullscreen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
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
                  { width: Width * 0.7 },
                ]}
                placeholder="아이디"
                placeholderTextColor={
                  isIdFocused ? Colors.textWhite : Colors.textUnfocusedPurple
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
            autoCompleteType="username"
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
        {/* 통신사 & 전화번호 입력 칸  */}
        <View
          style={{
            // width: Width * 0.9,
            // height: Height * 0.05,
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: Height * 0.025,
          }}
        >
          <View style={styles.pickerholderContainer}>
            <Text style={styles.pickerholderText}>통신사</Text>
            <FontAwesome
              name="chevron-down"
              size={15}
              color={'#73737D'}
            ></FontAwesome>
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
        {/* 인증번호 입력칸  */}
        {authRequested ? (
          <View
            style={[
              {
                left: Width * 0.2,
                marginVertical: Height * 0.01,
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
        {/* 인증 완료 문구는 Text, 인증 번호 발송 실패시 Pressable을 눌러 재전송 */}
        {authRequested ? (
          authChecked ? (
            <Text style={styles.alertText}>인증이 완료되었습니다!</Text>
          ) : (
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Text style={styles.alertText}>인증 번호가 오지 않았나요?</Text>
            </Pressable>
          )
        ) : undefined}
        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
          onPress={() => {
            if (
              !(isCheckedDuplicateId === true && isPasswordcorrect === true)
            ) {
              alert(`아이디 중복확인 및 비밀번호 확인을 해주세요.`);
            }
            console.log(FontScale);
          }}
        >
          <View
            style={[
              styles.socialContainer,
              {
                backgroundColor:
                  isCheckedDuplicateId === true &&
                  isPasswordcorrect === true &&
                  authChecked === true
                    ? Colors.textFocusedPurple
                    : Colors.textUnfocusedPurple,
              },
            ]}
          >
            <Text style={styles.socialText}>가입 완료</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    width: Width,
    height: Height,
    flexDirection: 'column',
    paddingHorizontal: Width * 0.05,
    backgroundColor: Colors.backgroundBlack,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: Height * 0.1,
    marginBottom: Height * 0.1,
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
