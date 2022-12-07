const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = { algorithm: 'HS256', expiresIn: '15min' };

const createToken = (userWithoutPassword) => {
    const token = jwt
        .sign({ data: userWithoutPassword }, secret, jwtConfig);
    return token;
};

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const result = jwt.verify(token, secret);
      req.currentUser = result;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  };
  
module.exports = {
    createToken,
    verifyToken,
};