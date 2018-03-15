
const ToDoModel = require('../../models').ToDo;

const read = async (req, res, next) => {
    let data = await ToDoModel.find();
    res.send(data);
}

module.exports = read;