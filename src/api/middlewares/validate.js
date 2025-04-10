const validate = (schema) => (req, res, next) => {
    const { error } = validate(req.body, schema);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = validate;