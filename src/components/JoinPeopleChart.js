import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function JoinPeopleChart({totalPeople,joinPeople}) {

  let option ={
    tooltip: {
      trigger: 'item',
      formatter: "{b}: {c} "
    },

    series: [
      {
        name:'参加人数',
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
          {value:joinPeople,
            name:'已参加',
            itemStyle: {
              normal: {
                color: 'rgb(111,196,220)'
              }
            }
          },
          {value:totalPeople-joinPeople,
            name:'空缺',
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
      style={{height:'80px'}}
      option={option}
    />
  );
}

JoinPeopleChart.propTypes={
  totalPeople: PropTypes.number.isRequired,
  joinPeople: PropTypes.number.isRequired
};

export default JoinPeopleChart;
