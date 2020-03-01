
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import {
  Header,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
    	<View style={styles.container}>
	  	<Image style={styles.imageStyle} source={require('./assets/images/codenation.png')}/>	
	  	<Text style={styles.line}></Text>
	  </View>


	</>
  );
};

const styles = StyleSheet.create({
	container: {
		        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
	},
	imageStyle: {
	marginTop: 30,
	},
	line: {
		marginTop: 20, 
		height: 4,
		width: 350,
		backgroundColor: '#7800FF',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default App;
