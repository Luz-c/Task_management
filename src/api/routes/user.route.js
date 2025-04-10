const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();
const userValidation = require('../validations/user.validation');
const authMiddleware = require('../middleware/auth.middleware');
const validate = require('../middleware/validate');

router.use(authMiddleware);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', validate(userValidation.createUserValidation), userController.createUser);
router.put('/:id', validate(userValidation.updateUserValidation), userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
