import { routerRedux } from 'dva/router';

export default {

  namespace: 'login',

  state: {
    user : null,
    apiToken : null
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname!=='/login'){
          dispatch({type:'loginConfirm'})
        }
      });
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
    },

    *loginConfirm({ payload }, { call, put ,select}){
      const user = yield select(state => state.user);
      if(user==null){
        yield put(routerRedux.push('/login'));
      }
    }

  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },
  },

}

