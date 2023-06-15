import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [{
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Feature 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Feature 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Feature 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  }];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return <View style={styles.container}>
      <Image source={{
      uri: slides[currentIndex].image
    }} style={styles.image} />
      <Text style={styles.text}>{slides[currentIndex].text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI4");
        }}><Text style={styles.buttonText}>Next</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  image: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.4,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '60%'
  },
  button: {
    backgroundColor: '#4b7bec',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16
  }
});
export default OnboardingScreen;