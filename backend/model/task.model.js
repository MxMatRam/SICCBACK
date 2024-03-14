const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: String,
    missionID: String,
    category: String,
    deadline: Date,
});

module.exports = mongoose.model('Task', TaskSchema);