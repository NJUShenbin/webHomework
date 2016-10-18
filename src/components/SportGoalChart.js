import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function SportGoalChart({totalDay=7,achieveDay},context) {
  const primary1Color = context.muiTheme.palette.primary1Color

  let option ={
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [
      {
        name:'完成情况',
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
            name:'已完成',
            itemStyle: {
              normal: {
                color: primary1Color
              }
            }
          },
          {value:totalDay-achieveDay,
            name:'未完成',
            itemStyle: {
              normal: {
                color: 'rgb(223,223,223)'
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

SportGoalChart.propTypes={
  totalDay: PropTypes.number,
  achieveDay: PropTypes.number.isRequired
}

SportGoalChart.contextTypes = {muiTheme: React.PropTypes.object};

export default SportGoalChart;
