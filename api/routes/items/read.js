
const ToDoModel = require(`${__root}/models`).ToDo;

const read = async (req, res, next) => {
    let data = await ToDoModel.find();
    res.send(data);
}

module.exports = read;