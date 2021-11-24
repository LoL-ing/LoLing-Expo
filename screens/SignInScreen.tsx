import * as React from 'react';
import { StyleSheet, Pressable, TouchableOpacity, SafeAreaView, Dimensions, Platform } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { whileStatement } from '@babel/types';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../constants/Styles';
import { Shadow } from 'react-native-shadow-2';

/* 3등분해서 넣는게 좋을듯
   1. textinput 창 선택하면 선+글씨 스타일 바뀌게
   2. 선색갑자기 사라짐.. 
   3. 소셜로그인 가운데정렬 - width를 고정해놓으면 괜찮은데 퍼센트로 주면 정렬이 안된다*/


/*            returnKeyType="next"
            selectTextOnFocus={true}
            onSubmitEditing={() => {
              secondRRN.current.focus();
            }} */
const Width = Dimensions.get('window').width;    //스크린 너비 초기화
const Height = Dimensions.get('window').height;

export default function SignInScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = (email: string, password: string) => {
        alert(`email: ${email} password: ${password}`);
    }
    return (
        <SafeAreaView style={Styles.fullscreen}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.login}>
                    <View style={{
                        padding: 20, backgroundColor: Colors.dark.background,
                    }}>
                        <TextInput style={styles.textInput}
                            placeholder="아이디 / 이메일을 입력하세요"
                            placeholderTextColor='white'
                            onChangeText={text => setEmail(text)} value={email}
                            returnKeyType="next"
                        />
                        <View style={styles.separator} lightColor="#eee" />
                        <TextInput style={styles.textInput}
                            placeholder="비밀번호를 입력하세요"
                            placeholderTextColor='white'
                            secureTextEntry={true}
                        />
                        <View style={styles.separator} lightColor="#eee" />
                    </View>
                    <View style={{
                        flexDirection: 'row', backgroundColor: Colors.dark.background,
                        justifyContent: 'space-around', alignItems: 'center',
                    }}>
                        <Pressable
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                                paddingVertical: 5,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            })}
                        //onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.smallText}>아이디 / 비밀번호 찾기</Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                                paddingVertical: 5,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            })}
                        //onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ fontSize: 15, color: Colors.dark.text }}>
                                <Text style={{ fontWeight: 'bold', color: Colors.dark.text }}>회원가입</Text>
                                하러 가기
                                <Text style={{ fontWeight: 'bold', color: Colors.dark.text }}>{'  >'}</Text>
                            </Text>
                        </Pressable>
                    </View>
                    <View style={{
                        backgroundColor: Colors.dark.background,
                        alignItems: 'center',
                        padding: 15,
                        paddingTop: 30,
                        paddingBottom: 30,
                    }}>
                        <Shadow startColor={'#C5A3FF77'}
                                distance={9}
                                >
                            <View style={styles.LOGINBox}>
                                <Pressable
                                    style={({ pressed }) => ({
                                        opacity: pressed ? 0.5 : 1,
                                        paddingVertical: 5,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    })}
                                //onPress={() => setModalVisible(true)}
                                >
                                    <View style={styles.LOGINBox}>
                                        <Text style={styles.LOGINtext}>LOG IN</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </Shadow>
                    </View>
                </View>

                <View style={styles.login_social}>
                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1
                    })}>
                        <View style={styles.socialBox}>
                            <View style={{ backgroundColor: Colors.dark.background2 }}>
                                <FontAwesome
                                    name="arrow-circle-o-up"
                                    size={30}
                                    color='white'
                                >
                                </FontAwesome></View>
                            <Text style={styles.socialText}>
                                <Text style={styles.innerText}>카카오</Text>
                                로 로그인하기</Text>
                            <FontAwesome
                                name="arrow-circle-o-up"
                                size={30}
                                color={Colors.dark.background2}
                            >
                            </FontAwesome>
                        </View>
                    </Pressable>


                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1
                    })}>
                        <View style={styles.socialBox}>
                            <View style={{ backgroundColor: Colors.dark.background2 }}>
                                <FontAwesome
                                    name="arrow-circle-o-up"
                                    size={30}
                                    color='white'
                                >
                                </FontAwesome></View>
                            <Text style={styles.socialText}>
                                <Text style={styles.innerText}>네이버</Text>
                                로 로그인하기</Text>
                            <FontAwesome
                                name="arrow-circle-o-up"
                                size={30}
                                color={Colors.dark.background2}
                            >
                            </FontAwesome>
                        </View>
                    </Pressable>

                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1
                    })}>
                        <View style={styles.socialBox}>
                            <View style={{ backgroundColor: Colors.dark.background2 }}>
                                <FontAwesome
                                    name="arrow-circle-o-up"
                                    size={30}
                                    color='white'
                                >
                                </FontAwesome></View>
                            <Text style={styles.socialText}>
                                <Text style={styles.innerText}>구글</Text>
                                로 로그인하기</Text>
                            <FontAwesome
                                name="arrow-circle-o-up"
                                size={30}
                                color={Colors.dark.background2}
                            >
                            </FontAwesome>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    // fullscreen: {
    //     flexDirection: 'column',
    //     width: '100%', 
    //     height:'100%',
    //     backgroundColor: Colors.dark.background,
    // },
    emptybox: {
        //flex:0.6,
        //backgroundColor: Colors.dark.background,
        backgroundColor: 'black',
        width: '100%',
        height: '20%',
    },
    login: {
        marginTop: 130,

        //backgroundColor: Colors.dark.background,
        backgroundColor: 'white',
    },
    login_social: {
        width: '100%',
        //flex: 1,
        //justifyContent: 'flex-end',
        backgroundColor: Colors.dark.background,
        alignItems: 'center',
    },
    textInput: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        //textDecorationLine: 'underline',
        //borderWidth: 1,
        padding: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#161627',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    separator: {
        marginVertical: 10,
        height: 1,
        width: '100%',
    },
    innerText: {
        fontWeight: 'bold',
    },
    smallText: {
        fontSize: 15,
    },
    LOGINView: {
        width: Width * 0.9,
        backgroundColor: Colors.dark.background3,
        borderRadius: 30,
        alignItems: 'center',
        //margin: 15,
        //marginBottom: 25,
    },
    LOGINBox: {
        width: Width * 0.9,
        backgroundColor: Colors.dark.background3,
        borderRadius: 30,
        alignItems: 'center',



        // ...Platform.select({
        //     ios: {
        //         shadowColor: Colors.dark.background3,
        //         shadowOffset: { width: 0, height: 6, },
        //         shadowOpacity: 0.8,
        //         shadowRadius: 13,
        //     },
        //     android: {
        //         elevation: 10,
        //     }
        // })
        // shadowColor: Colors.dark.background3,
        // shadowOffset: { width: 0, height: 6, },
        // shadowOpacity: 0.8,
        // shadowRadius: 13,
        // elevation: 10,
    },
    LOGINtext: {
        fontSize: 17,
        fontWeight: 'bold',
        padding: 20,
        color: 'white',
    },
    socialBox: {
        //width: 350,
        width: Width * 0.85,
        flexDirection: 'row',
        backgroundColor: Colors.dark.background2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
    },
    socialText: {
        padding: 17,
        fontSize: 15,
        //marginHorizontal: 50,
    },

});

