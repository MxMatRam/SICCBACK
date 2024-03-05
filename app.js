const express = require('express');
const app = express();
require('dotenv').config();

// * CONFIG
const PORT = 5001;
const SERVER_URL = `http://localhost:${PORT}`;
const connectToDB = require('./db/mongoose');
// * MIDDLEWARE

// * ROUTES

// TEMP
app.get('/', (req, res) => {
    res.send('HOWDY GLOBETROTTERS!');
});

// * LISTEN
app.listen(PORT, () => {
    console.log(`Server serving at: ${SERVER_URL}`);
});


const start = async () => {
    try {
        await connectToDB(process.env.MONGOOSE_CONNECTION);
    }

    catch (err) {
        console.log(err);
    }
};

start();
