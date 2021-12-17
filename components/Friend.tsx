import * as React from 'react';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Modal,
} from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

const starOn = require('../assets/images/starOn.png');
const starOff = require('../assets/images/starOff.png');

export default function Friend(props: {
  nickname: string;
  bookmark: boolean;
  profileImg: ImageSourcePropType;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.bottomView}>
          <View style={styles.modalView}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: Colors.backgroundPurple,
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.backgroundPurple,
                    width: '40%',
                  }}
                >
                  <Image
                    source={props.profileImg}
                    style={{ width: 100, height: 100, borderRadius: 100 }}
                  ></Image>
                </View>
                <View
                  style={{
                    width: '60%',
                    justifyContent: 'center',
                    backgroundColor: Colors.backgroundPurple,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: Colors.backgroundPurple,
                    }}
                  >
                    <View style={{ backgroundColor: Colors.backgroundPurple }}>
                      <Text
                        style={{
                          color: Colors.textBlack,
                          fontSize: 30,
                          fontWeight: 'bold',
                        }}
                      >
                        {props.nickname}
                      </Text>
                    </View>

                    <Pressable
                      style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                        backgroundColor: Colors.backgroundPurple,
                      })}
                    >
                      <Image
                        source={props.bookmark === true ? starOn : starOff}
                        style={{ width: 40, height: 40, margin: 10 }}
                      ></Image>
                    </Pressable>
                  </View>

                  <View
                    style={{
                      backgroundColor: Colors.backgroundPurple,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Pressable
                      style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                        paddingVertical: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: Colors.backgroundPurple,
                      })}
                    >
                      <Text style={styles.pressableText}>좋아요</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                        paddingVertical: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: Colors.backgroundPurple,
                      })}
                    >
                      <Text style={styles.pressableText}>싫어요</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                        paddingVertical: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: Colors.backgroundPurple,
                      })}
                    >
                      <Text style={styles.pressableText}>신고하기</Text>
                    </Pressable>
                  </View>
                </View>
              </View>

              <View
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  backgroundColor: Colors.backgroundPurple,
                }}
              >
                <Pressable
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                    paddingVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: Colors.backgroundPurple,
                  })}
                >
                  <Text style={styles.pressableText}>1대1 채팅</Text>
                </Pressable>
                <Pressable
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                    paddingVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: Colors.backgroundPurple,
                  })}
                  //onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.pressableText}>프로필 상세보기</Text>
                </Pressable>
              </View>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          paddingVertical: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.backgroundBlack,
        })}
        onPress={() => setModalVisible(true)}
      >
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.backgroundBlack,
          }}
        >
          <Image source={props.profileImg} style={styles.profileImg}></Image>

          <Text style={styles.nickname}>{props.nickname}</Text>
        </View>

        <View style={{ backgroundColor: Colors.backgroundBlack }}>
          <Image
            source={props.bookmark === true ? starOn : starOff}
            style={styles.star}
          ></Image>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomView: {
    marginTop: 22,

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

    backgroundColor: 'rgba(100, 100, 100, 0)',
  },
  modalView: {
    width: '100%',
    margin: 20,
    padding: 35,

    backgroundColor: Colors.backgroundPurple,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileImg: {
    width: 50,
    height: 50,
    margin: 10,

    borderRadius: 50,
  },
  nickname: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: 20,
  },

  star: {
    width: 30,
    height: 30,
    margin: 10,
  },

  pressableText: {
    color: Colors.textBlack,
    fontSize: 20,
  },
});
