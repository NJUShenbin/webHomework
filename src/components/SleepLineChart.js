import React,{PropTypes}from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

import dateFormat from '../utils/DateFormat'
import Ratio from '../components/ratio/Ratio'

function SleepLineChart({ sleep }) {
  const {deepSleepHourList,
    lightSleepHourList,
    showLoading} = {...sleep};

  const dayNum = deepSleepHourList.length;

  let dateList = [];


  for(let i=0;i<dayNum;i++){
    let date = new Date();
    //i天前的日期
    date.setDate(date.getDate()-i);
    dateList.unshift(dateFormat(date,"MM月dd日"))
  }

  const option = {
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['深睡眠','浅睡眠'],
      bottom : '5%'
    },

    grid: {
      top: '3%',
      left: '3%',
      right: '6%',
      bottom: '15%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : dateList
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'深睡眠',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:deepSleepHourList
      },
      {
        name:'浅睡眠',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:lightSleepHourList
      },
    ],

    color: ['#FBC02D','#FFEE58']
  };

  return(
    <Ratio ratio={0.5}>
      <ReactEcharts option={option} showLoading={showLoading} style={{}}/>
    </Ratio>
  )

}


function mapStateToProps({ sleep }){
  return { sleep };
}

export default connect(mapStateToProps)(SleepLineChart);
