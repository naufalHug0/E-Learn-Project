const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(req.headers);
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(401).json({message: 'User is not authorized to the request'})
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
        if (err) return res.status(403).json({message: 'Forbidden: User not allowed to access'})
        req.user = decoded;
        next()
    })
}
