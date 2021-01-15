var User = require('../models/user');
var hash = require('pbkdf2-password')();

// Display detail page for a specific User.
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};

// Handle User create on POST.
exports.user_create_post = function(req, res) {
    User.find({name: req.body.name}, function (err, user) {
        if (err) res.send(err);
        if (user.length === 0) {
            hash({password: req.body.password}, function (err, pass, salt, hash) {
                if (err) throw err;
                User.create(
                    {
                        name: req.body.name,
                        salt: salt,
                        hash: hash
                    },
                    function(err, user) {
                        if (err) res.send(err);
                    }
                );
            });
        };
        res.json(user);
    });
};

// Display list of all Users.
exports.user_list = function(req, res) {
    User.find(function(err, list_users) {
        if (err) res.send(err);
        res.json(list_users);
    });
};
