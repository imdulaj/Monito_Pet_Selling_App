import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../assets/Background';
import Signin from './Signin';

export default function Welcome({ navigation }) {

    const gosignin = () => {
        navigation.navigate("Signin");
    }
    //Main Container View
    return (

        <View style={styles.container}>



            <View style={styles.pt1}>
                <Image
                    style={styles.img1}
                    source={require('../assets/w2.png')}
                />
            </View>

            <View style={styles.pt2}>
                <TouchableOpacity style={styles.button} onPress={gosignin}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/Logo.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.pt3}>
                <Image
                    style={styles.img2}
                    source={require('../assets/hero4.png')}
                />
            </View>


        </View>

    );
}

//stylesheet

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    pt1: {
        flex: 2,

    },
    pt2: {
        flex: 6,

        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    pt3: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    img1: {
        width: '40%',
        height: '80%',

    },
    img2: {
        width: '100%',
        height: '70%'
    }
})