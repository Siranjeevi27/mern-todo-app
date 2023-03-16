const Task = require('../models/todoModel');

exports.getAllTodo = async (req, res) => {
    try {
        const alltask = await Task.find({});
        res.status(200).json({
            status:"success",
            tasks:alltask
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "server error",
            err: err.message
        });
    }
}

exports.addnewTodo = async (req, res) => {
    try {
        const { task } = req.body;
        const newtask = Task({
            task: task
        });
        await newtask.save();
        res.status(200).json({
            status: "success",
            message: "new Task added"
        })
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "server error",
            err: err.message
        });
    }
}


exports.dellTodo = async (req, res) => {
    try {
        await Task.deleteOne({_id:req.params.id});
        res.status(200).json({
            status: "success",
            message: "Task deleted"
        })
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "server error",
            err: err.message
        });
    }
}