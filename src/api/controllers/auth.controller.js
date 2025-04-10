const AuthService = require('../services/auth.service');
const tokenHelper = require('../utils/tocken.helper');

// login user
const login = async (req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        const user = await AuthService.login(data);
        const token = await tokenHelper.generateToken(user);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// register user
const register = async (req, res) => {
    try {
        const data = req.body;
        const user = await AuthService.register(data);
        console.log(user);
        
        const token = await tokenHelper.generateToken(user);
        res.status(200).json({user});
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

module.exports = { login, register };