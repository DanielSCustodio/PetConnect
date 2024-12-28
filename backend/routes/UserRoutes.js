const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.post('/registro', UserController.register);

module.exports = router;
