const mongoose = require('mongoose');

const connectToDB = (url) => {
    const dbConnection = mongoose.connect(url);

    if (dbConnection) {
        console.log('Connect Successfully :)');
    }
    return dbConnection;
};

module.exports = connectToDB;