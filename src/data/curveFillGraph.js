export const curveFillGraph = {
  xAxis: {
    type: 'category',
    data: [0,1,2,3,4,5,6,7,8,9],
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 20,
    boundaryGap: [0, '100%'],
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
  },
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgb(255, 70, 131)'
      },
      areaStyle: {
        color: 'rgba(255, 158, 68, 0.4)'
      },
      data: [0,3,6,4,7,13,16,18,15,12]
    }
  ]
};