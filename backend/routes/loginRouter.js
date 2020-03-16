const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    res.json({test: 'hello bro!!!!!!'});
});

module.exports = router;
