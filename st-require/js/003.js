//配置依赖的文件
require.config({
    //baseurl是需要相对于require.js所在的目录
    baseUrl: '../st-require/js',
    paths: {
        "math": "002-1",
        "info": "002-2",
    }
});
//002js依赖002-1文件和002-2
require(['math', 'info'], function (math, info) {
    console.log('计算结果=' + math.add(2, 3));
    console.log('who=' + info.who);


});