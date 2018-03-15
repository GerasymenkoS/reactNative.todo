import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';


export default class Header extends Component {
  render() {
    return (
      <View style = {styles.header}>
          <Text style = {styles.text}>
              TodoList app on RN
          </Text>
      </View>
    )
  }
}
