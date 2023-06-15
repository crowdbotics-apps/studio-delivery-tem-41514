import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = `
  1. Introduction
  Welcome to our application. These terms and conditions outline the rules and regulations for the use of our application.

  2. License
  Unless otherwise stated, we own the intellectual property rights for all material on the application. All intellectual property rights are reserved.

  3. Restrictions
  You are specifically restricted from all of the following:
  - Publishing any application material in any other media;
  - Selling, sublicensing and/or otherwise commercializing any application material;
  - Publicly performing and/or showing any application material;
  - Using this application in any way that is or may be damaging to this application;
  - Using this application in any way that impacts user access to this application;

  4. Your Content
  In these terms and conditions, "Your Content" shall mean any audio, video, text, images or other material you choose to display on this application. By displaying Your Content, you grant us a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.

  5. No warranties
  This application is provided "as is," with all faults, and we express no representations or warranties, of any kind related to this application or the materials contained on this application. Also, nothing contained on this application shall be interpreted as advising you.

  6. Limitation of liability
  In no event shall we be held liable for anything arising out of or in any way connected with your use of this application whether such liability is under contract. We shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this application.

  7. Indemnification
  You hereby indemnify to the fullest extent us from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these terms.

  8. Severability
  If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.

  9. Variation of Terms
  We are permitted to revise these terms at any time as it sees fit, and by using this application you are expected to review these terms on a regular basis.

  10. Governing Law & Jurisdiction
  These terms will be governed by and interpreted in accordance with the laws of the country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the country for the resolution of any disputes.
  `;
  return <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.content}>{termsAndConditions}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  content: {
    fontSize: 16,
    lineHeight: 24
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default TermsAndConditionsScreen;