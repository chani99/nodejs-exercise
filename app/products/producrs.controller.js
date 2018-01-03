App.controller('products', function($scope, appService) {

    $scope.getProducts = function() {
        appService.getNorthwind('products', onSuccess, onError);
    }

    $scope.addProducts = function() {
        let data ={
            tableName: 'products',
            ProductName: $scope.ProductName,
            QuantityPerUnit: $scope.QuantityPerUnit,
            ReorderLevel: $scope.ReorderLevel,
            SupplierID:  $scope.SupplierID,
            UnitPrice: $scope.UnitPrice,
            UnitsInStock:  $scope.UnitsInStock,
            UnitsOnOrder: $scope.UnitsOnOrder
    
        }
        appService.setNorthwind(data, onSuccess2, onError);
    }
    function onSuccess2(res) {
        $scope.newPro = res.data;
        console.log(res.data);
        
    }
    function onSuccess(res) {
        $scope.data = res.data;
        console.log(res.data);
        
    }

    function onError(res) {
        console.log('error');
        console.log(res);
    }


    // $scope.viewWeather = function() {
    //     weatherService.getDataByCityName($scope.cityName, onSuccess, onError );
    // }

});