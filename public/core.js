angular.module('nodeBlog', [])
.controller('mainController', [ '$scope', '$http', function($scope, $http) {
    $scope.userForm = {};
    $scope.user = {};
    $scope.loggedin = false;
    $scope.isPostFormVisible = false;
    $scope.isPostListVisible = true;

    $scope.postForm = {};

    $http
    .get("/api/user")
    .then(function(response) {
        $scope.user = response.data;
        if ($scope.user.username) $scope.loggedin = true;
    }, function(response) {
        console.log("Error userinfo:" + response.data);
    });

    $http
    .get("/api/posts")
    .then(function(response) {
        $scope.postList = response.data;
    }, function(response) {
        console.log("Error postList(): " + response.data);
    });

    $scope.createUser = function() {
        $http
        .post("/api/user/create", $scope.userForm)
        .then( function(response) {
            console.log("User created: " + response);
            $scope.userForm = {};
            $scope.user = response.data;
        }, function(response) {
            console.log("Error creating user: " + response);
        });
    };

    $scope.loginUser = function() {
        $http
        .post("/api/user/login", $scope.userForm)
        .then( function(response) {
            console.log("Login: " + response.data);
            $scope.user = response.data;
            $scope.userForm = {};
            $scope.loggedin = true;
        }, function(response) {
            console.log("Error login user: " + response.data);
        });
    };

    $scope.logoutUser = function() {
        $http
        .post("/api/user/logout")
        .then( function(response) {
            console.log("Logout");
            $scope.loggedin = false;
        }, function(response) {
            console.log("Error logout user");
        });
    };

    $scope.createPost = function() {
        $http
        .post("/api/post", $scope.postForm)
        .then(function(response) {
            console.log("Post created: " + response.data._id);
            $scope.isPostFormVisible = false;
            $scope.isPostListVisible = true;
            }, function(response) {
            console.log("Error creating post: " + response);
        });
    };

    $scope.addPost = function() {
        $scope.isPostFormVisible = true;
        $scope.isPostListVisible = false;
    };
}]);
