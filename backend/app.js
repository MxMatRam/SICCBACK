const express = require('express');
const app = express();
require('dotenv').config();

// * CONFIG
const PORT = 5001;
const SERVER_URL = `http://localhost:${PORT}`;

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