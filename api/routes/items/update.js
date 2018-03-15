const ToDoModel = require(`${__root}/models`).ToDo;

const update = async (req, res, next) => {
    const _id = req.body._id;
    const newDoc = {...req.body};
    let result = await ToDoModel.updateOne({_id}, newDoc);
    res.send(newDoc);
}

module.exports = update;