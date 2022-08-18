import * as React from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import Colors from '../constants/Colors';

import FriendRequestIcon from '../assets/text_images/friendRequest.svg';
import MatchingRequestIcon from '../assets/text_images/matchingRequest.svg';
import RequestReject from '../assets/icons/svg/requestReject.svg';
import RequestAllow from '../assets/icons/svg/requestAllow.svg';
import { useNavigation } from '@react-navigation/native';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

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
            width: Width * 0.61,
            height: Height * 0.11,
            flexDirection: 'row',
          },
        ]}
        onPress={() => navigation.navigate('ChatRoom')}
      >
        <View style={styles.ImgBox}>
          <Image
            source={props.proflieImg}
            style={{ width: Width * 0.15, height: Width * 0.15 }}
          />
        </View>
        <View style={styles.nameRequestBox}>
          <Text style={styles.nicknameText}>{props.nickname}</Text>
          <View>
            {props.isFriendrequest == true ? (
              <FriendRequestIcon width={Width * 0.18} />
            ) : (
              <MatchingRequestIcon width={Width * 0.18} />
            )}
          </View>
        </View>
      </Pressable>
      <View style={styles.rejectAllowBox}>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <RequestReject width={Width * 0.15} />
        </Pressable>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <RequestAllow width={Width * 0.15} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullLine: {
    flexDirection: 'row',
    width: Width,
    height: Height * 0.11,
  },
  ImgBox: {
    width: Width * 0.25,
    height: Height * 0.11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameRequestBox: {
    width: Width * 0.36,
    height: Height * 0.11,
    justifyContent: 'center',
  },
  rejectAllowBox: {
    flexDirection: 'row',
    width: Width * 0.35,
    height: Height * 0.11,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  nicknameText: {
    color: Colors.textWhite,
    fontSize: FontScale * 11,
    fontWeight: 'bold',
  },
});
