import * as React from 'react';
import { Pressable, StyleSheet, ScrollView } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
// import ModalScreen from '../screens/ModalScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootTabScreenProps} from '../types';
import Friend from '../components/Friend';
import { FlatList } from 'react-native-gesture-handler';

const FriendData =[
  {
    nickname: '하아아아푸움',
    bookmark: true,
    profileImg: require('../assets/images/Nunu.png'),
  },

  {
    nickname: '개란말이개미',
    bookmark: false,
    profileImg: require('../assets/images/Irelia.png'),
  },

  {
    nickname: '모닝글라스',
    bookmark: false,
    profileImg: require('../assets/images/Irelia.png'),
  },

  {
    nickname: '고려대 김자헌',
    bookmark: false,
    profileImg: require('../assets/images/Teemo.png'),
  },

  {
    nickname: '고려대 김자헌',
    bookmark: false,
    profileImg: require('../assets/images/Teemo.png'),
  },
  {
    nickname: '고려대 김자헌',
    bookmark: false,
    profileImg: require('../assets/images/Teemo.png'),
  },
  {
    nickname: '고려대 김자헌',
    bookmark: false,
    profileImg: require('../assets/images/Teemo.png'),
  },
  {
    nickname: '고려대 김자헌',
    bookmark: true,
    profileImg: require('../assets/images/Teemo.png'),
  },
  {
    nickname: '고려대 김자헌',
    bookmark: false,
    profileImg: require('../assets/images/Teemo.png'),
  },
  {
    nickname: '고려대 김자헌',
    bookmark: false,
    profileImg: require('../assets/images/Teemo.png'),
  },
  {
    nickname: '고려대 김자헌',
    bookmark: true,
    profileImg: require('../assets/images/Teemo.png'),
  },
  {
    nickname: '고려대 김자헌',
    bookmark: false,
    profileImg: require('../assets/images/Teemo.png'),
  },
  {
    nickname: '고려대 김자헌',
    bookmark: false,
    profileImg: require('../assets/images/Teemo.png'),
  },

]

let MarkedFriends = FriendData.filter(
  (item) => item.bookmark === true
)

// nickname 가나다순 정렬하기

// let UnMarkedFriends = FriendData.filter(
//   (item) => item.bookmark === false
// )

export default function SocialScreen({ navigation }: RootTabScreenProps<'Social'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoLing</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
        <FlatList
          data={MarkedFriends}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent = {
            <Text>
              즐겨찾기
            </Text>
          }
          renderItem={({ item }) =>
            <Friend
              nickname={item.nickname}
              bookmark={item.bookmark}
              profileImg={item.profileImg}
            />}/>

        <FlatList
          data={FriendData}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent = {
            <Text>
              친구
            </Text>
          }
          renderItem={({ item }) =>
            <Friend
              nickname={item.nickname}
              bookmark={item.bookmark}
              profileImg={item.profileImg}
            />}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161627'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
