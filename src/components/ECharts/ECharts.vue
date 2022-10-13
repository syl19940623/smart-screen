<template>
  <div :id="id" :style="{'width': width + 'px', 'height': height + 'px'}"></div>
</template>

<script>
  import * as echarts from 'echarts';

  export default {
    name: "ECharts",
    props: {
      id: String,
      type: String,
      width: Number,
      height: Number,
      color: Array
    },
    data() {
      return {
        eCharts: null,
        option: {}
      }
    },
    watch: {
      width(newVal, oldVal) {
        this.eCharts.resize({
          width: newVal
        })
      },
      height(newVal, oldVal) {
        this.eCharts.resize({
          height: newVal
        })
      },
      color(newVal, oldVal) {
        this.option.color = newVal
        this.eCharts.setOption(this.option);
      }
    },
    mounted() {
      this.eCharts = echarts.init(document.getElementById(this.id));
      switch (this.type) {
        case 'basicLineChart':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            xAxis: {
              type: 'category'
            },
            yAxis: {
              type: 'value'
            },
            dataset: {
              source: [
                ['week'],
                ['周一', 43.3],
                ['周二', 83.1],
                ['周三', 79.4],
                ['周四', 38.5],
                ['周五', 42.6],
                ['周六', 95.8],
                ['周日', 112.4]
              ]
            },
            series: [
              { type: 'line' }
            ]
          };
          break;
        case 'smoothedLine':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            xAxis: {
              type: 'category'
            },
            yAxis: {
              type: 'value'
            },
            dataset: {
              source: [
                ['week', '销售额', '净利润'],
                ['周一', 820, 300],
                ['周二', 932, 100],
                ['周三', 901, 57],
                ['周四', 934, 262],
                ['周五', 1290, 577],
                ['周六', 1330, 1098],
                ['周日', 1320, 975]
              ]
            },
            series: [
              {
                type: 'line',
                smooth: true
              },
              {
                type: 'line'
              }
            ]
          };
          break;
        case 'basicAreaChart':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false
            },
            yAxis: {
              type: 'value'
            },
            dataset: {
              source: [
                ['week', '销售额'],
                ['周一', 820],
                ['周二', 932],
                ['周三', 901],
                ['周四', 934],
                ['周五', 1290],
                ['周六', 1330],
                ['周日', 1320]
              ]
            },
            series: [
              {
                type: 'line',
                areaStyle: {}
              }
            ]
          };
          break;
        case 'stackedLineChart':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            legend: {
              data: ['Email', 'Video', 'Direct']
            },
            xAxis: {
              type: 'category',
              boundaryGap: false
            },
            yAxis: {
              type: 'value'
            },
            dataset: {
              source: [
                ['week', 'Email', 'Video', 'Direct'],
                ['周一', 120, 180, 420],
                ['周二', 132, 232, 332],
                ['周三', 101, 201, 301],
                ['周四', 134, 154, 334],
                ['周五', 90, 190, 390],
                ['周六', 230, 330, 380],
                ['周日', 210, 410, 520]
              ]
            },
            series: [
              {
                type: 'line'
              },
              {
                type: 'line'
              },
              {
                type: 'line'
              }
            ]
          };
          break;
        case 'stackedAreaChart':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['Email', 'Video', 'Direct']
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            dataset: {
              source: [
                ['week', 'Email', 'Video', 'Direct'],
                ['周一', 120, 180, 420],
                ['周二', 132, 232, 332],
                ['周三', 101, 201, 301],
                ['周四', 134, 154, 334],
                ['周五', 90, 190, 390],
                ['周六', 230, 330, 380],
                ['周日', 210, 410, 520]
              ]
            },
            series: [
              {
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                }
              },
              {
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                }
              },
              {
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                }
              }
            ]
          };
          break;
        case 'basicBar':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            xAxis: {
              type: 'category'
            },
            yAxis: {
              type: 'value'
            },
            dataset: {
              source: [
                ['week', '销售额'],
                ['周一', 120],
                ['周二', 132],
                ['周三', 101],
                ['周四', 134],
                ['周五', 90],
                ['周六', 230],
                ['周日', 210]
              ]
            },
            series: [
              {
                type: 'bar'
              }
            ]
          };
          break;
        case 'simpleExampleOfDataset':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            xAxis: {
              type: 'category'
            },
            yAxis: {
              type: 'value'
            },
            dataset: {
              source: [
                ['week', '产出', '收入'],
                ['周一', 120, 71],
                ['周二', 200, 120],
                ['周三', 150, 230],
                ['周四', 80, 190],
                ['周五', 70, 80],
                ['周六', 110, 30],
                ['周日', 130, 110]
              ]
            },
            series: [
              {
                type: 'bar'
              },
              {
                type: 'bar'
              }
            ]
          };
          break;
        case 'stackedHorizontalBar':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            legend: {
              data: ['Email', 'Video', 'Direct']
            },
            xAxis: {
              type: 'category'
            },
            yAxis: {
              type: 'value'
            },
            dataset: {
              source: [
                ['week', 'Email', 'Video', 'Direct'],
                ['周一', 120, 180, 420],
                ['周二', 132, 232, 332],
                ['周三', 101, 201, 301],
                ['周四', 134, 154, 334],
                ['周五', 90, 190, 390],
                ['周六', 230, 330, 380],
                ['周日', 210, 410, 520]
              ]
            },
            series: [
              {
                name: 'Email',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                }
              },
              {
                name: 'Video',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                }
              },
              {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                }
              }
            ]
          };
          break;
        case 'barChartWithNegativeValue':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            legend: {
              data: ['Income','Expenses']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  show: false
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            dataset: {
              source: [
                ['week', 'Income', 'Expenses'],
                ['周一', 120, -71],
                ['周二', 200, -120],
                ['周三', 150, -230],
                ['周四', 80, -190],
                ['周五', 70, -80],
                ['周六', 110, -30],
                ['周日', 130, -110]
              ]
            },
            series: [
              {
                type: 'bar',
                stack: 'Total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                }
              },
              {
                type: 'bar',
                stack: 'Total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                }
              }
            ]
          };
          break;
        case 'mixedLineAndBar':
          this.option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '1%',
              containLabel: true
            },
            legend: {
              data: ['Evaporation', 'Precipitation', 'Temperature']
            },
            xAxis: [
              {
                type: 'category'
              }
            ],
            yAxis: [
              {
                type: 'value',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                  formatter: '{value} ml'
                }
              },
              {
                type: 'value',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                  formatter: '{value} °C'
                }
              }
            ],
            dataset: {
              source: [
                ['param', 'Evaporation', 'Precipitation', 'Temperature'],
                ['周一', 10.5, 5.9, 2.0],
                ['周二', 23.2, 11.5, 3.8],
                ['周三', 25.6, 26.4, 5.5],
                ['周四', 76.7, 28.7, 10.2],
                ['周五', 135.6, 70.7, 11.3],
                ['周六', 162.2, 175.6, 18.3],
                ['周日', 171.8, 182.2, 21.6]
              ]
            },
            series: [
              {
                name: 'Evaporation',
                type: 'bar'
              },
              {
                name: 'Precipitation',
                type: 'bar'
              },
              {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 1
              }
            ]
          };
          break;
        case 'basicPie':
          this.option = {
            tooltip: {
              trigger: 'item',
              formatter: '{b}: {c} ({d}%)'
            },
            legend: {
              bottom: 0,
              left: 'center',
              data: ['CityA', 'CityB', 'CityC', 'CityD', 'CityE']
            },
            series: [
              {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                  { value: 335, name: 'CityA' },
                  { value: 434, name: 'CityB' },
                  { value: 735, name: 'CityC' },
                  { value: 510, name: 'CityD' },
                  { value: 154, name: 'CityE' }
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
          break;
        case 'doughnutChartWithRoundedCorner':
          this.option = {
            tooltip: {
              trigger: 'item'
            },
            legend: {
              bottom: '0',
              left: 'center'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ]
              }
            ]
          };
          break;
        case 'nightingaleChart':
          this.option = {
            legend: {
              bottom: '0'
            },
            series: [
              {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [15, 150],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                  borderRadius: 8
                },
                data: [
                  { value: 54, name: 'rose 1' },
                  { value: 38, name: 'rose 2' },
                  { value: 22, name: 'rose 3' },
                  { value: 40, name: 'rose 4' }
                ]
              }
            ]
          };
          break;
        case 'funnelChart':
          this.option = {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c}%'
            },
            legend: {
              data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
              bottom: 0
            },
            series: [
              {
                name: 'Funnel',
                type: 'funnel',
                left: '10%',
                top: 60,
                bottom: 60,
                width: '80%',
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                  show: true,
                  position: 'inside'
                },
                labelLine: {
                  length: 10,
                  lineStyle: {
                    width: 1,
                    type: 'solid'
                  }
                },
                emphasis: {
                  label: {
                    fontSize: 20
                  }
                },
                data: [
                  { value: 60, name: 'Visit' },
                  { value: 40, name: 'Inquiry' },
                  { value: 20, name: 'Order' },
                  { value: 80, name: 'Click' },
                  { value: 100, name: 'Show' }
                ]
              }
            ]
          };
          break;
        case 'gaugeBasicChart':
          this.option = {
            tooltip: {
              formatter: '{a} <br/>{b} : {c}%'
            },
            series: [
              {
                name: 'Pressure',
                type: 'gauge',
                detail: {
                  formatter: '{value}'
                },
                data: [
                  {
                    value: 30,
                    name: 'SCORE'
                  }
                ]
              }
            ]
          };
          break;
        case 'stageGauge':
          this.option = {
            series: [
              {
                type: 'gauge',
                axisLine: {
                  lineStyle: {
                    width: 30,
                    color: [
                      [0.3, '#67e0e3'],
                      [0.7, '#37a2da'],
                      [1, '#fd666d']
                    ]
                  }
                },
                pointer: {
                  itemStyle: {
                    color: 'auto'
                  }
                },
                axisTick: {
                  distance: -30,
                  length: 8,
                  lineStyle: {
                    color: '#fff',
                    width: 2
                  }
                },
                splitLine: {
                  distance: -30,
                  length: 30,
                  lineStyle: {
                    color: '#fff',
                    width: 4
                  }
                },
                axisLabel: {
                  color: 'auto',
                  distance: 40,
                  fontSize: 20
                },
                detail: {
                  valueAnimation: true,
                  formatter: '{value} km/h',
                  color: 'auto'
                },
                data: [
                  {
                    value: 70
                  }
                ]
              }
            ]
          };
          break;
        case 'clock':
          this.option = {
            series: [
              {
                name: 'hour',
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                min: 0,
                max: 12,
                splitNumber: 12,
                clockwise: true,
                axisLine: {
                  lineStyle: {
                    width: 5,
                    color: [[1, 'rgba(0,0,0,0.7)']],
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 6
                  }
                },
                splitLine: {
                  lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 3,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2
                  }
                },
                axisLabel: {
                  fontSize: 15,
                  distance: 10,
                  formatter: function (value) {
                    if (value === 0) {
                      return '';
                    }
                    return value + '';
                  }
                },
                anchor: {
                  show: true,
                  icon: 'path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z',
                  showAbove: false,
                  offsetCenter: [0, '-35%'],
                  size: 60,
                  keepAspect: true,
                  itemStyle: {
                    color: '#707177'
                  }
                },
                pointer: {
                  icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                  width: 6,
                  length: '55%',
                  offsetCenter: [0, '8%'],
                  itemStyle: {
                    color: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 8,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                  }
                },
                detail: {
                  show: false
                },
                title: {
                  offsetCenter: [0, '30%']
                },
                data: [
                  {
                    value: 0
                  }
                ]
              },
              {
                name: 'minute',
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                min: 0,
                max: 60,
                clockwise: true,
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false
                },
                pointer: {
                  icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                  width: 4,
                  length: '70%',
                  offsetCenter: [0, '8%'],
                  itemStyle: {
                    color: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 4,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                  }
                },
                anchor: {
                  show: true,
                  size: 10,
                  showAbove: false,
                  itemStyle: {
                    borderWidth: 10,
                    borderColor: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 8,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                  }
                },
                detail: {
                  show: false
                },
                title: {
                  offsetCenter: ['0%', '-40%']
                },
                data: [
                  {
                    value: 0
                  }
                ]
              },
              {
                name: 'second',
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                min: 0,
                max: 60,
                animationEasingUpdate: 'bounceOut',
                clockwise: true,
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false
                },
                pointer: {
                  icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                  width: 2,
                  length: '85%',
                  offsetCenter: [0, '8%'],
                  itemStyle: {
                    color: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 8,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                  }
                },
                anchor: {
                  show: true,
                  size: 15,
                  showAbove: true,
                  itemStyle: {
                    color: '#C0911F',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 8,
                    shadowOffsetX: 2,
                    shadowOffsetY: 4
                  }
                },
                detail: {
                  show: false
                },
                title: {
                  offsetCenter: ['0%', '-40%']
                },
                data: [
                  {
                    value: 0
                  }
                ]
              }
            ]
          };
          setInterval(() => {
            const date = new Date();
            const second = date.getSeconds();
            const minute = date.getMinutes() + second / 60;
            const hour = (date.getHours() % 12) + minute / 60;
            this.option.animationDurationUpdate = 300;
            this.eCharts.setOption({
              series: [
                {
                  name: 'hour',
                  animation: hour !== 0,
                  data: [{ value: hour }]
                },
                {
                  name: 'minute',
                  animation: minute !== 0,
                  data: [{ value: minute }]
                },
                {
                  animation: second !== 0,
                  name: 'second',
                  data: [{ value: second }]
                }
              ]
            })
          }, 1000);
      }
      this.option.color = this.color
      this.eCharts.setOption(this.option);
    }
  }
</script>

<style lang="less" scoped>

</style>