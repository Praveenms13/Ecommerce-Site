const path = require('path');
const express = require('express');
const rootDir = require('../utils/path.js');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;