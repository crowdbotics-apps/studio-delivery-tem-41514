import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(100);
  const product = {
    name: 'Product Name',
    price: 100,
    imageUrl: 'https://tinyurl.com/42evm3m3'
  };
  const recommendedProducts = [{
    id: '1',
    imageUrl: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    imageUrl: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '3',
    imageUrl: 'https://tinyurl.com/42evm3m3'
  }];

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setSubtotal(subtotal + product.price);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setSubtotal(subtotal - product.price);
    }
  };

  return <ScrollView style={_styles.GQIqbdRm}>
      <Image source={{
      uri: product.imageUrl
    }} style={_styles.VozGoMce} />
      <View style={_styles.XhAoydUS}>
        <Text style={_styles.fhaDZIjZ}>{product.name}</Text>
        <Text style={_styles.YMWKRbLJ}>
          ${product.price}
        </Text>
        <View style={_styles.WVzfkIiQ}>
          <View style={_styles.dBsDlYpe}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Text style={_styles.qvzDxVhg}>-</Text>
            </TouchableOpacity>
            <Text style={_styles.IfmgeZtw}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Text style={_styles.BuoaKZPB}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={_styles.ORjlypiv}>Subtotal: ${subtotal}</Text>
        </View>
        <TouchableOpacity style={_styles.XilNGTPG}>
          <Text style={_styles.JupxslLk}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={_styles.NPBXDSra}>
        Recommended Products
      </Text>
      <FlatList data={recommendedProducts} horizontal renderItem={({
      item
    }) => <Image source={{
      uri: item.imageUrl
    }} style={_styles.XifIUBee} />} keyExtractor={item => item.id} />
    </ScrollView>;
};

export default ProductDetails;

const _styles = StyleSheet.create({
  GQIqbdRm: {
    backgroundColor: "#fff"
  },
  VozGoMce: {
    width: "100%",
    height: 300
  },
  XhAoydUS: {
    padding: 20
  },
  fhaDZIjZ: {
    fontSize: 24,
    fontWeight: "bold"
  },
  YMWKRbLJ: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
  WVzfkIiQ: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20
  },
  dBsDlYpe: {
    flexDirection: "row",
    alignItems: "center"
  },
  qvzDxVhg: {
    fontSize: 24,
    fontWeight: "bold"
  },
  IfmgeZtw: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  BuoaKZPB: {
    fontSize: 24,
    fontWeight: "bold"
  },
  ORjlypiv: {
    fontSize: 18,
    fontWeight: "bold"
  },
  XilNGTPG: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20
  },
  JupxslLk: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  NPBXDSra: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20
  },
  XifIUBee: {
    width: 150,
    height: 150,
    margin: 20
  }
});