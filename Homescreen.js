import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToKidsAttendanceScreens = (buttoncolor) => {
    this.props.navigation.navigate('KidsAttendanceScreens', {
      color: buttoncolor,
    });
  };
  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity
          style={[styles.button,]}
          onPress={() => {
          <Text style={styles.buttonText}>attendance list</Text>
        </TouchableOpacity>
        
        

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayText: {
    color: 'black',
    textAlign: 'center',
    fontSize: '20',
    fontWeight: 'bold',
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    alignText: 'center',
    alignSelf: 'center',
    marginTop: 10,
  }

})



