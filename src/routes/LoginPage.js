import React, {PropTypes} from "react"
import { Link } from 'dva/router';
import { connect } from 'dva';

import Paper from 'material-ui/Paper'

function LoginPage({location}){

  return(
    <div className="row center-xs">
        <Paper>aaa</Paper>
    </div>
  )
}

function mapStateToProps({ login }){
  return { login };
}

export default connect(mapStateToProps)(LoginPage);
