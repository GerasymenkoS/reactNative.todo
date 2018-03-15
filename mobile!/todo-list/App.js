import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './components/Header';
import { MaterialIcons } from '@expo/vector-icons';

export default class App extends React.Component {
    constructor (props) {
        super(props)
    
        this.state = {
          text : ''
        }
        this.setText = this.setText.bind(this);
    }
    
    setText( text ) {
        this.setState({text});
    }
    

    render() {
      const { text } = this.state;
      return (
        <View style={styles.container}>
            <Header/>
          {/* <Text>{text}</Text>
          <MaterialIcons
              name = 'add'
              size = {20}
              color = 'blue'
          />
          <TextInput
              style = {{ height: 30}}
              onChangeText = {this.setText}
              placeholder = 'type something'
          /> */}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection : 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
});
