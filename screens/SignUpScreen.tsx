import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Pressable, SafeAreaView, Dimensions } from 'react-native';
import { TextInput, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [isIDFocused, setisIDFocused] = useState(false);
  const [isPWFocused, setisPWFocused] = useState(false);
  const [isVerifyingPWFocused, setisVerifyingPWFocused] = useState(false);
  const [isVerifyingID, setisVerifyingID] = useState(false);


  const isIDTrue = (input: string) => {
    if(input === ''){
      alert(`아이디를 입력해주세요 \n${email} \n ${email2}`);
      
    }
    else if(isVerifyingID) {
      alert(`이미 중복 확인하셨습니다\n${email} \n ${email2}`);
    }
    else {
      alert(`사용 가능한 아이디입니다!\n${email} \n ${email2}`);
      setisVerifyingID(true);
    }
  };
  
  return (
    <View style={styles.fullscreen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>회원 가입</Text>
        <View>
          <Text style={styles.subtitleText}>아이디</Text>
          <View style={styles.IDtextInputGroup}>
          <TextInput
            style={[
              styles.textInput,
              isIDFocused
                ? styles.focusedTextInput
                : styles.unfocusedTextInput,
              {width: Width * 0.7,}
              ]}
            placeholder="아이디 / 이메일"
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
            onChangeText={text => {
                setEmail(text);
                if(email != email2 && email2 !=''){
                  setisVerifyingID(false);
                }
              }
            }
            value={email}
            />
            <Pressable
            style={({ pressed }) => ([
              styles.verifyingIDContainer,
              isVerifyingID ? {backgroundColor: Colors.textFocusedPurple}: {backgroundColor: Colors.textUnfocusedPurple} ,
              {opacity: pressed ? 0.5 : 1,
            }])}
            onPress={() => {
                setEmail2(email);
                isIDTrue(email2);
              }
            }
          >
          <Text style={styles.verifyingIDText}>중복 확인</Text>
          </Pressable>
          </View>

          <Text style={styles.subtitleText}>비밀번호</Text>
          <TextInput
            style={[
              styles.textInput,
              isPWFocused
                ? styles.focusedTextInput
                : styles.unfocusedTextInput
            ]}
            placeholder="비밀번호"
            placeholderTextColor={
              isPWFocused ? Colors.textWhite : Colors.textGray
            }
            returnKeyType="next"
            secureTextEntry={true}
            onFocus={() => {
              setisPWFocused(true);
            }}
            onBlur={() => {
              setisPWFocused(false);
            }}
          />

          <Text style={[styles.descriptionText,
              true ? {color: Colors.textFocusedPurple} : {color: Colors.textUnfocusedPurple}
          ]}>
            영어 대문자, 소문자, 특수문자 중 2가지 이상의 조합으로 8자 이상
          </Text>

          <Text style={styles.subtitleText}>비밀번호 확인</Text>
          <TextInput
            style={[
              styles.textInput,
              isVerifyingPWFocused
                ? styles.focusedTextInput
                : styles.unfocusedTextInput,
            ]}
            placeholder="비밀번호를 한번 더 입력해주세요."
            placeholderTextColor={
              isVerifyingPWFocused ? Colors.textWhite : Colors.textGray
            }
            onFocus={() => {
              setisVerifyingPWFocused(true);
            }}
            onBlur={() => {
              setisVerifyingPWFocused(false);
            }}
            returnKeyType="next"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.signUpContainer}>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <View style={styles.socialContainer}>
              <Text style={styles.socialText}>가입 완료</Text>
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
    paddingHorizontal: Width * 0.05,
    backgroundColor: Colors.backgroundBlack,
  },
  contentContainer: {
    marginLeft: 20,
  },
  titleText: {
    color: 'white',
    fontSize: FontScale * 24,
    fontWeight: 'bold',
    marginVertical: Height * 0.1,
  },
  signUpContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  subtitleText: {
    color: 'white',
    fontSize: FontScale * 14,
    fontWeight: 'normal',
  },
  descriptionText: {
    color: Colors.textGray,
    fontSize: FontScale * 10,
    fontWeight: 'normal',
    marginBottom: Height*0.03,
  },
  textInput: {
    color: Colors.textWhite,
    fontSize: FontScale * 12,
    fontWeight: 'normal',
    paddingVertical: FontScale * 12,

  },
  separator: {
    width: '100%',
    height: 1,
    marginVertical: 10,
    backgroundColor: Colors.textFocusedPurple,
  },
  verifyingIDContainer:{
    width: Width * 0.2,
    height: Height * 0.04,
    marginBottom: Height*0.02,
    //flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  IDtextInputGroup: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
  },
  verifyingIDText: {
    color : Colors.textWhite,
    fontSize: FontScale * 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  socialContainer: {
    width: Width * 0.9,
    height: Height * 0.062,
    marginTop: Height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.textUnfocusedPurple,
    borderRadius: 30,
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
    marginBottom: Height*0.02,
  },
  unfocusedTextInput: {
    borderBottomColor: Colors.textUnfocusedPurple,
    borderBottomWidth: 1,
    marginBottom: Height*0.02,
  },
  
});
