
const ToDoModel = require(`${__root}/models`).ToDo;

const create = (req, res, next) => {
    const text = req.body.text;
    const todo = new ToDoModel({ text });
    todo.save();
    res.json(todo);
}

module.exports = create;