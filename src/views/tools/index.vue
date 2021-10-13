<template>
    <div>
        <el-row :gutter="12">
            <el-col :span="8">
                <div class="tool-item" @click="jump('d3')">
                    <img src="/src/assets/svg/d3.svg" alt />
                    <span>SVG绘制</span>
                </div>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover">Hover</el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="never">Never</el-card>
            </el-col>
        </el-row>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
<script lang="ts" setup>import { useRoute, useRouter } from "vue-router";

const d3Icon = "/src/assets/svg/d3.svg"
const router = useRouter()
const route = useRoute()

const jump = (name) => {
    router.push({
        name: name,

    })
}
</script>

<style lang="less" scoped>
.tool-item {
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    img {
        width: 60px;
    }
}
</style>