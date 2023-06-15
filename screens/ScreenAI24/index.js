import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const paymentOptions = [{
    id: 'googlePay',
    name: 'Google Pay',
    icon: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 'applePay',
    name: 'Apple Pay',
    icon: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 'paypal',
    name: 'PayPal',
    icon: 'https://tinyurl.com/42evm3m3'
  }];
  const creditCards = [{
    id: '1',
    cardNumber: '**** **** **** 1234',
    cardType: 'Visa'
  }, {
    id: '2',
    cardNumber: '**** **** **** 5678',
    cardType: 'Mastercard'
  }];

  const renderItem = ({
    item
  }) => <TouchableOpacity style={[styles.card, {
    borderColor: selectedPayment === item.id ? '#6200ee' : '#e0e0e0'
  }]} onPress={() => setSelectedPayment(item.id)}>
      <Text style={styles.cardText}>{item.cardNumber}</Text>
      <Text style={styles.cardText}>{item.cardType}</Text>
    </TouchableOpacity>;

  return <View style={styles.container}>
      <Text style={styles.amountText}>Amount: $100.00</Text>
      <Text style={styles.title}>Select Payment Method</Text>
      <FlatList data={creditCards} renderItem={renderItem} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} />
      <TouchableOpacity style={styles.addButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI25");
      }}><Text style={styles.addButtonText}>Add New Card</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.optionsContainer}>
        {paymentOptions.map(option => <TouchableOpacity key={option.id} style={[styles.option, {
        borderColor: selectedPayment === option.id ? '#6200ee' : '#e0e0e0'
      }]} onPress={() => setSelectedPayment(option.id)}>
            <Image source={{
          uri: option.icon
        }} style={styles.optionIcon} />
            <Text style={styles.optionText}>{option.name}</Text>
          </TouchableOpacity>)}
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  addButton: {
    backgroundColor: '#6200ee',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  option: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '30%'
  },
  optionIcon: {
    width: 50,
    height: 50
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5
  }
});
export default PaymentScreen;