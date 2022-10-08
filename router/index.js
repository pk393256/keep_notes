const express = require('express');
const { createUser, getAllUser } = require('../handler/user');
const app = express();
const router = express.Router();

router.post('/user',createUser);
router.get('/user',getAllUser);

module.exports = router;
