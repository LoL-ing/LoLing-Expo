import * as React from 'react';
import Colors from '../constants/Colors';
import { Pressable, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome } from '@expo/vector-icons';


const starOn = require('../assets/images/starOn.png')
const starOff = require('../assets/images/starOff.png')


export default function Friend( props : {
    nickname: string,
    bookmark: boolean,
    profileImg: ImageSourcePropType,
 }) {
return (
    <Pressable 
        style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            // width : '100%', 
            paddingVertical: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: Colors.dark.background,
            })}>    
        <View
        style = {{ width: '80%', alignItems: 'center', flexDirection: 'row', backgroundColor: Colors.dark.background}}>
            <Image 
                source = {props.profileImg}
                style = {styles.profileImg}>
            </Image>
                
            <Text style={styles.nickname}>
                {props.nickname}
            </Text>
        </View>
        
        <View style = {{backgroundColor: Colors.dark.background}}>
            <Image 
                source = {props.bookmark === true ? starOn: starOff}
                style = {styles.star}>
            </Image>
        </View>
    </Pressable>

);
} 

const styles = StyleSheet.create({
   
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10,
      },
      
    nickname: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
      
    star: {
        width: 30,
        height: 30,
        margin: 10,
    },
      
});