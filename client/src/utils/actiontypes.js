export const CREATE_ITEM_SUCCESS   = 'CREATE_ITEM_SUCCESS';
export const EDIT_ITEM_SUCCESS     = 'EDIT_ITEM_SUCCESS';
export const REMOVE_ITEM_SUCCESS   = 'REMOVE_ITEM_SUCCESS';
export const READ_ITEMS_SUCCESS     = 'READ_ITEMS_SUCCESS';


export const readItemsSuccess = ( payload ) => {
    return {
        type : READ_ITEMS_SUCCESS,
        payload
    }
};

export const createItemSuccess = ( payload ) => {
    return {
        type : CREATE_ITEM_SUCCESS,
        payload
    }
};

export const editItemSuccess = ( payload ) => {
    return {
        type : EDIT_ITEM_SUCCESS,
        payload
    }
};

export const removeItemSuccess = ( payload ) => {
    return {
        type : REMOVE_ITEM_SUCCESS,
        payload
    }
};

