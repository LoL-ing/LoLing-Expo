// ../screens/MathingScreen.tsx 에서 사용

const ProfileCard = [
    {
        lolingId: 'Soodoll',
        mannerTierImg: require('../assets/images/diamond.png'),
        championImg: require('../assets/images/Galio.png'),
        rank: 'Gold 3',
        nickname: '겨드랑이에낀손',
        winRate: '승률 59%',
        winLose: '74승 52패',
        
      // data/MyProfiles에서 1,2,3순위 다 정렬 & 정리해준 것처럼 얘도 그렇다 가정한 상태
        line_info : [{"LINE_KDA": 2.75, "LINE_NAME": "JUNGLE", "LINE_COUNT": 34, "QUEUE_TYPE": "420", "LINE_WIN_RATE": "58.8%"},
        {"LINE_KDA": 2.27, "LINE_NAME": "BOTTOM", "LINE_COUNT": 19, "QUEUE_TYPE": "420", "LINE_WIN_RATE": "42.1%"},
        {"LINE_KDA": 2.27, "LINE_NAME": "BOTTOM", "LINE_COUNT": 19, "QUEUE_TYPE": "420", "LINE_WIN_RATE": "42.1%"}],
        champion_info : [
          {"CHAMP_KDA": 2.78, "CHAMP_NAME": "Katarina", "QUEUE_TYPE": "420", "CHAMP_COUNT": 156, "CHAMP_WIN_RATE": "51%"}, 
          {"CHAMP_KDA": 2.92, "CHAMP_NAME": "Zed", "QUEUE_TYPE": "420", "CHAMP_COUNT": 111, "CHAMP_WIN_RATE": "50%"},
           {"CHAMP_KDA": 2.73, "CHAMP_NAME": "Kayn", "QUEUE_TYPE": "420", "CHAMP_COUNT": 34, "CHAMP_WIN_RATE": "44%"}, 
        ],
        description: '여러분 한판 뜹시다. 저 진짜 장난아닙니다. 여러분 한판 뜹시다. 저 진짜 장난아닙니다.',
      },
      {
        lolingId: 'Soodoll',
        mannerTierImg: require('../assets/images/diamond.png'),
        championImg: require('../assets/images/Galio.png'),
        rank: 'Gold 3',
        nickname: '겨드랑이에낀손',
        winRate: '승률 59%',
        winLose: '74승 52패',
        line_info : [{"LINE_KDA": 2.75, "LINE_NAME": "JUNGLE", "LINE_COUNT": 34, "QUEUE_TYPE": "420", "LINE_WIN_RATE": "58.8%"},
        {"LINE_KDA": 2.27, "LINE_NAME": "BOTTOM", "LINE_COUNT": 19, "QUEUE_TYPE": "420", "LINE_WIN_RATE": "42.1%"}],
        // championImg_1: require('../assets/images/Graves.png'),
        // championImg_2: require('../assets/images/Galio.png'),
        // championImg_3: require('../assets/images/Irelia.png'),
        // champ_winRate_1: '58%',
        // champ_winRate_2: '58%',
        // champ_winRate_3: '58%',
        // champ_kda_1: '2.44',
        // champ_kda_2: '2.44',
        // champ_kda_3: '2.44',
        champion_info : [
          {"CHAMP_KDA": 2.58, "CHAMP_NAME": "Malphite", "QUEUE_TYPE": "420", "CHAMP_COUNT": 23, "CHAMP_WIN_RATE": "48%"},
           {"CHAMP_KDA": 2.1, "CHAMP_NAME": "Kassadin", "QUEUE_TYPE": "420", "CHAMP_COUNT": 22, "CHAMP_WIN_RATE": "41%"},
           {"CHAMP_KDA": 2.0, "CHAMP_NAME": "Yasuo", "QUEUE_TYPE": "420", "CHAMP_COUNT": 12, "CHAMP_WIN_RATE": "50%"}, 
        ],
        description: '여러분 한판 뜹시다. 저 진짜 장난아닙니다.',
      },
      {
        lolingId: 'Soodoll',
        mannerTierImg: require('../assets/images/diamond.png'),
        championImg: require('../assets/images/Galio.png'),
        rank: 'Gold 3',
        nickname: '겨드랑이에낀손',
        winRate: '승률 59%',
        winLose: '74승 52패',
        line_info : [{"LINE_KDA": 2.75, "LINE_NAME": "JUNGLE", "LINE_COUNT": 34, "QUEUE_TYPE": "420", "LINE_WIN_RATE": "58.8%"},
        {"LINE_KDA": 2.27, "LINE_NAME": "BOTTOM", "LINE_COUNT": 19, "QUEUE_TYPE": "420", "LINE_WIN_RATE": "42.1%"}],
          champion_info : [{"CHAMP_KDA": 2.14, "CHAMP_NAME": "Viktor", "QUEUE_TYPE": "420", "CHAMP_COUNT": 11, "CHAMP_WIN_RATE": "55%"},
           {"CHAMP_KDA": 3.14, "CHAMP_NAME": "Hecarim", "QUEUE_TYPE": "420", "CHAMP_COUNT": 10, "CHAMP_WIN_RATE": "60%"},
           {"CHAMP_KDA": 2.79, "CHAMP_NAME": "Belveth", "QUEUE_TYPE": "420", "CHAMP_COUNT": 4, "CHAMP_WIN_RATE": "50%"}, ],
        description: '여러분 한판 뜹시다. 저 진짜 장난아닙니다.',
      },
];

export default function getProfileCard() {
    return ProfileCard;
  }