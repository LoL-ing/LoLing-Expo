import { DarkTheme } from "@react-navigation/native";

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#fff',
    background: '#000',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text:  '#C5A3FF', /*보라색*/
    background: '#161627', /*배경색-검정에 가까움*/
    background2: '#23233F', /*배경색-남색*/
    background3: '#C5A3FF',
    tint: tintColorDark,
    tabIconDefault: '#ccc', 
    tabIconSelected: tintColorDark,
  },
  gray: '#DFDFDF',
};
