var Post = require('../models/post');

// Display detail page for a specific User.
exports.post_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Post detail: ' + req.params.id);
};

// Handle User create on POST.
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