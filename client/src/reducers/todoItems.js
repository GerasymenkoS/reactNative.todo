import {
    CREATE_ITEM_SUCCESS,
    REMOVE_ITEM_SUCCESS,
    EDIT_ITEM_SUCCESS,
    READ_ITEMS_SUCCESS
} from '../utils/actiontypes.js';

const initialState = [];
let id = 0;
const todoItems = ( state = initialState, action ) => {
    let ret = state;
    switch ( action.type ) {
    case READ_ITEMS_SUCCESS : 
        ret = action.payload;
        break;


    case CREATE_ITEM_SUCCESS : 
        ret = [
            ...state,
            action.payload
        ];
        break;


    case EDIT_ITEM_SUCCESS : 
        const newId = action.payload._id;
        ret = ret.map( item => {
            return item._id === newId ? action.payload : item;
        } )
        break;

        
    case REMOVE_ITEM_SUCCESS :
        const itemId = action.payload._id;
        ret = ret.filter( item => {
            return item._id !== itemId;
        } )
    }

    return ret;
}


export default todoItems;
