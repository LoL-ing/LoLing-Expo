import * as React from 'react';
import { useRef, useState } from 'react';
import {
  StyleSheet,
  Pressable,
  Image,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import Arrow from '../assets/icons/svg/arrow-left.svg';
import Nickname from '../assets/text_images/nickname.svg';
import Description from '../assets/text_images/description.svg';
import ProfileSave from '../assets/text_images/profileSave.svg';
import { RootStackParamList, RootStackScreenProps } from '../types';
import Styles from '../constants/Styles';
import { RouteProp } from '@react-navigation/native';

interface Props {
  navigation: RootStackScreenProps<'ProfileEdit'>;
  route: RouteProp<RootStackParamList, 'ProfileEdit'>;
}

export default function ProfileEditScreen(props: Props) {
  const [nickname, setNickname] = useState(props.route.params.nickname);
  const [description, setDescription] = useState(
    props.route.params.description,
  );
  const [countvalue, setCount] = useState(0);

  const [isNicknameFocused, setIsNicknameFocused] = useState(false);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  const [isNicknameInit, setIsNicknameInit] = useState(true);
  const [isCheckedDuplicateNickname, setIsCheckedDuplicateNickname] =
    useState(false);

  const nicknameField = useRef<TextInput>(null);
  const descriptionField = useRef<TextInput>(null);

  const checkDuplicateNickname = (input: string) => {
    if (input === '') {
      setIsNicknameInit(true);
    } else if (input === '김수돌') {
      setIsCheckedDuplicateNickname(false);
      setIsNicknameInit(false);
    } else {
      setIsCheckedDuplicateNickname(true);
      setIsNicknameInit(false);
    }
  };

  const countValue = (input: string) => {
    setCount(input.length);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          width: Layout.Width,
          height: Layout.Height,
          backgroundColor: Colors.backgroundBlack,
          paddingTop: useSafeAreaInsets().top,
          paddingBottom:
            Layout.AndroidBottomBarHeight + useSafeAreaInsets().bottom,
        }}
      >
        <View
          style={{
            width: Layout.Width,
            //height: Layout.Height * 0.1,
            height: Layout.Height * 0.1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.backgroundBlack,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              { position: 'absolute', left: Layout.Width * 0.05 },
            ]}
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Arrow width={Layout.Width * 0.075} />
          </Pressable>
          <Text
            style={{
              color: Colors.textWhite,
              fontWeight: 'bold',
              fontSize: Layout.FontScale * 16,
            }}
          >
            프로필 편집
          </Text>
        </View>
        <View style={{ height: Layout.Height * 0.5, justifyContent: 'center' }}>
          <View style={styles.subContainer}>
            <Nickname width={Layout.Width * 0.12} />
            <Text
              style={[
                styles.descriptionText,
                {
                  color: isNicknameInit
                    ? Colors.textGray
                    : isCheckedDuplicateNickname
                    ? Colors.textFocusedPurple
                    : Colors.textRed,
                },
              ]}
            >
              {isNicknameInit
                ? `8자 이내로 입력해주세요`
                : isCheckedDuplicateNickname
                ? `사용 가능한 닉네임입니다!`
                : `사용 중인 닉네임입니다.`}
            </Text>
            <TextInput
              style={[
                styles.fullTextInput,
                isNicknameInit
                  ? isNicknameFocused
                    ? styles.focusedTextInput
                    : styles.unfocusedTextInput
                  : isCheckedDuplicateNickname
                  ? isNicknameFocused
                    ? styles.focusedTextInput
                    : styles.unfocusedTextInput
                  : styles.errorTextInput,
              ]}
              placeholder="닉네임"
              placeholderTextColor={
                isNicknameFocused
                  ? Colors.textWhite
                  : Colors.textUnfocusedPurple
              }
              returnKeyType="next"
              onFocus={() => {
                setIsNicknameFocused(true);
              }}
              onBlur={() => {
                setIsNicknameFocused(false);
                setIsCheckedDuplicateNickname(false);
                checkDuplicateNickname(nickname);
              }}
              onChangeText={text => {
                setNickname(text);
              }}
              value={nickname}
              onSubmitEditing={() => {
                nicknameField.current?.focus();
              }}
              maxLength={8}
              textAlign={'center'}
            />
          </View>
          <View style={styles.subContainer}>
            <Description width={Layout.Width * 0.35} />
            <Text
              style={[
                styles.descriptionText,
                {
                  color:
                    isDescriptionFocused && countvalue !== 0
                      ? Colors.textFocusedPurple
                      : Colors.textGray,
                },
              ]}
            >
              {countvalue == 0
                ? '50자 이내로 작성해주세요.'
                : countvalue + ' / 50'}
            </Text>
            <TextInput
              style={[
                styles.fullTextInput,
                isDescriptionFocused
                  ? styles.focusedTextInput
                  : styles.unfocusedTextInput,
              ]}
              placeholder="최대 50자"
              placeholderTextColor={
                isDescriptionFocused
                  ? Colors.textWhite
                  : Colors.textUnfocusedPurple
              }
              returnKeyType="next"
              onFocus={() => {
                setIsDescriptionFocused(true);
              }}
              onBlur={() => {
                setIsDescriptionFocused(false);
              }}
              onChangeText={text => {
                setDescription(text);
                countValue(text);
              }}
              value={description}
              onSubmitEditing={() => {
                descriptionField.current?.focus();
              }}
              maxLength={50}
              textAlign={'center'}
              clearButtonMode="while-editing"
              multiline={true}
            />
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            Styles.startMatchingButton,
            {
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isCheckedDuplicateNickname
                ? Colors.backgroundPurple
                : Colors.textUnfocusedPurple,
            },
          ]}
          onPress={() => props.navigation.goBack()}
        >
          <ProfileSave />
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: Layout.Height * 0.08,
    marginBottom: Layout.Height * 0.08,
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 24,
    fontWeight: 'bold',
    marginTop: Layout.Height * 0.05,
    marginBottom: Layout.Height * 0.1,
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
  descriptionText: {
    color: Colors.textGray,
    fontSize: Layout.FontScale * 10,
    fontWeight: 'normal',
    marginVertical: Layout.Height * 0.01,
  },
  subContainer: {
    alignItems: 'center',
    marginVertical: Layout.Height * 0.027,
  },
  socialContainer: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.072,
    marginVertical: Layout.Height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  fullTextInput: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.06,
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 14,
    fontWeight: 'normal',
  },
});
