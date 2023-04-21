const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
    
    const authHeader = req.headers['authorization']
if(authHeader){    
    const token = req.headers.authorization.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    try {
        var decoded = jwt.verify(token, 'RESTFULAPIs');        
        req.user = decoded.email;        
      } catch(err) {
        throw err
      }
    if (req.user) {        
        next();
    }
}else{
    return res.status(500).json({ message: "Invalid Token"});             
}

};

module.exports = verifyToken;