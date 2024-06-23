import React from 'react';
import { View, Text, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';


export default function Signin({ navigation }) {

    // Function to navigate to the Login screen
    const gologin = () => {
        navigation.navigate("Login");
    }



    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [conpassword, setconPassword] = React.useState("");


    // Function to handle user registration
    const handleRegister = async () => {

        // Check if email, password, and confirm password are filled
        if (!email || !password || !conpassword) {
            Alert.alert('Registration Failed', 'Please fill in all fields.');
            return;
        }

        // Check if password and confirm password match
        if (password !== conpassword) {
            Alert.alert('Registration Failed', 'Passwords do not match.');
            return;
        }

        // Validate email format using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Registration Failed', 'Invalid email address.');
            return;
        }

        // Check if the email already exists in the database
        try {
            const emailCheckResponse = await axios.get(
                `http://192.168.43.16:3000/register?email=${email}`,
            );

            const existingUser = emailCheckResponse.data.find(
                users => users.email === email,
            );
            if (existingUser) {
                Alert.alert(
                    'Registration Failed',
                    'An account with this email already exists.',
                );
                return;
            }

            // Register the user by sending a POST request
            const registerResponse = await axios.post(
                'http://192.168.43.16:3000/register/',
                {

                    email: email,
                    password: password,
                },
            );

            // Display registration success message and navigate to login screen
            Alert.alert('Registration Successful');

            navigation.navigate("Login", { animationEnabled: false });
        } catch (err) {
            console.error('Error registering user:', err);
            Alert.alert(
                'Registration Failed',
                'An error occurred while registering. Please try again.',
            );
        }


    }

    //Main Container View
    return (


        <ScrollView contentContainerStyle={styles.container}>



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
                <Text style={styles.text1}>Welcome to Monito!</Text>
                <Text style={styles.text2}>Sign up to continue!</Text>
            </View>

            <View style={styles.pt3}>
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.email}
                        label="Enter email"
                        value={email}
                        onChangeText={email => setEmail(email)}
                        mode="outlined"
                    />

                    <TextInput
                        style={styles.password}
                        label="Enter password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        mode="outlined"
                        secureTextEntry
                    />

                    <TextInput
                        style={styles.password}
                        label="Confirm password"
                        value={conpassword}
                        onChangeText={conpassword => setconPassword(conpassword)}
                        mode="outlined"
                        secureTextEntry
                    />

                </View>
            </View>
            <View style={styles.pt4}>

                <View style={styles.btnsection}>
                    <View style={styles.conbt}>
                        <Button onPress={handleRegister} style={styles.btn} buttonColor='#EBC182' textColor='#1B3B64' mode="contained">
                            Sign up
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

                    <View style={styles.textSection}>
                        <Text>or</Text>
                        <Text onPress={gologin}>If you have an account?  Login here</Text>
                    </View>

                </View>

            </View>




        </ScrollView>

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
        flex: 2,
    },
    pt4: {
        flex: 3,

    },
    inner1: {
        flex: 2,
    },
    inner2: {
        flex: 6,
        justifyContent: 'flex-end'
    },
    img1: {
        width: '100%',
        height: '100%',

    },
    logo: {
        width: '64%',
        height: '60%'
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
    btn: {
        width: '90%',
        marginTop: 40
    },
    conbt: {
        alignItems: 'center',
    },
    nav1: {
        width: '9%',
        height: '22%'
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
        flex: 3,
        marginTop: 20

    },
    textSection: {
        flex: 2,
        alignItems: 'center'
    },
})
