import React, { Component } from 'react';
import {
    View,
    TouchableWithoutFeedback
 } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';



export default class Button extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        style = {}
      >
          <MaterialIcons name = 'add' size = {20} />
      </TouchableWithoutFeedback>
    )
  }
}
