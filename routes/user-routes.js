const express = require('express');
const { loginUser, postUser } = require('../controllers/user-controller');

const router = express.Router();

router.get('/', loginUser);  
router.post('/', postUser); 

module.exports = router;
