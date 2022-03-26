import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { RootStackScreenProps } from '../types';

import Welcome from '../assets/text_images/welcome.svg';
import FavoriteLine from '../assets/text_images/favoriteLine.svg';
import FirstLine from '../assets/text_images/firstLine.svg';
import SecondLine from '../assets/text_images/secondLine.svg';
import TopUnselected from '../assets/icons/svg/top-icon-unselected.svg';
import MiddleUnselected from '../assets/icons/svg/middle-icon-unselected.svg';
import BottomUnselected from '../assets/icons/svg/bottom-icon-unselected.svg';
import JungleUnselected from '../assets/icons/svg/jungle-icon-unselected.svg';
import SupportUnselected from '../assets/icons/svg/support-icon-unselected.svg';
import BottomSelected from '../assets/icons/svg/bottom-icon-selected.svg';
import SupportSelected from '../assets/icons/svg/support-icon-selected.svg';
import FavoriteChamp from '../assets/text_images/favoriteChamp.svg';
import First from '../assets/text_images/1st.svg';
import Second from '../assets/text_images/2nd.svg';
import Third from '../assets/text_images/3rd.svg';
import StartMatching from '../assets/text_images/startMatching.svg';
import { useState } from 'react';

export default function SelectMyLineChampScreen({
  navigation,
}: RootStackScreenProps<'SelectMyLineChamp'>) {
  const [firstLine, setFirstLine] = useState('');
  const [secondLine, setSecondLine] = useState('');

  const changeIsTopSelected = () => {
    if (firstLine === 'top') {
      if (secondLine === '') setFirstLine('');
      else {
        setFirstLine(secondLine);
        setSecondLine('');
      }
    } else if (secondLine === 'top') setSecondLine('');
    else if (firstLine !== '') {
      if (secondLine !== '') alert('라인은 2개까지만 선택할 수 있습니다!');
      else setSecondLine('top');
    } else setFirstLine('top');
  };

  const changeIsMiddleSelected = () => {
    if (firstLine === 'middle') {
      if (secondLine === '') setFirstLine('');
      else {
        setFirstLine(secondLine);
        setSecondLine('');
      }
    } else if (secondLine === 'middle') setSecondLine('');
    else if (firstLine !== '') {
      if (secondLine !== '') alert('라인은 2개까지만 선택할 수 있습니다!');
      else setSecondLine('middle');
    } else setFirstLine('middle');
  };

  const changeIsBottomSelected = () => {
    if (firstLine === 'bottom') {
      if (secondLine === '') setFirstLine('');
      else {
        setFirstLine(secondLine);
        setSecondLine('');
      }
    } else if (secondLine === 'bottom') setSecondLine('');
    else if (firstLine !== '') {
      if (secondLine !== '') alert('라인은 2개까지만 선택할 수 있습니다!');
      else setSecondLine('bottom');
    } else setFirstLine('bottom');
  };

  const changeIsJungleSelected = () => {
    if (firstLine === 'jungle') {
      if (secondLine === '') setFirstLine('');
      else {
        setFirstLine(secondLine);
        setSecondLine('');
      }
    } else if (secondLine === 'jungle') setSecondLine('');
    else if (firstLine !== '') {
      if (secondLine !== '') alert('라인은 2개까지만 선택할 수 있습니다!');
      else setSecondLine('jungle');
    } else setFirstLine('jungle');
  };

  const changeIsSupportSelected = () => {
    if (firstLine === 'support') {
      if (secondLine === '') setFirstLine('');
      else {
        setFirstLine(secondLine);
        setSecondLine('');
      }
    } else if (secondLine === 'support') setSecondLine('');
    else if (firstLine !== '') {
      if (secondLine !== '') alert('라인은 2개까지만 선택할 수 있습니다!');
      else setSecondLine('support');
    } else setFirstLine('support');
  };

  return (
    <View style={styles.fullScreenView}>
      <Welcome
        width={Layout.Width * 0.35}
        style={{ marginBottom: Layout.Height * 0.07 }}
      />
      <View style={styles.selectLoLAccountContainer}>
        <Text style={styles.selectLoLAccountText}>endendtndus@naver.com</Text>
      </View>
      <View
        style={{
          width: Layout.Width * 0.87,
          justifyContent: 'space-between',
          marginVertical: Layout.Height * 0.07,
        }}
      >
        <View
          style={{ alignItems: 'center', marginBottom: Layout.Height * 0.025 }}
        >
          <FavoriteLine width={Layout.Width * 0.5} />
        </View>
        <View
          style={{
            width: Layout.Width * 0.87,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            {firstLine == 'top' ? (
              <FirstLine />
            ) : secondLine == 'top' ? (
              <SecondLine />
            ) : undefined}

            <Pressable
              onPress={() => {
                changeIsTopSelected();
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              {firstLine == 'top' || secondLine == 'top' ? (
                <TopUnselected />
              ) : (
                <TopUnselected />
              )}
            </Pressable>
          </View>

          <View style={{ alignItems: 'center' }}>
            {firstLine == 'middle' ? (
              <FirstLine />
            ) : secondLine == 'middle' ? (
              <SecondLine />
            ) : undefined}
            <Pressable
              onPress={() => {
                changeIsMiddleSelected();
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              {firstLine == 'middle' || secondLine == 'middle' ? (
                <MiddleUnselected />
              ) : (
                <MiddleUnselected />
              )}
            </Pressable>
          </View>

          <View style={{ alignItems: 'center' }}>
            {firstLine == 'bottom' ? (
              <FirstLine />
            ) : secondLine == 'bottom' ? (
              <SecondLine />
            ) : undefined}
            <Pressable
              onPress={() => {
                changeIsBottomSelected();
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              {firstLine == 'bottom' || secondLine == 'bottom' ? (
                <BottomSelected />
              ) : (
                <BottomUnselected />
              )}
            </Pressable>
          </View>

          <View style={{ alignItems: 'center' }}>
            {firstLine == 'jungle' ? (
              <FirstLine />
            ) : secondLine == 'jungle' ? (
              <SecondLine />
            ) : undefined}
            <Pressable
              onPress={() => {
                changeIsJungleSelected();
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              {firstLine == 'jungle' || secondLine == 'jungle' ? (
                <JungleUnselected />
              ) : (
                <JungleUnselected />
              )}
            </Pressable>
          </View>
          <View style={{ alignItems: 'center' }}>
            {firstLine == 'support' ? (
              <FirstLine />
            ) : secondLine == 'support' ? (
              <SecondLine />
            ) : undefined}
            <Pressable
              onPress={() => {
                changeIsSupportSelected();
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              {firstLine == 'support' || secondLine == 'support' ? (
                <SupportSelected />
              ) : (
                <SupportUnselected />
              )}
            </Pressable>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          height: Layout.Height * 0.18,
          justifyContent: 'space-between',
        }}
      >
        <FavoriteChamp width={Layout.Width * 0.5} />
        <View
          style={{
            width: Layout.Width * 0.6,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <First width={Layout.Width * 0.17} />
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Second width={Layout.Width * 0.17} />
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Third width={Layout.Width * 0.17} />
          </Pressable>
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.startMatchingButton,
          {
            opacity: pressed ? 0.5 : 1,
            backgroundColor: Colors.textUnfocusedPurple,
          },
        ]}
      >
        <StartMatching width={Layout.Width * 0.17} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenView: {
    width: Layout.Width,
    height: Layout.Height,
    paddingVertical: Layout.Height * 0.065,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.backgroundBlack,
  },
  selectLoLAccountContainer: {
    width: Layout.Width * 0.87,
    height: Layout.Height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 100,
  },
  selectLoLAccountText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 12,
    fontWeight: 'bold',
  },
  selectChampButton: {
    width: Layout.Width * 0.87,
    height: Layout.Height * 0.096,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.textUnfocusedPurple,
  },
  startMatchingButton: {
    width: Layout.Width * 0.86,
    height: Layout.Height * 0.072,
    marginVertical: Layout.Height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
