import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const FAQScreen = () => {
  const faqs = [{
    id: '1',
    question: 'What is React Native?',
    answer: 'React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, and other platforms by enabling developers to use React along with native platform capabilities.'
  }, {
    id: '2',
    question: 'How does React Native work?',
    answer: 'React Native works by using JavaScript and React to build user interfaces, while the native code is responsible for rendering the application on the device. This allows developers to write code once and run it on multiple platforms, saving time and effort.'
  }, {
    id: '3',
    question: 'What are the advantages of using React Native?',
    answer: 'Some advantages of using React Native include faster development, code reusability, live and hot reloading, and a large community of developers.'
  }, {
    id: '4',
    question: 'What are the limitations of React Native?',
    answer: 'Some limitations of React Native include performance issues for complex applications, lack of support for some native features, and potential compatibility issues with third-party libraries.'
  }];

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Text style={styles.question}>{item.question}</Text>
      <TouchableOpacity>
        <Text style={styles.answer}>{item.answer}</Text>
      </TouchableOpacity>
    </View>;

  return <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <FlatList data={faqs} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20
  },
  itemContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  answer: {
    fontSize: 16,
    color: '#777',
    marginTop: 10
  }
});
export default FAQScreen;