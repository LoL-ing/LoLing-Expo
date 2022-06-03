import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';
import Arrow from '../assets/icons/svg/arrow-left.svg';
import MatchingLeft from '../assets/icons/svg/matching-left.svg';
import MatchingRight from '../assets/icons/svg/matching-right.svg';
import MatchingHelp from '../assets/icons/svg/matching-help.svg';
import MatchingChatting from '../assets/icons/svg/matching-chatting.svg';
import MatchingOPGG from '../assets/icons/svg/matching-opgg.svg';
import MatchingPosition from '../assets/text_images/matching-position.svg';
import MatchingChampion from '../assets/text_images/matching-champion.svg';
// import MatchingTop from '../assets/icons/svg/matching-champion.svg';
// import MatchingJungle from '../assets/icons/svg/matching-champion.svg';
// import MatchingChampion from '../assets/icons/svg/matching-champion.svg';
import MatchingToUser from '../assets/text_images/matching-toUser.svg';

import Carousel from 'react-native-snap-carousel';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          lolingId: 'Soodoll',
          mannerTierImg: require('../assets/images/diamond.png'),
          championImg: require('../assets/images/Galio.png'),
          rank: 'Gold 3',
          nickname: '겨드랑이에낀손',
          winRate: '승률 59%',
          winLose: '74승 52패',
          lineImg_1: require('../assets/images/Galio.png'),
          lineImg_2: require('../assets/images/Galio.png'),
          line_winRate_1: '88%',
          line_winRate_2: '88%',
          line_kda_1: '3.87',
          line_kda_2: '3.87',
          championImg_1: require('../assets/images/Graves.png'),
          championImg_2: require('../assets/images/Galio.png'),
          championImg_3: require('../assets/images/Irelia.png'),
          champ_winRate_1: '58%',
          champ_winRate_2: '58%',
          champ_winRate_3: '58%',
          champ_kda_1: '2.44',
          champ_kda_2: '2.44',
          champ_kda_3: '2.44',
          description: '여러분 한판 뜹시다. 저 진짜 장난아닙니다.',
        },
        {
          rollingId: 'Item 3',
          mannerTier: 'Text 3',
          tierImg: require('../assets/images/diamond.png'),
        },
        {
          rollingId: 'Item 3',
          mannerTier: 'Text 3',
          tierImg: require('../assets/images/diamond.png'),
        },
        {
          rollingId: 'Item 4',
          mannerTier: 'Text 4',
          tierImg: require('../assets/images/diamond.png'),
        },
        {
          rollingId: 'Item 5',
          mannerTier: 'Text 5',
          tierImg: require('../assets/images/diamond.png'),
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderlolingId}>{item.lolingId}</Text>
          <View style={styles.cardHeaderManner}>
            <Text style={{ fontSize: FontScale * 10, color: Colors.textWhite }}>
              매너티어
            </Text>
            <Image
              source={item.mannerTierImg}
              style={{
                width: Width * 0.07,
                height: Width * 0.07,
              }}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.profileContainer}>
            <Image source={item.championImg} style={styles.profileImg} />
            <Text style={styles.profileRankText}>{item.rank}</Text>
            <Text style={styles.profileNickname}>{item.nickname}</Text>
            <Text style={styles.profileWinRate}>
              {item.winRate + '    ' + item.winLose}
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
                  <Image source={item.lineImg_1} style={styles.smallImage} />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textWinRate}>
                      {item.line_winRate_1}
                    </Text>
                    <Text style={styles.textWinLose}> / {item.line_kda_1}</Text>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Image source={item.lineImg_2} style={styles.smallImage} />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textWinRate}>
                      {item.line_winRate_2}
                    </Text>
                    <Text style={styles.textWinLose}> / {item.line_kda_2}</Text>
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
                      source={item.championImg_1}
                      style={styles.smallImage}
                    />
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.textWinRate}>
                        {item.champ_winRate_1}
                      </Text>
                      <Text style={styles.textWinLose}>
                        {' '}
                        / {item.champ_kda_1}
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
                      source={item.championImg_2}
                      style={styles.smallImage}
                    />
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.textWinRate}>
                        {item.champ_winRate_2}
                      </Text>
                      <Text style={styles.textWinLose}>
                        {' '}
                        / {item.champ_kda_2}
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
                      source={item.championImg_3}
                      style={styles.smallImage}
                    />
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.textWinRate}>
                        {item.champ_winRate_3}
                      </Text>
                      <Text style={styles.textWinLose}>
                        {' '}
                        / {item.champ_kda_3}
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
              <Text style={styles.descText}>
                {' ' + item.description + ' '}
              </Text>
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
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.backgroundBlack,
          paddingTop: 50,
        }}
      >
        <View style={styles.headerContainer}>
          <Arrow width={Width * 0.075} />
          <MatchingHelp width={Width * 0.075} />
        </View>

        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
        >
          <Carousel
            layout={'default'}
            //ref={ref => (this.carousel = ref)}
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.carouselItems}
            sliderWidth={Width}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })}
          />
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            {
              position: 'absolute',
              top: Height * 0.5,
              zIndex: 100,
              left: Width * 0.05,
            },
          ]}
          onPress={() => {
            this._carousel.snapToPrev();
          }}
        >
          <MatchingLeft />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            {
              position: 'absolute',
              top: Height * 0.5,
              zIndex: 100,
              right: Width * 0.04,
            },
          ]}
          onPress={() => {
            this._carousel.snapToNext();
          }}
        >
          <MatchingRight />
        </Pressable>
      </SafeAreaView>
    );
  }
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
