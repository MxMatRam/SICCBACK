// IMPORTS
const jwt = require('jsonwebtoken');

// MIDDLEWARE FUNCTION
const authenticationMiddleware = async (req, res, next) => {
    // EXTRACT AUTH HEADERS FROM REQUEST
    const authHeader = req.headers.authorization;

    // CHECK FOR EXISTENCE AND BEARER PREFIX
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ msg: 'No token provided'});
    }

    // SEPARATE TOKEN FROM 'BEARER'
    const token = authHeader.split(' ')[1];

    try {
        // VERIFY GIVEN TOKEN
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
        // ATTACH USERNAME TO REQUEST
        req.username = decoded.username;
        next();
    } catch (error) {
        // VERIFICATION FAILED
        return res.status(401).json({ msg: 'oopsie! Not authorized'    });
    }
};

module.exports = authenticationMiddleware;