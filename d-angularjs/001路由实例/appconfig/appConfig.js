/**
 * 这个页面将mainApp改为引入页的的ng-app,
 * 其他地方如无其他需要可不更改，或根据需要更改
 * @type {module}
 */
var app = angular.module('mainApp', ["ui.router", "oc.lazyLoad"]);

app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
    function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
    }]);

app.config(function ($httpProvider) {

    $httpProvider.defaults.transformRequest = function (obj) {
        var str = [];
        for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    };

    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8'
    }

});

app.constant('Modules_Config', [
    {
        name: 'treeControl',
        serie: true,
        files: []
    }
]);

app.config(["$ocLazyLoadProvider", "Modules_Config", routeFn]);
function routeFn($ocLazyLoadProvider, Modules_Config) {
    $ocLazyLoadProvider.config({
        debug: false,
        events: false,
        modules: Modules_Config
    });
};