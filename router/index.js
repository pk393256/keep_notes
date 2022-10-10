const express = require('express');
const { login } = require('../handler/login');
const { createUser, getAllUser } = require('../handler/user');
const app = express();
const router = express.Router();

router.post('/user',createUser);
router.get('/user',getAllUser);
router.post('/login',login)

module.exports = router;
