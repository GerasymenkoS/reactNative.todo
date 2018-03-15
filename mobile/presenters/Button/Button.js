import React, { Component } from 'react';
import { View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default class Button extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          styles : {...styles}
      }

      this.handleTouch = this.handleTouch.bind(this);
    }

    handleTouch () {
        console.log(this.state);
    }


    
    render() {
        return (
        <Animated.View
            style = {[
                styles.container,
                {
                    transform : [
                        {scale : 2}
                    ]
                }
            ]}
            
        >
            <TouchableWithoutFeedback onPress = {this.handleTouch}>
                <View>
                    <MaterialIcons name='add' size = {20} color = 'black'/>
                </View>
            </TouchableWithoutFeedback>
        </Animated.View>
        )
    }
}
