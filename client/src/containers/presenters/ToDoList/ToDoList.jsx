import React, { Component } from 'react'
import './todolist.less';
import { connect } from 'react-redux';
import { readItemsMiddleware, createItemMiddleware } from '../../../actions/items.js';
import ToDoItem from './containers/ToDoItem';
import Input from '../../../presenters/Input';
import Button from '../../../presenters/Button';


class ToDoList extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            itemText : ''
        }
        this.onItemTextChange = this.onItemTextChange.bind(this);
        this.onItemSubmit = this.onItemSubmit.bind(this);
    }

    componentDidMount () {
        this.props.onReadItems();
    }

    onItemTextChange (e) {
        const itemText = e.target.value;
        this.setState( { itemText } );
    }

    onItemSubmit () {
        const { itemText } = this.state;
        if( !itemText.length ) {
            return;
        }
        this.setState( { itemText : '' } );
        this.props.onCreateItem(itemText);
    }
    
    render () {
        const {itemText} = this.state;
        const { items } = this.props;
        return (
            <div className='todolist'>
                <div className="todolist__input-wrapper">
                    <Input
                        placeholder = "New item's text"
                        value = {itemText}
                        onChange = {this.onItemTextChange}
                    />
                    <Button
                        onClick = {this.onItemSubmit}
                        materialName = 'add'
                    />
                </div>
                <ul className="todolist__items-wrapper">
                    {items.map( item => {
                        return (
                            <ToDoItem
                                key = {item._id}
                                item = {item}
                            />
                        );
                    } )}
                </ul>
            </div>
        )
    }
}


export default connect(
    state => ({
        items : state.todoItems
    }),
    dispatch => ({
        onCreateItem : payload => {
            dispatch ( createItemMiddleware( payload ) )
        },
        onReadItems : () => {
            dispatch ( readItemsMiddleware() )
        }
    })
)(ToDoList);
