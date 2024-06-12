export const barGraph = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr']
    },
    yAxis: {},
    legend: {
      orient: 'vertical',
      right: 4,
      data: ['Jan', 'Feb', 'Mar', 'Apr'],
    },
    animationDurationUpdate: 500,
    series: [
      {
        name: 'Sales',
        type: 'bar',
        data: [
          {
            value: 5,
            itemStyle: {
              color: '#00FF64', // Green
            },
          },
          {
            value: 2,
            itemStyle: {
              color: '#FF0000', // Red
            },
          },
          {
            value: 4,
            itemStyle: {
              color: '#3E8EEA', // Blue
            },
          },
          {
            value: 4,
            itemStyle: {
              color: '#A6CA3B', // Green
            },
          },
        ],
      },
    ],
  };