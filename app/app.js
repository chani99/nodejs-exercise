var App = angular.module('nodejsApp', ['ngRoute']);


App.config(function($routeProvider) {
    $routeProvider
        .when('/products', {
            templateUrl: 'products/products.view.html'
        })

    // .otherwise({ redirectTo: 'home' });
});

App.service('appService', function($http) {

    this.getNorthwind = function(tableName, onSuccess, onError) {
        $http({
            url: 'nodejs/api.js',
            method: 'GET',
            params: {
                tableName: tableName
            }
        }).then(onSuccess, onError);
    }
});