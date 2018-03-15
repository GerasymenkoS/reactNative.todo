import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './presenters/Header';
import styles from './assets/styles';
import Button from './presenters/Button';
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
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar
                hidden
                />
            <Header/>
            <Button/>
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