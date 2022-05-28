import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Chevron_Right from '../assets/icons/svg/fi_chevron-right.svg';
import Colors from '../constants/Colors';
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

      <Chevron_Right />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
