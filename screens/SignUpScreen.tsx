import * as React from 'react';
import { StyleSheet, Pressable, SafeAreaView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
import { useState } from 'react';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [RRN, setRRN] = useState(0);
  const [phoneNum, setPhoneNum] = useState(0);

  return (
    <View style={styles.fullscreen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>회원 가입</Text>
        <View
          style={{
            backgroundColor: Colors.backgroundBlack,
            marginHorizontal: 20,
          }}
        >
          <Text style={styles.subtitleText}>아이디</Text>
          <TextInput
            style={styles.textInput}
            placeholder="아이디/이메일"
            placeholderTextColor="#73737D"
            returnKeyType="next"
          />
          <View style={styles.separator} />

          <Text style={styles.subtitleText}>비밀번호</Text>
          <TextInput
            style={styles.textInput}
            placeholder="비밀번호"
            placeholderTextColor="#73737D"
            returnKeyType="next"
            secureTextEntry={true}
          />

          <View style={styles.separator} />
          <Text style={styles.mainText}>
            영어 대문자, 소문자, 특수문자 중 2가지 이상의 조합으로 8자 이상
          </Text>

          <Text style={styles.subtitleText}>비밀번호 확인</Text>
          <TextInput
            style={styles.textInput}
            placeholder="비밀번호를 한번 더 입력해주세요."
            placeholderTextColor={Colors.textGray}
            returnKeyType="next"
            secureTextEntry={true}
          />

          <View style={styles.separator} />
        </View>
        <View style={styles.socialLoginContainer}>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <View style={styles.socialContainer}>
              <Text style={styles.socialText}>가입완료</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    width: '100%',
    height: '100%',

    flexDirection: 'column',

    backgroundColor: Colors.backgroundBlack,
  },
  contentContainer: {
    marginLeft: 20,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',

    marginVertical: 70,
    marginLeft: 20,
  },
  socialLoginContainer: {
    width: '100%',

    flex: 1,
    alignItems: 'center',

    backgroundColor: Colors.backgroundBlack,
  },
  subtitleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',

    marginVertical: 20,
  },
  mainText: {
    color: Colors.textGray,
    fontSize: 15,
    fontWeight: 'normal',
  },
  textInput: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'normal',
  },
  separator: {
    width: '100%',
    height: 1,
    marginVertical: 10,

    backgroundColor: Colors.textFocusedPurple,
  },
  socialContainer: {
    width: Width * 0.8,
    margin: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    backgroundColor: '#484868',
    borderRadius: 30,
  },
  socialText: {
    fontSize: 15,
    fontWeight: 'bold',

    padding: 17,
  },
  innerText: {
    fontWeight: 'bold',
  },
});
