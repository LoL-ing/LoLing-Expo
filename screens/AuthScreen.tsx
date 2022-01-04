import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { useState, useRef } from 'react';
import {
  StyleSheet,
  Pressable,
  Dimensions,
  TextInput,
  Text,
  View,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale;

export default function AuthScreen({
  navigation,
}: RootStackScreenProps<'Authentication'>) {
  const [name, setName] = useState('');
  const [firstRRN, setFirstRRN] = useState('');
  const [secondRRN, setSecondRRN] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [authNum, setAuthNum] = useState('');
  const [authRequested, setAuthRequested] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isFirstRRNFocused, setIsFirstRRNFocused] = useState(false);
  const [isSecondRRNFocused, setIsSecondRRNFocused] = useState(false);
  const [isPhoneNumFocused, setIsPhoneNumFocused] = useState(false);
  const [isAuthNumFocused, setIsAuthNumFocused] = useState(false);
  const firstRRNField = useRef<TextInput>(null);
  const secondRRNField = useRef<TextInput>(null);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.fullscreen}>
        <Text style={styles.titleText}>본인 인증</Text>
        {/* 이름 입력하는 칸 */}
        <View style={styles.subContainer}>
          <Text style={styles.subtitleText}>이름</Text>
          <TextInput
            style={[
              styles.fullTextInput,
              isNameFocused
                ? styles.focusedTextInput
                : styles.unfocusedTextInput,
            ]}
            placeholder="이름을 입력하세요."
            placeholderTextColor="#73737D"
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
              firstRRNField.current?.focus();
            }}
          />
        </View>
        {/* 주민등록번호 입력하는 칸 */}
        <View style={[styles.subContainer, { marginVertical: Height * 0.05 }]}>
          <Text style={styles.subtitleText}>주민등록번호</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TextInput
              style={[
                styles.halfTextInput,
                isFirstRRNFocused
                  ? styles.focusedTextInput
                  : styles.unfocusedTextInput,
              ]}
              placeholder="앞 번호 6자리"
              placeholderTextColor="#73737D"
              maxLength={6}
              keyboardType="decimal-pad"
              returnKeyType="next"
              selectTextOnFocus={true}
              onFocus={() => {
                setIsFirstRRNFocused(true);
              }}
              onBlur={() => {
                setIsFirstRRNFocused(false);
              }}
              onChangeText={text => setFirstRRN(text)}
              value={firstRRN}
              ref={firstRRNField}
              onSubmitEditing={() => {
                secondRRNField.current?.focus();
              }}
            />
            <TextInput
              style={[
                styles.halfTextInput,
                isSecondRRNFocused
                  ? styles.focusedTextInput
                  : styles.unfocusedTextInput,
              ]}
              placeholder="뒷 번호 7자리"
              placeholderTextColor="#73737D"
              maxLength={7}
              keyboardType="numeric"
              returnKeyType="next"
              secureTextEntry={true}
              onFocus={() => {
                setIsSecondRRNFocused(true);
              }}
              onBlur={() => {
                setIsSecondRRNFocused(false);
              }}
              onChangeText={text => setSecondRRN(text)}
              value={secondRRN}
              ref={secondRRNField}
            />
          </View>
        </View>
        {/* 통신사 & 전화번호 입력 칸  */}
        <View
          style={{
            width: Width * 0.9,
            height: Height * 0.05,
            flexDirection: 'row',
            alignItems: 'center',
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
              ]}
              placeholder="휴대폰 번호"
              placeholderTextColor="#73737D"
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
                styles.authRequestButton,
              ]}
              onPress={() => setAuthRequested(true)}
            >
              <Text style={styles.authRequestText}>인증 요청</Text>
            </Pressable>
          </View>
        </View>
        {/* 인증번호 입력칸  */}
        <View
          style={[
            {
              left: Width * 0.2,
              marginVertical: Height * 0.03,
              opacity: authRequested ? 1 : 0,
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
            ]}
            placeholder="인증번호 4자리"
            placeholderTextColor="#73737D"
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
              styles.authRequestButton,
            ]}
            onPress={() => setAuthChecked(true)}
          >
            <Text style={styles.authRequestText}>인증 확인</Text>
          </Pressable>
        </View>
        {/* 인증 완료 문구는 Text, 인증 번호 발송 실패시 Pressable을 눌러 재전송 */}
        {authRequested ? (
          authChecked ? (
            <Text style={styles.alertText}>인증이 완료되었습니다!</Text>
          ) : (
            <Pressable>
              <Text style={styles.alertText}>인증 번호가 오지 않았나요?</Text>
            </Pressable>
          )
        ) : undefined}
        {/* 다음버튼 */}
        <Pressable
          style={({ pressed }) => [
            styles.nextButtonPosition,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Shadow
            startColor={Colors.shadowStartColor}
            distance={authChecked ? 8 : 0}
          >
            <View
              style={[
                styles.nextButton,
                {
                  backgroundColor: authChecked
                    ? Colors.backgroundPurple
                    : Colors.textUnfocusedPurple,
                },
              ]}
            >
              <FontAwesome
                name="arrow-right"
                size={30}
                color={Colors.iconWhite}
              />
            </View>
          </Shadow>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    width: Width,
    height: Height,
    paddingVertical: Height * 0.05,
    paddingHorizontal: Width * 0.05,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundBlack,
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 28,
    fontWeight: 'bold',
    marginVertical: Height * 0.1,
  },
  subContainer: {
    width: Width * 0.9,
    height: Height * 0.1,
  },
  subtitleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 15,
    fontWeight: 'normal',
  },
  fullTextInput: {
    width: Width * 0.9,
    height: Height * 0.06,
    color: Colors.textWhite,
    fontSize: FontScale * 15,
    fontWeight: 'normal',
  },
  halfTextInput: {
    width: Width * 0.4,
    height: Height * 0.06,
    color: Colors.textWhite,
    fontSize: FontScale * 15,
    fontWeight: 'normal',
  },
  focusedTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.textFocusedPurple,
  },
  unfocusedTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.textUnfocusedPurple,
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
    color: '#73737D',
    fontSize: FontScale * 15,
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
    fontSize: FontScale * 12,
  },
  alertText: {
    left: Width * 0.23,
    color: Colors.textFocusedPurple,
    fontSize: FontScale * 10,
  },
  nextButtonPosition: {
    position: 'absolute',
    top: Height * 0.85,
    right: Width * 0.07,
  },
  nextButton: {
    width: Width * 0.17,
    height: Width * 0.17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Width * 0.17,
  },
});
