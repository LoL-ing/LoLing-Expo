import * as React from 'react';
import { StyleSheet, Pressable, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import {Text, View} from '../components/Themed';
import Colors from '../constants/Colors';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { whileStatement } from '@babel/types';
import DropDownPicker from'react-native-dropdown-picker';


const Width = Dimensions.get('window').width;    //스크린 너비 초기화
const Height = Dimensions.get('window').height;

export default function AuthScreen() {
    const [name, setName] = useState('')
    const [RRN, setRRN] = useState(0)
    const [phoneNum, setPhoneNum] = useState(0)
    const [carriers, setCarriers]= useState([
      {label: 'SKT', value: 'skt'},
      {label: 'KT', value: 'kt'},
      {label: 'LG', value: 'lg'},
    ])

    return (
        <SafeAreaView style={styles.fullscreen}>
          <Text style={styles.title}>
            본인 인증
          </Text>

            <Text style={styles.subtitle}>
              이름
            </Text>
             <TextInput style={styles.textInput}
                placeholder= "이름을 입력하세요."
                placeholderTextColor='#73737D'
                maxLength = {8}
                onChangeText={text => setName(text)} value={name}
                returnKeyType="next"
                autoCompleteType="username"
                />
            <View style={styles.separator} />

                <Text style={styles.subtitle}>
                  주민등록번호
                </Text>
                <View style = {{backgroundColor: Colors.dark.background, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={{backgroundColor: Colors.dark.background, width: '45%'}}>
                    <TextInput style={styles.textInput}
                        placeholder= "앞 번호 6자리"
                        placeholderTextColor='#73737D'
                        maxLength = {6}
                        // onChangeText={number => setRRN(text)} value={RRN}
                        keyboardType= 'numeric'   //number-pad, decimal-pad, numeric 중에 뭐해야되지? 그리고 왜 밑에랑 다르게 나오지
                        returnKeyType="next"
                        />
                  <View style={styles.separator} />
                  </View>
                  <Text style={{color: Colors.dark.text, fontSize: 20}}>
                  -
                  </Text>
                  <View style={{backgroundColor: Colors.dark.background, width: '45%'}}>
                    <TextInput style={styles.textInput}
                        placeholder= "뒷 번호 7자리"
                        placeholderTextColor='#73737D'
                        maxLength = {7}
                        // onChangeText={number => setRRN(text)} value={RRN}
                        keyboardType= 'numeric'
                        returnKeyType="next"
                        secureTextEntry={true}
                        />
                <View style={styles.separator} />
                </View>
              </View>
              {/* <Picker 
                selectedValue={carrier}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setCarrier(itemValue)}>
                  <Picker.Item label="SKT" value="skt"/>
                  <Picker.Item label="KT" value="kt"/>
                  <Picker.Item label="LG" value="lg"/>
              </Picker> */}
              {/* <DropDownPicker
              items={carriers}
              setItems={setCarriers}
              value={}
              setValue={}
              open={true}
              >
            </DropDownPicker> */}
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
    subtitle:{
      fontSize: 18,
      fontWeight: 'normal',
      color: 'white',
      marginVertical: 20,
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
    picker:{
      height: 30,
      width: 50
    },
  });
  
  