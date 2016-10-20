import React,{PropTypes} from 'react'
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import CompetitionListItem from '../components/CompetitionListItem'
import styles from './CompetitionList.less'

import { connect } from 'dva'

function CompetitionList({location,competition}) {

  let list = competition.competitionList;
  return(
    <Paper className={styles.container} zDepth={0}>
      {list.map((currentValue,index)=>{
        return <CompetitionListItem competitionInfo={currentValue} />
      })}
    </Paper>

  )
}

function mapStateToPeops({competition}) {
  return {competition}
}
export default connect(mapStateToPeops)(CompetitionList);
