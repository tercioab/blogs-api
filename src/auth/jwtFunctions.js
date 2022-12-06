const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seupassword';

const jwtConfig = { algorithm: 'HS256', expiresIn: '15min' };

const createToken = (userWithoutPassword) => {
    const token = jwt
        .sign({ data: userWithoutPassword }, secret, jwtConfig);
    return token;
};

const verifyToken = (authorization) => {
    try {
        const payload = jwt.verify(authorization, secret);
    return payload;
    } catch (e) {
        console.log(e.message);
}
};
module.exports = {
    createToken,
    verifyToken,
};