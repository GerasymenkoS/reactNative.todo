import React, { Component } from 'react'

export default class App extends Component {
    constructor (props) {
        super(props)
  
        this.state = {
            response:'s'
        }

    }
  
    componentDidMount () {
        fetch('http://localhost:1300').then( response => {
            return response.text();
        }).then( responseText => {
            console.log(responseText);
            this.setState({response:responseText});

        })
    }

    render () {
        return (
            <div>
                <textarea>{this.state.response}</textarea>
            </div>
        )
    }
}
