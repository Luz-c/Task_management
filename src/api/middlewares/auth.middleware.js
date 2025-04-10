const e = require('express');
const { validateToken } = require('../utils/tocken.helper');

const authMiddleware = async (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Accès refusé' });
    }
    try {
      const decoded = await validateToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Accès refusé' });
    }
  }
  else {
    return res.status(401).json({ message: 'Accès refusé' });
  }
};

module.exports = authMiddleware;