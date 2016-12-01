import React, {PropTypes} from "react"
import { Link } from 'dva/router';
import { connect } from 'dva';

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import loginStyle from './LoginPage.less';

function LoginPage({location,dispatch}){


  return(
    <div className={loginStyle.loginForm+" row center-xs"}>
        <Paper>
          <p className={loginStyle.title}>
            扑通
          </p>


          <TextField
            hintText="账号"
            onChange={(e)=>{dispatch(
              {
                type:'login/setUsername',
                payload : {
                  username : e.target.value
                }
              }
            )}}
          />
          <br />
          <TextField
            hintText="密码"
            type="password"
            onChange={(e)=>{
              dispatch({
                type:'login/setPassword',
                payload : {
                  password : e.target.value
                }
              })
            }}
          />

          <br />

          <RaisedButton className={loginStyle.loginButton}
                        label="登录"
                        primary={true}
                        onClick={()=>{
                          dispatch({type:'login/login'});
                        }}
          />
        </Paper>
    </div>

  )
}

function mapStateToProps({ login }){
  return { login };
}

export default connect(mapStateToProps)(LoginPage);
