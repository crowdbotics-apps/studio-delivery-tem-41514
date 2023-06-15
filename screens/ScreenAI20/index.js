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

  return <ScrollView style={_styles.EFMlgNSo}>
      <Image source={{
      uri: product.imageUrl
    }} style={_styles.OzmlRbdh} />
      <View style={_styles.cDtAeAyk}>
        <Text style={_styles.qlIDttqS}>{product.name}</Text>
        <Text style={_styles.QlmxWRcR}>
          ${product.price}
        </Text>
        <View style={_styles.fxZkIOPN}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={_styles.YQlItphv}>-</Text>
          </TouchableOpacity>
          <Text style={_styles.dumdUPfn}>
            {quantity}
          </Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={_styles.rUdeyAWx}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={_styles.Syqpovnc}>
          Subtotal: ${subtotal}
        </Text>
        <TouchableOpacity style={_styles.dYmpHxhV}>
          <Text style={_styles.mmGWemdy}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={_styles.HSnldMMx}>
        Recommended Products
      </Text>
      <FlatList horizontal data={recommendedProducts} renderItem={({
      item
    }) => <Image source={{
      uri: item.imageUrl
    }} style={_styles.JPJuXOVS} />} keyExtractor={item => item.id} />
    </ScrollView>;
};

export default ProductDetails;

const _styles = StyleSheet.create({
  EFMlgNSo: {
    backgroundColor: "#fff"
  },
  OzmlRbdh: {
    width: "100%",
    height: 300
  },
  cDtAeAyk: {
    padding: 20
  },
  qlIDttqS: {
    fontSize: 24,
    fontWeight: "bold"
  },
  QlmxWRcR: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
  fxZkIOPN: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  YQlItphv: {
    fontSize: 24,
    fontWeight: "bold"
  },
  dumdUPfn: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  rUdeyAWx: {
    fontSize: 24,
    fontWeight: "bold"
  },
  Syqpovnc: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  dYmpHxhV: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    marginTop: 20
  },
  mmGWemdy: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  HSnldMMx: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20
  },
  JPJuXOVS: {
    width: 150,
    height: 150,
    margin: 20
  }
});