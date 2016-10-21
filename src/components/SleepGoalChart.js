import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function SleepGoalChart({totalDay=7,achieveDay}) {

  let option ={
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [
      {
        name:'睡眠情况',
        type:'pie',
        radius: ['50%', '70%'],
        height:200,
        left:10,
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          {value:achieveDay,
            name:'睡眠充足',
            itemStyle: {
              normal: {
                color: '#FFB74D'
              }
            }
          },
          {value:totalDay-achieveDay,
            name:'睡眠不足',
            itemStyle: {
              normal: {
                color: '#8D6E63'
              }
            }
          },
        ]
      }
    ]
  };
  return (
    <ReactEcharts
      style={{height:'150px'}}
      option={option}
    />
  );
}

SleepGoalChart.propTypes={
  totalDay: PropTypes.number,
  achieveDay: PropTypes.number.isRequired
}


export default SleepGoalChart;
