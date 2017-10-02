angular.module('demo', [])
    .controller('appController', function($scope, $http) {
        $http.get('http://localhost:8080/activity/all').
        then(function(response) {
            $scope.activities = response.data;
            console.log($scope.activities)
        });
    });