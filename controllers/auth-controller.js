// IMPORTS
const jwt = require('jsonwebtoken');

// * METHODS
// Login
const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ msg: 'No username and/or no password, no entry!'})
    }
    const token = jwt.sign(
        {
            username,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        }
    );

    res.status(200).json({
        msg: 'Please sit pretty as you are logged in!',
        token,
    });
};

// Secret Data
//const secretData = async (req, res) => {
//  res.send('Hush hush imma secret');
// };

// * EXPORTS
module.exports = {
    login,
};