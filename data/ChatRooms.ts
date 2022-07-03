const ChatRooms = [
  {
    nickname: '커피한보틀',
    profileImg: require('../assets/images/Galio.png'),
    recentMessage: '저랑 같이 한판 하시죠!',
    numberOfMessage: 5,
  },
  {
    nickname: '하아아아ㅏ아아아아아품',
    profileImg: require('../assets/images/Irelia.png'),
    recentMessage: '싫어요',
    numberOfMessage: 100,
  },
  {
    nickname: '맞 겠 니 ?',
    profileImg: require('../assets/images/Nunu.png'),
    recentMessage: '무슨 챔 하신다고요?',
    numberOfMessage: 10,
  },
];

export default function getChatRooms() {
  return ChatRooms;
}
