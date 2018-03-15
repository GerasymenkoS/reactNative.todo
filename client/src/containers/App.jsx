import React, { Component } from 'react';
import Header from '../presenters/Header';
import ToDoList from './presenters/ToDoList';

export default class App extends Component {
    constructor () {
        super()
    }

    componentWillMount () {
        document.addEventListener('selectstart', () => {return;})
    }
  
    render () {
        return (
            <div>
                <Header title = {this.props.title}/>
                <ToDoList/>
            </div>
        )
    }
}
