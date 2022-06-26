import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Pressable,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import { useRef } from 'react';

import Colors from '../constants/Colors';
import ProfileCard from '../components/ProfileCard';
import getProfileCard from '../data/ProfileCard';
import Arrow from '../assets/icons/svg/arrow-left.svg';
import MatchingLeft from '../assets/icons/svg/matching-left.svg';
import MatchingRight from '../assets/icons/svg/matching-right.svg';
import MatchingHelp from '../assets/icons/svg/matching-help.svg';

import Carousel from 'react-native-snap-carousel';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

function withMyHook(Component: any) {
  return function WrappedComponent(props) {
    const initalAnim = useRef(new Animated.Value(0)).current;
    return <Component {...props} myHookValue={initalAnim} />;
  };
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: getProfileCard(),
    };
  }

  _renderItem({ item, index }) {
    return (
      <ProfileCard
        lolingId={item.lolingId}
        mannerTierImg={item.mannerTierImg}
        championImg={item.championImg}
        rank={item.rank}
        nickname={item.nickname}
        winRate={item.winRate}
        winLose={item.winLose}
        lineImg_1={item.lineImg_1}
        lineImg_2={item.lineImg_2}
        line_winRate_1={item.line_winRate_1}
        line_winRate_2={item.line_winRate_2}
        line_kda_1={item.line_kda_1}
        line_kda_2={item.line_kda_2}
        championImg_1={item.championImg_1}
        championImg_2={item.championImg_2}
        championImg_3={item.championImg_3}
        champ_winRate_1={item.champ_winRate_1}
        champ_winRate_2={item.champ_winRate_2}
        champ_winRate_3={item.champ_winRate_3}
        champ_kda_1={item.champ_kda_1}
        champ_kda_2={item.champ_kda_2}
        champ_kda_3={item.champ_kda_3}
        description={item.description}
      />
    );
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.backgroundBlack,
          paddingTop: Height * 0.02,
        }}
      >
        <Animated.View style={styles.headerContainer}>
          <Arrow width={Width * 0.075} />
          <MatchingHelp width={Width * 0.075} />
        </Animated.View>
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
