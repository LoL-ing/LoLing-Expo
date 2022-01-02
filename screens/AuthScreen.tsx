import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { useState, createRef } from 'react';
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

const nameRef = createRef<TextInput>();
const firstRRN = createRef<TextInput>();
const secondRRN = createRef<TextInput>();

export default function AuthScreen() {
  const [name, setName] = useState('');
  const [RRN, setRRN] = useState(0);
  const [phoneNum, setPhoneNum] = useState('');
  const [authNum, setAuthNum] = useState('');
  const [authRequested, setAuthRequested] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  return (
    <View style={styles.fullscreen}>
      <Text style={styles.titleText}>본인 인증</Text>
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: Colors.backgroundBlack,
        }}
      >
        <Text style={styles.subtitleText}>이름</Text>
        <TextInput
          style={styles.fullTextInput}
          placeholder="이름을 입력하세요."
          ref={nameRef}
          placeholderTextColor="#73737D"
          maxLength={8}
          onChangeText={text => setName(text)}
          value={name}
          returnKeyType="next"
          autoCompleteType="username"
          onSubmitEditing={() => {
            firstRRN.current?.focus;
          }}
        />

        <Text style={styles.subtitleText}>주민등록번호</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: Colors.backgroundBlack,
          }}
        >
          <TextInput
            style={styles.halfTextInput}
            placeholder="앞 번호 6자리"
            ref={firstRRN}
            placeholderTextColor="#73737D"
            maxLength={6}
            keyboardType="decimal-pad" //number-pad, decimal-pad, numeric 중에 뭐해야되지? 그리고 왜 밑에랑 다르게 나오지
            returnKeyType="next"
            selectTextOnFocus={true}
            onSubmitEditing={() => {
              secondRRN.current?.focus();
            }}
          />

          <Text
            style={{
              color: Colors.textFocusedPurple,
              fontSize: FontScale * 20,
            }}
          >
            -
          </Text>

          <TextInput
            style={styles.halfTextInput}
            placeholder="뒷 번호 7자리"
            ref={secondRRN}
            placeholderTextColor="#73737D"
            maxLength={7}
            keyboardType="numeric"
            returnKeyType="next"
            secureTextEntry={true}
          />
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
              marginVertical: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <View style={styles.pickerholderContainer}>
              <Text style={styles.pickerholderText}>통신사</Text>
            </View>
            <TextInput
              style={styles.halfTextInput}
              placeholder="전화번호를 입력하세요."
              placeholderTextColor="#73737D"
              maxLength={11}
              keyboardType="number-pad"
              returnKeyType="done"
              onChangeText={(text: string) => setPhoneNum(text)}
            />
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
                phoneNum.length === 11 && !authRequested
                  ? styles.abledAuthRequestButton
                  : styles.disabledAuthRequestButton,
              ]}
              onPress={() => setAuthRequested(true)}
            >
              <Text style={styles.autoRequestText}>인증요청</Text>
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
            style={styles.halfTextInput}
            placeholder="인증번호 4자리"
            placeholderTextColor="#73737D"
            maxLength={11}
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={(text: string) => setAuthNum(text)}
          />
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              authNum.length === 4 && !authChecked
                ? styles.abledAuthRequestButton
                : styles.disabledAuthRequestButton,
            ]}
            onPress={() => setAuthChecked(true)}
          >
            <Text style={styles.autoRequestText}>인증확인</Text>
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
      </View>
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
    backgroundColor: Colors.backgroundBlack,
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 25,
    fontWeight: 'bold',
    marginVertical: 70,
    marginHorizontal: 20,
  },
  subtitleText: {
    color: Colors.textWhite,
    fontSize: FontScale * 18,
    fontWeight: 'normal',
    marginVertical: 20,
  },
  fullTextInput: {
    width: Width * 0.9,
    padding: 5,
    color: Colors.textWhite,
    fontSize: FontScale * 15,
    fontWeight: 'normal',
    borderBottomWidth: 1,
    borderBottomColor: Colors.textFocusedPurple,
  },
  halfTextInput: {
    width: Width * 0.4,
    height: Height * 0.05,
    padding: 5,
    color: Colors.textWhite,
    fontSize: FontScale * 15,
    fontWeight: 'normal',
    borderBottomWidth: 1,
    borderBottomColor: Colors.textFocusedPurple,
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
  abledAuthRequestButton: {
    backgroundColor: Colors.backgroundPurple,
    width: Width * 0.2,
    height: Height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  disabledAuthRequestButton: {
    backgroundColor: Colors.textUnfocusedPurple,
    width: Width * 0.2,
    height: Height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 20,
  },
  autoRequestText: {
    color: 'white',
    fontSize: FontScale * 13,
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
