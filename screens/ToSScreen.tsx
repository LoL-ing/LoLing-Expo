import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Pressable, Dimensions, Text, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Shadow } from 'react-native-shadow-2';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { RootStackScreenProps } from '../types';
import Colors from '../constants/Colors';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

//This is ToSScreen

export default function ToSScreen({ navigation }: RootStackScreenProps<'ToS'>) {
  const [fullconsent, setFullConsent] = useState(false);
  const [essential, setEssential] = useState(false);
  const [optional1, setOptional1] = useState(false);
  const [optional2, setOptional2] = useState(false);
  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);

  const changeFullConsent = () => {
    setFullConsent(!fullconsent);
    setEssential(!fullconsent);
    setOptional1(!fullconsent);
    setOptional2(!fullconsent);
  };

  const changeEssential = () => {
    setEssential(!essential);
    setFullConsent(!essential && optional1 && optional2);
  };

  const changeOptional1 = () => {
    setOptional1(!optional1);
    setFullConsent(essential && !optional1 && optional2);
  };

  const changeOptional2 = () => {
    setOptional2(!optional2);
    setFullConsent(essential && optional1 && !optional2);
  };

  const changeCollapsed1 = () => {
    setCollapsed1(!collapsed1);
    if (collapsed1) {
      setCollapsed2(true);
      setCollapsed3(true);
    }
  };
  const changeCollapsed2 = () => {
    setCollapsed2(!collapsed2);
    if (collapsed2) {
      setCollapsed1(true);
      setCollapsed3(true);
    }
  };
  const changeCollapsed3 = () => {
    setCollapsed3(!collapsed3);
    if (collapsed3) {
      setCollapsed1(true);
      setCollapsed2(true);
    }
  };

  return (
    <View style={styles.fullscreen}>
      <Text style={styles.titleText}>안녕하세요!</Text>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          backgroundColor: Colors.backgroundBlack,
        }}
      >
        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            width: Width * 0.9,
            height: Height * 0.07,
            paddingLeft: 20,
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor:
              fullconsent === true
                ? Colors.backgroundPurple
                : Colors.backgroundNavy,
            borderRadius: 30,
          })}
          onPress={() => {
            changeFullConsent();
          }}
        >
          {fullconsent === true ? (
            <FontAwesome
              name="check-circle"
              size={30}
              color="white"
            ></FontAwesome>
          ) : (
            <FontAwesome
              name="check-circle-o"
              size={30}
              color={Colors.textGray}
            ></FontAwesome>
          )}
          <Text
            style={{
              color: Colors.textWhite,
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 20,
            }}
          >
            약관 전체 동의하기
          </Text>
        </Pressable>

        <View style={styles.fullToSContainer}>
          <View style={styles.ToSContainer}>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeEssential();
              }}
            >
              {essential === true ? (
                <FontAwesome
                  name="check-circle"
                  size={30}
                  color={Colors.textFocusedPurple}
                ></FontAwesome>
              ) : (
                <FontAwesome
                  name="check-circle-o"
                  size={30}
                  color={Colors.textGray}
                ></FontAwesome>
              )}
            </Pressable>
            <Text
              style={{
                fontSize: 14,
                color: Colors.textFocusedPurple,
                marginLeft: 20,
              }}
            >
              [필수]
            </Text>
            <Text style={styles.ToSTitleText}>전자금융거래 이용약관 동의</Text>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeCollapsed1();
              }}
            >
              {collapsed1 === false ? (
                <FontAwesome
                  name="chevron-up"
                  size={20}
                  color={Colors.textFocusedPurple}
                ></FontAwesome>
              ) : (
                <FontAwesome
                  name="chevron-down"
                  size={20}
                  color={Colors.textFocusedPurple}
                ></FontAwesome>
              )}
            </Pressable>
          </View>
          <Collapsible collapsed={collapsed1}>
            <ScrollView
              style={{
                width: Width * 0.9,
                backgroundColor: Colors.backgroundNavy,
                borderRadius: 30,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20,
              }}
            >
              <Text style={{ color: '#BDBDC5', fontSize: 10 }}>
                {`제1장 총칙

제 1조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.`}
              </Text>
            </ScrollView>
          </Collapsible>
        </View>

        <View style={styles.fullToSContainer}>
          <View style={styles.ToSContainer}>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeOptional1();
              }}
            >
              {optional1 === true ? (
                <FontAwesome
                  name="check-circle"
                  size={30}
                  color={Colors.textFocusedPurple}
                ></FontAwesome>
              ) : (
                <FontAwesome
                  name="check-circle-o"
                  size={30}
                  color={Colors.textGray}
                ></FontAwesome>
              )}
            </Pressable>
            <Text
              style={{
                fontSize: 14,
                color: Colors.textFocusedPurple,
                marginLeft: 20,
              }}
            >
              [선택]
            </Text>
            <Text style={styles.ToSTitleText}>전자금융거래 이용약관 동의</Text>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeCollapsed2();
              }}
            >
              {collapsed2 === false ? (
                <FontAwesome
                  name="chevron-up"
                  size={20}
                  color={Colors.textFocusedPurple}
                ></FontAwesome>
              ) : (
                <FontAwesome
                  name="chevron-down"
                  size={20}
                  color={Colors.textFocusedPurple}
                ></FontAwesome>
              )}
            </Pressable>
          </View>
          <Collapsible collapsed={collapsed2}>
            <ScrollView
              style={{
                width: Width * 0.9,
                backgroundColor: Colors.backgroundNavy,
                borderRadius: 30,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20,
              }}
            >
              <Text style={{ color: '#BDBDC5', fontSize: 10 }}>
                {`제1장 총칙

제 1조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.`}
              </Text>
            </ScrollView>
          </Collapsible>
        </View>

        <View style={styles.fullToSContainer}>
          <View style={styles.ToSContainer}>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeOptional2();
              }}
            >
              {optional2 === true ? (
                <FontAwesome
                  name="check-circle"
                  size={30}
                  color={Colors.textFocusedPurple}
                ></FontAwesome>
              ) : (
                <FontAwesome
                  name="check-circle-o"
                  size={30}
                  color={Colors.textGray}
                ></FontAwesome>
              )}
            </Pressable>
            <Text
              style={{
                fontSize: 14,
                color: Colors.textFocusedPurple,
                marginLeft: 20,
              }}
            >
              [선택]
            </Text>
            <Text style={styles.ToSTitleText}>전자금융거래 이용약관 동의</Text>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => {
                changeCollapsed3();
              }}
            >
              {collapsed3 === false ? (
                <FontAwesome
                  name="chevron-up"
                  size={20}
                  color={Colors.textFocusedPurple}
                ></FontAwesome>
              ) : (
                <FontAwesome
                  name="chevron-down"
                  size={20}
                  color={Colors.textFocusedPurple}
                ></FontAwesome>
              )}
            </Pressable>
          </View>

          <Collapsible collapsed={collapsed3}>
            <ScrollView
              style={{
                width: Width * 0.9,
                backgroundColor: Colors.backgroundNavy,
                borderRadius: 30,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20,
              }}
            >
              <Text style={{ color: '#BDBDC5', fontSize: 10 }}>
                {`제1장 총칙

제 1조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 '회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.`}
              </Text>
            </ScrollView>
          </Collapsible>
        </View>
      </View>

      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          position: 'absolute',
          top: Height * 0.85,
          right: Width * 0.07,
        })}
        onPress={() =>
          essential
            ? navigation.navigate('Authentication')
            : alert('필수 약관에 동의하셔야합니다잉')
        }
      >
        <Shadow startColor={'#C5A3FF77'} distance={essential ? 8 : 0}>
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: essential ? Colors.backgroundPurple : '#484868',
              borderRadius: 65,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesome
              name="arrow-right"
              size={30}
              color={Colors.iconWhite}
            ></FontAwesome>
          </View>
        </Shadow>
      </Pressable>
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
  titleText: {
    color: Colors.textWhite,
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 70,
    marginLeft: 20,
  },
  ToSContainer: {
    width: Width * 0.9,
    height: Height * 0.07,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 30,
  },
  fullToSContainer: {
    width: Width * 0.9,
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 30,
  },
  ToSTitleText: {
    color: Colors.textWhite,
    fontSize: 14,
    marginRight: 50,
  },
});
