import { routerRedux } from 'dva/router';
import merge from '../utils/MergeStateAction'
import UserService from '../services/UserService';

export default {

  namespace: 'login',

  state: {
    user : null,
    apiToken : null,
    username: null,
    password : null,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname!=='/login'){
          // dispatch({type:'loginConfirm'})
        }
      });
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
    },

    *loginConfirm({ payload }, { call, put ,select}){
      const user = yield select(state => state.login.user);

      if(user==null){
        yield put(routerRedux.push('/login'));
      }
    },

    *login({ payload }, { call, put ,select}){
      const state = yield select(state => state.login);

      const res = yield UserService.login(state.username,state.password);
      if(res.status == 'success'){
        const user = yield UserService.getUser(state.username);
        yield put({
          type: 'loginSuccess',
          payload: {
            user : user,
            apiToken : res.api_token
          }
        });

        yield put(routerRedux.push('/'));
      }
    }

  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },

    setUsername(state,action){
      return merge(state,action);
    },

    setPassword(state,action){
      return merge(state,action);
    },

    loginSuccess(state,action){
      return merge(state,action);
    }

  },

}

