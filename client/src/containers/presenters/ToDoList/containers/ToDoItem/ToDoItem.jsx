import { editItem, removeItem } from '../../../../../utils/actiontypes.js';
import React, { Component } from 'react';
import {
    editItemMiddleware,
    removeItemMiddleware
} from '../../../../../actions/items.js';
import Button from '../../../../../presenters/Button';
import { connect } from 'react-redux';
import './todoitem.less';

class ToDoItem extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            isEditing : false,
            itemText : props.item.text
        }
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onItemRemove = this.onItemRemove.bind(this);
        this.onItemEdit = this.onItemEdit.bind(this);
    }


    toggleEditMode () {
        const isEditing = !this.state.isEditing;
        this.setState( { isEditing } );
    }

    handleChange (e) {
        const itemText = e.target.value;
        this.setState( { itemText } );
    }

    onItemRemove () {
        this.props.onItemRemove ( this.props.item );
    }

    onItemEdit () {
        const _id = this.props.item._id;
        const text = this.state.itemText;
        this.props.onItemEdit( { _id, text } )
        this.toggleEditMode();
    }
    
    render () {
        const { itemText, isEditing } = this.state;
        const { text } = this.props.item;
        const Controls = () => {
            return (
                <div className="todo-item__controls">
                    <Button
                        materialName = 'mode_edit'
                        onClick = {this.toggleEditMode}
                        size = '25px'
                        fSize = '15px'
                    />
                    <Button
                        materialName = 'close'
                        onClick = {this.onItemRemove}
                        size = '25px'
                        fSize = '15px'
                        bColor = 'red' 
                    />
                </div>
            );
        }

        const EditInput = (() => {
            return (
                <textarea
                    className = "todo-item__title--edit"
                    rows = '3'
                    onChange = { this.handleChange }
                    value = { itemText }
                />
            )
        })();

        const Title = () => {
            return (
                <div className="todo-item__title--text">
                    { text }
                </div>
            )
        }


        return (
            <li 
                className="todo-item"
            >
                <div
                    className="todo-item__title"
                >
                    { isEditing ? EditInput : <Title/> }
                </div>
                { isEditing ? <Button materialName = 'check' onClick = {this.onItemEdit} /> : <Controls/> }
            </li>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onItemEdit : payload => {
            dispatch( editItemMiddleware( payload ) )
        },
        onItemRemove : payload => {
            dispatch( removeItemMiddleware( payload ) )
        }
    })
)(ToDoItem);
