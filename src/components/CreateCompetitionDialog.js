import React,{Component,PropTypes} from "react"
import { connect } from 'dva';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import DialogStyle from './CompetitionDialog.less';

class CreateCompetitionDialog extends Component {

  constructor(props) {
    super(props);
    console.log("construct!");
    if(this.props.competition.competitionInfo!=null){
      this.state = this.props.competition.competitionInfo;

    }else{
      this.state = {
        name: null,
        type:null,
        totalPeople : 5,
        joinPeople : 1,
        startDate : '2016-10-10',
        endDate : '2016-10-25',
        score : 10,
      };
    }

    console.log(this.state);

  };


  changeName = (e) => this.setState({name:e.target.value});
  changeType = (event, index, value) => this.setState({type:value});
  changePeople = (e) => this.setState({totalPeople:parseInt(e.target.value)});
  changeScore = (e) => this.setState({score:parseInt(e.target.value)});


  render() {

    const titleMap = {
      'competition/createCompetition' : '创建比赛',
      'competition/editCompetition' : '编辑比赛'
    };

    const dialogType = this.props.competition.dialogType;

    let actions=[

      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={()=>{
          let payload = {...this.state};
          if(this.props.competition.competitionInfo!=null){
            payload = {...this.props.competition.competitionInfo,
              ...payload
            };
          }

          this.props.dispatch({
          type : dialogType,
          payload:payload
        })}}
      />,

      <FlatButton
        label="Cancel"
        onTouchTap={()=>this.props.dispatch({type:'competition/closeDialog'})}
      />,
    ];

    return(
    <Dialog
      title={titleMap[dialogType]}
      modal={false}
      actions={actions}
      open={this.props.competition.dialogOpen}
    >
      <Divider/>

      <div className={DialogStyle.dialog+" row center-lg"}>

        <TextField
          floatingLabelText="比赛名称"
          value={this.state.name}
          onChange={this.changeName}
        />

        <SelectField
          floatingLabelText="比赛类型"
          value={this.state.type}
          onChange={this.changeType}
          style={{textAlign:'left'}}
        >
          <MenuItem value="person" primaryText="单人" />
          <MenuItem value="people" primaryText="组队" />
        </SelectField>
      </div>

      <div className={DialogStyle.dialog+" row center-lg"}>
        <TextField
          value={this.state.totalPeople}
          floatingLabelText="比赛人数"
          type="number"
          onChange={this.changePeople}
        />
        <TextField
          value={this.state.score}
          floatingLabelText="比赛积分"
          type="number"
          onChange={this.changeScore}
        />
      </div>

    </Dialog>
  );

  }

}

function mapStateToProps({competition}) {
  return {competition}
}

export default  connect(mapStateToProps)(CreateCompetitionDialog);
