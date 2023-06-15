import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Food order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Maps</Text>
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