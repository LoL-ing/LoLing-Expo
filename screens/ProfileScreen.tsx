import * as React from 'react';
import { StyleSheet, Pressable, Image, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.profileContainer}>
        <View style={{ backgroundColor: Colors.backgroundPurple }}>
          <Image
            source={require('../assets/images/Irelia.png')}
            style={styles.profileImg}
          />
        </View>
        <View
          style={{
            height: '50%',
            marginHorizontal: 10,
            justifyContent: 'space-around',
            backgroundColor: Colors.backgroundPurple,
          }}
        >
          <Text style={styles.usernameText}>하아아푸움</Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.backgroundPurple,
            }}
          >
            <Text style={styles.tierText}>Gold 1</Text>
            <Text style={styles.LPText}>25LP</Text>
          </View>
          <Text style={styles.levelText}>lv.100</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: Colors.backgroundBlack,
  },
  profileContainer: {
    width: '80%',
    height: '30%',
    marginVertical: 5,
    padding: 10,

    flexDirection: 'row',

    backgroundColor: Colors.backgroundPurple,
    borderRadius: 15,
  },
  profileImg: {
    width: 50,
    height: 50,
    margin: 10,

    borderRadius: 50,
  },
  usernameText: {
    color: Colors.textBlack,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tierText: {
    color: Colors.textBlack,
    fontSize: 15,
    fontWeight: 'normal',
  },
  LPText: {
    color: Colors.textBlack,
    fontSize: 10,
    fontWeight: 'normal',
  },
  levelText: {
    color: Colors.textBlack,
    fontSize: 10,
    fontWeight: 'normal',
  },
});
