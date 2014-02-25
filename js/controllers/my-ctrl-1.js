define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ['$scope','Teams',function ($scope, Teams) {
        Teams.query(function(response){
            $scope.total_teams = response.length;
        });
    }]);
});
// TODO add unit test to controller