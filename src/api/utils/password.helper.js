const bcrypt = require('bcryptjs');


const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

const decryptPassword = (hashedPassword, password) => {
    return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
    hashPassword,
    decryptPassword
};