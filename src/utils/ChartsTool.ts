import * as echarts from 'echarts'
import 'echarts-wordcloud'
export class ChartTool {
  chartDom
  echart
  constructor(id) {
    this.chartDom = document.querySelector(id)
    this.echart = echarts.init(this.chartDom)
    
  }
  init(options){
    this.echart.setOption(options)
  }
  barInit(options,xData?,yData?){

    
    let option = {
        backgroundColor: 'transparent',
        grid: {
            left: 100,
            bottom: 100
        },
        xAxis: {
            data: xData,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: '#fff',
                    fontSize: 20,
                margin: 20, //刻度标签与轴线之间的距离。
            },
    
        },
        yAxis: {
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 20,
            }
        },
        series: [
            // 底部的光晕
            {
                name: '',
                type: 'pictorialBar',
                tooltip: {
                    show: false
                },
                symbolSize: [90, 40],
                symbolOffset: [0, 20],
                z: 10,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderColor: '#26B2E8',
                        borderType: 'solid',
                        borderWidth: 4
                    }
                },
                data: yData
            },
            {
                name: '',
                type: 'pictorialBar',
                tooltip: {
                    show: false
                },
                symbolSize: [70, 30],
                symbolOffset: [0, 15],
                z: 10,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderColor: '#2EA9E5',
                        borderType: 'solid',
                        borderWidth: 3
                    }
                },
                data: yData
            },
            //数据低下的圆片
            {
                name: "",
                type: "pictorialBar",
                symbolSize: [45, 25],
                symbolOffset: [0, 10],
                z: 12,
                itemStyle: {
                    opacity: 1,
                    color: function(params) {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#25B2E0' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#25B2E0' // 100% 处的颜色
                        }], false)
                    }
                },
                data: [1, 1, 1, 1, 1, 1]
            },
            //数据的柱状图
            {
                name: '',
                type: 'bar',
                barWidth: 45,
                barGap: '-100%',
                itemStyle: { //lenged文本
                    opacity: 1, //这个是 透明度
                    color: function(params) {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#33ADE0' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#33ADE0' // 100% 处的颜色
                        }], false)
                    }
                },
    
                data: yData
            },
            //替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
            {
                type: 'bar',
                barWidth: 45,
                barGap: '-100%',
                stack: '',
                itemStyle: {
                    color: 'transparent'
                },
                data: yData
            },
            //数据顶部的样式
            {
                name: "",
                type: "pictorialBar",
                symbolSize: [45, 25],
                symbolOffset: [0, -10],
                z: 12,
                itemStyle: {
                    opacity: 1,
                    color: function(params) {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#0D487E' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#229AD2' // 100% 处的颜色
                        }], false)
                    }
                },
                symbolPosition: "end",
                data: yData
            },
    
            //阴影的顶部
            {
                name: "", //头部
                type: "pictorialBar",
                symbolSize: [45, 25],
                symbolOffset: [0, -10],
                z: 12,
                symbolPosition: "end",
                itemStyle: {
                    color: '#0B2869',
                    opacity: 1,
                },
            },
            //后面的背景
            {
                name: '2019',
                type: 'bar',
                barWidth: 45,
                barGap: '-100%',
                z: 0,
                itemStyle: {
                    color: '#0B2869',
                    opacity: .7,
                },
    
            }
    
    
        ]
    };
    option=Object.assign(option,options)
    this.echart.setOption(option)

  }
}
