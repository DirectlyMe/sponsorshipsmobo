import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const Navbar = () => {
    return (
        <View style={styles.nav_container}>
            <Text style={styles.nav_item}>nav1</Text>
            <Text style={styles.nav_item}>nav2</Text>
            <Text style={styles.nav_item}>nav3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nav_container: {
        flex: 1,
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'black',
        backgroundColor: 'white',
    },
    nav_item: {
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
});

export default Navbar;
