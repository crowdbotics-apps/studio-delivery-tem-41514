import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Clipboard, Alert, StyleSheet } from 'react-native';

const AppShareScreen = () => {
  const [email, setEmail] = useState('');
  const appShareLink = 'https://tinyurl.com/42evm3m3';

  const handleCopy = () => {
    Clipboard.setString(appShareLink);
    Alert.alert('Link copied to clipboard');
  };

  const handleSend = () => {
    Alert.alert('Email sent');
  };

  const handleCancel = () => {
    setEmail('');
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Share App</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Enter email" keyboardType="email-address" />
      <View style={styles.linkContainer}>
        <Text style={styles.link}>{appShareLink}</Text>
        <TouchableOpacity onPress={handleCopy} style={styles.copyButton}>
          <Text style={styles.buttonText}>Copy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  link: {
    fontSize: 16,
    color: '#333'
  },
  copyButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  sendButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10
  },
  cancelButton: {
    backgroundColor: '#F44336',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default AppShareScreen;