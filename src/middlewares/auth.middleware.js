const jwt  = require('jsonwebtoken');

const authMiddleware = ( req, res, next ) => {
    let { authorization: token } = req.headers;
    token = token.replace("Bearer ", "");
    console.log(token);
    jwt.verify(token, "shalala shalala", {algorithms: "HS512"},
    (err, decoded) => {
        if (err) {
            res.status(400).json({
                error: "invalid token",
                message: "El token no es valido o ya expiró, envia un token correcto"
            });
        }else {
            console.log(decoded)
            next();
        }
    })
    
};

module.exports = authMiddleware;