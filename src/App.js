import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Acelerations from './screens/Aceleration';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/codenation.png')} />
      <Text style={styles.span}></Text>
      <Acelerations/>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Acelera!! =D" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    marginTop: 30
  },
  span: {
    marginTop: 20,
    width: 350,
    height: 6,
    backgroundColor: '#7800FF'
  }

});

export default App;