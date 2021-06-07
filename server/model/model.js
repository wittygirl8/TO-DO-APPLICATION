const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    item : {
        type : String,
        required: true
    }
})

const Taskdb = mongoose.model('taskdb', schema);

module.exports = Taskdb;