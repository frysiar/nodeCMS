var User = require('../models/user');
var hash = require('pbkdf2-password')();


// Display detail page for a specific User.
exports.user_info = function(req, res) {
    if (req.session.userid) res.json({ "username": req.session.username });
    else res.json({});
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

// Handle User login on POST.
exports.user_login_post = function(req, res) {
    User.findOne({name: req.body.name}, function (err, user) {
        if (err) res.send(err);
        if (user) {
            hash({ password: req.body.password, salt: user.salt }, function (err, pass, salt, hash) {
                if (err) res.send(err);
                if (hash === user.hash) {
                    req.session.userid = user._id;
                    req.session.username = user.name;
                    res.json({ name: user.name });
                }
                else {
                    res.send('Invalid password!');
                }
            }); 
        }
    });
};

// Handle User logout on POST.
exports.user_logout_post = function(req, res) {
    req.session.destroy(function(){
        res.send('User logged out successfully');
    });
};
