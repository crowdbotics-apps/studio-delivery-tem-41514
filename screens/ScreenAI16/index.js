import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI23");
      }}><Image style={styles.icon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI19");
      }}><Image style={styles.icon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI26");
      }}><Image style={styles.icon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI11");
        }}><Text style={styles.buttonText}>Food order</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI13");
        }}><Text style={styles.buttonText}>Order History</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI17");
        }}><Text style={styles.buttonText}>Search</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI33");
        }}><Text style={styles.buttonText}>Maps</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  icon: {
    width: 30,
    height: 30
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
});
export default App;