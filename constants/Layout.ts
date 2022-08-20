import { Dimensions, StatusBar, NativeModules } from 'react-native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const FontScale = Dimensions.get('screen').fontScale + 0.3;
const AndroidStatusBarHeight = StatusBar.currentHeight;
const AndroidBottomBarHeight = Height - Dimensions.get('window').height - AndroidStatusBarHeight;


export default {
  Width,
  Height,
  FontScale,
  AndroidStatusBarHeight,
  AndroidBottomBarHeight
};
