export const lineFillGraph = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    color: '#FFFFFF',
    data: ['Current Trends', 'Trends if ignored', 'S!aP advisory actions']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['15/5', '16/5', '17/5', '18/5', '19/5', '20/5', '21/5']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Current Trends',
      type: 'line',
      stack: 'Total',
      color: '#00FF64',
      areaStyle: {
        opacity: 0.4,
        color: '#00FF64',
      },
      data: [20, 30, 10, 20, 10, 30, 10]
    },
    {
      name: 'Trends if ignored',
      type: 'line',
      stack: 'Total',
      color: '#FF0000',
      areaStyle: {
        opacity: 0.4,
        color: '#FF0000',
      },
      data: [20, 20, 10, 10, 20, 30, 30]
    },
    {
      name: 'S!aP advisory actions',
      type: 'line',
      stack: 'Total',
      color: '#3E8EEA',
      areaStyle: {
        opacity: 0.4,
        color: '#3E8EEA',
      },
      data: [10, 30, 10, 40, 30, 10, 10]
    }
  ]
};  