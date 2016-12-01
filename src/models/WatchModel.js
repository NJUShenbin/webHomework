import UserService from '../services/UserService';
import merge from '../utils/MergeStateAction'

export default {

  namespace: 'watching',

  state: {
    watchingUsers : [],
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
    }

  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },

    setState(state,action){
      return merge(state,action);
    }
  },

}
