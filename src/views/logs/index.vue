<template>
    <div>
        <el-table :data="logsData" style="width: 100%">
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="内容" />
            <el-table-column prop="createTime" label="时间" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button type="text" size="small" @click.prevent="deleteRow(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                layout="prev, pager, next"
                :total="total"
                v-model:currentPage="currentPage"
                :page-size="pageSize"
            ></el-pagination>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { key } from '@/store';
import { computed, ref, watch } from 'vue'
import { useStore } from "vuex";
const store = useStore(key);
let currentPage = ref(1)
let pageSize = ref(5)
let total = ref(0)

let logsData = computed(() => {
    total.value = store.state.logs.LogsData.length
    if (store.state.logs.LogsData && store.state.logs.LogsData.length > 0) {
        return store.state.logs.LogsData.slice((currentPage.value - 1) * pageSize.value, (currentPage.value - 1) * pageSize.value + pageSize.value)
    }
    return []
})

const deleteRow = (row) => {
    console.log(row)
    store.commit("logs/removeLog", row)
}

</script>

<style lang="less" scoped>
::v-deep .el-table {
    background-color: transparent;
    color: #fff;
    th.el-table__cell,
    tr,
    thead {
        background-color: transparent;
        color: #fff;
    }
    .el-table__body tr.hover-row.current-row > td.el-table__cell,
    .el-table__body
        tr.hover-row.el-table__row--striped.current-row
        > td.el-table__cell,
    .el-table__body tr.hover-row.el-table__row--striped > td.el-table__cell,
    .el-table__body tr.hover-row > td.el-table__cell {
        background-color: #626262;
    }
}
</style>