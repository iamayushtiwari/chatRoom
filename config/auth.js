const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, 'secretKey');
    req.user = decoded;
    console.log(`${err} **********************`);
  } catch (err) {
    
    return res.redirect('back')
  }
  return next();
};

module.exports = verifyToken;