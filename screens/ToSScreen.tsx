import * as React from 'react';
import { StyleSheet, Pressable, SafeAreaView, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

const Width = Dimensions.get('window').width;    //스크린 너비 초기화
const Height = Dimensions.get('window').height;

export default function ToSScreen(props: {
    fullconsent: boolean,
    essential: boolean,
    optional1: boolean,
    optional2: boolean,
}) {
    const [fullconsent, setFullConsent] = useState(false);
    const changeFullConsent = () => {
        setFullConsent(true);
        props.fullconsent = fullconsent;
        props.essential = fullconsent;
        props.optional1 = fullconsent;
        props.optional2 = fullconsent;
        console.log(props.fullconsent)
    }

    const [essential, setEssential] = useState(false);
    const changeEssential = () => {
        setEssential(!(essential));
        props.essential = essential;
    }

    const [optional1, setOptonal1] = useState(false);
    const changeOptional1 = () => {
        setOptonal1(!(optional1));
        props.optional1 = optional1;
    }

    const [optional2, setOptonal2] = useState(false);
    const changeOptional2 = () => {
        setOptonal2(!(optional2));
        props.optional2 = optional2;
    }

    return (
        <SafeAreaView style={styles.fullscreen}>

            <Text style={styles.title}>
                안녕하세요!
            </Text>

            <View style={{ width: '100%', alignItems: 'center', backgroundColor: Colors.dark.background }}>

                <View style={styles.firstbox}>
                    <Pressable 
                        style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}
                        onPressOut = {() => {
                            changeFullConsent
                          }}
                    >
                        {props.fullconsent === true ? 
                         <FontAwesome
                         name="check-circle"
                         size={30}
                         color='white'
                        >
                        </FontAwesome>
                        :
                        <FontAwesome
                            name="check-circle-o"
                            size={30}
                            color={Colors.dark.tabIconDefault}
                        >
                        </FontAwesome>
                        }
                    </Pressable>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 20 }}>
                        약관 전체 동의하기
                    </Text>
                </View>

                <View style={styles.box}>
                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}
                    onPress = {() => {
                        changeEssential
                      }}>
                          {props.essential === true? 
                             <FontAwesome
                             name="check-circle"
                             size={30}
                             color='white'
                         >
                         </FontAwesome>
                          :
                             <FontAwesome
                             name="check-circle-o"
                             size={30}
                             color={Colors.dark.tabIconDefault}
                         >
                         </FontAwesome>}
                     
                    </Pressable>
                    <Text style={{ fontSize: 14, color: Colors.dark.text, marginLeft: 20 }}>
                        [필수]
                    </Text>
                    <Text style={{ fontSize: 14, marginRight: 50 }}>
                        전자금융거래 이용약관 동의
                    </Text>
                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                        <FontAwesome
                            name="chevron-down"
                            size={20}
                            color={Colors.dark.text}
                        >
                        </FontAwesome>
                    </Pressable>
                </View>

                <View style={styles.box}>
                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                        <FontAwesome
                            name="check-circle-o"
                            size={30}
                            color={Colors.dark.tabIconDefault}
                        >
                        </FontAwesome>
                    </Pressable>
                    <Text style={{ fontSize: 14, color: Colors.dark.text, marginLeft: 20 }}>
                        [선택]
                    </Text>
                    <Text style={{ fontSize: 14, marginRight: 50 }}>
                        전자금융거래 이용약관 동의
                    </Text>
                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                        <FontAwesome
                            name="chevron-down"
                            size={20}
                            color={Colors.dark.text}
                        >
                        </FontAwesome>
                    </Pressable>
                </View>

                <View style={styles.box}>
                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                        <FontAwesome
                            name="check-circle-o"
                            size={30}
                            color={Colors.dark.tabIconDefault}
                        >
                        </FontAwesome>
                    </Pressable>
                    <Text style={{ fontSize: 14, color: Colors.dark.text, marginLeft: 20 }}>
                        [선택]
                    </Text>
                    <Text style={{ fontSize: 14, marginRight: 50 }}>
                        전자금융거래 이용약관 동의
                    </Text>
                    <Pressable style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                        <FontAwesome
                            name="chevron-down"
                            size={20}
                            color={Colors.dark.text}
                        >
                        </FontAwesome>
                    </Pressable>
                </View>

            </View>

            <Pressable style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                alignItems: 'flex-end',
                marginTop: 150,
                marginRight: 20,
            })}>
                <View style={styles.nexticon}>
                    <FontAwesome
                        name="arrow-right"
                        size={30}
                        color='#FFF'
                    >
                    </FontAwesome>
                </View>
            </Pressable>

        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    fullscreen: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.dark.background
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 70,
        marginLeft: 20,
    },
    firstbox: {
        width: Width * 0.9,
        height: Height * 0.07,
        flexDirection: 'row',
        backgroundColor: Colors.dark.background2,
        borderRadius: 30,
        alignItems: 'center',
        paddingLeft: 20,
        marginVertical: 10,
    },
    box: {
        width: Width * 0.9,
        height: Height * 0.07,
        flexDirection: 'row',
        backgroundColor: Colors.dark.background2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20,
        marginVertical: 10,
    },
    nexticon: {
        width: 65,
        height: 65,
        backgroundColor: '#484868',
        borderRadius: 100 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

