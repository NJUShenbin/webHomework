export default {

  namespace: 'activity',

  state: {
    activities : [],
    activityType : 'all', //'all','own'
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
  },

  reducers: {
    fetchAll(state, action) {
      return { ...state, ...action.payload };
    },

    fetchOwn(state,action){
      return { ...state, ...action.payload };
    }
  },

}
