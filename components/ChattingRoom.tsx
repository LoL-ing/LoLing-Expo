import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function ChattingRoom(props: {
  nickname: string;
  profileImg: ImageSourcePropType;
  recentMessage: string;
  numberOfMessage: number;
}) {
  return (
      <View style={{
          backgroundColor: Colors.backgroundBlack,
          width: Layout.Width,
          height: Layout.Height * 0.11,
          paddingHorizontal: Layout.Width * 0.077,
          flexDirection: 'row',
          alignItems: 'center',
      }}>
        <Image source={props.profileImg} style={styles.profileImg}></Image>
          <View style={{
              width: Layout.Width * 0.696,
              flexDirection: 'row',
            justifyContent: 'space-between'
    }}>
          <View style={styles.nicknameContainer}>
          <Text style={styles.nickname}>{props.nickname}</Text>
          <Text style={styles.recentMessage}>{props.recentMessage}</Text>
              </View>
              {
                  (props.numberOfMessage !=0)
                      ? 
                      (
                      <View style={{
                        width :  (props.numberOfMessage > 999) ?
                        Layout.Width * 0.115
                       : (props.numberOfMessage >99) ?
                         Layout.Width*0.09
                         : Layout.Width*0.06,
                        height: Layout.Width * 0.06,
                        backgroundColor: Colors.backgroundPurple,
                        borderRadius: Layout.Width * 0.06,
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                    }}>
                         { props.numberOfMessage > 999 ?
           (<View style= {{flexDirection: 'row', alignItems: 'center'}}>
            <Text style = {{color: Colors.textWhite, fontSize: 15, textAlign:'center'}}>
           999 </Text>
            <Text style = {{ fontSize: 13, color: Colors.textWhite,}}> 
            + </Text></View>)
            : 
            <Text style = {{color: Colors.textWhite, fontSize: 15, textAlign:'center'}}>
            {props.numberOfMessage} </Text>}
                          </View>
                          
                      )
                      :
                      undefined
              }
          
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
    profileImg: {
        width: Layout.Width*0.15,
        height: Layout.Width*0.15,
    },
    nicknameContainer: {
        height: Layout.Height * 0.05,
        marginHorizontal: Layout.Width * 0.06,
        justifyContent: 'space-between',
      },
      nickname: {
        color: Colors.textWhite,
        fontSize: 15,
        fontWeight: 'bold',
    },
    recentMessageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      recentMessage: {
        color: Colors.textWhite,
        opacity: 0.7,
        fontSize: 12,
      },
});
