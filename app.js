const express = require('express');
const app = express();
require('dotenv').config();
const authenticationMiddleware = require('./middleware/auth');

// * CONFIG
const PORT = 5001;
const SERVER_URL = `http://localhost:${PORT}`;
const connectToDB = require('./db/mongoose');

// * MIDDLEWARE
app.use(express.json());
app.use('/api/v1/data', authenticationMiddleware);

// * ROUTES
app.use('/api/v1', require('./routes/user-Login-Route'));

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
