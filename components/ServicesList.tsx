import React, { useState } from "react";

import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const ServiceCard = ({ service }) => {
    return (
        <View style={styles.service_card}>
            <Text>{service.type}</Text>
        </View>
    );
};

const ServicesList = () => {
    const services = [
        {
            type: "Test",
        },
        {
            type: "Testa",
        },
        {
            type: "Testa",
        },
        {
            type: "Testa",
        },
        {
            type: "Testa",
        },
    ];
    return (
        <FlatList
            style={styles.services_list}
            data={services}
            renderItem={({ item: service }) => <ServiceCard service={service} />}
            keyExtractor={(item, index) => 'key'+index}
        />
    );
};

const styles = StyleSheet.create({
    services_list: {
        flex: 1,
    },
    service_card: {
        borderWidth: 1,
        width: width * .92,
        height: height * 0.15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        borderRadius: 5,
    },
});

export default ServicesList;
