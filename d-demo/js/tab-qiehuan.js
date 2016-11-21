/**
 * Created by Administrator on 2016/11/21.
 */
$(document).ready(function () {

    //设置tab点击事件
    $(".tab-title li").click(function () {
        console.log("被点击了");
    });

    /**
     * 菜单的点击
     * @param type
     */
    var menuClick = function (type) {
        console.log("type=" + type);
    }
});