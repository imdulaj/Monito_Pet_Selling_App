
import { View, Text, StyleSheet, Image, Alert, KeyboardAvoidingView } from 'react-native';
import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {

    // Function to navigate to the Signin screen
    const gosignin = () => {
        navigation.navigate("Signin");
    }

    // State variables for email and password input fields
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");



    // Function to check if a user is logged in based on stored credentials
    const checkLoggedIn = async () => {

        // Retrieve stored email and password from AsyncStorage
        const storedEmail = await AsyncStorage.getItem('email');
        const storedPassword = await AsyncStorage.getItem('password');

        // Check if both email and password are stored, then navigate to the 'BottomTabs' screen
        if (storedEmail && storedPassword) {
            navigation.navigate('BottomTabs');
        }
    };


    // Effect hook to check if the user is logged in when the component mounts

    useEffect(() => {
        checkLoggedIn();  // Call the checkLoggedIn function
    }, [])


    // Function to handle user login
    const handleLogin = async () => {
        try {
            if (!email || !password) {
                Alert.alert('Login Failed', 'Please fill in all fields.');
                return;
            }

            const response = await axios.post('http://192.168.43.16:3000/login/', {
                email: email,
                password: password,
            });

            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);

            console.log(response.data);
            navigation.navigate('BottomTabs');
        } catch (err) {
            console.error('Error logging in:', err);
            Alert.alert(
                'Login Failed',
                'An error occurred while logging in. Please try again.',
            );
        }
    };

    //Main Container View
    return (

        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={Platform.OS === "android" ? -200 : 0}>
            <View style={styles.pt1}>
                <View style={styles.inner1}>
                    <Image
                        style={styles.img1}
                        source={require('../assets/w2.png')}
                    />
                </View>
                <View style={styles.inner2}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/Logo.png')}
                    />
                </View>
            </View>
            <View style={styles.pt2}>
                <Text style={styles.text1}>Log into Monito!</Text>
                <Text style={styles.text2}>Sign in here to continue!</Text>
            </View>


            <View style={styles.pt3}>
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.email}
                        label="Enter email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        mode="outlined"
                    />

                    <TextInput
                        style={styles.password}
                        label="Enter passwaord"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        mode="outlined"
                    />

                    <Text style={styles.text3}>Forget Password?</Text>
                </View>

                <View style={styles.btnsection}>
                    <View style={styles.conbt}>
                        <Button style={styles.btn} buttonColor='#EBC182' textColor='#1B3B64' mode="contained" onPress={handleLogin}>
                            Sign in
                        </Button>
                    </View>


                    <View style={styles.navIcon}>
                        <Image
                            style={styles.nav1}
                            source={require('../assets/apple.png')}
                        />

                        <Image
                            style={styles.nav1}
                            source={require('../assets/google.png')}
                        />

                        <Image
                            style={styles.nav1}
                            source={require('../assets/facebook.png')}
                        />

                        <Image
                            style={styles.nav1}
                            source={require('../assets/twitter.png')}
                        />

                    </View>

                </View>

                <View style={styles.textSection}>
                    <Text>or</Text>
                    <Text onPress={gosignin}>Don't have an account?  Sign up here</Text>
                </View>

            </View>
            <View style={styles.pt4}>

                <Image
                    style={styles.img2}
                    source={require('../assets/hero4.png')}
                />

            </View>


        </KeyboardAvoidingView>

    );
}

//stylesheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pt1: {
        flex: 1,
        flexDirection: 'row'
    },
    pt2: {
        flex: 1,
        justifyContent: 'center'
    },
    pt3: {
        flex: 4,

    },
    pt4: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    img1: {
        width: '90%',
        height: '100%',

    },
    inner1: {
        flex: 3,
    },
    inner2: {
        flex: 6,
        justifyContent: 'flex-end'
    },
    logo: {
        width: '62%',
        height: '58%'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#1B3B64',
        marginLeft: '5%'
    },
    text2: {
        fontSize: 15,
        color: '#1B3B64',
        marginLeft: '5%'
    },
    email: {
        width: '90%',
        marginTop: 10,
        borderRadius: 20

    },
    password: {
        width: '90%',
        marginTop: 10,
        borderRadius: 20

    },
    inputs: {
        alignItems: 'center',
        flex: 2,
    },
    text3: {
        color: '#1B3B64',
        marginLeft: '65%',
        marginTop: 10
    },
    btn: {
        width: '90%',

    },
    conbt: {
        alignItems: 'center',
        marginTop: 80
    },
    nav1: {
        width: '10%',
        height: '80%'
    },
    navIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginLeft: '25%',
        marginTop: 20

    },
    btnsection: {
        flex: 3
    },
    textSection: {
        flex: 2,
        alignItems: 'center',

    },
    img2: {
        width: '100%',
        height: '100%'
    }





})