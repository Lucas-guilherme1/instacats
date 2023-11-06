const express = require('express');
const UsersControllers = require('../controllers/UsersControllers');

const router = express.Router();

router.get('/singUp', UsersControllers.singUp);
router.post('/login', UsersControllers.registerUser)

module.exports = router;