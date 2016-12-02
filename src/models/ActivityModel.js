import merge from '../utils/MergeStateAction';
import update from 'react-addons-update';
import delay from '../utils/delay';

export default {

  namespace: 'activity',

  state: {
    activities : [
      {
        id:0,
        content:'我运动,我健康,我快乐',
        author:{
          username : 'NJUShenbin',
          avatar : 'avatar1'
        },
        stars : 17,
      },
      {
        id:1,
        content:'每天运动一小时,健康生活一辈子',
        author:{
          username : 'ss',
          avatar : 'avatar1'
        },
        stars : 15,
      },
      {
        id:2,
        content:'体育使城市充满活力，城市因体育勃发生机',
        author:{
          username : 'sc',
          avatar : 'avatar2'
        },
        stars : 15,
      },
      {
        id:3,
        content:'突破极限、奋发拼搏、勇于开拓、赛出风格、赛出水平',
        author:{
          username : 'srf',
          avatar : 'avatar3'
        },
        stars : 30,
      }
    ],
    activityType : 'all',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname === '/activity'){
          dispatch({type:'fetchAll'})
        }
      });
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
    },

    *addActivity({ payload }, { call, put }){
      yield call(delay,100);
      yield put({type:'addActivitySuccess',payload:payload});
    }

  },

  reducers: {
    addActivitySuccess(state,action){
      let activity = action.payload;
      activity.id = state.activities.length+5;
      activity.author = {
        username : 'NJUShenbin',
        avatar : 'avatar1'
      };
      activity.stars = 0;
      const activities = update(state.activities,{$unshift:[activity]});
      return {...state,activities};
    }
  },

}
