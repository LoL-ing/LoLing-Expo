import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import FriendRequestIcon from '../assets/text_images/friendRequest.svg';
import MatchingRequestIcon from '../assets/text_images/matchingRequest.svg';
import RequestReject from '../assets/icons/svg/requestReject.svg';
import RequestAllow from '../assets/icons/svg/requestAllow.svg';

export default function FriendRequest(props: {
  proflieImg: ImageSourcePropType;
  nickname: string;
  isFriendrequest: boolean;
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.fullLine}>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          {
            width: Layout.Width * 0.61,
            height: Layout.Height * 0.11,
            flexDirection: 'row',
          },
        ]}
        onPress={() => navigation.navigate('ChatRoom')}
      >
        <View style={styles.ImgBox}>
          <Image
            source={props.proflieImg}
            style={{ width: Layout.Width * 0.15, height: Layout.Width * 0.15 }}
          />
        </View>
        <View style={styles.nameRequestBox}>
          <Text style={styles.nicknameText}>{props.nickname}</Text>
          <View>
            {props.isFriendrequest == true ? (
              <FriendRequestIcon width={Layout.Width * 0.18} />
            ) : (
              <MatchingRequestIcon width={Layout.Width * 0.18} />
            )}
          </View>
        </View>
      </Pressable>
      <View style={styles.rejectAllowBox}>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <RequestReject width={Layout.Width * 0.15} />
        </Pressable>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <RequestAllow width={Layout.Width * 0.15} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullLine: {
    flexDirection: 'row',
    width: Layout.Width,
    height: Layout.Height * 0.11,
  },
  ImgBox: {
    width: Layout.Width * 0.25,
    height: Layout.Height * 0.11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameRequestBox: {
    width: Layout.Width * 0.36,
    height: Layout.Height * 0.11,
    justifyContent: 'center',
  },
  rejectAllowBox: {
    flexDirection: 'row',
    width: Layout.Width * 0.35,
    height: Layout.Height * 0.11,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  nicknameText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 11,
    fontWeight: 'bold',
  },
});
