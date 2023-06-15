import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, Image, CheckBox } from "react-native";

const DishItem = ({
  dish,
  onQuantityChange,
  onCheck
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = value => {
    setQuantity(value);
    onQuantityChange(dish.id, value);
  };

  return <View style={styles.dishItem}>
      <CheckBox value={dish.checked} onValueChange={onCheck} />
      <Image source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishName}>{dish.name}</Text>
        <Text style={styles.dishPrice}>${dish.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleQuantityChange(quantity - 1)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <TextInput style={styles.quantityInput} value={String(quantity)} onChangeText={text => handleQuantityChange(Number(text))} keyboardType="numeric" />
        <TouchableOpacity onPress={() => handleQuantityChange(quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const App = () => {
  const [dishes, setDishes] = useState([{
    id: "1",
    name: "Dish 1",
    price: 10,
    checked: false
  }, {
    id: "2",
    name: "Dish 2",
    price: 15,
    checked: false
  }, {
    id: "3",
    name: "Dish 3",
    price: 12,
    checked: false
  }]);

  const handleQuantityChange = (id, value) => {
    setDishes(prevDishes => prevDishes.map(dish => dish.id === id ? { ...dish,
      quantity: value
    } : dish));
  };

  const handleCheck = id => {
    setDishes(prevDishes => prevDishes.map(dish => dish.id === id ? { ...dish,
      checked: !dish.checked
    } : dish));
  };

  return <View style={styles.container}>
      <FlatList data={dishes} renderItem={({
      item
    }) => <DishItem dish={item} onQuantityChange={handleQuantityChange} onCheck={() => handleCheck(item.id)} />} keyExtractor={item => item.id} />
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10
  },
  dishItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  dishImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  dishInfo: {
    flex: 1
  },
  dishName: {
    fontSize: 16
  },
  dishPrice: {
    fontSize: 14,
    color: "#888"
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10
  },
  quantityInput: {
    width: 40,
    textAlign: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5
  },
  orderButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 18
  }
});
export default App;