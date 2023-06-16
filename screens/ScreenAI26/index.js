import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.name}>John Doe</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Support / Send Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI30");
        }}><Text style={styles.buttonText}>Contact Us</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Frequently Asked Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  buttonsContainer: {
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: '#4b7bec',
    borderRadius: 5,
    padding: 15,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});
export default ProfileScreen;