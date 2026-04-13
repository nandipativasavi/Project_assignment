const jwt = require('jsonwebtoken');

// secret key (should be in .env in real projects)
const SECRET_KEY = 'mysecretkey';

const authMiddleware = (req, res, next) => {
  try {
    // get Authorization header
    const authHeader = req.headers.authorization;

    // check if header exists
    if (!authHeader) {
      return res.status(401).json({
        message: 'Access denied. No token provided'
      });
    }

    // extract token (handle both formats)
    let token;

    if (authHeader.startsWith('Bearer ')) {
      // format: Bearer token
      token = authHeader.split(' ')[1];
    } else {
      // format: token directly
      token = authHeader;
    }

    // verify token
    const decodedData = jwt.verify(token, SECRET_KEY);

    // attach user data to request
    req.user = decodedData;

    // move to next middleware/route
    next();

  } catch (error) {
    return res.status(401).json({
      message: 'Invalid or expired token'
    });
  }
};

module.exports = authMiddleware;