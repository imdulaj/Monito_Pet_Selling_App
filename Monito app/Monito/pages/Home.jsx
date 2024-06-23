import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';


// Data array containing information about different pets
const data = [
  {
    id: 1,
    name: "Labrador",
    gender: "male",
    age: "2 months",
    price: "RS 20000",
    imageUrl: require('../assets/cat1.png')
  },
  {
    id: 2,
    name: "Bullydog",
    gender: "female",
    age: "2 months",
    price: "RS 20000",
    imageUrl: require('../assets/cat2.png')
  },
  {
    id: 3,
    name: "Husky",
    gender: "male",
    age: "2 months",
    price: "RS 20000",
    imageUrl: require('../assets/cat3.png')
  },
  {
    id: 4,
    name: "Poodle",
    gender: "female",
    age: "2 months",
    price: "RS 20000",
    imageUrl: require('../assets/cat4.png')
  },
  {
    id: 5,
    name: "Catledog",
    gender: "male",
    age: "2 months",
    price: "RS 20000",
    imageUrl: require('../assets/cat1.png')
  },
  {
    id: 6,
    name: "German shepard",
    gender: "male",
    age: "2 months",
    price: "RS 20000",
    imageUrl: require('../assets/cat1.png')
  }
];



export default function Home({ navigation }) {

  // Function to navigate to the PetDetails screen
  const godetails = () => {
    navigation.navigate("PetDetails");
  }

  //Main Container View
  return (
    <View style={styles.container}>

      <View style={styles.pt1}>
        <View style={styles.inner1} >
          <View style={styles.in1}>
            <Image
              style={styles.menu}
              source={require('../assets/menu.png')}
            />
          </View>
          <View style={styles.in2}>
            <Image
              style={styles.Logo}
              source={require('../assets/Logo.png')}
            />
          </View>
          <View style={styles.in3}>
            <Image
              style={styles.profile}
              source={require('../assets/profile.png')}
            />
          </View>
        </View>
        <View style={styles.inner2}>
          <Searchbar style={styles.serach}
            placeholder="Search here..."
            iconColor='black'

          />

        </View>

      </View>




      <View style={styles.pt2}>

        <View style={{ flex: 1, marginTop: 10 }}>

          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 12,
              marginBottom: 10
            }}
          >
            <Text style={{ fontWeight: '600', color: 'black' }}>Popular pets</Text>
            <Text>Show all</Text>
          </View>


          <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={{ gap: 10, paddingHorizontal: 12 }}
            contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
            keyExtractor={(item, idx) => item.name + idx}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={godetails}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    height: 300,
                    borderRadius: 20,
                    backgroundColor: 'white'

                  }}
                >
                  <Image
                    source={item.imageUrl}
                    style={{ height: '20%', width: '60%' }}
                  />
                  <View>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>{item.name}</Text>
                    <Text style={{ color: 'black' }}>Gender: {item.gender}</Text>
                    <Text style={{ color: 'black' }}>Age: {item.age}</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{item.price}</Text>
                    <Button buttonColor='#FFFAE5' textColor='black' style={{ marginTop: 20, height: 40 }} mode="contained" onPress={() => console.log('Pressed')}>
                      ADD TO CART
                    </Button>
                  </View>
                </TouchableOpacity>
              )
            }}
          />



        </View>



      </View>



    </View>


  );
}

//stylesheet

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pt1: {
    flex: 2,
    backgroundColor: '#FFFAE5'
  },
  pt2: {
    flex: 6,
    backgroundColor: '#FFFAE5'
  },
  inner1: {
    flex: 1,
    backgroundColor: '#FFFAE5',
    flexDirection: 'row'
  },
  inner2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  in1: {
    flex: 1,
    backgroundColor: '#FFFAE5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  in2: {
    flex: 3,
    backgroundColor: '#FFFAE5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  in3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu: {
    width: '30%',
    height: '30%'
  },
  Logo: {
    width: '65%',
    height: '60%'
  },
  profile: {
    width: '70%',
    height: '70%'
  },
  serach: {
    position: 'absolute',
    width: '80%'


  }

})