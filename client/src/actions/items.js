import { 
    createItemSuccess,
    editItemSuccess,
    removeItemSuccess,
    readItemsSuccess
} from '../utils/actiontypes.js';

import {
    createItem,
    readItems,
    removeItem,
    editItem
} from '../utils/Api.js';


export const createItemMiddleware = payload => dispatch => {
    createItem( payload, data => {
        dispatch( createItemSuccess( data ) );
    })
}

export const editItemMiddleware = payload => dispatch => {
    editItem( payload, data => {
        dispatch( editItemSuccess( data ) );
    })
}

export const removeItemMiddleware = payload => dispatch => {
    removeItem( payload, data => {
        dispatch( removeItemSuccess( data ) );
    })
}

export const readItemsMiddleware = () => dispatch => {
    readItems( data => {
        dispatch( readItemsSuccess( data ) );
    } )
}

