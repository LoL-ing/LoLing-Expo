import * as React from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import MatchingPosition from '../assets/text_images/matching-position.svg';
import MatchingChampion from '../assets/text_images/matching-champion.svg';
import MatchingToUser from '../assets/text_images/matching-toUser.svg';

const getLineImage = (prop: string) => {
  let result = '';
  if (prop == 'TOP') {
    result =
      'https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Top_icon.png/revision/latest';
  } else if (prop == 'BOTTOM') {
    result =
      'https://w.namu.la/s/7f916b343072a3f9ea7eb9ddefc3f6e3017afe24da3d0c1d039c87ce3906deb627973515e12626a9dd618d7fabee42ee9afbf3427fff1fd51a430aeb80a0a1b59f9d6a91629ba7c55b51b252c8db19c902ad9f3e137455ad9d16672c304ca407';
  } else if (prop == 'MIDDLE') {
    result =
      'https://static.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png/revision/latest?cb=20181117143644';
  } else if (prop == 'JUNGLE') {
    result =
      'https://static.wikia.nocookie.net/leagueoflegends/images/1/1b/Jungle_icon.png/revision/latest/';
  } else if (prop == 'SUPPORT') {
    result =
      'https://static.wikia.nocookie.net/leagueoflegends/images/e/e0/Support_icon.png/revision/latest';
  } else {
    result = 'ERROR';
  }
  return result;
};

//sr자랭은 나중에
export default function LineProfile(props: { lineInfo: any }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      {props.lineInfo.slice(0, 2).map((item: any, index: number) => {
        return (
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: Layout.Width * 0.03,
            }}
            key={index}
          >
            <Image
              source={{
                uri: getLineImage(item.LINE_NAME),
              }}
              style={styles.smallImage}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.textWinRate}>{item.LINE_WIN_RATE}</Text>
              <Text style={styles.textWinLose}> / {item.LINE_KDA}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  profileImg: {
    width: Layout.Width * 0.2,
    height: Layout.Width * 0.2,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.backgroundPurple,
  },
  textWinRate: {
    color: Colors.backgroundPurple,
    fontSize: Layout.FontScale * 9,
  },
  textWinLose: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 9,
  },
  smallImage: {
    width: Layout.Width * 0.1,
    height: Layout.Width * 0.1,
    margin: Layout.Width * 0.02,
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: Layout.Height * 0.02,
    marginHorizontal: Layout.Width * 0.05,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: Colors.backgroundNavy,
    height: Layout.Height * 0.75,
    width: Layout.Width * 0.75,
    borderRadius: Layout.Width * 0.05,
    top: Platform.OS === 'ios' ? 0 : Layout.Height * 0.02,
    position: 'absolute',
  },
  cardHeader: {
    backgroundColor: Colors.backgroundPurple,
    height: Layout.Height * 0.076,
    width: Layout.Width * 0.75,
    borderRadius: Layout.Width * 0.05,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 0 : Layout.Height * 0.02,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.Width * 0.05,
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: Layout.Height * 0.12,
    flexDirection: 'column',
    alignItems: 'center',
  },
  quotText: {
    color: Colors.textFocusedPurple,
    fontSize: Layout.FontScale * 20,
  },
  descText: {
    width: Layout.Width * 0.55,
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 10,
    textAlign: 'center',
  },
  positionChampionContainer: {
    height: Layout.Height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Layout.Height * 0.03,
  },
  profileRankText: {
    color: Colors.backgroundPurple,
    fontWeight: 'bold',
    fontSize: Layout.FontScale * 14,
    marginVertical: Layout.Height * 0.005,
  },
  profileNickname: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: Layout.FontScale * 16,
    marginVertical: Layout.Height * 0.005,
  },
  profileWinRate: {
    color: Colors.textGray,
    fontSize: Layout.FontScale * 12,
    marginVertical: Layout.Height * 0.005,
  },
  cardHeaderlolingId: {
    fontSize: Layout.FontScale * 18,
    color: Colors.textWhite,
    fontWeight: 'bold',
  },
  cardHeaderManner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Layout.Width * 0.2,
  },
});
