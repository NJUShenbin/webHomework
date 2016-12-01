import request from '../utils/request';
import Config from '../config/Config'

export default {

  login : function (username,password) {

    return request('/auth', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
    });
  },

  getUser : function (username) {
    return request('/users/'+username);
  },

  getWatching : function (username) {
    return request(`/users/${username}/watch`);
  }

}
