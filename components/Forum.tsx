import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import StarOn from '../assets/icons/svg/star-on.svg';
import StarOff from '../assets/icons/svg/star-off.svg';

export default function Forum(props: {
  bookmark: boolean;
  title: string;
  recentPost: string;
}) {
  const [bookmark, setBookmark] = useState(props.bookmark);
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        width: Layout.Width * 0.86,
        height: Layout.Height * 0.03,
        marginBottom: Layout.Height * 0.03,
        flexDirection: 'row',
        alignItems: 'center',
      })}
    >
      <Pressable
        onPress={() => setBookmark(!bookmark)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        {bookmark ? (
          <StarOn
            width={Layout.Width * 0.056}
            style={{
              marginRight: Layout.Width * 0.044,
            }}
          />
        ) : (
          <StarOff
            width={Layout.Width * 0.056}
            style={{
              marginRight: Layout.Width * 0.044,
            }}
          />
        )}
      </Pressable>
      <View
        style={{
          width: Layout.Width * 0.76,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: Colors.textWhite,
            fontSize: Layout.FontScale * 15,
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            opacity: 0.6,
            color: Colors.textWhite,
            fontSize: Layout.FontScale * 12,
          }}
        >
          {props.recentPost}
        </Text>
      </View>
    </Pressable>
  );
}
