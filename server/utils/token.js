const jwt = require('jsonwebtoken');

exports.genrateToken = (payload,exp) => {
    return jwt.sign(payload,process.env.TOKEN_SECRET,{
        expiresIn : exp
    })
}

exports.verifyToken = (token) => {
    return jwt.verify(token,process.env.TOKEN_SECRET)
}