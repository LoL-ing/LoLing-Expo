import { StyleSheet } from 'react-native';
import Colors from './Colors';
import Layout from '../constants/Layout';

const Styles = StyleSheet.create({
  fullscreen: {
    width: Layout.Width,
    height: Layout.Height,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundBlack,
  },
  startMatchingButton: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.07,
    marginBottom: Layout.Height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
  },
});

export default Styles;
