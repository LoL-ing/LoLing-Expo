import * as React from 'react';
import { useState } from 'react';
import {
  Pressable,
  View,
  Text,
  ImageSourcePropType,
  StyleSheet,
  Image,
} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function SelectChampion(props: {
  champImg: string;
  champName: string;
  champRole: string;
  isSelected: boolean;
}) {
  return (
    <View
      style={[
        styles.champItemView,
        {
          backgroundColor: props.isSelected
            ? Colors.backgroundPurple
            : Colors.backgroundNavy,
        },
      ]}
    >
      <Image style={styles.champImg} source={{ uri: props.champImg }} />
      <View
        style={{
          height: Layout.Height * 0.04,
          marginHorizontal: Layout.Width * 0.05,
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.champName}>{props.champName}</Text>
        <Text
          style={[
            styles.champRole,
            {
              color: props.isSelected
                ? Colors.textWhite
                : Colors.textUnfocusedPurple,
            },
          ]}
        >
          {props.champRole}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  champItemView: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.1,
    paddingHorizontal: Layout.Width * 0.03,
    marginVertical: Layout.Height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 8,
  },
  champImg: {
    width: Layout.Width * 0.15,
    height: Layout.Width * 0.15,
    borderRadius: Layout.Width * 0.15,
  },
  champName: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 10,
    fontWeight: 'bold',
  },
  champRole: {
    fontSize: Layout.FontScale * 10,
  },
});
