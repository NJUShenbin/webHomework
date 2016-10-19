import {getSleepData} from '../services/SleepService'
import delay from '../utils/delay'

export default {

  namespace: 'sleep',

  state: {
    deepSleepHourList:[],
    lightSleepHourList:[],
    showLoading : false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
          dispatch({
            type: 'fetchSleepData',
          });
        }
      });
    },
  },

  effects: {
    *fetchSleepData(action, { call, put }) {

      yield put({type:'loading'});
      // const data = yield call(getSleepData);

      yield call(delay,1500);
      const data = yield {
        deepSleepHourList:[3,2.5,2.3,1.5,3.6,2.3,2.8],
        lightSleepHourList:[6,7.5,5.3,6.5,8.6,4.3,5.8],
      };

      yield put({type:'fetchSleepDataSuccess',payload:data});

    },
  },

  reducers: {
    fetchSleepDataSuccess(state, action) {
      return { ...state, ...action.payload,showLoading:false};
    },

    loading(state, action) {
      return { ...state, showLoading:true };
    },

  }

}
