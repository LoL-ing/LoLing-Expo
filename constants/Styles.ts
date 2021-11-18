import { StyleSheet } from "react-native";
import Colors from "./Colors";

const Styles = StyleSheet.create({
    fullscreen: {
        flexDirection: 'column',
        width: '100%', 
        height:'100%',
        backgroundColor: Colors.dark.background,
    },
});

export default Styles;