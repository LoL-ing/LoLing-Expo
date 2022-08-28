import { Dimensions, StatusBar } from 'react-native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const FontScale = Dimensions.get('screen').fontScale + 0.2;
const AndroidStatusBarHeight = 0;
const AndroidBottomBarHeight =
  Height - Dimensions.get('window').height - StatusBar.currentHeight;

export default {
  Width,
  Height,
  FontScale,
  AndroidStatusBarHeight,
  AndroidBottomBarHeight,
};
