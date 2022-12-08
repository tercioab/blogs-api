const { sign, verify } = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = { algorithm: 'HS256', expiresIn: '10h' };

const createToken = (userWithoutPassword) => sign({ data: userWithoutPassword }, secret, jwtConfig);

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const result = verify(token, secret);
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