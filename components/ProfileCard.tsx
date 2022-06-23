import * as React from 'react';
import {
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';
import MatchingChatting from '../assets/icons/svg/matching-chatting.svg';
import MatchingOPGG from '../assets/icons/svg/matching-opgg.svg';
import MatchingPosition from '../assets/text_images/matching-position.svg';
import MatchingChampion from '../assets/text_images/matching-champion.svg';
import MatchingToUser from '../assets/text_images/matching-toUser.svg';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default function ProfileCard(props: {
  lolingId: string;
  mannerTierImg: ImageSourcePropType;
  championImg: ImageSourcePropType;
  rank: string;
  nickname: string;
  winRate: string;
  winLose: string;
  lineImg_1: ImageSourcePropType;
  lineImg_2: ImageSourcePropType;
  line_winRate_1: string;
  line_winRate_2: string;
  line_kda_1: string;
  line_kda_2: string;
  championImg_1: ImageSourcePropType;
  championImg_2: ImageSourcePropType;
  championImg_3: ImageSourcePropType;
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
          <Text style={{ fontSize: FontScale * 10, color: Colors.textWhite }}>
            매너티어
          </Text>
          <Image
            source={props.mannerTierImg}
            style={{
              width: Width * 0.07,
              height: Width * 0.07,
            }}
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.profileContainer}>
          <Image source={props.championImg} style={styles.profileImg} />
          <Text style={styles.profileRankText}>{props.rank}</Text>
          <Text style={styles.profileNickname}>{props.nickname}</Text>
          <Text style={styles.profileWinRate}>
            {props.winRate + '    ' + props.winLose}
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={styles.positionChampionContainer}>
            <MatchingPosition width={Width * 0.15} />
            <View
              style={{
                width: Width * 0.4,
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
                <Image source={props.lineImg_1} style={styles.smallImage} />
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
                <Image source={props.lineImg_2} style={styles.smallImage} />
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
            <MatchingChampion width={Width * 0.18} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <View
                style={{
                  width: Width * 0.6,
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
                    source={props.championImg_1}
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
                    source={props.championImg_2}
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
                    source={props.championImg_3}
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
            alignItems: 'center',
            paddingVertical: Height * 0.01,
            marginTop: Height * 0.02,
          }}
        >
          <MatchingToUser width={Width * 0.25} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={styles.quotText}>&ldquo;</Text>
            <Text style={styles.descText}>{' ' + props.description + ' '}</Text>
            <Text style={styles.quotText}>&ldquo;</Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            {
              position: 'absolute',
              top: Height * 0.65,
              left: Width * 0.18,
              zIndex: 100,
            },
          ]}
        >
          <MatchingOPGG />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            {
              position: 'absolute',
              top: Height * 0.65,
              zIndex: 100,
              right: Width * 0.18,
            },
          ]}
        >
          <MatchingChatting />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImg: {
    width: Width * 0.2,
    height: Width * 0.2,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.backgroundPurple,
  },
  textWinRate: {
    color: Colors.backgroundPurple,
    fontSize: FontScale * 9,
  },
  textWinLose: {
    color: Colors.textWhite,
    fontSize: FontScale * 9,
  },
  smallImage: {
    width: Width * 0.1,
    height: Width * 0.1,
    margin: Width * 0.02,
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: Height * 0.02,
    marginHorizontal: Width * 0.05,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: Colors.backgroundNavy,
    height: Height * 0.7,
    width: Width * 0.75,
    borderRadius: Width * 0.05,
    position: 'absolute',
  },
  cardHeader: {
    backgroundColor: Colors.backgroundPurple,
    height: Height * 0.075,
    width: Width * 0.75,
    borderRadius: Width * 0.05,
    position: 'absolute',
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Width * 0.05,
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: Height * 0.075 + Height * 0.02,
    flexDirection: 'column',
    alignItems: 'center',
  },
  quotText: {
    color: Colors.textFocusedPurple,
    fontSize: FontScale * 20,
  },
  descText: { color: Colors.textWhite, fontSize: FontScale * 10 },
  positionChampionContainer: {
    height: Height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Width * 0.06,
  },
  profileRankText: {
    color: Colors.backgroundPurple,
    fontWeight: 'bold',
    fontSize: FontScale * 14,
    marginVertical: Height * 0.005,
  },
  profileNickname: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: FontScale * 16,
    marginVertical: Height * 0.005,
  },
  profileWinRate: {
    color: Colors.textGray,
    fontSize: FontScale * 12,
    marginVertical: Height * 0.005,
  },
  cardHeaderlolingId: {
    fontSize: FontScale * 18,
    color: Colors.textWhite,
    fontWeight: 'bold',
  },
  cardHeaderManner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Width * 0.2,
  },
});
