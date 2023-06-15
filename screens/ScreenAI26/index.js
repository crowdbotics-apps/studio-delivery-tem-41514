import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return <ScrollView style={styles.container}>
      <Image style={styles.profileImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI9");
      }}><Text style={styles.buttonText}>Edit Profile</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI25");
      }}><Text style={styles.buttonText}>Edit Payment</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI7");
      }}><Text style={styles.buttonText}>Privacy Policy</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI6");
      }}><Text style={styles.buttonText}>Terms and Conditions</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI28");
      }}><Text style={styles.buttonText}>Change Password</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI29");
      }}><Text style={styles.buttonText}>Support / Send Feedback</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI30");
      }}><Text style={styles.buttonText}>Contact Us</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI31");
      }}><Text style={styles.buttonText}>Frequently Asked Questions</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20
  },
  button: {
    backgroundColor: '#4A69FF',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  }
});
export default SettingsScreen;