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
      height: Number
    },
    data() {
      return {
        eCharts: null
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
      }
    },
    mounted() {
      let option = {};
      this.eCharts = echarts.init(document.getElementById(this.id));
      switch (this.type) {
        case 'basicLineChart':
          option = {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    fontSize: 12
                  }
                }
              }
            ]
          };
          break;
        case 'smoothedLine':
          option = {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    fontSize: 12
                  }
                },
                smooth: true
              }
            ]
          };
          break;
        case 'basicAreaChart':
          option = {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
              }
            ]
          };
          break;
        case 'stackedLineChart':
          option = {
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
              }
            ]
          };
          break;
        case 'stackedAreaChart':
          option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                label: {
                  show: true,
                  position: 'top'
                },
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
              }
            ]
          };
          break;
        case 'basicBar':
          option = {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
              }
            ]
          };
          break;
        case 'simpleExampleOfDataset':
          option = {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
              },
              {
                data: [71, 120, 230, 190, 80, 30, 110],
                type: 'bar'
              }
            ]
          };
          break;
        case 'stackedHorizontalBar':
          option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
              },
              {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [150, 212, 201, 154, 190, 330, 410]
              },
              {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
              }
            ]
          };
          break;
        case 'barChartWithNegativeValue':
          option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['Income','Expenses']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  show: false
                },
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: 'Income',
                type: 'bar',
                stack: 'Total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [320, 302, 341, 374, 390, 450, 420]
              },
              {
                name: 'Expenses',
                type: 'bar',
                stack: 'Total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [-120, -132, -101, -134, -190, -230, -210]
              }
            ]
          };
          break;
        case 'mixedLineAndBar':
          option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
            },
            legend: {
              data: ['Evaporation', 'Precipitation', 'Temperature']
            },
            xAxis: [
              {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: 'Precipitation',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                  formatter: '{value} ml'
                }
              },
              {
                type: 'value',
                name: 'Temperature',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                  formatter: '{value} °C'
                }
              }
            ],
            series: [
              {
                name: 'Evaporation',
                type: 'bar',
                tooltip: {
                  valueFormatter: function (value) {
                    return value + ' ml';
                  }
                },
                data: [
                  2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ]
              },
              {
                name: 'Precipitation',
                type: 'bar',
                tooltip: {
                  valueFormatter: function (value) {
                    return value + ' ml';
                  }
                },
                data: [
                  2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                ]
              },
              {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                  valueFormatter: function (value) {
                    return value + ' °C';
                  }
                },
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
              }
            ]
          };
          break;
        case 'basicPie':
          option = {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
              bottom: 10,
              left: 'center',
              data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
            },
            series: [
              {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                  { value: 154, name: 'CityE' },
                  { value: 735, name: 'CityC' },
                  { value: 510, name: 'CityD' },
                  { value: 434, name: 'CityB' },
                  { value: 335, name: 'CityA' }
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
          option = {
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: '5%',
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
                  { value: 1048, name: 'Search Engine' },
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
          option = {
            legend: {
              top: 'bottom'
            },
            toolbox: {
              show: true,
              feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
              }
            },
            series: [
              {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                  borderRadius: 8
                },
                data: [
                  { value: 40, name: 'rose 1' },
                  { value: 38, name: 'rose 2' },
                  { value: 32, name: 'rose 3' },
                  { value: 30, name: 'rose 4' },
                  { value: 28, name: 'rose 5' },
                  { value: 26, name: 'rose 6' },
                  { value: 22, name: 'rose 7' },
                  { value: 18, name: 'rose 8' }
                ]
              }
            ]
          };
          break;
        case 'funnelChart':
          option = {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c}%'
            },
            legend: {
              data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
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
          option = {
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
                    value: 50,
                    name: 'SCORE'
                  }
                ]
              }
            ]
          };
          break;
        case 'stageGauge':
          option = {
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
          option = {
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
                    width: 15,
                    color: [[1, 'rgba(0,0,0,0.7)']],
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 15
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
                  fontSize: 50,
                  distance: 25,
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
                  size: 120,
                  keepAspect: true,
                  itemStyle: {
                    color: '#707177'
                  }
                },
                pointer: {
                  icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                  width: 12,
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
                  width: 8,
                  length: '70%',
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
                  size: 20,
                  showAbove: false,
                  itemStyle: {
                    borderWidth: 15,
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
                  width: 4,
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
            option.animationDurationUpdate = 300;
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
      this.eCharts.setOption(option);
    }
  }
</script>

<style lang="less" scoped>

</style>