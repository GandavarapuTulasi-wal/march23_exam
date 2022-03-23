var express = require('express');
var router = express.Router();
var productControllers = require('../controllers/product');
router.get('/', productControllers.productIndex);
router.get('/details', productControllers.productDetails);
module.exports = router;
