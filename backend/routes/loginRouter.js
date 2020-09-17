const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({test: 'hello bro!!!!!!'});
});

module.exports = router;
