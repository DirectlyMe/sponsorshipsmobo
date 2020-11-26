import React, { useState } from "react";

import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const SponseeCard = ({ sponsee }) => {
    return (
        <View style={styles.sponsees_card}>
            <Text>
                {sponsee.first_name} {sponsee.last_name}
            </Text>
        </View>
    );
};

const SponseesList = () => {
    const sponsees = [
        {
            first_name: "Jack",
            last_name: "Test",
        },
        {
            first_name: "Jerry",
            last_name: "Testa",
        },
        {
            first_name: "Jerry",
            last_name: "Testa",
        },
        {
            first_name: "Jerry",
            last_name: "Testa",
        },
        {
            first_name: "Jerry",
            last_name: "Testa",
        },
    ];
    return (
        <FlatList
            horizontal
            style={styles.sponsees_list}
            data={sponsees}
            renderItem={({ item: sponsee }) => <SponseeCard sponsee={sponsee} />}
            keyExtractor={(item, index) => 'key'+index}
        />
    );
};

const styles = StyleSheet.create({
    sponsees_list: {
        flex: 1,
        width: width,
    },
    sponsees_card: {
        flex: 1,
        borderWidth: 1,
        width: width * 0.4,
        height: height * 0.15,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
        borderRadius: 5,
    },
});

export default SponseesList;
