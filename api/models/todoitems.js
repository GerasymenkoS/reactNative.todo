const mongoose = require('mongoose');

const ToDoItemsSchema = mongoose.Schema({
    text : String
})

const ToDoItemModel = mongoose.model('ToDoItems', ToDoItemsSchema);

module.exports = ToDoItemModel;