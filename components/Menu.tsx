import * as React from 'react';
import Colors from '../constants/Colors';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { RootStackParamList, RootTabScreenProps } from '../types';


export default function Menu( props: 
    { navigate: (arg0: any) => void;
        destination: any;
        title: string; } ) 
     {
    return (
        <Pressable style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            width : '80%', 
            paddingVertical: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: Colors.dark.background,}
            )}
            onPressOut={() => props.navigate(props.destination)}
            >
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{props.title}</Text>
            <FontAwesome
                name="chevron-right"
                size={30}
                color={Colors.gray}
                >
            </FontAwesome>
        </Pressable>
    );
}

const styles = StyleSheet.create({

});
