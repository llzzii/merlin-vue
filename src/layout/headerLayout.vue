<script setup lang="ts">
import { key } from '@/store';
import { computed, ref } from 'vue'
import { useStore } from "vuex";
const store = useStore(key);
let activeIndex = ref('1')
let searchValue = computed(() => { return store.state.types.type })
const handleSelect = (key: any, keyPath: any) => {
}
</script>

<template>
    <div class="header">
        <img class="logo" src="../assets/logo.png" alt="merlin" />
        <el-menu class="el-menu" :default-active="activeIndex" mode="horizontal" :router="true">
            <el-menu-item index="/">HOME</el-menu-item>
            <el-menu-item index="/blog">BLOG</el-menu-item>
            <el-menu-item index="/tool">TOOLS</el-menu-item>
            <el-menu-item index="/logs">Logs</el-menu-item>
            <el-menu-item index="5">OTHER</el-menu-item>
        </el-menu>
        <el-input v-model="searchValue" placeholder="搜索" suffix-icon="el-icon-search" />
    </div>
</template>

<style scoped lang="less">
.header {
    display: flex;
    height: 60px;
    align-items: center;
    .logo {
        width: 40px;
        height: 40px;
        padding-right: 20px;
    }
    .el-menu {
        min-width: 600px;
        border-bottom: none;
        background: none;
        .el-menu-item {
            color: #fff;
        }
    }
    .el-input__inner {
        background: none;
    }
}
</style>
