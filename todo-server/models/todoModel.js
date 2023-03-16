const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task: {
        type:String,
        required: true
    }
}, { timestamp: true })

module.exports = mongoose.model('Task', todoSchema);