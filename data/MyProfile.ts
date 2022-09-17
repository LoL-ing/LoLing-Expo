import { apiGetProfile } from '../api/main';

// const MyProfile = {
//   nickname: 'Soodoll',
//   tier: 'Gold 3',
//   winrate: '59%',
//   KDA: '3.87',
//   champ1Winrate: '57%',
//   champ2Winrate: '100%',
//   champ3Winrate: '85%',
//   champ1KDA: '3.87',
//   champ2KDA: '3.87',
//   champ3KDA: '3.87',
//   line1Winrate: '85%',
//   line2Winrate: '85%',
//   line1KDA: '3.87',
//   line2KDA: '3.87',
//   profileImg: require('../assets/images/Irelia.png'),
// };

export default function getMyProfile() {
  const MyProfile = {};
  apiGetProfile().then(response => {
    const champData = response.data.champ_info;
    champData.sort(function (a: any, b: any) {
      return b.CHAMP_COUNT - a.CHAMP_COUNT;
    });

    const lineData = response.data.line_info;
    lineData.sort(function (a: any, b: any) {
      return b.LINE_COUNT - a.LINE_COUNT;
    });

    Object.assign(MyProfile, {
      nickname: response.data.lol_name,
      tier: response.data.tier,
      winrate: String(100 * response.data.total_win_rate) + '%',
      KDA: response.data.total_kda.toFixed(2),
      champ1Winrate:
        String((100 * champData[0].CHAMP_WIN_RATE).toFixed(1)) + '%',
      champ2Winrate:
        String((100 * champData[1].CHAMP_WIN_RATE).toFixed(1)) + '%',
      champ3Winrate:
        String((100 * champData[2].CHAMP_WIN_RATE).toFixed(1)) + '%',
      champ1KDA: champData[0].CHAMP_KDA.toFixed(2),
      champ2KDA: champData[1].CHAMP_KDA.toFixed(2),
      champ3KDA: champData[2].CHAMP_KDA.toFixed(2),

      line1Winrate: String((100 * lineData[0].LINE_WIN_RATE).toFixed(1)) + '%',
      line2Winrate: String((100 * lineData[1].LINE_WIN_RATE).toFixed(1)) + '%',

      line1KDA: lineData[0].LINE_KDA.toFixed(2),
      line2KDA: lineData[1].LINE_KDA.toFixed(2),
      profileImg: require('../assets/images/Irelia.png'),
    });
    console.log(MyProfile);
  });
  return MyProfile;
}
