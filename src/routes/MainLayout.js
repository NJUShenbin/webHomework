import React, {PropTypes} from "react"
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import Flex from 'flexboxgrid'
import {teal300 as primary1Color,
        teal500 as primary2Color,
        lightGreen500 as accent1Color,
        }from 'material-ui/styles/colors';

import getAvatarSrc from '../services/AvatarService'
import mainLayoutStyle from './MainLayout.less'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color,
    primary2Color
  },
  fontFamily: ["Microsoft YaHei UI",
    "Microsoft Yahei",
    "PingFang SC",
    "Lantinghei SC",
    "Hiragino Sans GB",
    "WenQuanYi Micro Hei",
    "WenQuanYi Zen Hei",
    "Noto Sans CJK SC",
    "Microsoft JhengHei UI",
    "Microsoft JhengHei",
    "PingFang TC",
    "Lantinghei TC",
    "Noto Sans CJK TC",
    "Helvetica Neue",
    "Helvetica",
  ]
});

function MainLayout({location,children}) {

  const lableStyle = {fontSize:'20px',color:'white',marginTop:'10px'}
  const navStyle = {
    paddingTop:'4px',
    paddingRight:'15px',
    display:'flex',
    alignItems:'center',
    color:lableStyle.color,
    fontSize:lableStyle.fontSize-2
  }

  //使得上下文可以访问到
  let getChildContext = function () {
    return {muiTheme};
  }

  const navButtons = (
    <div style={navStyle}>
      <FlatButton label="竞赛" labelStyle={lableStyle}></FlatButton>
      <FlatButton label="动态" labelStyle={lableStyle} style={{paddingRight:'10px'}}></FlatButton>

      <Avatar src={getAvatarSrc()}/>
      <FlatButton label="Njushenbin"
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
        />
        <div className={mainLayoutStyle.mainContainer+" row center-xs"}>
          <div className="col-sm-10 col-lg-8">
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
