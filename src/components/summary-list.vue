<template>
    <div>
        <ul class="sum-list">
            <li v-for=" (item,index) in data" :key="index">
                <router-link :to="'/blog/list/' + item.name">{{ item.name }} ({{ item.value }})</router-link>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import dataCenter from "@/assets/code/summry.json"
const data = dataCenter.sort((a, b) => { return b.value - a.value })
</script>
<style lang="less" scoped>
.sum-list {
    list-style: none;
    text-align: left;
    padding: 10px 20px;
    max-height: 100%;
    overflow-y: auto;
    li {
        list-style: none;
        line-height: 36px;
        a {
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>