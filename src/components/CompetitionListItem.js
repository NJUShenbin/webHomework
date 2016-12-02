import React,{PropTypes} from 'react';
import { connect } from 'dva';

import Paper from 'material-ui/Paper';
import {orange200 as personColor} from 'material-ui/styles/colors'
import AccountBalance from 'material-ui/svg-icons/action/account-balance'
import Grade from 'material-ui/svg-icons/action/grade'
import RaisedButton from 'material-ui/RaisedButton';
import DirectionsWalk from 'material-ui/svg-icons/maps/directions-walk'
import SocialPerson from 'material-ui/svg-icons/social/person'
import SocialPeople from 'material-ui/svg-icons/social/people'
import Alarm from 'material-ui/svg-icons/device/access-alarm'

import styles from '../routes/CompetitionList.less'
import {primaryColor as iconColor} from '../utils/MuiTheme'
import JoinPeopleChart from '../components/JoinPeopleChart'

function CompetitionListItem({competitionInfo,dispatch}) {


  let {name,type,totalPeople,joinPeople,startDate,endDate,score,canDelete,id,canJoin}
    = competitionInfo;

  const iconProp = {
      color:'white',
      style:{width:'50px',height:'50px'}
  };
  const iconMap = {
    people: <SocialPeople {...iconProp}/>,
    person: <SocialPerson {...iconProp}/>,
  };

  let joinProps = {secondary:true,label:'加入'};
  if(!canJoin){
    joinProps.disabled = true;
    joinProps.label = '已加入';
  }

  let actionButton = [
    <div key="join" className="row" style={{marginRight:'30px'}}>
      <RaisedButton
        {...joinProps}
        labelStyle={{color:'black'}}
        onClick={() =>{
          dispatch({
            type:'competition/takePartInCompetition',
            payload:{
              id:id,
            }
          });
        }}
         />
    </div>,
  ];

  if(canDelete){
    actionButton.push(<div key="div" className="row" style={{marginRight:'30px'}}>
      <RaisedButton
        labelStyle={{color:'black',width:'30px'}}
        label="删除"
        onClick = {()=>{
          dispatch({
            type:'competition/deleteCompetition',
            payload : {
              id : id
            }
          });
        }}
      />
    </div>);

    actionButton.push(
      <div key="div2" className="row" style={{marginRight:'30px'}}>
        <RaisedButton
                      labelStyle={{color:'black',width:'30px'}}
                      label="修改"
                      onClick = {()=>{
                        dispatch({
                          type:'competition/openDialog',
                          payload : {
                            competitionInfo:competitionInfo,
                            dialogType : 'competition/editCompetition'
                          }
                        });
                      }}
        />
      </div>
    );

  }

  const icon = iconMap[type];

  return(

    <Paper className="row" style={{marginBottom:'10px'}} zDepth={1}>

      <div className={styles.competitionType+" col-xs-2"} style={{backgroundColor:personColor}}>
        <div>
          {icon}
        </div>
      </div>

      <div className="col-xs-10">
        <div className='row around-xs' style={{paddingBottom:'10px'}}>

          <div className='col-xs-6'>
            <h3 style={{marginTop:'20px',fontWeight:'normal'}}>{name}</h3>
            <div className={styles.vCenter+' row'}>
              <div className={styles.vCenter+" col-xs-5"}>
                <Alarm color={iconColor} className={styles.paddingLeft} /> 已开始
              </div>
              <div className={styles.vCenter+" col-xs-5"}>
                <Grade color={iconColor} className={styles.paddingLeft}/> {score}积分
              </div>

            </div>

          </div>

          <div className='col-xs-3' style={{textAlign:'center'}}>
            <JoinPeopleChart totalPeople={totalPeople} joinPeople={joinPeople} />
            {`参与人数${joinPeople}/${totalPeople}`}
          </div>

          <div className={styles.competitionType+' col-xs-10'}>
            {actionButton}
          </div>

        </div>
      </div>

    </Paper>
  )
}

CompetitionListItem.propTypes = {
  competitionInfo : PropTypes.object.isRequired
};



export default connect()(CompetitionListItem);
