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
  Easing,
} from 'react-native';
import { useRef, useEffect } from 'react';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import ProfileCard from '../components/ProfileCard';
import getProfileCard from '../data/ProfileCard';
import Arrow from '../assets/icons/svg/arrow-left.svg';
import MatchingLeft from '../assets/icons/svg/matching-left.svg';
import MatchingRight from '../assets/icons/svg/matching-right.svg';
import MatchingHelp from '../assets/icons/svg/matching-help.svg';
import MatchingChatting from '../assets/icons/svg/matching-chatting.svg';

import Carousel from 'react-native-snap-carousel';

const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: getProfileCard(),
      firstAnim: new Animated.Value(0),
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
  componentDidMount() {
    this._fadeIn();
  }
  componentDidUpdate() {
    //-> 아마 매칭할때마다 애니메이션을 넣게 될 듯 ..
    this._fadeIn();
  }

  _fadeIn() {
    Animated.timing(this.state.firstAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
      delay: 300,
      easing: Easing.out(Easing.quad),
    }).start();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: Colors.backgroundBlack,
          paddingTop: Height * 0.04,
        }}
      >
        <Animated.View
          style={[styles.headerContainer, { opacity: this.state.firstAnim }]}
        >
          <Arrow width={Width * 0.075} />
          <MatchingHelp width={Width * 0.075} />
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            opacity: this.state.firstAnim,
            transform: [
              {
                translateY: this.state.firstAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [+Layout.Height * 0.2, 0],
                }),
              },
            ],
          }}
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
        </Animated.View>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            {
              position: 'absolute',
              top: Height * 0.45,
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
              top: Height * 0.45,
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
      </View>
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
    marginVertical: Height * 0.01,
    marginHorizontal: Width * 0.05,
    justifyContent: 'space-between',
  },
});
