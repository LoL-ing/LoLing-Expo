import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { RootStackScreenProps } from '../types';

import FavoriteLine from '../assets/images/favoriteLine.svg';
import TopUnselected from '../assets/icons/svg/top-icon-unselected.svg';
import MiddleUnselected from '../assets/icons/svg/middle-icon-unselected.svg';
import BottomUnselected from '../assets/icons/svg/bottom-icon-unselected.svg';
import JungleUnselected from '../assets/icons/svg/jungle-icon-unselected.svg';
import SupportUnselected from '../assets/icons/svg/support-icon-unselected.svg';
import BottomSelected from '../assets/icons/svg/bottom-icon-selected.svg';
import SupportSelected from '../assets/icons/svg/support-icon-selected.svg';
import FavoriteChamp from '../assets/images/favoriteChamp.svg';
import SelectFirstChamp from '../assets/images/selectFirstChamp.svg';
import SelectSecondChamp from '../assets/images/selectSecondChamp.svg';
import SelectThirdChamp from '../assets/images/selectThirdChamp.svg';
import StartMatching from '../assets/images/startMatching.svg';
import { useState } from 'react';

export default function SelectMyLineChampScreen({
  navigation,
}: RootStackScreenProps<'SelectMyLineChamp'>) {
  const [isTopSelected, setIsTopSelected] = useState(false);
  const [isMiddleSelected, setIsMiddleSelected] = useState(false);
  const [isBottomSelected, setIsBottomSelected] = useState(false);
  const [isJungleSelected, setIsJungleSelected] = useState(false);
  const [isSupportSelected, setIsSupportSelected] = useState(false);

  const changeIsTopSelected = () => {
    setIsTopSelected(!isTopSelected);
  };

  const changeIsMiddleSelected = () => {
    setIsMiddleSelected(!isMiddleSelected);
  };

  const changeIsBottomSelected = () => {
    setIsBottomSelected(!isBottomSelected);
  };

  const changeIsJungleSelected = () => {
    setIsJungleSelected(!isJungleSelected);
  };

  const changeIsSupportSelected = () => {
    setIsSupportSelected(!isSupportSelected);
  };

  return (
    <View style={styles.fullScreenView}>
      <View style={styles.selectLoLAccountContainer}>
        <Text style={styles.selectLoLAccountText}>endendtndus@naver.com</Text>
      </View>
      <View
        style={{
          width: Layout.Width * 0.87,
          height: Layout.Height * 0.15,
          justifyContent: 'space-between',
          marginVertical: Layout.Height * 0.05,
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <FavoriteLine width={Layout.Width * 0.5} />
        </View>
        <View
          style={{
            width: Layout.Width * 0.87,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
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
            {isTopSelected ? <TopUnselected /> : <TopUnselected />}
          </Pressable>
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
            {isMiddleSelected ? <MiddleUnselected /> : <MiddleUnselected />}
          </Pressable>
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
            {isBottomSelected ? <BottomSelected /> : <BottomUnselected />}
          </Pressable>
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
            {isJungleSelected ? <JungleUnselected /> : <JungleUnselected />}
          </Pressable>
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
            {isSupportSelected ? <SupportSelected /> : <SupportUnselected />}
          </Pressable>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          height: Layout.Height * 0.42,
          justifyContent: 'space-between',
        }}
      >
        <FavoriteChamp width={Layout.Width * 0.5} />
        <View
          style={{
            alignItems: 'center',
            height: Layout.Height * 0.315,
            justifyContent: 'space-between',
          }}
        >
          <Pressable
            style={({ pressed }) => [
              styles.selectChampButton,
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <SelectFirstChamp width={Layout.Width * 0.45} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.selectChampButton,
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <SelectSecondChamp width={Layout.Width * 0.45} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.selectChampButton,
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <SelectThirdChamp width={Layout.Width * 0.45} />
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
    marginVertical: Layout.Height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
