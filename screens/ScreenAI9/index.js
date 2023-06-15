import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleNext = () => {// Handle next button action
  };

  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI10");
    }}><Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.userImage} /></Pressable>
      <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name" />
      <TextInput style={styles.input} onChangeText={setAddress} value={address} placeholder="Address" />
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI16");
      }}><Text style={styles.nextButtonText}>Next</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
export default UserProfileScreen;