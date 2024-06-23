import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Search({ navigation }) {
  //Main Container View
  return (
    <View style={styles.container}>

      <Searchbar
        style={{
          width: "80%",
          marginTop: 20
        }}
        placeholder="Search"

      />

    </View>
  );
}

//stylesheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAE5',
    alignItems: 'center'
  }
})
