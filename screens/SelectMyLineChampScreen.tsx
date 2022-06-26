import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  FlatList,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { useState, useRef, useEffect } from 'react';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { RootStackScreenProps } from '../types';
import getSelectChampions from '../data/SelectChampions';
import SelectChampion from '../components/SelectChampion';

import Welcome from '../assets/text_images/welcome.svg';
import PlayWithLine from '../assets/text_images/playwithLine.svg';
import FirstPurpleText from '../assets/text_images/firstPurpleText.svg';
import SecondPurpleText from '../assets/text_images/secondPurpleText.svg';
import ThirdPurpleText from '../assets/text_images/thirdPurpleText.svg';
import FirstGrayText from '../assets/text_images/firstGrayText.svg';
import SecondGrayText from '../assets/text_images/secondGrayText.svg';
import ThirdGrayText from '../assets/text_images/thirdGrayText.svg';
import TopPurpleText from '../assets/text_images/topPurpleText.svg';
import MiddlePurpleText from '../assets/text_images/middlePurpleText.svg';
import BottomPurpleText from '../assets/text_images/bottomPurpleText.svg';
import JunglePurpleText from '../assets/text_images/junglePurpleText.svg';
import SupportPurpleText from '../assets/text_images/supportPurpleText.svg';
import TopUnselected from '../assets/icons/svg/top-icon-unselected.svg';
import MiddleUnselected from '../assets/icons/svg/middle-icon-unselected.svg';
import BottomUnselected from '../assets/icons/svg/bottom-icon-unselected.svg';
import JungleUnselected from '../assets/icons/svg/jungle-icon-unselected.svg';
import SupportUnselected from '../assets/icons/svg/support-icon-unselected.svg';
import TopSelected from '../assets/icons/svg/top-icon-selected.svg';
import MiddleSelected from '../assets/icons/svg/middle-icon-selected.svg';
import BottomSelected from '../assets/icons/svg/bottom-icon-selected.svg';
import JungleSelected from '../assets/icons/svg/jungle-icon-selected.svg';
import SupportSelected from '../assets/icons/svg/support-icon-selected.svg';
import PlayWithChamp from '../assets/text_images/playwithChamp.svg';
import First from '../assets/text_images/1st.svg';
import Second from '../assets/text_images/2nd.svg';
import Third from '../assets/text_images/3rd.svg';
import StartMatching from '../assets/text_images/startMatching.svg';
import FavoriteFirstChamp from '../assets/text_images/favoriteFirstChamp.svg';
import FavoriteSecondChamp from '../assets/text_images/favoriteSecondChamp.svg';
import FavoriteThirdChamp from '../assets/text_images/favoriteThirdChamp.svg';
import QuestionMark from '../assets/text_images/questionMark.svg';
import Save from '../assets/text_images/save.svg';
import MatchingChatting from '../assets/icons/svg/matching-chatting.svg';

export default function SelectMyLineChampScreen({
  navigation,
}: RootStackScreenProps<'SelectMyLineChamp'>) {
  const [firstLine, setFirstLine] = useState('');
  const [secondLine, setSecondLine] = useState('');
  const [firstChamp, setFirstChamp] = useState('');
  const [secondChamp, setSecondChamp] = useState('');
  const [thirdChamp, setThirdChamp] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [selectFirstChamp, setSelectFirstChamp] = useState(false);
  const [selectSecondChamp, setSelectSecondChamp] = useState(false);
  const [selectThirdChamp, setSelectThirdChamp] = useState(false);

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

  const firstChampImgSource =
    firstChamp !== ''
      ? getSelectChampions().filter(item => item.champName === firstChamp)[0]
          .champImg
      : undefined;

  const secondChampImgSource =
    secondChamp !== ''
      ? getSelectChampions().filter(item => item.champName === secondChamp)[0]
          .champImg
      : undefined;

  const thirdChampImgSource =
    thirdChamp !== ''
      ? getSelectChampions().filter(item => item.champName === thirdChamp)[0]
          .champImg
      : undefined;

  /* animation */
  const ToMatchingAnim = useRef(new Animated.Value(0)).current;

  const changeScreenAnim = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(ToMatchingAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
          delay: 600,
        }),
        // Animated.decay(ToMatchingAnim, {
        //   velocity: 0.2,
        //   useNativeDriver: false,
        // }),
      ]),
    ]).start();
    setTimeout(() => {
      navigation.navigate('Matching');
    }, 1800);
  };

  /* end of animation */
  return (
    <View style={styles.fullScreenView}>
      <Animated.View
        style={{
          opacity: ToMatchingAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        }}
      >
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
            marginVertical: Layout.Height * 0.06,
          }}
        >
          <View
            style={{
              alignItems: 'center',
              marginBottom: Layout.Height * 0.015,
            }}
          >
            <PlayWithLine width={Layout.Width * 0.7} />
          </View>
          <View
            style={{
              width: Layout.Width * 0.87,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <View style={styles.selectLineBotton}>
              {firstLine == 'top' ? (
                <FirstPurpleText />
              ) : secondLine == 'top' ? (
                <SecondPurpleText />
              ) : (
                <FirstPurpleText opacity={0} />
              )}

              <Pressable
                onPress={() => {
                  changeIsTopSelected();
                }}
              >
                {firstLine == 'top' || secondLine == 'top' ? (
                  <TopSelected />
                ) : (
                  <TopUnselected />
                )}
              </Pressable>

              {firstLine == 'top' ? (
                <TopPurpleText />
              ) : secondLine == 'top' ? (
                <TopPurpleText />
              ) : (
                <TopPurpleText opacity={0} />
              )}
            </View>
            <View style={styles.selectLineBotton}>
              {firstLine == 'jungle' ? (
                <FirstPurpleText />
              ) : secondLine == 'jungle' ? (
                <SecondPurpleText />
              ) : (
                <FirstPurpleText opacity={0} />
              )}
              <Pressable
                onPress={() => {
                  changeIsJungleSelected();
                }}
              >
                {firstLine == 'jungle' || secondLine == 'jungle' ? (
                  <JungleSelected />
                ) : (
                  <JungleUnselected />
                )}
              </Pressable>
              {firstLine == 'jungle' ? (
                <JunglePurpleText />
              ) : secondLine == 'jungle' ? (
                <JunglePurpleText />
              ) : (
                <JunglePurpleText opacity={0} />
              )}
            </View>
            <View style={styles.selectLineBotton}>
              {firstLine == 'middle' ? (
                <FirstPurpleText />
              ) : secondLine == 'middle' ? (
                <SecondPurpleText />
              ) : (
                <FirstPurpleText opacity={0} />
              )}
              <Pressable
                onPress={() => {
                  changeIsMiddleSelected();
                }}
              >
                {firstLine == 'middle' || secondLine == 'middle' ? (
                  <MiddleSelected />
                ) : (
                  <MiddleUnselected />
                )}
              </Pressable>
              {firstLine == 'middle' ? (
                <MiddlePurpleText />
              ) : secondLine == 'middle' ? (
                <MiddlePurpleText />
              ) : (
                <MiddlePurpleText opacity={0} />
              )}
            </View>

            <View style={styles.selectLineBotton}>
              {firstLine == 'bottom' ? (
                <FirstPurpleText />
              ) : secondLine == 'bottom' ? (
                <SecondPurpleText />
              ) : (
                <FirstPurpleText opacity={0} />
              )}
              <Pressable
                onPress={() => {
                  changeIsBottomSelected();
                }}
              >
                {firstLine == 'bottom' || secondLine == 'bottom' ? (
                  <BottomSelected />
                ) : (
                  <BottomUnselected />
                )}
              </Pressable>
              {firstLine == 'bottom' ? (
                <BottomPurpleText />
              ) : secondLine == 'bottom' ? (
                <BottomPurpleText />
              ) : (
                <BottomPurpleText opacity={0} />
              )}
            </View>

            <View style={styles.selectLineBotton}>
              {firstLine == 'support' ? (
                <FirstPurpleText />
              ) : secondLine == 'support' ? (
                <SecondPurpleText />
              ) : (
                <FirstPurpleText opacity={0} />
              )}
              <Pressable
                onPress={() => {
                  changeIsSupportSelected();
                }}
              >
                {firstLine == 'support' || secondLine == 'support' ? (
                  <SupportSelected />
                ) : (
                  <SupportUnselected />
                )}
              </Pressable>
              {firstLine == 'support' ? (
                <SupportPurpleText />
              ) : secondLine == 'support' ? (
                <SupportPurpleText />
              ) : (
                <SupportPurpleText opacity={0} />
              )}
            </View>
          </View>
        </View>

        <View
          style={{
            height: Layout.Height * 0.22,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <PlayWithChamp width={Layout.Width * 0.7} />
          <View
            style={{
              width: Layout.Width * 0.65,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={styles.selectChampButton}>
              {firstChamp !== '' ? (
                <FirstPurpleText />
              ) : (
                <FirstPurpleText opacity={0} />
              )}
              <Pressable
                style={[
                  styles.selectChampBox,
                  firstChamp !== ''
                    ? {
                        borderWidth: 2.5,
                        borderColor: Colors.backgroundPurple,
                      }
                    : undefined,
                ]}
                onPress={() => {
                  setModalVisible(true);
                  setSelectFirstChamp(true);
                  setSelectSecondChamp(false);
                  setSelectThirdChamp(false);
                }}
              >
                {firstChamp === '' ? (
                  <First width={Layout.Width * 0.17} />
                ) : (
                  <Image
                    source={firstChampImgSource}
                    style={{
                      width: Layout.Width * 0.17,
                      height: Layout.Width * 0.17,
                    }}
                  />
                )}
              </Pressable>
              <Text
                style={{
                  color: Colors.backgroundPurple,
                  fontSize: Layout.FontScale * 8,
                  fontWeight: 'bold',
                }}
              >
                {firstChamp}
              </Text>
            </View>
            <View style={styles.selectChampButton}>
              {secondChamp !== '' ? (
                <SecondPurpleText />
              ) : (
                <SecondPurpleText opacity={0} />
              )}
              <Pressable
                style={[
                  styles.selectChampBox,
                  secondChamp !== ''
                    ? {
                        borderWidth: 2.5,
                        borderColor: Colors.backgroundPurple,
                      }
                    : undefined,
                ]}
                onPress={() => {
                  setModalVisible(true);
                  setSelectSecondChamp(true);
                  setSelectFirstChamp(false);
                  setSelectThirdChamp(false);
                }}
              >
                {secondChamp === '' ? (
                  <Second width={Layout.Width * 0.17} />
                ) : (
                  <Image
                    source={secondChampImgSource}
                    style={{
                      width: Layout.Width * 0.17,
                      height: Layout.Width * 0.17,
                    }}
                  />
                )}
              </Pressable>
              <Text
                style={{
                  color: Colors.backgroundPurple,
                  fontSize: Layout.FontScale * 8,
                  fontWeight: 'bold',
                }}
              >
                {secondChamp}
              </Text>
            </View>
            <View style={styles.selectChampButton}>
              {thirdChamp !== '' ? (
                <ThirdPurpleText />
              ) : (
                <ThirdPurpleText opacity={0} />
              )}
              <Pressable
                style={[
                  styles.selectChampBox,
                  thirdChamp !== ''
                    ? {
                        borderWidth: 2.5,
                        borderColor: Colors.backgroundPurple,
                      }
                    : undefined,
                ]}
                onPress={() => {
                  setModalVisible(true);
                  setSelectThirdChamp(true);
                  setSelectFirstChamp(false);
                  setSelectSecondChamp(false);
                }}
              >
                {thirdChamp === '' ? (
                  <Third width={Layout.Width * 0.17} />
                ) : (
                  <Image
                    source={thirdChampImgSource}
                    style={{
                      width: Layout.Width * 0.17,
                      height: Layout.Width * 0.17,
                    }}
                  />
                )}
              </Pressable>
              <Text
                style={{
                  color: Colors.backgroundPurple,
                  fontSize: Layout.FontScale * 8,
                  fontWeight: 'bold',
                }}
              >
                {thirdChamp}
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
        onPress={
          () =>
            firstLine &&
            secondLine &&
            firstChamp &&
            secondChamp &&
            thirdChamp !== ''
              ? changeScreenAnim()
              : alert('라인 2개와 챔피언 3개를 선택하셔야 합니다.')
          //changeScreenAnim()
        }
      >
        <Animated.View
          style={[
            styles.startMatchingButton,
            {
              backgroundColor:
                firstLine &&
                secondLine &&
                firstChamp &&
                secondChamp &&
                thirdChamp !== ''
                  ? Colors.backgroundPurple
                  : Colors.textUnfocusedPurple,
              width: ToMatchingAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [Layout.Width * 0.9, Layout.Width * 0.17],
              }),
            },
          ]}
        >
          <Animated.View
            style={{
              opacity: ToMatchingAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
              transform: [
                {
                  translateX: ToMatchingAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, Layout.Width * 0.4],
                  }),
                },
              ],
            }}
          >
            <StartMatching width={Layout.Width * 0.17} />
          </Animated.View>

          <Animated.View
            style={{
              opacity: ToMatchingAnim,
              position: 'absolute',
              transform: [
                {
                  translateX: ToMatchingAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-Layout.Width * 0.4, 0],
                  }),
                },
              ],
            }}
          >
            <MatchingChatting width={Layout.Width * 0.17} />
          </Animated.View>
        </Animated.View>
      </Pressable>

      <Modal visible={modalVisible}>
        <View style={styles.fullScreenModal}>
          <View
            style={{
              height: Layout.Height * 0.12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {selectFirstChamp ? (
              <FavoriteFirstChamp width={Layout.Width * 0.4} />
            ) : selectSecondChamp ? (
              <FavoriteSecondChamp width={Layout.Width * 0.4} />
            ) : selectThirdChamp ? (
              <FavoriteThirdChamp width={Layout.Width * 0.4} />
            ) : undefined}
            <View style={styles.selectFirstSecondThirdChamp}>
              {selectFirstChamp === true ? (
                <FirstPurpleText />
              ) : (
                <FirstGrayText />
              )}
              <Pressable
                style={[
                  styles.selectFirstSecondThirdChampBox,
                  selectFirstChamp
                    ? {
                        borderWidth: 2.5,
                        borderColor: Colors.backgroundPurple,
                      }
                    : undefined,
                ]}
                onPress={() => {
                  setSelectFirstChamp(true);
                  setSelectSecondChamp(false);
                  setSelectThirdChamp(false);
                }}
              >
                {firstChamp === '' ? (
                  <QuestionMark />
                ) : (
                  <Image
                    source={firstChampImgSource}
                    style={{
                      width: Layout.Width * 0.12,
                      height: Layout.Width * 0.12,
                    }}
                  />
                )}
              </Pressable>
              <Text
                style={{
                  color:
                    selectFirstChamp == true
                      ? Colors.backgroundPurple
                      : Colors.textUnfocusedPurple,
                  fontSize: Layout.FontScale * 8,
                }}
              >
                {firstChamp}
              </Text>
            </View>
            <View style={styles.selectFirstSecondThirdChamp}>
              {selectSecondChamp === true ? (
                <SecondPurpleText />
              ) : (
                <SecondGrayText />
              )}
              <Pressable
                style={[
                  styles.selectFirstSecondThirdChampBox,
                  selectSecondChamp
                    ? {
                        borderWidth: 2.5,
                        borderColor: Colors.backgroundPurple,
                      }
                    : undefined,
                ]}
                onPress={() => {
                  setSelectSecondChamp(true);
                  setSelectFirstChamp(false);
                  setSelectThirdChamp(false);
                }}
              >
                {secondChamp === '' ? (
                  <QuestionMark />
                ) : (
                  <Image
                    source={secondChampImgSource}
                    style={{
                      width: Layout.Width * 0.12,
                      height: Layout.Width * 0.12,
                    }}
                  />
                )}
              </Pressable>
              <Text
                style={{
                  color:
                    selectSecondChamp == true
                      ? Colors.backgroundPurple
                      : Colors.textUnfocusedPurple,
                  fontSize: Layout.FontScale * 8,
                }}
              >
                {secondChamp}
              </Text>
            </View>
            <View style={styles.selectFirstSecondThirdChamp}>
              {selectThirdChamp === true ? (
                <ThirdPurpleText />
              ) : (
                <ThirdGrayText />
              )}
              <Pressable
                style={[
                  styles.selectFirstSecondThirdChampBox,

                  selectThirdChamp
                    ? {
                        borderWidth: 2.5,
                        borderColor: Colors.backgroundPurple,
                      }
                    : undefined,
                ]}
                onPress={() => {
                  setSelectThirdChamp(true);
                  setSelectFirstChamp(false);
                  setSelectSecondChamp(false);
                }}
              >
                {thirdChamp === '' ? (
                  <QuestionMark />
                ) : (
                  <Image
                    source={thirdChampImgSource}
                    style={{
                      width: Layout.Width * 0.12,
                      height: Layout.Width * 0.12,
                    }}
                  />
                )}
              </Pressable>
              <Text
                style={{
                  color:
                    selectThirdChamp == true
                      ? Colors.backgroundPurple
                      : Colors.textUnfocusedPurple,
                  fontSize: Layout.FontScale * 8,
                }}
              >
                {thirdChamp}
              </Text>
            </View>
          </View>

          <View style={{ height: Layout.Height * 0.65 }}>
            {selectFirstChamp ? (
              <FlatList
                data={getSelectChampions()}
                renderItem={({ item }) => (
                  <Pressable
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.5 : 1,
                    })}
                    onPress={() => {
                      firstChamp !== item.champName
                        ? setFirstChamp(item.champName)
                        : setFirstChamp('');
                    }}
                  >
                    <SelectChampion
                      champImg={item.champImg}
                      champName={item.champName}
                      champRole={item.champRole}
                      isSelected={firstChamp === item.champName}
                    />
                  </Pressable>
                )}
                showsVerticalScrollIndicator={false}
              />
            ) : selectSecondChamp ? (
              <FlatList
                data={getSelectChampions()}
                renderItem={({ item }) => (
                  <Pressable
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.5 : 1,
                    })}
                    onPress={() => {
                      secondChamp !== item.champName
                        ? setSecondChamp(item.champName)
                        : setSecondChamp('');
                    }}
                  >
                    <SelectChampion
                      champImg={item.champImg}
                      champName={item.champName}
                      champRole={item.champRole}
                      isSelected={secondChamp === item.champName}
                    />
                  </Pressable>
                )}
                showsVerticalScrollIndicator={false}
              />
            ) : selectThirdChamp ? (
              <FlatList
                data={getSelectChampions()}
                renderItem={({ item }) => (
                  <Pressable
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.5 : 1,
                    })}
                    onPress={() => {
                      thirdChamp !== item.champName
                        ? setThirdChamp(item.champName)
                        : setThirdChamp('');
                    }}
                  >
                    <SelectChampion
                      champImg={item.champImg}
                      champName={item.champName}
                      champRole={item.champRole}
                      isSelected={thirdChamp === item.champName}
                    />
                  </Pressable>
                )}
                showsVerticalScrollIndicator={false}
              />
            ) : undefined}
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.savingButton,
              {
                opacity: pressed ? 0.5 : 1,
                backgroundColor:
                  firstChamp === '' || secondChamp === '' || thirdChamp === ''
                    ? Colors.textUnfocusedPurple
                    : Colors.backgroundPurple,
              },
            ]}
            onPress={() => setModalVisible(false)}
            disabled={
              firstChamp === '' || secondChamp === '' || thirdChamp === ''
            }
          >
            <Save width={Layout.Width * 0.17} />
          </Pressable>
        </View>
      </Modal>
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
  fullScreenModal: {
    width: Layout.Width,
    height: Layout.Height,
    paddingVertical: Layout.Height * 0.065,
    paddingHorizontal: Layout.Width * 0.05,
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
  selectLineBotton: {
    height: Layout.Height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectChampButton: {
    height: Layout.Height * 0.125,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectChampBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Layout.Width * 0.1,
  },
  startMatchingButton: {
    width: Layout.Width * 0.9,
    //height: Layout.Height * 0.072,
    height: Layout.Height * 0.08,
    marginVertical: Layout.Height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
  },
  savingButton: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.072,
    marginVertical: Layout.Height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  selectFirstSecondThirdChamp: {
    height: Layout.Height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectFirstSecondThirdChampBox: {
    width: Layout.Width * 0.13,
    height: Layout.Width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.textUnfocusedPurple,
    borderRadius: Layout.Width * 0.1,
  },
});
