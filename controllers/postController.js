var Post = require('../models/post');

// Display detail page for a specific Post.
exports.post_detail = function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (err) res.send(err);
        else {
            res.json(post);
        }
    });
};

// Handle Post create on POST.
exports.post_create = function(req, res) {
    Post.create(
        {
            title: req.body.title,
            author: req.session.userid,
            content: req.body.content
        },
        function(err, post) {
            if (err) res.send(err);
            res.json(post);
        }
    );
};

// Handle Post update on PUT.
exports.post_update = function(req, res) {
    Post.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            content: req.body.content
        },
        function(err, post) {
        if (err) res.send(err);
        res.json(post);
    });
};

// Handle Post delete on DELETE.
exports.post_delete = function(req, res) {
    Post.findByIdAndDelete(req.params.id, function(err, post) {
        if (err) res.send(err);
        else {
            Post.find().sort({date: 'desc'}).exec(function(err, list_posts) {
                if (err) res.send(err);
                res.json(list_posts);
            });
        }
    });
};

// Display list of all Posts.
exports.post_list = function(req, res) {
    Post.find().sort({date: 'desc'}).exec(function(err, list_posts) {
        if (err) res.send(err);
        res.json(list_posts);
    });
};
