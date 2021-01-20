var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');
var post_controller = require('../controllers/postController');

// GET request for one User details.
router.get('/user', user_controller.user_info);

// GET request for one User details.
router.get('/user/:id', user_controller.user_detail);

// POST request for creating User.
router.post('/user/create', user_controller.user_create_post);

// POST request for login User.
router.post('/user/login', user_controller.user_login_post);

// POST request for login User.
router.post('/user/logout', user_controller.user_logout_post);

// GET request for list of all Users.
router.get('/users', user_controller.user_list);

// GET request for Post details.
router.get('/post/:id', post_controller.post_detail);

// POST request for creating Post.
router.post('/post', post_controller.post_create);

module.exports = router;