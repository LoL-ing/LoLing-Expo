import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Platform, StyleSheet, Modal, Pressable } from 'react-native';
// import Modal from 'react-native';  존나 어이없네;

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen(this: any) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    // <View style={styles.container}>
      
    //   <Text style={styles.title}>Modal</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/ModalScreen.tsx" />

    //   {/* Use a light status bar on iOS to account for the black space above the modal*/}
    //    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> 
    // </View>
  );
};

//     <Modal transparent={true}
//     animationType="slide"
//     visible={this.state.isVisible}
//     onRequestClose={this.closeModal}>
// <View style={{
//       flex: 1,
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#fff',
//       height: "40%"}}>
// <View style={{
//         width: 50,
//         height: 50}}>
  
// </View>
// </View>
// </Modal>




const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:  '(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
