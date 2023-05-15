const path = require('path');
const express = require('express');
const rootDir = require('../utils/path.js');
const router = express.Router();
const adminDatas = require("./admin");

router.get('/', (req, res, next) => {
    console.log('shop.js: ', adminDatas.products);
   // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
   const products = adminDatas.products;    
   res.render('shop', {prods: products, pageTitle: 'Shop', path: "/"});
});

module.exports = router;