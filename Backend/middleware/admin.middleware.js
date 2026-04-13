const adminMiddleware = (req, res, next) => {
  try {
    // check if user role is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        message: 'Access denied. Admin only'
      });
    }

    next(); // allow access

  } catch (error) {
    return res.status(500).json({
      message: 'Error in admin middleware'
    });
  }
};

module.exports = adminMiddleware;