// ../screens/HomeScreen.tsx에서 사용

const DATA = [
  {
    id: 1,
    profileImg: require('../assets/images/Nunu.png'),
    username: '하아아푸움',
  },
  {
    id: 2,
    profileImg: require('../assets/images/Irelia.png'),
    username: '모닝글라스',
  },
  {
    id: 3,
    profileImg: require('../assets/images/Teemo.png'),
    username: '개란말이개미',
  },
];

export default function getHomeScreenFriends() {
  return DATA;
}
