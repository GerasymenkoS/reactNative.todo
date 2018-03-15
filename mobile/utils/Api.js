import axios from 'axios';
import { apiLinks, currentHost } from '../utils/settings.js';

const apiUrl = apiLinks[currentHost];
const itemsUrl = apiUrl + 'items/';

export const createItem = ( payload, callback ) => {
    const url = itemsUrl + 'create';
    const data = { text: payload };


    axios.post(url, data).then( response => {
        callback(response.data);
    });
}

export const editItem = ( payload, callback ) => {
    const url = itemsUrl + 'update';
    const data = { ...payload };


    axios.post(url, data).then( response => {
        callback(response.data);
    });
}

export const removeItem = ( payload, callback ) => {
    const url = itemsUrl + 'delete';
    const data = { _id : payload };
    
    
    axios.post(url, data).then( response => {
        callback(response.data);
    });
}

export const readItems = callback => {
    const url = itemsUrl + 'read';

    axios.post(url).then( response => {
        callback(response.data);
    });
}
