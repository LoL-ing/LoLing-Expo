// ../screens/HomeScreen.tsx에서 사용

const DATA = [
  {
    id: 1,
    username: '하아아푸움',
    tier: 'Gold 3',
    mostChampImg: require('../assets/images/Nunu.png'),
    mostChampWinRate: '57%',
    mostChampKDA: '3.87',
    mostLineImg: require('../assets/images/lineJungle.png'),
    mostLineWinRate: '57%',
    mostLineKDA: '3.87',
  },
  {
    id: 2,
    username: '모닝글라스',
    tier: 'Master',
    mostChampImg: require('../assets/images/Irelia.png'),
    mostChampWinRate: '57%',
    mostChampKDA: '3.87',
    mostLineImg: require('../assets/images/lineJungle.png'),
    mostLineWinRate: '57%',
    mostLineKDA: '3.87',
  },
  {
    id: 3,
    username: '개란말이개미',
    tier: 'Silver 1',
    mostChampImg: require('../assets/images/Teemo.png'),
    mostChampWinRate: '57%',
    mostChampKDA: '3.87',
    mostLineImg: require('../assets/images/lineJungle.png'),
    mostLineWinRate: '57%',
    mostLineKDA: '3.87',
  },
];

export default function getHomeScreenFriends() {
  return DATA;
}
