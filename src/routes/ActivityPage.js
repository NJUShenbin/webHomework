import React,{PropTypes,Component} from 'react'

import { Link } from 'dva/router';
import { connect } from 'dva';
import Paper from 'material-ui/Paper'
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Create from 'material-ui/svg-icons/content/create';
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

import ActivityList from '../components/ActivityList';

import ResourceService from '../services/ResourceService';

class ActivityPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      content : '',
    }
  }



  render(){

    let {activity,location,dispatch} = this.props;

    const tabStyle = {
      backgroundColor:'white',
      color : 'black',
      fontSize : '16px'
    };

  return(
    <div>
      <Paper style={{marginTop:'20px',marginBottom:'40px'}}>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              style={{margin: 5}}
              icon={<Create />}
              size={30}
            />
          }
        >
          发布动态
        </ListItem>
        <div className="row">
          <TextField
            style={{
              padding:'0px 30px',
              marginBottom : '20px',
              width : '85%'
            }}
            floatingLabelText="发布动态"
            multiLine={true}
            rows={1}
            value={this.state.content}
            onChange={(e)=>{this.setState({content:e.target.value})}}
          /><br />
        </div>

        <RaisedButton label="发布"
                      primary={true}
                      style={{
                        marginLeft : '86%',
                        marginBottom : '20px',
                      }}
                      onClick = {()=>{
                        dispatch({
                          type : 'activity/addActivity',
                          payload : {
                            content : this.state.content,
                          }
                        });
                        this.setState({content:''});
                      }}
        />
      </Paper>

      {activity.activities.map( oneActivity => {
        return(
          <ActivityList activity={oneActivity} />);
      })}

    </div>
  )
  }


}

function mapStateToProps({ activity }) {
  return { activity }
}


export default connect(mapStateToProps)(ActivityPage);
