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

import Colors from '../constants/Colors';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale;

export default function AuthScreen() {
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
  const nameField = useRef<TextInput>(null);
  const firstRRNField = useRef<TextInput>(null);
  const secondRRNField = useRef<TextInput>(null);
  
  return (
    <View style={styles.fullscreen}>
      <Text style={styles.titleText}>본인 인증</Text>
      <View
        style={styles.subContainer}
      >
        <Text style={styles.subtitleText}>이름</Text>
        <TextInput
          style={[styles.fullTextInput, isNameFocused? styles.focusedTextInput : styles.unfocusedTextInput]}
          placeholder="이름을 입력하세요."
          ref={nameField}
          placeholderTextColor="#73737D"
          maxLength={8}
          onChangeText={text => setName(text)}
          onFocus={() => {
            setIsNameFocused(true);
          }}
          onBlur={() => {
            setIsNameFocused(false);
          }}
          value={name}
          returnKeyType="next"
          autoCompleteType="username"
          onSubmitEditing={() => {
            firstRRNField.current?.focus();
          }}
        />
        </View>
        <View style={[
          styles.subContainer,
          {marginVertical: Height * 0.05}]}>
        <Text style={styles.subtitleText}>주민등록번호</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: Colors.backgroundBlack,
          }}
        >
          <TextInput
            style={[styles.halfTextInput, isFirstRRNFocused? styles.focusedTextInput : styles.unfocusedTextInput]}
            placeholder="앞 번호 6자리"
            ref={firstRRNField}
            placeholderTextColor="#73737D"
            maxLength={6}
            keyboardType="decimal-pad"
            returnKeyType="next"
            selectTextOnFocus={true}
            onSubmitEditing={() => {
              secondRRNField.current?.focus();
            }}
            onFocus={() => {
              setIsFirstRRNFocused(true);
            }}
            onBlur={() => {
              setIsFirstRRNFocused(false);
            }}
            value={firstRRN}
            onChangeText={(text)=> setFirstRRN(text)}
          />
          <TextInput
            style={[styles.halfTextInput, isSecondRRNFocused? styles.focusedTextInput : styles.unfocusedTextInput]}
            placeholder="뒷 번호 7자리"
            ref={secondRRNField}
            placeholderTextColor="#73737D"
            maxLength={7}
            keyboardType="numeric"
            returnKeyType="next"
            secureTextEntry={true}
            value={secondRRN}
            onFocus={() => {
              setIsSecondRRNFocused(true);
            }}
            onBlur={() => {
              setIsSecondRRNFocused(false);
            }}
            onChangeText={(text)=> setSecondRRN(text)}
          />
        </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: Colors.backgroundBlack,
          }}
        >
          <View
            style={{
              width: Width * 0.9,
              height: Height * 0.05,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <View style={styles.pickerholderContainer}>
              <Text style={styles.pickerholderText}>통신사</Text>
            </View>
            <TextInput
              style={[styles.halfTextInput, isPhoneNumFocused? styles.focusedTextInput : styles.unfocusedTextInput]}
              placeholder="휴대폰 번호"
              placeholderTextColor="#73737D"
              maxLength={11}
              keyboardType="number-pad"
              returnKeyType="done"
              value={phoneNum}
              onChangeText={(text: string) => setPhoneNum(text)}
              onFocus={() => {
                setIsPhoneNumFocused(true);
              }}
              onBlur={() => {
                setIsPhoneNumFocused(false);
              }}
            />
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  backgroundColor:  phoneNum.length === 11 && !authRequested? Colors.backgroundPurple : Colors.textUnfocusedPurple
                },
                styles.authRequestButton,
              ]}
              onPress={() => setAuthRequested(true)}
            >
              <Text style={styles.authRequestText}>인증요청</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            left: Width * 0.23,
            width: Width * 0.7,
            height: Height * 0.05,
            marginVertical: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            opacity: authRequested ? 1 : 0,
          }}
        >
          <TextInput
            style={[styles.halfTextInput, isAuthNumFocused? styles.focusedTextInput : styles.unfocusedTextInput]}
            placeholder="인증번호 4자리"
            placeholderTextColor="#73737D"
            maxLength={11}
            keyboardType="number-pad"
            returnKeyType="done"
            onFocus={()=> setIsAuthNumFocused(true)}
            onBlur={()=> setIsAuthNumFocused(false)}
            onChangeText={(text: string) => setAuthNum(text)}
          />
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
                backgroundColor: authNum.length === 4 && !authChecked? Colors.backgroundPurple : Colors.textUnfocusedPurple
              },
              styles.authRequestButton,
            ]}
            onPress={() => setAuthChecked(true)}
          >
            <Text style={styles.authRequestText}>인증확인</Text>
          </Pressable>
        </View>
        <Text
          style={{
            color: Colors.textFocusedPurple,
            fontSize: FontScale * 10,
            opacity: authChecked ? 1 : 0,
          }}
        >
          인증이 완료되었습니다!
        </Text>
      <Pressable
        style={({ pressed }) => [
          styles.nextButtonPosition,
          { opacity: pressed ? 0.5 : 1 },
        ]}
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
  subContainer:{
    backgroundColor: Colors.backgroundBlack,
    height: Height * 0.1,
    width: Width * 0.9,
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
    borderBottomColor: Colors.textFocusedPurple,
    borderBottomWidth: 1,
  },
  unfocusedTextInput: {
    borderBottomColor: Colors.textUnfocusedPurple,
    borderBottomWidth: 1,
  },
  pickerholderContainer: {
    width: Width * 0.2,
    height: Height * 0.05,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundBlack,
    borderBottomColor: Colors.textUnfocusedPurple,
    borderBottomWidth: 1,
  },
  pickerholderText: {
    color: Colors.textWhite,
    fontSize: FontScale * 15,
    fontWeight: 'normal',
  },
  authRequestButton: {
    width: Width * 0.2,
    height: Height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  authRequestText: {
    color: 'white',
    fontSize: FontScale * 12,
  },
  nextButtonPosition: {
    position: 'absolute',
    top: Height * 0.85,
    right: Width * 0.07,
  },
  nextButton: {
    width: Width * 0.17,
    height: Width * 0.17,
    borderRadius: Width * 0.17,
    alignItems: 'center',
    justifyContent: 'center',
  },
});