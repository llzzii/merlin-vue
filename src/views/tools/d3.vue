<template>
    <div>
        <el-row :gutter="12">
            <el-col :span="16">
                <div id="d3Contaner"></div>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover">Hover</el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue-demi";
import * as d3 from "d3";

onMounted(() => {
    let svg = d3.select('d3Contaner')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500)

    const xScale = d3.scaleLinear().domain([0, 10]).range([0, 500 - 20 * 2]);
})

</script>