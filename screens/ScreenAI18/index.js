import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const dummyData = [{
    id: '1',
    title: 'Item 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    title: 'Item 2',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '3',
    title: 'Item 3',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '4',
    title: 'Item 4',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const searchItems = text => {
    setSearch(text);
    const filteredData = dummyData.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setData(filteredData);
  };

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={{
      uri: item.image
    }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>;

  return <View style={styles.container}>
      <TextInput style={styles.searchInput} onChangeText={searchItems} value={search} placeholder="Search items..." />
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  searchInput: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  itemTitle: {
    marginLeft: 10,
    fontSize: 16
  }
});
export default SearchScreen;