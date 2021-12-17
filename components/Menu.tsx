import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { Text } from '../components/Themed';

export default function Menu(props: {
  navigate: (arg0: any) => void;
  destination: any;
  title: string;
}) {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        width: '80%',
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.backgroundBlack,
      })}
      onPressOut={() => props.navigate(props.destination)}
    >
      <Text
        style={{ color: Colors.textWhite, fontSize: 20, fontWeight: 'bold' }}
      >
        {props.title}
      </Text>
      <FontAwesome
        name="chevron-right"
        size={30}
        color={Colors.iconGray}
      ></FontAwesome>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
