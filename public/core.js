angular.module('nodeBlog', [])
    .controller('userController', function($scope, $http) {
        $scope.userForm = {};
        $scope.user = {};

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
            }, function(response) {
                console.log("Error login user: " + response.data);
            });
        };

        $scope.logoutUser = function() {
            $http
            .post("/api/user/logout")
            .then( function(response) {
                console.log("Logout");
            }, function(response) {
                console.log("Error logout user");
            });
        };
    });