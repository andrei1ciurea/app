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

        $scope.imageUpload = function(event){
            var files = event.target.files; //FileList object

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file);
            }
        };


        $scope.Clicka = function () {
            if ($scope.name === '') {
                return;
            }
            $http.get('http://localhost:8080/activity/add?name=\"' + $scope.name + '\"\&details=\"' + $scope.details + "\"").then(function (response) {
                $scope.activities = response.data;
                $scope.name = '';
                $scope.details = '';
                $scope.imageIsLoaded = function(e){
                    $scope.$apply(function() {
                        $scope.activity.image.push(e.target.result);
                    });
                }
            });
        };

    });