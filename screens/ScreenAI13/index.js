import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
const orders = [{
  id: 1,
  status: 'Rejected'
}, {
  id: 2,
  status: 'Accepted'
}, {
  id: 3,
  status: 'Pending'
}, {
  id: 4,
  status: 'Completed'
}, {
  id: 5,
  status: 'Rejected'
}, {
  id: 6,
  status: 'Accepted'
}, {
  id: 7,
  status: 'Pending'
}, {
  id: 8,
  status: 'Completed'
}];

const OrderScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Rejected');
  const filteredOrders = orders.filter(order => order.status === selectedTab);

  const renderItem = ({
    item
  }) => <View style={styles.orderItem}>
      <Text style={styles.orderText}>Order ID: {item.id}</Text>
      <Text style={styles.orderText}>Status: {item.status}</Text>
    </View>;

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        {['Rejected', 'Accepted', 'Pending', 'Completed'].map(tab => <TouchableOpacity key={tab} style={styles.tab} onPress={() => setSelectedTab(tab)}>
            <Text style={selectedTab === tab ? styles.tabTextSelected : styles.tabText}>{tab}</Text>
          </TouchableOpacity>)}
      </View>
      <FlatList data={filteredOrders} renderItem={renderItem} keyExtractor={item => item.id.toString()} contentContainerStyle={styles.orderList} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10
  },
  backButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10
  },
  tab: {
    paddingHorizontal: 10
  },
  tabText: {
    fontSize: 16,
    color: '#777'
  },
  tabTextSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  orderList: {
    padding: 10
  },
  orderItem: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  orderText: {
    fontSize: 14,
    color: '#333'
  }
});
export default OrderScreen;