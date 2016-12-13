/**
 * 定义001.js依赖其他js的目录
 * 默认的是和require.js在同一个目录中
 */
require.config({
    paths: {
        "jquery": "jquery-1.11.1.min",
    }
});

require(['jquery'], function ($) {
    //在这里实现代码
    console.log($('body'));


});