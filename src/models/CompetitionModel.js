import delay from '../utils/delay'

export default {

  namespace: 'competition',

  state: {
    checked:0,
    competitionList : [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {

        let pathMap={};
        pathMap['/competition'] = {
          checked:0,
          otherAction : {
            type : 'fetchList'
          }
        };
        pathMap['/competition/mine'] = 1;
        pathMap['/competition/person'] = 2;
        pathMap['/competition/people'] = 3;

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

    fetchList(state,action) {
      let competitionList=[];
      for (let i=0;i<15;i++){
        competitionList.push({
          name:'南大马拉松竞赛',
          type:'people',
          totalPeople : 6,
          joinPeople : 4,
          startDate : '2016-10-10',
          endDate : '2016-10-25',
          score : 10,
        });
      }
      return {...state,competitionList}
    },

    fetch(state, action) {
      return { ...state, ...action.payload };
    },
  },

}
