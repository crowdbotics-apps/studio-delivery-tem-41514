import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

const CameraOptionsScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = option => {
    setSelectedOption(option);
  };

  return <View style={styles.container}>
      <ImageBackground source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Camera Options</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('upload')}>
              <Image source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} style={styles.optionImage} />
              <Text style={styles.optionText}>Upload from Storage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('capture')}>
              <Image source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} style={styles.optionImage} />
              <Text style={styles.optionText}>Capture with Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  option: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: 150
  },
  optionImage: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default CameraOptionsScreen;