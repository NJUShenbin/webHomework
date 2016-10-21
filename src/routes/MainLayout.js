import React, {PropTypes} from "react"
import { Link } from 'dva/router';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import Flex from 'flexboxgrid'

import getAvatarSrc from '../services/AvatarService'
import mainLayoutStyle from './MainLayout.less'
import {theme as muiTheme} from '../utils/MuiTheme'


function MainLayout({location,children},context) {

  const lableStyle = {fontSize:'20px',color:'white',marginTop:'10px'}
  const navStyle = {
    paddingTop:'4px',
    paddingRight:'15px',
    display:'flex',
    alignItems:'center',
    color:lableStyle.color,
    fontSize:lableStyle.fontSize-2
  };


  //使得上下文可以访问到
  let getChildContext = function () {
    return {muiTheme};
  };

  let competitionStyle = {...lableStyle};
  let activityStyle = {...lableStyle};

  const checkedColor = '#E1F5FE';

  if(location.pathname.startsWith('/competition')){
    competitionStyle.color=checkedColor
  }else if(location.pathname.startsWith('/activity')){
    activityStyle.color=checkedColor
  }


  const navButtons = (
    <div style={navStyle}>
      <FlatButton
        containerElement={<Link to="/competition"/>}
        label="竞赛" labelStyle={competitionStyle} primary={true}/>

      <FlatButton
        containerElement={<Link to="/activity"/>}
        label="动态" labelStyle={activityStyle} style={{marginRight:'10px'}} />

      <Avatar src={getAvatarSrc()}/>
      <FlatButton containerElement={<Link to="/" />}
                  label="Njushenbin"
                  labelStyle={{textTransform:'none',...lableStyle,fontSize:lableStyle.fontSize-2,paddingLeft:'5px'}}>

      </FlatButton>
    </div>

  );

  return(
    <MuiThemeProvider muiTheme={muiTheme}>
      <div >
        <AppBar
          title="扑通"
          iconElementRight={navButtons}
          showMenuIconButton={false}
        />

        <div className={mainLayoutStyle.mainContainer+" row center-xs"}>
          <div className={mainLayoutStyle.notAlignCenter+" col-sm-10 col-lg-8"}>
            {children}
          </div>

        </div>
      </div>


    </MuiThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
};

export default MainLayout
