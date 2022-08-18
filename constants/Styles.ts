import { StyleSheet } from 'react-native';
import Colors from './Colors';
import Layout from '../constants/Layout';

const Styles = StyleSheet.create({
  fullscreen: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: Colors.backgroundBlack,
  },
  startMatchingButton: {
    width: Layout.Width * 0.9,
    height: Layout.Height * 0.08,
    marginBottom: Layout.Height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
  },
});

export default Styles;
