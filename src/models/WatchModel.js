import UserService from '../services/UserService';
import merge from '../utils/MergeStateAction'
import update from 'react-addons-update';
import delay from '../utils/delay';

export default {

  namespace: 'watching',

  state: {
    watchingUsers : [],
    addWatchingSuccess : null,
  },

  subscriptions: {
    setup({ dispatch, history }) {

      history.listen(location =>{
        if(location.pathname=='/'){
          dispatch({type:'getWatching'});
        }
      });

    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put ,select}) {
    },

    *getWatching({ payload }, { call, put ,select}){

      const user = yield select(state => state.login.user);
      if(user!=null){
        const watchingUsers = yield UserService.getWatching(user.username);
        yield put({
          type : 'setState',
          payload :{
            watchingUsers:watchingUsers
          }
        })
      }
    },

    *addWatching({ payload }, { call, put ,select}){
        const user = yield UserService.getUser(payload.username);
        if(user.err){
          console.log(user.err);
          yield put({
            type : 'addWatchingFail',
          });
        }else{
          yield put({
            type : 'addWatchingSuccess',
            payload : user,
          });
        }

    }

  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },

    setState(state,action){
      return merge(state,action);
    },

    addWatchingSuccess(state,action){
      let watchingUsers = update(state.watchingUsers,{$push:[action.payload]});
      return {...state,watchingUsers,addWatchingSuccess:true};
    },

    addWatchingFail(state,action){
      return {...state,addWatchingSuccess:false}
    },

  },

}
