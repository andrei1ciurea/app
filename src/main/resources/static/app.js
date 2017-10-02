angular.module('demo', [])
    .controller('actController', function ($scope, $http) {
        $http.get('http://localhost:8080/activity/all').then(function (response) {
            $scope.activities = response.data;
            console.log($scope.activities)
        });
    })
    .controller('btnController', function ($scope, $http) {
        $scope.Clicka = function(){
            $http.get('http://localhost:8080/activity/add?name=\"' + $scope.name + '\"\&details=\"' + $scope.details+"\"").then(function (response) {
                $scope.activities = response.data;
                console.log($scope.activities)
            });
        }
    });