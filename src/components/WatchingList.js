import React,{PropTypes,Component}from 'react';
import { connect } from 'dva';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

import ResourceService from '../services/ResourceService';

import WatchingStyle from './WatchingList.less';

class WatchedList extends Component{

  constructor(props){
    super(props);
    this.state = {
      input : ''
    }
  }


  render(){

    let {watching,dispatch} = this.props;
    let addWatchingSuccess = watching.addWatchingSuccess;

    let title = "已关注的用户";

    const users = watching.watchingUsers;

    if(users==null || users==0){
      title = "还没有关注用户";
    }

    let tip = (<div></div>);

    const tipClose = ()=>{
      dispatch({
        type : 'watching/setState',
        payload : {addWatchingSuccess : null}
      });
    };

    if(addWatchingSuccess!=null){
      if(addWatchingSuccess){
        tip = <Snackbar
          open={true}
          message="添加成功"
          autoHideDuration={1000}
          onRequestClose={tipClose}
        />
      }else{
        tip = <Snackbar
          open={true}
          message="用户不存在"
          autoHideDuration={1000}
          onRequestClose={tipClose}
        />
      }
    }

    const userListItem = users.map( (user) =>
      (<ListItem
        key = {user.username}
        primaryText={user.username}
        leftAvatar={<Avatar src={ResourceService.getAvatarSrc(user.avatar+"-min")} />}
      />)
    );

    return (
      <div>
        <Paper>
          <p className={WatchingStyle.title}>
            {title}
          </p>
          <List>
            {userListItem}
          </List>
        </Paper>

        <Paper className={WatchingStyle.search}>
          <div style={{
            paddingTop:'20px',
            marginBottom:'10px'
          }}>
            <TextField
              value={this.state.input}
              hintText="用户名"
              onChange={(e)=>{ this.setState({input:e.target.value})}}
            />
          </div>


          <RaisedButton label="关注"
                        primary={true}
                        style={{
                          marginBottom:'10px'
                        }}
                        onClick={()=>{
                          dispatch({
                            type:'watching/addWatching',
                            payload : {
                              username : this.state.input
                            }
                          });
                          this.setState({input:''});
                        }}
          />
        </Paper>

        {tip}

      </div>

    );
  }

}

function mapStateToProps({watching}) {
  return {watching};
}

export default connect(mapStateToProps)(WatchedList);
