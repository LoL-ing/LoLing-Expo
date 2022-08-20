import * as React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function HomeScreenFriendList(props: {
  nickname: string;
  profileImg: string;
}) {
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundBlack,
        alignItems: 'center',
        marginRight: Layout.Width * 0.05,
      }}
    >
      <View style={{ backgroundColor: Colors.backgroundBlack }}>
        <Image
          style={styles.profileImgStyle}
          source={require('../assets/images/Nunu.png')}
        ></Image>
      </View>
      <View
        style={{
          backgroundColor: Colors.backgroundBlack,
        }}
      >
        <Text
          style={{
            color: Colors.textWhite,
            width: Layout.Width * 0.2,
            textAlign: 'center',
          }}
          ellipsizeMode={'tail'}
          numberOfLines={1}
        >
          {props.nickname}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImgStyle: {
    width: Layout.Width * 0.15,
    height: Layout.Width * 0.15,
    borderRadius: Layout.Width * 0.075,
    marginBottom: Layout.Height * 0.01,
  },
});
