/**
 * 核心引用
 *
 * @author duanyou@huishoubao.com.cn
 */
import Vue from 'vue';

import 'lib-flexible';

import 'normalize.css';

/**
 * 自定义icon
 */
// import '../assets/myIcon/vant_my_icon.css';

/**
 * 全局cookie
 */
import './cookie';

/**
 * vant
 */
import '../third/vant/index';

/**
 * 一些过滤函数
 */
import '../utils/filter';

/**
 * 本地存储
 */
import VueStorage from 'vue-ls';
const vueStorageOptions = {
    namespace: 'tokonie__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
};

Vue.use(VueStorage, vueStorageOptions);
