const router = require('express').Router();
const UserController = require('../controllers/UserController');
const {checkUser} = require('../middlewares/validations/checkUser')

router.post('/registro', checkUser,UserController.register);

module.exports = router;
