/**
 * Created by jack on 16/12/17.
 */
(function loading(jQuery) {
    //把jkDialog暴露到外层
    var jkDialog = window.jkDialog = {};

    /**
     * 显示带有信息的loading
     */
    jkDialog.showMsgLoadOverlay = function (id, msg) {
        var content = jQuery('' + id + '');
        if (0 === content.find('.loading-out-overlay').length) {
            content.append("<div class='loading-out-overlay'></div>");
            content.find('.loading-out-overlay').append("<div class='loading-inner-overlay'></div>");
            content.find('.loading-inner-overlay').append('<span class="loading-msg-overlay" ">' + msg +
                '</span>');
            // content.append(initOverlay(getOutOverlayStyle(), getInerStlye(), msgStlye(), msg))
        }
    };

    /**
     * 关闭带有信息的loading
     */
    jkDialog.hideMsgLoadOverlay = function (id) {
        var content = jQuery('' + id + '');
        content.children('.loading-out-overlay').remove();
    };


    /**
     * 打开确认对话框
     */
    jkDialog.showConfireOverlay = function (id, msg, callback) {
        var content = jQuery('' + id + '');
        if (0 === content.find('.confire-out-overlay').length) {
            content.append("<div class='confire-out-overlay'></div>");
            content.find('.confire-out-overlay').append("<div class='confire-iner-verlay'></div>");
            content.find('.confire-iner-verlay').append('<span class="confire-jk-noty">提示:</span>')
                .append('<span class="confire-jk-noty-detail">' + msg + '</span>')
                .append('<div class="confire-jk-btn confire-jk-confire-btn">确定</div>')
                .append('<div class="confire-jk-btn confire-jk-cancel-btn">取消</div>');
            setOnclickListener(id, callback);
        }
    };

    /**
     * 关闭确认对话框
     */
    jkDialog.hideConfireOverlay = function (id, msg) {
        var content = jQuery('' + id + '');
        content.children('.confire-out-overlay').remove();
    };

    /**
     * 是否确认对话框的监听按钮，监听是点击了确认还是取消
     * @param id
     * @param callback
     */
    function setOnclickListener(id, callback) {
        jQuery('.confire-jk-confire-btn').click(function () {
            if ('undefined' !== callback && callback instanceof Function) {
                callback(true);
            }
            jkDialog.hideConfireOverlay(id);
        });
        jQuery('.confire-jk-cancel-btn').click(function () {
            if ('undefined' !== callback && callback instanceof Function) {
                callback(false);
            }
            jkDialog.hideConfireOverlay(id);
        });
    }

    /**
     * 显示顶部提示条
     */
    function initToastOverlay() {
        $('.jk-toast').slideDown(1000);
        var id = setInterval(function () {
            $('.jk-toast').slideUp(1000);
            clearInterval(id);
        }, 1500, 1);
    }

    /**
     * 显示顶部提示条
     */
    jkDialog.showToastOverlay = function (msg) {
        var content = jQuery('body');
        if (0 === content.find('.jk-toast').length) {
            content.append('<p class="jk-toast">' + msg + '</p>');
            initToastOverlay();
        } else {
            initToastOverlay();
        }
    };


    /**
     * 显示popup确认框
     */
    jkDialog.showPopupOverlay = function (id, callback) {
        var content = jQuery('body');
        var element = jQuery('' + id + '');
        var abX = element.offset().left;
        var abY = element.offset().top;
        var height = element.height();
        var width = element.width();

        console.log(callback);

        if (0 === content.find('.jk-popup-out-sty').length) {
            content.append('<div class="jk-popup-out-sty"></div>');
            content.find('.jk-popup-out-sty').append('<div class="jk-popup-indicat"></div>');
            content.find('.jk-popup-out-sty').append('<div class="jk-popup-btn"></div>');
            content.find('.jk-popup-btn').append('<div class="jk-popup-btn-confire">确认</div>');
            content.find('.jk-popup-btn').append('<div class="jk-popup-btn-cancel">取消</div>');
            $('.jk-popup-out-sty').css('left', (abX + width / 2) + 'px');
            $('.jk-popup-out-sty').css('top', (abY + height + 10) + 'px');

            $(window).one("scroll", function () {
                jkDialog.hidePopupOverlay();
            });
            setOnPopupOverlayClick(callback);


        }
    };
    /**
     * 设置按钮的监听
     */
    function setOnPopupOverlayClick(callback, scorllId) {
        jQuery('.jk-popup-btn-confire').one('click', function () {
            if ('undefined' !== callback && callback instanceof Function) {
                callback(true);
            }
            jkDialog.hidePopupOverlay();
        });
        jQuery('.jk-popup-btn-cancel').one('click', function () {
            if ('undefined' !== callback && callback instanceof Function) {
                callback(false);
            }
            jkDialog.hidePopupOverlay();
        });
    }

    /**
     * 关闭显示popup确认框
     */
    jkDialog.hidePopupOverlay = function () {
        var content = jQuery('body');
        content.children('.jk-popup-out-sty').remove();
    };

})($);
