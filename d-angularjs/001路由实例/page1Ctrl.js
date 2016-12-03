(function () {
    "use strict"

    //和路由配置的controller: "page1Ctrl"一致
    app.controller("page1Ctrl", androidCtrlFn);
    function androidCtrlFn($scope, $http) {
        console.log("page1Ctrl=");
        $scope.reset = function () {
            $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
        $scope.submit = function () {
            console.log("submit master=" + $scope.master.firstName);
        }
    };
}());