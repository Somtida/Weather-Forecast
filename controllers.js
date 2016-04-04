myapp.controller("homeController",['$scope','$location','cityService',function($scope,$location,cityService){
    $scope.city=cityService.city;
    $scope.$watch('city',function(){
        cityService.city=$scope.city;
    });
    $scope.submit=function(){
        $location.path("/forecast");
    };
}]);
myapp.controller("forecastController",['$scope','$resource','$routeParams','cityService',function($scope,$resource,$routeParams,cityService){
    $scope.city=cityService.city; 
    
    $scope.days=$routeParams.days || '5';
    
    $scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",{ callback: "JSON_CALLBACK"},{get:{method:"JSONP"}});
    
    $scope.weatherResult=$scope.weatherAPI.get({q:$scope.city, cnt:$scope.days, appid:'c02e0325ef8295b236a3054bb520cb4b'});
    //console.log($scope.weatherResult);
    $scope.convertToF=function(degK){
        return Math.round((1.8*(degK-273))+32);
    }
    
    $scope.convertToDate=function(dt){
        return new Date(dt*1000);
    }
}]);