(function () {
    "use strict"

    //和路由配置的controller: "page1Ctrl"一致
    app.controller("page1Ctrl", androidCtrlFn);
    function androidCtrlFn($http) {
        console.log("page1Ctrl");

    };
}());