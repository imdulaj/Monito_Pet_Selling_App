
import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { Button } from 'react-native-paper';
import LoaderKit from 'react-native-loader-kit';


// Define initial state with an array of image assets
{
    this.state = {
        images: [
            require('../assets/cat1.png'),
            require('../assets/cat2.png'),
            require('../assets/cat3.png'),
        ]
    };
}


export default function PetDetails(navigation) {

    const [data, setData] = useState([]);
    const [isloaded, setIsloaded] = useState('true');

    useEffect(() => {
        loadAll();
    }, [])


    // Function to fetch data from a REST API endpoint and update component state
    const loadAll = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')  // Fetch data from the API
            .then((response) => response.json())
            .then((json) => {
                setData(json);  // Update component state with fetched data
                setIsloaded(false)
            });
    }

    //Main Container View
    return (


        <View style={styles.container}>
            <View style={styles.pt1}>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={"100%"}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                    parentWidth={this.state.width}
                />
            </View>
            <View style={styles.pt2}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>Lorem Ipsum</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>RS 60000</Text>

            </View>

            <View style={styles.pt3}>

                {isloaded ?
                    <LoaderKit
                        style={{ width: 50, height: 50 }}
                        name={'BallPulse'} // Optional: see list of animations below
                        color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
                    />
                    :
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.fl1}>
                                    <Text>{item.title}</Text>
                                </View>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />}


            </View>
            <View style={styles.pt4}>
                <View style={styles.in1}>
                    <Button style={{ width: '90%' }} buttonColor='black' mode="contained" onPress={() => console.log('Pressed')}>
                        CONTACT
                    </Button>
                </View>
                <View style={styles.in2}>
                    <Button style={{ width: '90%' }} textColor='black' mode="outlined" onPress={() => console.log('Pressed')}>
                        CHAT
                    </Button>
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
        flex: 3,
        backgroundColor: '#FFFAE5'
    },
    pt2: {
        flex: 1,
        backgroundColor: '#FFFAE5'
    },
    pt3: {
        flex: 3,
        backgroundColor: '#FFFAE5',

    },
    pt4: {
        flex: 1,
        backgroundColor: '#FFFAE5',
        flexDirection: 'row'
    },
    in1: {
        flex: 3,
        backgroundColor: '#FFFAE5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    in2: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'

    },
    fl1: {

        padding: 5,
        marginBottom: 10,
        width: '80%',
        backgroundColor: "white"
    },
})