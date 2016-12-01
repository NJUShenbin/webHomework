import Config from '../config/Config'

export default {

  getAvatarSrc : function(imgName) {
    return `${Config.staticUrl}${imgName}.jpg`;
  },

}
