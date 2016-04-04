myapp.directive("weatherReport",function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/weatherR.html',
        //templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay:  "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
}); 