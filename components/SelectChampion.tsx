import * as React from 'react';
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
  champImg: ImageSourcePropType;
  champName: string;
  champRole: string;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.champItemView,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      <Image style={styles.champImg} source={props.champImg} />
      <View
        style={{
          height: Layout.Height * 0.04,
          marginHorizontal: Layout.Width * 0.05,
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.champName}>{props.champName}</Text>
        <Text style={styles.champRole}>{props.champRole}</Text>
      </View>
    </Pressable>
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
    backgroundColor: Colors.backgroundNavy,
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
  },
  champRole: {
    color: Colors.textUnfocusedPurple,
    fontSize: Layout.FontScale * 10,
  },
});
