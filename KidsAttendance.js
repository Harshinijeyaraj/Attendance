import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from '../config'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      KidsRank: [],
    };
  }

  showKidssRank = () => {
    var kids = [];
    var kidsRef = db.ref('attendance/');
    kidsRef.on('value', (data) => {
      var kidsList = data.val();
      console.log(kidsList);

      for (var kids in kidsList) {
        if (kidsList[kids]['isButtonPressed'] === true) {
          kidsList[kids]['kidsName'] = kids;
         kids.push(kidsList[kids]);
        }
      }

      kids.sort(function (kids1, kids2) {
        return kids1.timestamp - kids2.timestamp;
      });
      console.log(kids);
      this.setState({ kidsRank: kids });
    });
  };

  resetdb = () => {
    console.log('Hello');
    var restDatabase = db
      .ref('kids/')
      .set({
        kids1: { isButtonPressed: false, timestamp: 0 },
        kids2: { isButtonPressed: false, timestamp: 0 },
       
      });
    this.setState({ kidsRank: [] });
  };
  componentDidMount() {
    this.showkidsRank();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          {this.state.attendance.map((kids) => (
            <View
              style={{
                width: 100,
                height: 100,
                borderWidth: 2,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: kids.kidsName,
              }}>
            
            </View>
          ))}
        </View>
        
      </View>
    );
  }
}



