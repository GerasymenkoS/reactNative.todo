import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './containers/App.jsx';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import React from 'react';
import './assets/style.less';


// const store = createStore(
//     reducers,
//     composeWithDevTools(applyMiddleware(thunk))
// );

ReactDOM.render(
    // <Provider store = {store}>
    <App/>,
    // </Provider>,
    document.getElementById("app")
);
