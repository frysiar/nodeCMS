var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');
var post_controller = require('../controllers/postController');
var mail_controller = require('../controllers/mailController');

// GET request for one User details.
router.get('/user', user_controller.user_info);

// POST request for creating User.
router.post('/user/create', user_controller.user_create_post);

// POST request for login User.
router.post('/user/login', user_controller.user_login_post);

// POST request for login User.
router.post('/user/logout', user_controller.user_logout_post);

// GET request for Post details.
router.get('/post/:id', post_controller.post_detail);

// PUT request for update Post.
router.put('/post/:id', post_controller.post_update);

// DELETE request for delete Post.
router.delete('/post/:id', post_controller.post_delete);

// POST request for creating Post.
router.post('/post', post_controller.post_create);

// GET request for list of all Posts.
router.get('/posts', post_controller.post_list);

// POST request for csending Email.
router.post('/mail', mail_controller.mail_send);

module.exports = router;