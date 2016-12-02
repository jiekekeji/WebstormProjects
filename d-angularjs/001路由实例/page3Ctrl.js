(function () {
    "use strict"

    //和路由配置的controller: "page2Ctrl"一致
    app.controller("page3Ctrl", androidCtrlFn);
    function androidCtrlFn($http) {
        console.log("page3Ctrl");

    };
}());