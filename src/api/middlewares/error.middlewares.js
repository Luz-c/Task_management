const errorMiddleware = (err, req, res, next) => {
    if (err.status === 500) {
        res.status(500).json({ message: 'Internal server error' });
    }
    next();
}

module.exports = errorMiddleware;