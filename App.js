import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/Homescreen'
import KidsAttendanceScreen from './Screens/KidsAttendaceScreens'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  KidsAttendanceScreen : KidsAttendanceScreen
})

const AppContainer = createAppContainer(AppNavigator)

