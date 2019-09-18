/**
 * 前端做登录验证判断
 *
 * @author duanyou@huishoubao.com.cn
 */

import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

/**
 * 根据key 获得cookie
 *
 * @param key
 * @return {*}
 */
export function userGetCookie (key) {
    return VueCookies.get(key)
}

/**
 * 设置cookie
 *
 * @param key
 * @param value
 * @param expireTimes
 * @return {*}
 */
export function userSetCookie (key, value, expireTimes) {
    return VueCookies.set(key, value, expireTimes)
}

/**
 * 根据key删除cookie
 *
 * @param key
 * @return {*}
 */
export function userRemoveCookie (key) {
    return VueCookies.remove(key)
}

/**
 * 挂载到vue原型
 *
 * @type {function(*=): *}
 */
// Vue.prototype.$userGetCookie = userGetCookie
// Vue.prototype.$userSetCookie = userSetCookie
// Vue.prototype.$userRemoveCookie = userRemoveCookie
