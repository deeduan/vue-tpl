/**
 * 初始化一些操作
 *
 * 当前只初始设置accesstoken
 * @constructor
 */

import Vue from 'vue'
import store from '../store/store'
import {
    ACCESS_TOKEN_IS_LOGIN
} from '../vuex/mutation-types';

export default function Initializer () {
    store.commit(ACCESS_TOKEN_IS_LOGIN, Vue.ls.get(ACCESS_TOKEN_IS_LOGIN))
}
