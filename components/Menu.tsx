import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Chevron_Right from '../assets/icons/svg/fi_chevron-right.svg';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
export default function Menu(props: {
  navigate: (arg0: any) => void;
  destination: any;
  title: string;
}) {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        width: Layout.Width * 0.7,
        height: Layout.Height * 0.03,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: Layout.Height * 0.015,
      })}
      onPress={() => props.navigate(props.destination)}
    >
      <Text
        style={{
          color: Colors.textWhite,
          fontSize: Layout.FontScale * 14,
          fontWeight: 'bold',
        }}
      >
        {props.title}
      </Text>

      <Chevron_Right />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
