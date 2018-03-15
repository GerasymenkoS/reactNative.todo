const ToDoModel = require(`${__root}/models`).ToDo;

const deleteF = async (req, res, next) => {
    let _id = req.body._id;
    const result = await ToDoModel.remove({ _id });
    if(!result.result.n) {
        next("Already deleted");
    }
    else {
        res.send(_id);
    }
}


module.exports = deleteF;
