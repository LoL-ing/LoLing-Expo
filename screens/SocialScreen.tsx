import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
// import ModalScreen from '../screens/ModalScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootTabScreenProps} from '../types';

export default function SocialScreen({ navigation }: RootTabScreenProps<'Social'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoLing</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable
        onPress={() => navigation.navigate('Modal')}
        style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}>
        <FontAwesome
          name="user"
          size={25}
          color={Colors.light.text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161627'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
