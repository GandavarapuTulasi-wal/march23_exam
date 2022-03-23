var express = require('express');
var hobbyController = require('../controllers/hobbies');
var router = express.Router();
router.get('/', hobbyController.getHobbies);
router.post('/', hobbyController.createHobby);
router.delete('/:_id', hobbyController.deleteHobby);
module.exports = router;
