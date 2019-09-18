/**
 * 鉴权才会用到的文件
 *
 * @author lang duan
 */

import Vue from 'vue';
import router from '../router/index';
import { ACCESS_TOKEN_IS_LOGIN } from "../vuex/mutation-types";

/**
 * 登录态下,这些页面都应该被跳转到首页
 *
 * @type {string[]}
 */
const whiteList = [
    'Login',
    'Register',
    'ForgetPassword',
    'RegisterUserAgreement',
    'ReSetPassword'
];

// 需要鉴权的PATH - 黑名单
const blackList = [
    'PersonalCenter',
    'ExchangeList',
    'CashCoupon',
    'OrderList',
    'OrderDetails',
    'Address',
    'PlaceOrder',
    'SelectSetOrUpdatePwd',
    'SetPwd',
    'UpdatePwd',
    'Setting'
];

router.beforeEach((to, from, next) => {
    // 有登录token
    let routerTo = to.name;

    if (Vue.ls.get(ACCESS_TOKEN_IS_LOGIN)) {
        if (whiteList.includes(routerTo)) {
            next({path:from.path});
        }

        next();
    } else {
        // 未登录，黑名单鉴权,其他放行
        if (blackList.includes(routerTo)) {
            next({path:'/Login'});
        }
        next();
    }
});
