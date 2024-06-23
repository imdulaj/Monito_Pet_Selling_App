import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Profile({ navigation }) {


  // Function to handle user logout
  const handleLogOut = async () => {
    try {
      // Remove stored email and password from AsyncStorage
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');

      // Navigate to the 'Login' screen after successful logout
      navigation.navigate('Login');
      // Handle error if logout fails
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  //Main Container View
  return (
    <View style={styles.container}>
      <View style={styles.pt1}>
        <Image
          style={styles.profile}
          source={require('../assets/profile.png')}
        />
      </View>

      <View style={styles.pt2} >

        <Text style={{ marginLeft: 20, fontSize: 25, color: 'black', fontWeight: 'bold' }}>Michel Jordan</Text>
        <Text style={{ marginLeft: 20, fontSize: 15, color: 'black' }}>Edit your profile here</Text>

        <Divider style={{ marginTop: 15, marginBottom: 15, color: 'black', borderWidth: 1, width: '90%', alignSelf: 'center', }} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
          <Text style={{ marginLeft: 20 }}>Personal Infromation</Text><Text><Icon name="chevron-right" size={20} /></Text>
        </View>
        <Divider style={{ marginTop: 15, marginBottom: 15, color: 'black', borderWidth: 1, width: '90%', alignSelf: 'center', }} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
          <Text style={{ marginLeft: 20 }}>My Orders</Text><Text><Icon name="chevron-right" size={20} /></Text>
        </View>
        <Divider style={{ marginTop: 15, marginBottom: 15, color: 'black', borderWidth: 1, width: '90%', alignSelf: 'center', }} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
          <Text style={{ marginLeft: 20 }}>Payments</Text><Text><Icon name="chevron-right" size={20} /></Text>
        </View>
        <Divider style={{ marginTop: 15, marginBottom: 15, color: 'black', borderWidth: 1, width: '90%', alignSelf: 'center', }} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
          <Text style={{ marginLeft: 20 }}>Notifications</Text><Text><Icon name="chevron-right" size={20} /></Text>
        </View>
        <Divider style={{ marginTop: 15, marginBottom: 15, color: 'black', borderWidth: 1, width: '90%', alignSelf: 'center', }} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
          <Text style={{ marginLeft: 20 }}>Favourites</Text><Text><Icon name="chevron-right" size={20} /></Text>
        </View>
        <Divider style={{ marginTop: 15, marginBottom: 15, color: 'black', borderWidth: 1, width: '90%', alignSelf: 'center', }} />

      </View>



      <View style={styles.pt3}>
        <Button style={{ marginLeft: 20, width: '50%' }} buttonColor='black' mode="contained" onPress={handleLogOut}>
          LOG OUT
        </Button>

      </View>



    </View>
  );
}

//stylesheet

const styles = StyleSheet.create({
  profile: {
    width: '20%',
    height: '70%',
    margin: 10
  },
  container: {
    flex: 1
  },
  pt1: {
    flex: 2,
    backgroundColor: '#FFFAE5'
  },
  pt2: {
    flex: 7,
    backgroundColor: '#FFFAE5'
  },
  pt3: {
    flex: 3,
    backgroundColor: '#FFFAE5'
  }

})
