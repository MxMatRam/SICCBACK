const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema(
    {

    },
);

module.exports = mongoose.model('Mission', missionSchema);
