import React,{PropTypes} from 'react';

import Avatar from 'material-ui/Avatar';
import Thumb from 'material-ui/svg-icons/action/thumb-up';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ListItem from 'material-ui/List/ListItem';

import ResourceService from '../services/ResourceService';

function ActivityList({activity}) {

  return(
    <Card style={{margin:'10px 0px'}}>
      <CardHeader
        title={activity.author.username}
        subtitle="用户"
        avatar={ResourceService.getAvatarSrc(activity.author.avatar+'-min')}
        titleStyle={{fontSize:'18px'}}
      />
      <CardText style={{fontSize:'16px'}}>
        {activity.content}
      </CardText>
      <CardActions>

        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              style={{margin: 5}}
              icon={<Thumb />}
              size={30}
            />
          }
        >
          {activity.stars}
        </ListItem>
      </CardActions>
    </Card>
  );
}

export default ActivityList;
