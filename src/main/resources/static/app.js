angular.module('demo', [])
    .controller('actController', function ($scope, $http) {
        $http.get('http://localhost:8080/activity/all').then(function (response) {
            $scope.activities = response.data;
        });
        $scope.raisePriority=function(activity){
            activity.priority += 1;
        }
    })
    .controller('btnController', function ($scope, $http) {

        $scope.Clicka = function () {
            if ($scope.name === '') {
                return;
            }
            $http.get('http://localhost:8080/activity/add?name=\"' + $scope.name + '\"\&details=\"' + $scope.details + "\"").then(function (response) {
                $scope.activities = response.data;
                $scope.name = '';
                $scope.details = '';
            });
        };

    });