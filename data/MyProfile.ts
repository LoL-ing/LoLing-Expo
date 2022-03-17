const MyProfile = 
    {
        nickname: 'Soodoll',
        tier: 'Gold 3',
        winrate: '59%',
        KDA: '3.87',
        champ1Winrate: '57%',
        champ2Winrate: '100%',
        champ3Winrate: '85%',
        champ1KDA: '3.87',
        champ2KDA: '3.87',
        champ3KDA: '3.87',
        line1Winrate: '85%',
        line2Winrate: '85%',
        line1KDA: '3.87',
        line2KDA: '3.87',
        profileImg: require('../assets/images/Irelia.png'),
    }
;

export default function getMyProfile() {
    return MyProfile;
  }