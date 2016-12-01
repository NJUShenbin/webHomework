import delay from '../utils/delay'
import merge from '../utils/MergeStateAction';
import update from 'react-addons-update';

export default {

  namespace: 'competition',

  state: {
    checked:0,
    competitionList : (function () {
      let competitionList=[];
      for (let i=0;i<15;i++){
        competitionList.push({
          id:i,
          name:'南大马拉松竞赛',
          type:'people',
          totalPeople : 6,
          joinPeople : 4,
          startDate : '2016-10-10',
          endDate : '2016-10-25',
          score : 10,
          canDelete : false
        });
      }
      return competitionList;
    })(),

    myCompetitionList : [],
    dialogOpen : false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {

        let pathMap={};
        pathMap['/competition'] = {
          checked:0,
          otherAction : {
            type : 'fetchRemote'
          }
        };
        pathMap['/competition/mine'] = {
          checked:1,
          otherAction:{
            type : 'fetchMyList'
          }
        };

        if(pathMap[location.pathname]){
          dispatch({
            type:'check',
            payload:{checked:pathMap[location.pathname].checked}
          });

          dispatch(pathMap[location.pathname].otherAction);
        }
      });
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
    },
  },

  reducers: {

    check(state,action) {
      return { ...state, ...action.payload };
    },

    fetchMyList(state,action) {
      return state;
    },

    setState(state,action){
      return merge(state,action);
    },

    createCompetition(state,action){
      let newCompetition = action.payload;
      newCompetition.canDelete = true;
      newCompetition.id = state.competitionList.length+1;
      newCompetition.joinPeople = 1;
      state.competitionList = update(state.competitionList, {$unshift: [newCompetition]});
      state.dialogOpen = false;
      console.log(state);
      return {...state};
    },

    deleteCompetition(state,action){

      console.log("delete");

      const id = action.payload.id;
      let index = 0;

      for(index=0;index<state.competitionList.length;index++){
        if(state.competitionList[index].id == id){
          break;
        }
      }

      let competitionList = update(state.competitionList,{$splice:[[index,1]]});
      return {...state,competitionList};
    },

    takePartInCompetition(state,action){
      const id = action.payload.id;
      let index = 0;

      for(index=0;index<state.competitionList.length;index++){
        if(state.competitionList[index].id == id){
          break;
        }
      }

      const competitionList = update(state.competitionList,{ [index] :{joinPeople:
        {$apply : function(joinPeople) {return joinPeople+1;}}
      }});

      return {...state,competitionList};

    },

    openDialog(state,action){
      return {...state,dialogOpen:true}
    },

    closeDialog(state,action){
      return {...state,dialogOpen:false}
    },

  },

}

