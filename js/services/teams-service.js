define(['./module'], function (services) {
    'use strict';

    services.factory('Teams',['$resource',
        function($resource){
            return $resource('data/teams.json',{},{query: {method:'GET', isArray:true}});
    }]);
});
