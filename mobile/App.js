import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './presenters/Header';
import styles from './assets/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';


const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

// console.log(store);

export default App = () => (
    <Provider store={store}>
      <Appll/>
    </Provider>
)

class Appl extends React.Component {
  render() {
      console.log(this.props.items);
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar
                hidden
                />
            <Header/>
            <View style={styles.icon} >
              <MaterialIcons name='add' size = {20} />
            </View>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </Provider>
      );
  }
}

const Appll = connect(
  state => ({
     items : state.todoItems
  }),
  dispatch => ({})
)(Appl);