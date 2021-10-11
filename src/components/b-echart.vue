<template>
    <div>
        <div id="blogBar"></div>
        <div id="blogPie">
            <mindmap v-model="data"></mindmap>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ChartTool } from '@/utils/ChartsTool'
import { onMounted, ref } from 'vue'
import dataCenter from "@/assets/code/summry.json"
import mindmap from 'vue3-mindmap'
import 'vue3-mindmap/dist/style.css'
let eChart = ref(null)
let data = ref([
    {
        "name": "前端", children: [
            {
                "name": "JS", children: [
                    { "name": "TS" },
                    { "name": "RXJS" },
                    { "name": "AXIOS" },
                    { "name": "ECHART" },
                    { "name": "THREE" },

                ]
            },
            {
                "name": "CSS", children: [
                    { "name": "LESS" },
                    { "name": "SASS" },

                ]
            },
            {
                "name": "HTML", children: [
                    { "name": "VUE" },
                    { "name": "ANGULAR" },
                    { "name": "REACT" },

                ]
            },
            {
                "name": "NODE", children: [
                    { "name": "NPM" },
                    { "name": "KOA" },
                    { "name": "HAPI" },
                    { "name": "HOOK" },

                ]
            },
            {
                "name": "WEBPACK", children: [
                    { "name": "NGINX" },
                    { "name": "DOCKER" },
                    { "name": "VITE" },

                ]
            },
        ]
    }
])

const loadBar = () => {
    var xData = [];
    var yData = [];
    dataCenter.filter(e => e.value > 15).map(e => {
        xData.push(e.name);
        yData.push(e.value);
    })
    eChart = new ChartTool("#blogBar").barInit({}, xData, yData)
}
onMounted(() => {
    loadBar()
})
</script>
<style scoped>
#blogBar,
#blogPie {
    width: 100%;
    height: 400px;
}
</style>