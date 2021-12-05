import * as React from 'react';
import { useRef } from 'react';
import { StyleSheet, Pressable, TouchableOpacity, SafeAreaView, Dimensions, Platform, TouchableWithoutFeedback } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { TextInput, Image, Keyboard } from 'react-native';
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

const loginData = [
    {
        name: 'yejin',
        email: 'kyj0032@korea.ac.kr',
        password: '1234'
    },
]


export default function SignInScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [log, setLogin] = useState(true)
    const login = (email: string, password: string) => {
        alert(`email: ${email} password: ${password}`);
        if (loginData[0].password != password)
            setLogin(false);

    }

    const [isFocused, setState] = useState(false);
    const [isFocused2, setState2] = useState(false);
    const onFocusChange = (focus : boolean) => {
        setState(focus);
    }
    const onFocusChange2 = (focus : boolean) => {
        setState2(focus);
    }
    

    //ref
    const refFirst = useRef();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={Styles.fullscreen}>
            <View style={{ backgroundColor: Colors.dark.background }}>

                <View style={styles.login}>
                    <View style={{
                        paddingTop: 20,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 10,
                        backgroundColor: Colors.dark.background,
                    }}>
                        <TextInput style={[styles.textInput, isFocused ? {
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.dark.text
                        }
                            : { borderBottomColor: 'gray', borderBottomWidth: 1 }]}

                            placeholder="아이디 / 이메일을 입력하세요"
                            placeholderTextColor={isFocused ? 'white' : 'gray'}
                            returnKeyType="next"
                            onFocus={() => { onFocusChange(true) }}
                            onBlur={() => { onFocusChange(false) }}

                            onChangeText={text => setEmail(text)} value={email}
                            onSubmitEditing={() => refFirst.current.focus()}
                            blurOnSubmit={false}

                        />
                        <TextInput style={[styles.textInput, log ? (isFocused2 ? {
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.dark.text
                        } : {
                            borderBottomWidth: 1,
                            borderBottomColor: 'gray'
                        })
                            : { borderBottomColor: 'red', borderBottomWidth: 1 }]}
                            placeholder="비밀번호를 입력하세요"
                            placeholderTextColor={isFocused2 ? 'white' : 'gray'}
                            secureTextEntry={true}
                            onFocus={() => { onFocusChange2(true) }}
                            onBlur={() => { onFocusChange2(false) }}
                            
                            onChangeText={text => setPassword(text)} value={password}
                            
                            ref={refFirst}
                            onSubmitEditing={() => {login(email, password)}}
                        />

                    </View>
                    {/* <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: Colors.dark.background,
                        paddingLeft: Width * 0.05,
                         
                        }}>
                        <FontAwesome
                                name="exclamation-circle"
                                size={30}
                                color='#FA585C'
                        ></FontAwesome>
                        <Text style={{
                            color: '#FA585C',
                            fontSize: 15,
                            marginLeft: 5,

                        }}>잘못된 비밀번호입니다. 다시 입력하세요.</Text>
                            

                    </View> */}
                    <View style={[{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: Colors.dark.background,
                        paddingLeft: Width * 0.05,

                    }, log ? { opacity: 0 } : { opacity: 1 }]}>
                        <Image source={require('../assets/images/exclamation-circle.png')}
                            style={{ width: 45, height: 45, }}
                        />
                        {/* <FontAwesome
                                    name="exclamation-circle"
                                    size={30}
                                    color='#FA585C'
                                ></FontAwesome> */}
                        <Text style={{
                            color: '#FA585C',
                            fontSize: 15,
                            marginLeft: 5,

                        }}>잘못된 비밀번호입니다. 다시 입력하세요.</Text>

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
                        //borderColor: Colors.dark.background,
                        //borderWidth : 3,
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
                                    onPress={() => login(email, password)}
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
                            <Image source={require('../assets/images/kakao.png')}
                            style={{ width: 30, height: 30, }}
                            />
                            </View>
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
                                <Image source={require('../assets/images/naver.png')}
                                style={{ width: 30, height: 30, }}
                                /></View>
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
                                <Image source={require('../assets/images/google.png')}
                                style={{ width: 30, height: 30, }}
                                />
                                </View>
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
            </View>
        </SafeAreaView>
        </TouchableWithoutFeedback>
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

        backgroundColor: Colors.dark.background,
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
        padding: 15,
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

function abc(abc: any) {
    throw new Error('Function not implemented.');
}

