import * as React from 'react';
import { StyleSheet, Pressable, SafeAreaView, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { RootStackScreenProps } from '../types';


const Width = Dimensions.get('window').width;    //스크린 너비 초기화
const Height = Dimensions.get('window').height;

export default function ToSScreen({ navigation }: RootStackScreenProps<'ToS'>) {
    const [fullconsent, setFullConsent] = useState(false);
    const [essential, setEssential] = useState(false);
    const [optional1, setOptional1] = useState(false);
    const [optional2, setOptional2] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const changeFullConsent = () => {
        setFullConsent(!(fullconsent));
        setEssential(!(fullconsent));
        setOptional1(!(fullconsent));
        setOptional2(!(fullconsent));
    }

    const changeEssential = () => {
        setEssential(!(essential));
        setFullConsent(!(essential) && optional1 && optional2);
    }

    const changeOptional1 = () => {
        setOptional1(!(optional1));
        setFullConsent(essential && !(optional1) && optional2);
    }

    const changeOptional2 = () => {
        setOptional2(!(optional2));
        setFullConsent(essential && optional1 && !(optional2));
    }

    return (
        <SafeAreaView style={styles.fullscreen}>

            <Text style={styles.title}>
                안녕하세요!
            </Text>

            <View style={{ width: '100%', alignItems: 'center', backgroundColor: Colors.dark.background }}>

                <Pressable
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                        width: Width * 0.9,
                        height: Height * 0.07,
                        flexDirection: 'row',
                        backgroundColor: fullconsent === true ? Colors.dark.background3 : Colors.dark.background2,
                        borderRadius: 30,
                        alignItems: 'center',
                        paddingLeft: 20,
                        marginVertical: 10,
                    })}
                    onPress={() => {
                        changeFullConsent()
                    }}
                >
                    {fullconsent === true ?
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
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 20 }}>
                        약관 전체 동의하기
                    </Text>

                </Pressable>

                <View style={styles.fullbox}>
                    <View style={styles.box}>
                        <Pressable style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                        })}
                            onPress={() => {
                                changeEssential()
                            }}>
                            {essential === true ?
                                <FontAwesome
                                    name="check-circle"
                                    size={30}
                                    color={Colors.dark.text}
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
                        })}
                            onPress={() => {
                                setShow1(!(show1))
                            }}>
                            {show1 === true ?
                            <FontAwesome
                            name="chevron-up"
                            size={20}
                            color={Colors.dark.text}
                            >
                            </FontAwesome>
                            :
                            <FontAwesome
                                name="chevron-down"
                                size={20}
                                color={Colors.dark.text}
                            >
                            </FontAwesome>}
                        </Pressable>

                    </View>

                    <ScrollView style={{
                        width: Width * 0.9,
                        height: show1 === true ? Height * 0.13 : 0,
                        backgroundColor: Colors.dark.background2,
                        borderRadius: 30,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 20
                    }}>
                        <Text style={{ color: '#BDBDC5', fontSize: 10 }}>
                            제1장 총칙

                            제 1조 (목적)
                            본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가
                            제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및
                            관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금
                            예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서
                            비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권
                            리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는
                            것을 그 목적으로 합니다.
                        </Text>
                    </ScrollView>
                </View>

                <View style={styles.fullbox}>
                    <View style={styles.box}>
                        <Pressable style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                        })}
                            onPress={() => {
                                changeOptional1()
                            }}>
                            {optional1 === true ?
                                <FontAwesome
                                    name="check-circle"
                                    size={30}
                                    color={Colors.dark.text}
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
                            [선택]
                        </Text>
                        <Text style={{ fontSize: 14, marginRight: 50 }}>
                            전자금융거래 이용약관 동의
                        </Text>
                        <Pressable style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                        })}
                            onPress={() => {
                                setShow2(!(show2))
                            }}>
                            {show2 === true ?
                            <FontAwesome
                            name="chevron-up"
                            size={20}
                            color={Colors.dark.text}
                            >
                            </FontAwesome>
                            :
                            <FontAwesome
                                name="chevron-down"
                                size={20}
                                color={Colors.dark.text}
                            >
                            </FontAwesome>}
                        </Pressable>
                    </View>

                    <ScrollView style={{
                        width: Width * 0.9,
                        height: show2 === true ? Height * 0.13 : Height * 0,
                        backgroundColor: Colors.dark.background2,
                        borderRadius: 30,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 20
                    }}>
                        <Text style={{ color: '#BDBDC5', fontSize: 10 }}>
{`제1장 총칙

제 1조 (목적)
본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가 제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및 관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.`}
                        </Text>
                    </ScrollView>
                </View>

                <View style={styles.fullbox}>
                    <View style={styles.box}>
                        <Pressable style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                        })}
                            onPress={() => {
                                changeOptional2()
                            }}>
                            {optional2 === true ?
                                <FontAwesome
                                    name="check-circle"
                                    size={30}
                                    color={Colors.dark.text}
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
                            [선택]
                        </Text>
                        <Text style={{ fontSize: 14, marginRight: 50 }}>
                            전자금융거래 이용약관 동의
                        </Text>
                        <Pressable
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            onPress={() => {
                                setShow3(!(show3))
                            }}>
                            {show3 === true ?
                            <FontAwesome
                            name="chevron-up"
                            size={20}
                            color={Colors.dark.text}
                            >
                            </FontAwesome>
                            :
                            <FontAwesome
                                name="chevron-down"
                                size={20}
                                color={Colors.dark.text}
                            >
                            </FontAwesome>}
                        </Pressable>
                    </View>

                    <ScrollView style={{
                        width: Width * 0.9,
                        height: show3 === true ? Height * 0.13 : Height * 0,
                        backgroundColor: Colors.dark.background2,
                        borderRadius: 30,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingBottom: 20
                    }}>
                        <Text style={{ color: '#BDBDC5', fontSize: 10 }}>
                            제1장 총칙

                            제 1조 (목적)
                            본 약관은 엔에이치엔페이코 주식회사(이하 "회사"라 합니다)가
                            제공하는 전자지급결제대행서비스, 선불전자지급수단의 발행 및
                            관리서비스, 직불전자지급수단의 발행 및 관리서비스, 결제대금
                            예치서비스, 전자고지결제서비스(이하 통칭하여 "전자금융거래서
                            비스"라 합니다)를 "회원"이 이용함에 있어, "회사"와 "회원" 간 권
                            리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는
                            것을 그 목적으로 합니다.
                        </Text>
                    </ScrollView>
                </View>

            </View>

            <Pressable
                style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    marginBottom: 20,
                    marginRight: 20,
                })}
                onPress={() => essential ? navigation.navigate('Authentication') : alert('필수 약관에 동의하셔야합니다잉')}>
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
        marginVertical: 50,
        marginLeft: 20,
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
    },
    fullbox: {
        width: Width * 0.9,
        // height: Height * 0.2,
        backgroundColor: Colors.dark.background2,
        borderRadius: 30,
        justifyContent: 'center',
        marginVertical: 10
    },
    nexticon: {
        width: 65,
        height: 65,
        backgroundColor: '#484868',
        borderRadius: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

