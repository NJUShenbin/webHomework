import React,{PropTypes}from 'react';
import { connect } from 'dva';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper'

import ResourceService from '../services/ResourceService';

import WatchingStyle from './WatchingList.less';

function WatchedList({watching}) {
  let title = "已关注的用户";

  const users = watching.watchingUsers;

  if(users==null || users==0){
    title = "还没有关注用户";
  }

  const userListItem = users.map( (user) =>
    (<ListItem
      key = {user.username}
      primaryText={user.username}
      leftAvatar={<Avatar src={ResourceService.getAvatarSrc(user.avatar+"-min")} />}
    />)
  );

  return (
    <Paper>
      <p className={WatchingStyle.title}>
        {title}
      </p>
      <List>
        {userListItem}
      </List>
    </Paper>
  )

}

function mapStateToProps({watching}) {
  return {watching}
}

export default connect(mapStateToProps)(WatchedList);
