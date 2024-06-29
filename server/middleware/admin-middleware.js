const User = require("../models/user");

const adminMiddleware = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized User!" });
    }

    if (!user.isAdmin) {
      return res.status(403).json({ message: "Forbidden: Access Denied" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = adminMiddleware;
