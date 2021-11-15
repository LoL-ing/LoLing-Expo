import * as React from 'react';
import { StyleSheet, Pressable, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import {Text, View} from '../components/Themed';
import Colors from '../constants/Colors';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { whileStatement } from '@babel/types';
import { ScrollView } from 'react-native-gesture-handler';

const Width = Dimensions.get('window').width;    //스크린 너비 초기화
const Height = Dimensions.get('window').height;

export default function SignUpScreen() {
    const [name, setName] = useState('')
    const [RRN, setRRN] = useState(0)
    const [phoneNum, setPhoneNum] = useState(0)


    return (
        <SafeAreaView style={styles.fullscreen}>
            <ScrollView 
            showsVerticalScrollIndicator ={false}>
            <Text style={styles.title}>
            회원 가입
          </Text>

            <Text style={styles.subtitle}>
              아이디
            </Text>
             <TextInput style={styles.textInput}
                placeholder= "아이디/이메일"
                placeholderTextColor='#73737D'
                //maxLength = {8}
                //onChangeText={text => setName(text)} value={name}
                returnKeyType="next"
                />
            <View style={styles.separator} />
            
            <Text style={styles.subtitle}>
              비밀번호
            </Text>
             <TextInput style={styles.textInput}
                placeholder= "비밀번호"
                placeholderTextColor='#73737D'
                //maxLength = {8}
                //onChangeText={text => setName(text)} value={name}
                returnKeyType="next"
                secureTextEntry={true}
                />
            

            <View style={styles.separator} />
            <Text style={styles.maintext}>
                영어 대문자, 소문자, 특수문자 중 2가지 이상의 조합으로 8자 이상
                
            </Text>

            <Text style={styles.subtitle}>
              비밀번호 확인
            </Text>
             <TextInput style={styles.textInput}
                placeholder= "비밀번호를 한번 더 입력해주세요."
                placeholderTextColor='#73737D'
                //maxLength = {8}
                //onChangeText={text => setName(text)} value={name}
                returnKeyType="next"
                secureTextEntry={true}
                />

            
            <View style={styles.separator} />

            <View style={styles.login_social}>
                <Pressable style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1})}>
                    <View style={styles.socialBox}>

                        <Text style={styles.socialText}>
                            가입완료</Text>
                        
                    </View>
                </Pressable>

            </View>    
        
            </ScrollView>
        </SafeAreaView>  
    );
}



const styles = StyleSheet.create({
    fullscreen: {
        flexDirection: 'column',
        width: '100%', 
        height:'100%',
        padding: 40,
        backgroundColor: Colors.dark.background
    },
    // emptybox: {
    //     flex:0.25,
    //     //backgroundColor: Colors.dark.background,
    //     backgroundColor: 'black',
    // },
    container: {
      justifyContent: 'flex-start',
      backgroundColor: Colors.dark.background,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginVertical: 70,
    },
    login_social: {
        width: '100%',
        flex:1,
        backgroundColor: Colors.dark.background,
        alignItems: 'center',
    },
    subtitle:{
      fontSize: 18,
      fontWeight: 'normal',
      color: 'white',
      marginVertical: 20,
    },
    maintext:{
        fontSize: 15,
        fontWeight: 'normal',
        color: '#73737D'
    },
    textInput:{
      fontSize: 15,
      fontWeight: 'normal',
      color: 'white'
    },
    separator: {
      marginVertical: 10,
      height: 1,
      width: '100%',
      backgroundColor: Colors.dark.text,
    },
    socialBox: {
        //width: 350,
        width: Width*0.8,
        flexDirection: 'row',
        backgroundColor: '#484868',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
    },
    socialText: {
        padding: 17,
        fontSize: 15,
        fontWeight: 'bold',
        //marginHorizontal: 50,
    },
    innerText: {
        fontWeight: 'bold',
    },

  });
  