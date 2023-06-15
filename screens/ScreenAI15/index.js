import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
const orderedItems = [{
  id: '1',
  name: 'Pizza',
  quantity: 2,
  price: 10
}, {
  id: '2',
  name: 'Burger',
  quantity: 1,
  price: 5
}, {
  id: '3',
  name: 'Pasta',
  quantity: 3,
  price: 7
}];

const OrderScreen = () => {
  const totalPrice = orderedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return <View style={styles.container}>
      <FlatList data={orderedItems} renderItem={({
      item
    }) => <View style={styles.itemContainer}>
            <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
              <Text style={styles.itemPrice}>${item.price * item.quantity}</Text>
            </View>
          </View>} keyExtractor={item => item.id} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalPrice}</Text>
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  itemInfo: {
    marginLeft: 10
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemQuantity: {
    fontSize: 14,
    color: '#888'
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  totalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
export default OrderScreen;