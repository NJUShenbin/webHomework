import React, {PropTypes} from "react"
import { Link } from 'dva/router';
import { connect } from 'dva';

import CompetitionStyle from './CompetitionPage.less'

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// import F  from 'material-ui/'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import AccountBalance from 'material-ui/svg-icons/action/account-balance'
import DirectionsWalk from 'material-ui/svg-icons/maps/directions-walk'
import SocialPerson from 'material-ui/svg-icons/social/person'
import SocialPeople from 'material-ui/svg-icons/social/people'
import Add from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog';

import CreateCompetitionDialog from '../components/CreateCompetitionDialog';

function CompetitionPage({competition,children,dispatch},context) {

  let menuItemList = [
    { primaryText:'竞技场',
      leftIcon : <AccountBalance/>,
      containerElement : <Link to="/competition"/>
    },
  ];

  menuItemList[competition.checked].style =
    {backgroundColor:context.muiTheme.palette.borderColor};

  return(
    <div className="row center-md" style={{textAlign:'left'}}>
      <div>
        <Paper style={{marginTop:'10px'}}>

          <Menu >
            {menuItemList.map((currentValue,index)=>{
              return ( <MenuItem key={index} {...currentValue}/> )
            })}
          </Menu>
        </Paper>

        <RaisedButton label="创建竞赛"
                      labelStyle={{color:'black',fontSize:'16px'}}
                      secondary={true}
                      style={{width:'100%',marginTop:'10px'}}
                      icon={<Add />}
                      onClick={()=>{
                        dispatch({
                          type:'competition/openDialog',
                        });
                      }}
        />

      </div>


      <div className="col-md-9" style={{marginTop:'10px'}}>
          {children}
      </div>

      <CreateCompetitionDialog/>

    </div>
  )
}

CompetitionPage.contextTypes = {muiTheme: React.PropTypes.object};

function mapStateToProps({ competition }){
  return { competition };
}

export default connect(mapStateToProps)(CompetitionPage);
