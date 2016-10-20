import React, {PropTypes} from "react"
import { Link } from 'dva/router';
import { connect } from 'dva';

import CompetitionStyle from './CompetitionPage.less'

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// import F  from 'material-ui/'
import FontIcon from 'material-ui/FontIcon';
import AccountBalance from 'material-ui/svg-icons/action/account-balance'
import DirectionsWalk from 'material-ui/svg-icons/maps/directions-walk'
import SocialPerson from 'material-ui/svg-icons/social/person'
import SocialPeople from 'material-ui/svg-icons/social/people'

function CompetitionPage({competition,children},context) {

  let menuItemList = [
    { primaryText:'竞技场',
      leftIcon : <AccountBalance/>,
      containerElement : <Link to="/competition"/>
    },
    { primaryText:'我的竞赛',
      leftIcon : <DirectionsWalk/>,
      containerElement : <Link to="/competition/mine"/>
    },
    { primaryText:'单人竞赛',
      leftIcon : <SocialPerson/>,
      containerElement : <Link to="/competition/person"/>
    },
    { primaryText:'团队竞赛',
      leftIcon : <SocialPeople/>,
      containerElement : <Link to="/competition/people"/>
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
              return ( <MenuItem {...currentValue}/> )
            })}
          </Menu>
        </Paper>
      </div>


      <div className="col-md-9" style={{marginTop:'10px'}}>
          {children}
      </div>

    </div>
  )
}

CompetitionPage.contextTypes = {muiTheme: React.PropTypes.object};

function mapStateToProps({ competition }){
  return { competition };
}

export default connect(mapStateToProps)(CompetitionPage);
