import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Aceleration = () =>{
    const [results, setResults] = useState([]);

    useEffect
    async () => await fetch("http://localhost:8081/data.json")
            .then(r => r.json())
            .then(r => setResults(r))
            .then(console.log(results))

    return(
        <View style={styles.container}>
            <Image styles={styles.image} source={require('../../assets/images/100.png')}/>
            <View style={styles.infos}>
                <Text style={styles.title} >React Native</Text>
                <Text>Online</Text>
                <Text>20/12/2022</Text>
            </View>
        </View>
    )
    
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 45,
        flexDirection: 'row',
        width: 400,
        
    },
    image: {
        width: 100
    },
    title: {
        fontSize: 20
    },
    infos: {
        marginLeft: 30,
        justifyContent: 'space-around'
    }
});

export default Aceleration;

