var App = angular.module('nodejsApp', ['ngRoute']);


App.config(function($routeProvider) {
    $routeProvider
        .when('/products', {
            templateUrl: 'products/products.view.html'
        })
        .when('/shippers', {
            templateUrl: 'shippers/shippers.view.html'
        })
    // .otherwise({ redirectTo: 'home' });
});

App.service('appService', function($http) {

    this.getNorthwind = function(tableName, onSuccess, onError) {
        $http({
            url: 'http://localhost:8081',
            method: 'GET',
            params: {
                tableName: tableName
            }
        }).then(onSuccess, onError);
    }


    this.setNorthwind = function(data, onSuccess, onError) {
        $http({
            url: 'http://localhost:8081',
            method: 'POST',
            params: {
                tableName: data.tableName,
                data:data
            }
        }).then(onSuccess, onError);
    }
});