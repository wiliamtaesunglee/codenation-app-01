import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Aceleration = () =>{
    const [results, setResults] = useState([]);

	(async () => await fetch("http://localhost:8081/data.json")
            .then(r => r.json())
            .then(r => setResults(r))
    )();

    return(
        <View>
            <Text>Aceleraćões</Text>
            
        </View>
    )
    
};

const styles = StyleSheet.create({});

export default Aceleration;

