import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function HealthValueChart({value}) {
  const max = 30
  const min = 12

  const computeRate = function (num) {
    return (num-min)/(max-min);
  }

  const option = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}%"
    },
    // toolbox: {
    //   feature: {
    //     restore: {},
    //     saveAsImage: {}
    //   }
    // },
    series: [
      {
        name: '',
        type: 'gauge',
        min:10,
        max:30,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            color:[[computeRate(18.5), '#00ACC1' ],
              [computeRate(23.9), '#91c7ae'],
              [computeRate(27.9), 'rgb(233,143,111)'],
              [1,'#c23531']],
            width: 10
          }
        },

        splitLine:{
          show: false
        },
        axisLabel:{
          show: false
        },

        axisTick:{
          show : false
        },

        pointer:{

          width:4
        },

        detail: {show:false},
        data: [{value}]
      }
    ]
  };

  return(
    <ReactEcharts style={{height:'150px'}} option={option} />
  )
}

HealthValueChart.propTypes={
  value:PropTypes.number.isRequired
}

export default HealthValueChart;
