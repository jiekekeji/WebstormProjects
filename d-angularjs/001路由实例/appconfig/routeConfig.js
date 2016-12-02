/**
 * 路由配置，
 * 配置子页面的html文件和对应的controller以及controller的别名和相应的js文件
 */
app.config(["$stateProvider", "$urlRouterProvider", routeFn]);
function routeFn($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/page1");
    $stateProvider
        .state("page1", {//标识
            url: "/page1",//和index.html配置的路由一致
            templateUrl: "page1.html",//page1.html页面
            controller: "page1Ctrl",//这个需要和page1.js里面的ctroler一致
            controllerAs: "page1Ctrl",//在页面直接通过page1.的方式取变量
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    //该controller的依赖文件
                    console.log("resolve=" + "page1");
                    return $ocLazyLoad.load("page1Ctrl.js");
                }]
            }
        })
        .state("page2", {
            url: "/page2",
            templateUrl: "page2.html",
            controller: "page2Ctrl",
            controllerAs: "page2Ctrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    console.log("resolve=" + "page2");
                    return $ocLazyLoad.load("page2Ctrl.js");
                }]
            }
        })
        .state("page3", {
            url: "/page3",
            templateUrl: "page3.html",
            controller: "page3Ctrl",
            controllerAs: "page3Ctrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("page3Ctrl.js");
                }]
            }
        })
};