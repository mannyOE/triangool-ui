import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';


import General from './modules/General'
import UserCreds from './modules/userCredentials'
import Auth from './modules/auth'
import Listing from './modules/Listing'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'pioneerState',
      getState: key => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 14 }),
      paths: ['UserCreds','General']
    })
  ],
  modules: {
   General,
   UserCreds,
   Auth,
   Listing,
  }
});
