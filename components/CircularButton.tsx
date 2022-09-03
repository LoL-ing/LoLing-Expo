import * as React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import Layout from '../constants/Layout';

export default function CircularButton(props: {
  // onPress: (event: GestureResponderEvent) => void;
  onPress: any;
  svgImage: JSX.Element;
  bottom: number;
  left: number;
}) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        {
          position: 'absolute',
          bottom: Layout.Height * props.bottom,
          left: Layout.Width * props.left,
          zIndex: 100,
        },
      ]}
    >
      {props.svgImage}
    </Pressable>
  );
}
