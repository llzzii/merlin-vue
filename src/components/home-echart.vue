<template>
    <div>
        <div id="chart" class="chart"></div>
    </div>
</template>
<script lang="ts" setup>
import { ChartTool } from '@/utils/ChartsTool'
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import dataCenter from "@/assets/code/summry.json"
let eChart = ref(null)

const loadChart = () => {
    //必须是全黑背景，echarts-wordcloud按背景渲染必须是黑色背景图
    let symbolUrl = '/src/assets/images/jineng.png'
    const colorList = ['#3a96f5', '#5faaf7', '#78bafe', '#1563f2', '#add2f8', '#e24bf4', '#1acaff', '#ffde00', '#89fda5']


    let maskImage = new Image()
    // maskImage.src = symbolUrl;
    let option = {
        // backgroundColor: '#0A2E5D',
        tooltip: {
            show: true,
        },
        grid: {
            left: 0,
            bottom: 0,
            top: 0,
            right: 0,
        },
        xAxis: {
            type: 'category',
            show: false,
        },
        yAxis: {
            max: 100,
            show: false,
        },
        series: [
            {
                zlevel: -1,
                type: 'pictorialBar',
                name: 'pictorial',
                silent: true,
                symbol: 'image://' + symbolUrl, //按背景渲染云词
                symbolSize: ['45.2%', '90%'],
                symbolPosition: 'center',
                barWidth: '100%',
                barMaxWidth: '100%',
                itemStyle: {
                    normal: {
                        opacity: .2 //自己项目中这里可以设置0全透明，然后可以写一个div背景加载一个美化过的云图片，重合放在这个图表下面。
                    }
                },
                data: [{
                    value: 100
                }]
            },
            {
                type: 'wordCloud',
                sizeRange: [10, 52],
                rotationRange: [-90, 90],
                // maskImage: maskImage,
                textPadding: 2, shape: 'circle',
                gridSize: 10, //用于标记画布可用性的网格大小（以像素为单位）//字距越大，字距越大。
                width: '45%',
                height: '88%',
                left: 'center',
                top: 'center',
                drawOutOfBound: false, layoutAnimation: true,
                // Global text style
                textStyle: {
                    fontFamily: 'sans-serif',
                    // Color can be a callback function or a color string
                    color: function () {
                        // Random color
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    focus: 'self',

                    textStyle: {
                        textShadowBlur: 10,
                        textShadowColor: '#333'
                    }
                },
                data: dataCenter,
            },

        ],
    }

    eChart = echarts.init(document.getElementById('chart'))
    // maskImage.onload = function () {
    //     option.series[0].maskImage
    //     console.log(eChart)
    //     eChart.setOption(option);
    // }
    eChart.setOption(option)
    maskImage.src = symbolUrl
}

onMounted(() => {
    loadChart()
})
</script>
<style scoped>
.chart {
    width: 100%;
    height: 440px;
}
</style>
