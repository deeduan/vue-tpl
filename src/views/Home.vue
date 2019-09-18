<template>
    <div class="home">
        <div>
            测试一下组件是否可用
        </div>
        <van-button type="primary" round @click="showFade">主要按钮</van-button>
        <transition name="van-slide-up">
            <div v-show="isVisible" class="slide">Slide Up</div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'home',
    data: function () {
        return {
            isVisible: false
        }
    },
    components: {},
    methods: {
        showFade: function () {
            this.isVisible = !this.isVisible;
        }
    }
}
</script>

<style lang="scss" scoped>
    .home{
        padding-top: 100px;
    }

    .slide{
        background-color: orangered;
        color: #fff;
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
    }
</style>
