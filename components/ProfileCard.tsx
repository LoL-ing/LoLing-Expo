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

export default function ProfileCard(props: {
  lolingId: string;
  mannerTierImg: string;
  profileImg: string;
  rank: string;
  nickname: string;
  winRate: string;
  winLose: string;
  lineImg_1: string;
  lineImg_2: string;
  line_winRate_1: string;
  line_winRate_2: string;
  line_kda_1: string;
  line_kda_2: string;
  championImg_1: string;
  championImg_2: string;
  championImg_3: string;
  champ_winRate_1: string;
  champ_winRate_2: string;
  champ_winRate_3: string;
  champ_kda_1: string;
  champ_kda_2: string;
  champ_kda_3: string;
  description: string;
}) {
  return (
    <View>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderlolingId}>{props.lolingId}</Text>
        <View style={styles.cardHeaderManner}>
          <Text
            style={{ fontSize: Layout.FontScale * 10, color: Colors.textWhite }}
          >
            매너티어
          </Text>
          <Image
            source={{uri: props.mannerTierImg}}
            style={{
              width: Layout.Width * 0.07,
              height: Layout.Width * 0.07,
            }}
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: props.profileImg }} style={styles.profileImg} />
          <Text style={styles.profileRankText}>{props.rank}</Text>
          <Text style={styles.profileNickname}>{props.nickname}</Text>
          <Text style={styles.profileWinRate}>
            {props.winRate + '    ' + props.winLose}
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={styles.positionChampionContainer}>
            <MatchingPosition width={Layout.Width * 0.15} />
            <View
              style={{
                width: Layout.Width * 0.4,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                
                <Image source={{ uri: props.lineImg_1 == 'TOP' ? 
             "https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Top_icon.png/revision/latest"
            : props.lineImg_1 == 'BOTTOM' ? 
              "https://w.namu.la/s/7f916b343072a3f9ea7eb9ddefc3f6e3017afe24da3d0c1d039c87ce3906deb627973515e12626a9dd618d7fabee42ee9afbf3427fff1fd51a430aeb80a0a1b59f9d6a91629ba7c55b51b252c8db19c902ad9f3e137455ad9d16672c304ca407"
             : props.lineImg_1 == 'MIDDLE' ? 
              "https://static.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png/revision/latest?cb=20181117143644"
             : props.lineImg_1 == 'JUNGLE' ? 
              "https://static.wikia.nocookie.net/leagueoflegends/images/1/1b/Jungle_icon.png/revision/latest/"
             : 
              "https://static.wikia.nocookie.net/leagueoflegends/images/e/e0/Support_icon.png/revision/latest"
            }} style={styles.smallImage} />
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textWinRate}>{props.line_winRate_1}</Text>
                  <Text style={styles.textWinLose}> / {props.line_kda_1}</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Image source={{ uri: props.lineImg_2 == 'TOP' ? 
             "https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Top_icon.png/revision/latest"
            : props.lineImg_2 == 'BOTTOM' ? 
              "https://w.namu.la/s/7f916b343072a3f9ea7eb9ddefc3f6e3017afe24da3d0c1d039c87ce3906deb627973515e12626a9dd618d7fabee42ee9afbf3427fff1fd51a430aeb80a0a1b59f9d6a91629ba7c55b51b252c8db19c902ad9f3e137455ad9d16672c304ca407"
             : props.lineImg_2 == 'MIDDLE' ? 
              "https://static.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png/revision/latest?cb=20181117143644"
             : props.lineImg_2 == 'JUNGLE' ? 
              "https://static.wikia.nocookie.net/leagueoflegends/images/1/1b/Jungle_icon.png/revision/latest/"
             : 
              "https://static.wikia.nocookie.net/leagueoflegends/images/e/e0/Support_icon.png/revision/latest"
            }} style={styles.smallImage} />
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textWinRate}>{props.line_winRate_2}</Text>
                  <Text style={styles.textWinLose}> / {props.line_kda_2}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={styles.positionChampionContainer}>
            <MatchingChampion width={Layout.Width * 0.18} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <View
                style={{
                  width: Layout.Width * 0.6,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{uri: props.championImg_1}}
                    style={styles.smallImage}
                  />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textWinRate}>
                      {props.champ_winRate_1}
                    </Text>
                    <Text style={styles.textWinLose}>
                      {' '}
                      / {props.champ_kda_1}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{uri: props.championImg_2}}
                    style={styles.smallImage}
                  />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textWinRate}>
                      {props.champ_winRate_2}
                    </Text>
                    <Text style={styles.textWinLose}>
                      {' '}
                      / {props.champ_kda_2}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: props.championImg_3 }}
                    style={styles.smallImage}
                  />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textWinRate}>
                      {props.champ_winRate_3}
                    </Text>
                    <Text style={styles.textWinLose}>
                      {' '}
                      / {props.champ_kda_3}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            height: Layout.Height * 0.08,
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: Layout.Height * 0.03,
          }}
        >
          <MatchingToUser width={Layout.Width * 0.25} />
          <View
            style={{
              height: Layout.Height * 0.05,
              width: Layout.Width * 0.6,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.quotText}>&ldquo;</Text>
            <Text style={styles.descText}>{' ' + props.description + ' '}</Text>
            <Text style={styles.quotText}>&rdquo;</Text>
          </View>
        </View>
      </View>
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
