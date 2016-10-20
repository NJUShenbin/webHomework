import React, {PropTypes} from "react"
import homePageStyle from './HomePage.less'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider';
import Grade from 'material-ui/svg-icons/action/grade'

import Run from 'material-ui/svg-icons/maps/directions-run'
import Burn from 'material-ui/svg-icons/social/whatshot'
import Flag from 'material-ui/svg-icons/image/assistant-photo'

import {orange200 as RunIconBackground} from 'material-ui/styles/colors'
import {List,ListItem} from 'material-ui/List'

import SportGoalChart from '../components/SportGoalChart'
import SleepGoalChart from '../components/SleepGoalChart'
import HealthValueChart from '../components/HealthValueChart'
import SleepLineChart from '../components/SleepLineChart'
import SportHeatChart from '../components/SportHeatChart'


import getAvatarSrc from '../services/AvatarService'



const avatarStyle = {
  display:'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop:'10px',
  marginBottom:'10px'
};
const iconSize = 100;

function HomePage({children,location}) {
  return(
    <div className={homePageStyle.homePage+" row"}>
      <div className="col-lg-4 col-xs-12">
        <Paper className={homePageStyle.paper}>
          <Avatar style={avatarStyle} src={getAvatarSrc()} size={200}/>
          <span className={homePageStyle.username}> Njushenbin </span>
          <Divider style={{marginTop:'10px'}}/>
          <List className={homePageStyle.alignLeft}>
            <ListItem primaryText="2016年10月18日" secondaryText="加入扑通" leftIcon={<Grade/>} />
            <ListItem primaryText="南京" secondaryText="所在地" leftIcon={<Grade />} />
          </List>
        </Paper>
      </div>

      <div className={homePageStyle.alignLeft+" col-lg-8 col-xs-12"} style={{marginTop:'10px'}}>
        <Paper className={homePageStyle.paper}>
          <h1>自从加入扑通以来</h1>
          <div className="row around-xs" style={{textAlign:'center'}}>
            <div className="col-lg-3" >
              <Avatar style={avatarStyle} backgroundColor={RunIconBackground} icon={<Run/>} size={iconSize}/>
              <p>已运动10天</p>
            </div>
            <div className="col-lg-3">
              <Avatar style={avatarStyle} backgroundColor={RunIconBackground} icon={<Burn/>} size={iconSize}/>
              <p>共燃烧1000大卡</p>
            </div>
            <div className="col-lg-3">
              <Avatar style={avatarStyle} backgroundColor={RunIconBackground} icon={<Flag/>} size={iconSize}/>
              <p>累计里程10公里</p>
            </div>
          </div>
        </Paper>

        <Paper className={homePageStyle.paper}>
          <h1>你本周的健康情况</h1>
          <div className="row around-xs" style={{textAlign:'center'}}>
            <div className="col-lg-3  col-xs-12" >
              <SportGoalChart achieveDay={5}/>
              <p className={homePageStyle.chartLabel}>运动目标完成5天</p>
            </div>
            <div className="col-lg-3  col-xs-12" >
              <SleepGoalChart achieveDay={6}/>
              <p className={homePageStyle.chartLabel}>充足睡眠6天</p>
            </div>
            <div className="col-lg-3 col-xs-12" >
              <HealthValueChart value={20.8}/>
              <p className={homePageStyle.chartLabel}>BMI指数健康</p>
            </div>

          </div>
        </Paper>

        <Paper className={homePageStyle.paper}>
          <h1>你的睡眠情况</h1>
          <SleepLineChart/>
        </Paper>

        <Paper className={homePageStyle.paper}>
          <h1>你的运动强度</h1>
          <SportHeatChart/>
        </Paper>

      </div>
    </div>
  );
}

export default HomePage;
