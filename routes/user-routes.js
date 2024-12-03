const express = require('express');
const { loginUser, postUser } = require('../controllers/user-controller');

const router = express.Router();

router.post('/', loginUser);  
router.post('/', postUser); 

module.exports = router;
