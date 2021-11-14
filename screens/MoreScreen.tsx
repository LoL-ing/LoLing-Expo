import * as React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {RootTabScreenProps} from '../types';

import Menu from '../components/Menu';

export default function MoreScreen({navigation} : RootTabScreenProps<'More'>) {
  return (
    <View style={styles.container}>
       <Pressable
        style={({ pressed }) => ({opacity: pressed ? 0.5 : 1, height: '10%'})}
        onPressOut={() => navigation.navigate('Profile')}>
        <Text>
          프로필 보기
        </Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Menu title="공지사항" destination="SignUp1" navigate={navigation.navigate}></Menu>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/* <Menu title="이벤트"></Menu>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      
      <Menu title="고객센터" destination="Authentication" navigate={navigation.navigate}></Menu>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/* <Menu title="FAQ"></Menu>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Menu title="1:1 문의"></Menu>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Menu title="앱 가이드"></Menu>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Menu title="환경설정"></Menu>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Menu title="약관 및 정책"></Menu>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#161627',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
});

