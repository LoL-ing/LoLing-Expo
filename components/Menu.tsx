import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import Chevron_Right from '../assets/icons/svg/fi_chevron-right.svg';

export default function Menu(props: {
  destination: any;
  title: string;
  onPressAnimation: any;
  onPressAnimationReverse: any;
}) {
  const navigation = useNavigation();
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
      onPress={() => {
        props.onPressAnimation();
        setTimeout(
          () =>
            navigation.navigate(
              props.destination,
              props.onPressAnimationReverse,
            ),
          1000,
        );
      }}
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
