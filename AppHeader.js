import * as React from 'react';
import {
  Text,
  textContainer,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}> Attendance Chart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'rgb(124, 252, 0);',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AppHeader;
