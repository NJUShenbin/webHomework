
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {

      history.listen(location => {
        if(location.pathname==""){

        }
      });

    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put ,select}) {
    },
  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },
  },

}
