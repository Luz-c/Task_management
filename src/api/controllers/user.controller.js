const UserService = require('../services/user.service');

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get user by id
const getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// create user
const createUser = async (req, res) => {
    try {
        const data = req.body;
        const userExists = await UserService.getUserByEmail(data.email);
        if (userExists) {
            throw new Error('User already exists');
        }
        const user = await UserService.createUser(data);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// update user
const updateUser = async (req, res) => {
    try {
        const data = req.body;
        const userExists = await UserService.getUserById(req.params.id);
        if (!userExists) {
            throw new Error('User not found');
        }
        const user = await UserService.updateUser(req.params.id, data);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// delete user
const deleteUser = async (req, res) => {
    try {
        const userExists = await UserService.getUserById(req.params.id);
        if (!userExists) {
            throw new Error('User not found');
        }
        const user = await UserService.deleteUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}