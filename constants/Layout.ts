import { Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const FontScale = Dimensions.get('window').fontScale + 0.3;

export default {
  window: {
    Width,
    Height,
    FontScale
  },
  isSmallDevice: Width < 375,
};
