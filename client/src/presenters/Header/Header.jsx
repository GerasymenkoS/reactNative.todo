import React, { Component } from 'react';
import Button from '../Button';
import './header.less';

export default class Header extends Component {

    
    render () {
        return (
            <div className='header'>
                <div className='header__text'>
                    {this.props.title}
                </div>
                <div className='header__logout'>
                    <Button
                        materialName = 'exit_to_app'
                        onClick = {this.toggleEditMode}
                        bColor = 'red' 
                        size = '50px'
                        fSize = '25px'
                    />
                </div>
            </div>
        )
    }
}
