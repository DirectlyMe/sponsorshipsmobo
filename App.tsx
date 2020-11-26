import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Navbar from './components/navbar';
import SponseesList from './components/SponseesList';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default function App() {
    return (
        <View style={styles.home_container}>
            <Text style={styles.welcome}>Welcome 'User'...</Text>
            <View style={styles.sponsees_container}>
                <Text style={{ fontSize: 25, marginBottom: 10 }}>Sponsees: </Text>
                <SponseesList />
            </View>
            <View style={styles.bottom_nav}>
                <Navbar />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    home_container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    welcome: {
        marginTop: 20,
        paddingLeft: 10,
        width: width,
        justifyContent: 'flex-start',
        fontSize: 30
    },
    sponsees_container: {
        marginTop: 30,
        marginLeft: 15,
    },
    bottom_nav: {
        position: 'absolute',
        bottom: 0,
    },
});
