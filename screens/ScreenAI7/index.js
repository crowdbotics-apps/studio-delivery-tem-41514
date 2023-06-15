import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const PrivacyPolicyScreen = () => {
  const privacyPolicyText = `
  1. Introduction
  Welcome to our Privacy Policy. This document explains how we collect, use, and share your personal information when you use our services.

  2. Information We Collect
  We collect information you provide directly to us, such as your name, email address, and any other information you choose to provide.

  3. How We Use Your Information
  We use your information to provide, maintain, and improve our services, communicate with you, and personalize your experience.

  4. Sharing Your Information
  We may share your information with third parties, such as service providers, partners, and advertisers, as necessary to provide our services.

  5. Security
  We take reasonable measures to protect your information from unauthorized access, use, or disclosure.

  6. Your Choices
  You have the right to access, update, or delete your personal information at any time.

  7. Changes to This Privacy Policy
  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

  8. Contact Us
  If you have any questions about this Privacy Policy, please contact us at support@example.com.
  `;
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Privacy Policy</Text>
      </View>
      <Text style={styles.content}>{privacyPolicyText}</Text>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 30
  }
});
export default PrivacyPolicyScreen;