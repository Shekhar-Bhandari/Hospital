const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user;  // assign the nested user object directly
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};


module.exports = authMiddleware;
