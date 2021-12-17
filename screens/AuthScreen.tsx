import * as React from 'react';
import { useState, createRef } from 'react';
import { StyleSheet, Pressable, Dimensions, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;

const nameRef = createRef<TextInput>();
const firstRRN = createRef<TextInput>();
const secondRRN = createRef<TextInput>();

export default function AuthScreen() {
  const [name, setName] = useState('');
  const [RRN, setRRN] = useState(0);
  const [phoneNum, setPhoneNum] = useState(0);
  const [carrier, setCarriers] = useState([
    { label: 'SKT', value: 'skt' },
    { label: 'KT', value: 'kt' },
    { label: 'LG', value: 'lg' },
  ]);

  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.fullscreen}>
      <Text style={styles.titleText}>본인 인증</Text>
      <View
        style={{
          marginHorizontal: 20,

          backgroundColor: Colors.backgroundBlack,
        }}
      >
        <Text style={styles.subtitleText}>이름</Text>
        <TextInput
          style={styles.fullTextInput}
          placeholder="이름을 입력하세요."
          ref={nameRef}
          placeholderTextColor="#73737D"
          maxLength={8}
          onChangeText={text => setName(text)}
          value={name}
          returnKeyType="next"
          autoCompleteType="username"
          onSubmitEditing={() => {
            firstRRN.current?.focus;
          }}
        />

        <Text style={styles.subtitleText}>주민등록번호</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            backgroundColor: Colors.backgroundBlack,
          }}
        >
          <TextInput
            style={styles.halfTextInput}
            placeholder="앞 번호 6자리"
            ref={firstRRN}
            placeholderTextColor="#73737D"
            maxLength={6}
            keyboardType="decimal-pad" //number-pad, decimal-pad, numeric 중에 뭐해야되지? 그리고 왜 밑에랑 다르게 나오지
            returnKeyType="next"
            selectTextOnFocus={true}
            onSubmitEditing={() => {
              secondRRN.current?.focus();
            }}
          />

          <Text style={{ color: Colors.textFocusedPurple, fontSize: 20 }}>
            -
          </Text>

          <TextInput
            style={styles.halfTextInput}
            placeholder="뒷 번호 7자리"
            ref={secondRRN}
            placeholderTextColor="#73737D"
            maxLength={7}
            keyboardType="numeric"
            returnKeyType="next"
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            backgroundColor: Colors.backgroundBlack,
          }}
        >
          <DropDownPicker
            placeholder="통신사"
            placeholderStyle={styles.pickerholderText}
            style={styles.pickerholderContainer}
            dropDownContainerStyle={styles.pickerContainer}
            listItemLabelStyle={styles.pickerText}
            labelStyle={styles.pickerText}
            itemSeparator={true}
            items={carrier}
            setItems={setCarriers}
            value={value}
            setValue={setValue}
            open={open}
            setOpen={setOpen}
          ></DropDownPicker>
          <TextInput
            style={styles.halfTextInput}
            placeholder="전화번호를 입력하세요."
            placeholderTextColor="#73737D"
            maxLength={7}
            keyboardType="number-pad"
            returnKeyType="done"
          />
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Text>인증요청</Text>
          </Pressable>
        </View>
      </View>
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
    fontSize: 25,
    fontWeight: 'bold',

    marginVertical: 70,
    marginHorizontal: 20,
  },
  subtitleText: {
    color: Colors.textWhite,
    fontSize: 18,
    fontWeight: 'normal',

    marginVertical: 20,
  },
  fullTextInput: {
    width: '100%',
    padding: 5,

    color: Colors.textWhite,
    fontSize: 15,
    fontWeight: 'normal',

    borderBottomWidth: 1,
    borderBottomColor: Colors.textFocusedPurple,
  },
  halfTextInput: {
    width: '45%',
    padding: 5,

    color: Colors.textWhite,
    fontSize: 15,
    fontWeight: 'normal',

    borderBottomWidth: 1,
    borderBottomColor: Colors.textFocusedPurple,
  },
  pickerholderContainer: {
    width: 100,
    height: 50,

    marginVertical: 10,

    borderColor: Colors.backgroundBlack,
    backgroundColor: Colors.backgroundBlack,
    borderBottomColor: '#484868',
    borderRadius: 0,
    borderWidth: 1,
  },
  pickerholderText: {
    color: Colors.textWhite,
    fontSize: 15,
    fontWeight: 'normal',
  },
  pickerContainer: {
    width: 100,
    marginVertical: 10,

    borderColor: Colors.backgroundBlack,
    backgroundColor: Colors.backgroundBlack,
    borderRadius: 0,
    borderWidth: 1,
  },
  pickerText: {
    color: Colors.textWhite,
    fontSize: 15,
    fontWeight: 'normal',
  },
});
