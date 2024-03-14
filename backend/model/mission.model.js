const mongoose = require('mongoose');

const MissionSchema = new mongoose.Schema({
    name: String,
    description: String,
    launchdate: Date,
});

module.exports = mongoose.model('Mission', MissionSchema);