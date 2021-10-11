<script setup lang="ts">
import { ref } from 'vue';
import mainLayout from './layout/mainLayout.vue'
const height = ref(window.innerHeight + "px")
</script>

<template>
    <div class="container">
        <mainLayout />
    </div>
</template>

<style lang="less">
@import "http://at.alicdn.com/t/font_2809767_mdofqn3sm5.css";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 550px;
    background: url("./assets/images/bg4.jpg");
    background-clip: content-box;
    background-position: center;
    background-origin: revert;
}

html,
body {
    margin: 0;
    padding: 0;
}
.container {
    height: v-bind(height);
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 5px;
    height: auto;
    background-color: #fff;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: inherit;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #b9b9b9;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f0f0f0;
}
</style>
