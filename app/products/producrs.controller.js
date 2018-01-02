App.controller('products', function($scope, appService) {

    $scope.getProducts = function() {
        appService.getNorthwind('ptoducts', onSuccess, onError);
    }

    // $scope.cityName = 'jerusalem'; // DEBUG ONLY
    // $scope.climateData = {};

    function onSuccess(res) {
        $scope.myproduct = res;
    }

    function onError(res) {
        console.log('error');
        console.log(res);
    }

    // $scope.viewWeather = function() {
    //     weatherService.getDataByCityName($scope.cityName, onSuccess, onError );
    // }

});