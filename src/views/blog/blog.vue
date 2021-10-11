<template>
    <el-row :gutter="20" class="blog-home">
        <el-col :span="6" class="left">
            <Avatar></Avatar>
            <summary-list class="sum"></summary-list>
        </el-col>
        <el-col :span="18" class="right">
            <div class="main">
                <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import Avatar from "@/components/avatar.vue";
import summaryList from "@/components/summary-list.vue";
import { onMounted, ref } from "vue";
let height = ref(window.innerHeight - 100 + "px")
let height2 = ref(window.innerHeight - 320 + "px")
const url = "/src/assets/images/banner.png"
onMounted(() => {

})
</script>

<style lang="less"  scoped>
.blog-home {
    margin: 20px 0;
    height: v-bind(height);
    overflow: hidden;
}
.left {
    border-right: 2px solid rgb(88, 240, 42);
    height: 100%;
    text-align: center;
}
.sum {
    height: v-bind(height2);
}
.right {
    height: 100%;
}
.main {
    height: 100%;
    overflow-y: auto;
}
</style>
