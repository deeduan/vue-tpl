/**
 * vue filter一些基本定义
 *
 * vue自定义filter
 */

import Vue from 'vue'

/**
 * 将整数部分逢三一断
 *
 * 注意不支持小数哈, 当前业务后台所设置的价格也木有小数
 */
Vue.filter('NumberFormat', function (value) {
    if (!value) {
        return '0';
    }

    const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return intPartFormat;
});
