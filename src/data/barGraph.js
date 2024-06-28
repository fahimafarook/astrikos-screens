export const barGraph = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr'],
      axisLabel: {
        color: '#d9d9d9'
      }
    },
    yAxis: {
      axisLabel: {
        color: '#d9d9d9'
      }
    },
    legend: {
      orient: 'vertical',
      right: 4,
      data: ['Jan', 'Feb', 'Mar', 'Apr'],
     
    },
    grid: {
      left: '3%',
      right: '10%',
      bottom: '10%', 
      top: '5%',
      containLabel: true
    },
    animationDurationUpdate: 500,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' // Show a shadow as the axis pointer
      },
      formatter: function (params) {
        let result = '';
        params.forEach(function (item) {
          result += item.marker + ' ' + item.seriesName + ' in ' + item.name + ': ' + item.value + '<br/>';
        });
        return result;
      }
    },
    series: [
      {
        name: 'Sales',
        type: 'bar',
        data: [
          {
            value: 5,
            itemStyle: {
              color: '#1689CA', // Green
            },
          },
          {
            value: 2,
            itemStyle: {
              color: '#1F909C', // Red
            },
          },
          {
            value: 4,
            itemStyle: {
              color: '#619373', // Blue
            },
          },
          {
            value: 4,
            itemStyle: {
              color: '#7E709E', // Green
            },
          },
        ],
      },
    ],
  };