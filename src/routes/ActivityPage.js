import React,{PropTypes} from 'react'
import { Link } from 'dva/router';
import { connect } from 'dva';
import Paper from 'material-ui/Paper'
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Thumb from 'material-ui/svg-icons/action/thumb-up';

import getAvatarSrc from '../services/AvatarService'

function ActivityPage({activity,location,dispatch}) {

  const tabStyle = {
    backgroundColor:'white',
    color : 'black',
    fontSize : '16px'
  };


  return(
    <div>
      <Paper style={{marginTop:'10px',marginBottom:'10px'}}>
        <Tabs>
          <Tab style={tabStyle} label="所有动态" >
          </Tab>
          <Tab
            onActive={
              ()=>{ dispatch({type:'fetchOwn',payload: {activityType:'own'} }) }
            }
            style={tabStyle} label="我的动态" >
          </Tab>
        </Tabs>
      </Paper>

      <Card>
        <CardHeader
          title="NjuShenbin"
          subtitle="2016-10-21"
          avatar={getAvatarSrc()}
          titleStyle={{fontSize:'18px'}}
        />
        <CardText style={{fontSize:'16px'}}>
          这是一条赞美助教美貌的动态
        </CardText>
        <CardActions>
          <FlatButton icon={<Thumb color='#757575'/>} label="点赞" />
        </CardActions>
      </Card>


    </div>
  )
}

function mapStateToProps({ activity }) {
  return { activity }
}


export default connect(mapStateToProps)(ActivityPage);
