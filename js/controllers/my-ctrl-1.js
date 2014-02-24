define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ['$scope',function ($scope) {
        $scope.first_name = 'Yi';
        $scope.last_name = 'FU';
    }]);
});
