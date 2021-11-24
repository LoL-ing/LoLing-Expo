import * as React from 'react';
import { StyleSheet, Pressable, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { TextInput } from 'react-native';
import { useState, useRef, createRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { whileStatement } from '@babel/types';
import DropDownPicker from 'react-native-dropdown-picker';


const Width = Dimensions.get('window').width;    //스크린 너비 초기화
const Height = Dimensions.get('window').height;

const nameRef = createRef<TextInput>();
const firstRRN = createRef<TextInput>();
const secondRRN = createRef<TextInput>();

export default function AuthScreen() {
  const [name, setName] = useState('')
  const [RRN, setRRN] = useState(0)
  const [phoneNum, setPhoneNum] = useState(0)
  const [carrier, setCarriers] = useState([
    { label: 'SKT', value: 'skt' },
    { label: 'KT', value: 'kt' },
    { label: 'LG', value: 'lg' },
  ])
  const [value, setValue] = useState(null)
  const [open, setOpen] = useState(false)


  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.title}>
        본인 인증
      </Text>
      <View style={{ marginHorizontal: 20, backgroundColor: Colors.dark.background }}>
        <Text style={styles.subtitle}>
          이름
        </Text>
        <TextInput style={styles.fullTextInput}
          placeholder="이름을 입력하세요."
          ref={nameRef}
          placeholderTextColor='#73737D'
          maxLength={8}
          onChangeText={text => setName(text)} value={name}
          returnKeyType="next"
          autoCompleteType="username"
          onSubmitEditing={() => {
            firstRRN.current.focus;
          }}
        />

        <Text style={styles.subtitle}>
          주민등록번호
        </Text>
        <View style={{ backgroundColor: Colors.dark.background, flexDirection: 'row', justifyContent: 'space-between' }}>

          <TextInput style={styles.halfTextInput}
            placeholder="앞 번호 6자리"
            ref={firstRRN}
            placeholderTextColor='#73737D'
            maxLength={6}
            // onChangeText={number => setRRN(text)} value={RRN}
            keyboardType='decimal-pad'   //number-pad, decimal-pad, numeric 중에 뭐해야되지? 그리고 왜 밑에랑 다르게 나오지
            returnKeyType="next"
            selectTextOnFocus={true}
            onSubmitEditing={() => {
              secondRRN.current.focus();
            }}
          />


          <Text style={{ color: Colors.dark.text, fontSize: 20 }}>
            -
          </Text>

          <TextInput style={styles.halfTextInput}
            placeholder="뒷 번호 7자리"
            ref={secondRRN}
            placeholderTextColor='#73737D'
            maxLength={7}
            // onChangeText={number => setRRN(text)} value={RRN}
            keyboardType='numeric'
            returnKeyType="next"
            secureTextEntry={true}
          />
        </View>
        <View style={{ backgroundColor: Colors.dark.background, flexDirection: 'row', justifyContent: 'space-between' }}>
          <DropDownPicker
            placeholder="통신사"
            placeholderStyle={styles.pickerholderText}
            style={styles.pickerholderBox}
            dropDownContainerStyle={styles.pickerBox}
            listItemLabelStyle={styles.pickerText}
            labelStyle={styles.pickerText}
            itemSeparator={true}
            items={carrier}
            setItems={setCarriers}
            value={value}
            setValue={setValue}
            open={open}
            setOpen={setOpen}
          >
          </DropDownPicker>
          <TextInput style={styles.halfTextInput}
            placeholder="전화번호를 입력하세요."
            placeholderTextColor='#73737D'
            maxLength={7}
            keyboardType='number-pad'
            returnKeyType="done"
          />
          <Pressable style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1
          })}>
            <Text style={styles.socialText}>
              인증요청</Text>
          </Pressable>

        </View>
      </View>
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
    marginHorizontal: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
    marginVertical: 20,
  },
  fullTextInput: {
    width: '100%',
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.text,
    padding: 5,
  },
  halfTextInput: {
    width: '45%',
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.text,
    padding: 5,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
    backgroundColor: Colors.dark.text,
  },
  pickerholderBox: {
    width: 100,
    height: 50,
    borderColor: Colors.dark.background,
    backgroundColor: Colors.dark.background,
    borderBottomColor: '#484868',
    borderRadius: 0,
    borderWidth: 1,
    marginVertical: 10,
  },
  pickerholderText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'normal'
  },
  pickerBox: {
    width: 100,
    borderColor: Colors.dark.background,
    backgroundColor: Colors.dark.background,
    borderRadius: 0,
    borderWidth: 1,
    marginVertical: 10,
  },
  pickerText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
  }
});

