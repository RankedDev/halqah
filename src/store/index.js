import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
var _ = require('lodash');

Vue.use(Vuex)


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    subs: state => state.user.sub,
    title: state => state.currentgroup.title,
    media: state => state.currentgroup.media,
    isAdmin: state => {
      if (!_.isEmpty(state.currentgroup) && !_.isEmpty(state.user)) { return state.currentgroup.admin.includes(state.user._id); }
      else {
        return false
      }
    },
    isSub: state => {
      if (!_.isEmpty(state.currentgroup) && !_.isEmpty(state.user)) { return state.user.sub.includes(state.currentgroup._id); }
      else {
        return false
      }
    }
  },
  modules: {
  }
})
