import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RestaurantSearchScreen = () => {
  const navigation = useNavigation();
  const [distance, setDistance] = useState('');
  const [customDistance, setCustomDistance] = useState('');

  const handleSearch = () => {// Perform search based on distance and customDistance
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Search Restaurants</Text>
      <TextInput style={styles.searchBar} placeholder="Search by name or cuisine" onChangeText={text => setDistance(text)} value={distance} />
      <View style={styles.distanceContainer}>
        <TouchableOpacity style={styles.distanceButton} onPress={() => setCustomDistance('10')}>
          <Text style={styles.distanceText}>10 miles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.distanceButton} onPress={() => setCustomDistance('20')}>
          <Text style={styles.distanceText}>20 miles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.distanceButton} onPress={() => setCustomDistance('30')}>
          <Text style={styles.distanceText}>30 miles</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.customDistanceInput} placeholder="Custom distance (miles)" keyboardType="numeric" onChangeText={text => setCustomDistance(text)} value={customDistance} />
      <TouchableOpacity style={styles.doneButton} onPress={handleSearch}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI18");
      }}><Text style={styles.doneButtonText}>Done</Text></Pressable>
      </TouchableOpacity>
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
  searchBar: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20
  },
  distanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20
  },
  distanceButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5
  },
  distanceText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  customDistanceInput: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20
  },
  doneButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default RestaurantSearchScreen;