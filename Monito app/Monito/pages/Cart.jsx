import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { useEffect, useState } from 'react';

//sample dataset for flatlist
const DATA = [
  {
    id: 'f12',
    title: 'Shiba inu sepia',
    quantity: 0, // Add quantity property
    price: 1000
  },
  {
    id: 'f13',
    title: 'Alaskan malamute',
    quantity: 0, // Add quantity property
    price: 2000
  },
  {
    id: 'f14',
    title: 'German shepard',
    quantity: 0, // Add quantity property
    price: 3000
  },
  {
    id: 'f15',
    title: 'American bully',
    quantity: 0, // Add quantity property
    price: 500
  },
  {
    id: 'f16',
    title: 'labrador',
    quantity: 0, // Add quantity property
    price: 1000
  },
];



//// Component to render an item with a title
const Item = ({ title, quantity, price,onIncrement, onDecrement }) => {

  const totalPrice = quantity > 0 ? quantity * price : 0;

  return(
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={{ fontSize: 20 }}>Price: Rs {totalPrice}</Text>
    <View style={styles.quantityContainer}>
    
      <Button onPress={onDecrement} style={styles.roundedButton}>-</Button>
      <Text style={{fontSize:30}} >{quantity}</Text>
      <Button onPress={onIncrement} style={styles.roundedButton}>+</Button>
      
    </View>
  </View>
);
}


//Main Container View
export default function Cart({ navigation }) {

  const [cartItems, setCartItems] = useState(DATA);

  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  const handleIncrement = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecrement = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <View style={styles.conatiner}>
      <View style={styles.pt1}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Cart</Text>
      </View>
      <View style={styles.pt2}>
        <SafeAreaView style={styles.Container}>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                quantity={item.quantity}
                onIncrement={() => handleIncrement(item.id)}
                onDecrement={() => handleDecrement(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>

      </View>
      <View style={styles.pt3}>
        <View style={styles.in1}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 20 }}>Total</Text>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginRight: 20 }}>RS {totalPrice}</Text>
        </View>
        <View style={styles.in2}>
          <Button buttonColor='black' style={{ width: '80%' }} mode="contained" onPress={() => console.log('Pressed')}>
            CHECKOUT
          </Button>
        </View>

      </View>
    </View>
  );
}

//stylesheet

const styles = StyleSheet.create({
  conatiner: {
    flex: 1
  },
  pt1: {
    flex: 1,
    backgroundColor: '#FFFAE5',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  pt2: {
    flex: 6,
    backgroundColor: '#FFFAE5'
  },
  pt3: {
    flex: 2,
    backgroundColor: '#FFFAE5'
  },
  in1: {
    flex: 1,
    backgroundColor: '#FFFAE5',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  in2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginLeft:'50%',
    marginTop:10
  },
  roundedButton: {
    borderRadius: 80, 
    backgroundColor: '#1B3B64',
    width: '5%',
    
    

  },

})
