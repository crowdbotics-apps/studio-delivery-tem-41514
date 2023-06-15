import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  loginButton: {
    backgroundColor: '#007AFF',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16
  },
  forgotPassword: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginBottom: 20
  },
  socialContainer: {
    flexDirection: 'row'
  },
  socialButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  socialIcon: {
    width: 24,
    height: 24
  }
});
export default LoginScreen;