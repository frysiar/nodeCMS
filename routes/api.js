var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');

// GET request for one User.
router.get('/user/:id', user_controller.user_detail);

// POST request for creating User.
router.post('/user/create', user_controller.user_create_post);

// GET request for list of all Users.
router.get('/users', user_controller.user_list);

module.exports = router;