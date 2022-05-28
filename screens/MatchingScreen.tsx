import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';


export default function MatchingScreen() {

  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
}
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LoLing</Text>

            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#161627',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    width: '80%',
    height: 1,
    marginVertical: 30,

    backgroundColor: 'white',
  },
});
