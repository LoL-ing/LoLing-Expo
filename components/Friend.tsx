import * as React from 'react';
import Colors from '../constants/Colors';
import { Pressable, StyleSheet, Image, ImageSourcePropType, Modal, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


const starOn = require('../assets/images/starOn.png')
const starOff = require('../assets/images/starOff.png')


export default function Friend( props : {
    nickname: string,
    bookmark: boolean,
    profileImg: ImageSourcePropType,
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
                        <View style={{flexDirection: 'row', backgroundColor: Colors.dark.background3, 
                                    }}>

                        <View style={{backgroundColor: Colors.dark.background3, width: '40%'}}>
                            <Image 
                            source = {props.profileImg}
                            style = {{width: 100, height: 100, borderRadius: 100}}
                            >
                            </Image>
                        </View>
                        <View style={{justifyContent: 'center', width: '60%',
                                     backgroundColor: Colors.dark.background3}}>
                            
                        <View style={{backgroundColor: Colors.dark.background3, flexDirection: 'row',
                                        alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{backgroundColor: Colors.dark.background3}}>
                            <Text style={{color: 'black',fontSize: 30, fontWeight: 'bold'}}>
                                {props.nickname}
                            </Text>
                            </View>
                            
                            <Pressable style={({ pressed }) => ({
                                        opacity: pressed ? 0.5 : 1,
                                        backgroundColor: Colors.dark.background3
                                        })}>
                                    <Image
                                        source = {props.bookmark === true ? starOn: starOff}
                                        style = {{ width: 40, height: 40, margin: 10}}>
                                    </Image>
                            </Pressable>
                        </View>

                        <View style={{backgroundColor: Colors.dark.background3, 
                            flexDirection: 'row', alignItems: 'center', justifyContent: "space-between"}}> 
                            <Pressable 
                                style={({ pressed }) => ({
                                    opacity: pressed ? 0.5 : 1,
                                    paddingVertical: 5,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: Colors.dark.background3,
                                    })}
                                    //onPress={() => setModalVisible(true)}
                                    >
                                <Text style={styles.pressableText}>좋아요</Text>
                            </Pressable>
                            <Pressable 
                                style={({ pressed }) => ({
                                    opacity: pressed ? 0.5 : 1,
                                    paddingVertical: 5,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: Colors.dark.background3,
                                    })}
                                    //onPress={() => setModalVisible(true)}
                                    >
                                <Text style={styles.pressableText}>싫어요</Text>
                            </Pressable>
                            <Pressable 
                                style={({ pressed }) => ({
                                    opacity: pressed ? 0.5 : 1,
                                    paddingVertical: 5,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: Colors.dark.background3,
                                    })}
                                    //onPress={() => setModalVisible(true)}
                                    >
                                <Text style={styles.pressableText}>신고하기</Text>
                            </Pressable>
                        </View>
                        
                        </View>

                        </View>


                        <View style={{backgroundColor: Colors.dark.background3, 
                            flexDirection: 'row', alignItems: 'center', justifyContent: "space-around",
                            paddingTop: 10, paddingBottom: 10}}> 
                        <Pressable 
                                style={({ pressed }) => ({
                                    opacity: pressed ? 0.5 : 1,
                                    paddingVertical: 5,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: Colors.dark.background3,
                                    })}
                                    //onPress={() => setModalVisible(true)}
                                    >
                                <Text style={styles.pressableText}>1대1 채팅</Text>
                            </Pressable>
                            <Pressable 
                                style={({ pressed }) => ({
                                    opacity: pressed ? 0.5 : 1,
                                    paddingVertical: 5,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: Colors.dark.background3,
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
            // width : '100%', 
            paddingVertical: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: Colors.dark.background,
            })}
            onPress={() => setModalVisible(true)}>    
        <View
        style = {{ width: '80%', alignItems: 'center', flexDirection: 'row', backgroundColor: Colors.dark.background}}>
            <Image 
                source = {props.profileImg}
                style = {styles.profileImg}>
            </Image>
                
            <Text style={styles.nickname}>
                {props.nickname}
            </Text>
        </View>
        
        <View style = {{backgroundColor: Colors.dark.background}}>
            <Image 
                source = {props.bookmark === true ? starOn: starOff}
                style = {styles.star}>
            </Image>
        </View>
    </Pressable>
    </View>
);
} 

const styles = StyleSheet.create({
    bottomView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(100, 100, 100, 0)',
      },
      modalView: {
        margin: 20,
        backgroundColor: Colors.dark.background3,
        borderRadius: 20,
        padding: 35,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10,
    },
    nickname: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
      
    star: {
        width: 30,
        height: 30,
        margin: 10,
    },

    pressableText: {
        fontSize: 20,
        color: 'black', 
        //backgroundColor: Colors.dark.background3,
    }
      
});