import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ShoppingCartScreen = () => {
  const [cartItems, setCartItems] = useState([{
    id: '1',
    name: 'Product 1',
    image: 'https://tinyurl.com/42evm3m3',
    quantity: 1,
    price: 10
  }, {
    id: '2',
    name: 'Product 2',
    image: 'https://tinyurl.com/42evm3m3',
    quantity: 2,
    price: 20
  }]);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const updateQuantity = (id, action) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item,
      quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1
    } : item));
  };

  const deleteItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={{
      uri: item.image
    }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')} disabled={item.quantity === 1}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.itemPrice}>${item.price * item.quantity}</Text>
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>;

  return <View style={styles.container}>
      <FlatList data={cartItems} renderItem={renderItem} keyExtractor={item => item.id} />
      <TextInput style={styles.input} onChangeText={setAddress} value={address} placeholder="Address" />
      <TextInput style={styles.input} onChangeText={setPhoneNumber} value={phoneNumber} placeholder="Phone Number" keyboardType="numeric" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.buttonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10
  },
  itemImage: {
    width: 50,
    height: 50
  },
  itemName: {
    fontSize: 16
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityButton: {
    fontSize: 18,
    paddingHorizontal: 10
  },
  quantity: {
    fontSize: 16
  },
  itemPrice: {
    fontSize: 16
  },
  deleteButton: {
    color: 'red',
    fontSize: 16
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5
  },
  orderButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default ShoppingCartScreen;