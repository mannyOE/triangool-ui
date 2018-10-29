
// Remember to update resetState mutation
const state = {
  sub: {
    user: {},
    isAuth: false,
    token: null,
  }
}

// getters
const getters = {
  user: state => state.sub.user,
  // userid: state => state.sub.userid,
  isAuth: state => state.sub.isAuth,
  token: state => state.sub.token,
}

// actions
const actions = {
  logout ({ dispatch, commit, state }, args) {
    /**
     * Log a user out by clearing credentials from state and cookies
     */
    commit('logout');
    return true;
  },

  setToken ({ dispatch, commit, state }, token) {
    /**
     * Save the user's token in state
     */
    commit('setToken', token);
    return true;
  },

  setUser ({ dispatch, commit, state }, user) {
    /**
     * Save the user's details in state
     */
    commit('setUser', user);
    return true;
  },

  

  setAuthenticated ({ dispatch, commit, state }, type) {
    /**
     * Register that a user has been authenticated and set the type of user that was authenticated
     */
    commit('isAuthenticated');
    return true;
  },

  callWithToken ({ dispatch, commit, state }, dargs) {
    /**
     * Add token to the parameters of store call and return the promise
     *
     * @param Object {
     *    parameters: {},
     *    action: function
     * }
     * @returns Promise
     */

    const params = dargs.parameters;
    const storeAction = dargs.action;
    const token = state.sub.token;

    // Add token to args
    params.token = token;
    // Call action and return promise
    return storeAction(params);
  },

}

// mutations
const mutations = {
  setToken (state, val) {
    state.sub.token = val || null;
  },

  setUser (state, val) {
    state.sub.user = val || {};
  },

  isAuthenticated (state) {
    state.sub.isAuth = true;
  },

  logout (state) {
    state.sub.token = null;
    state.sub.user = {};
    state.sub.isAuth = false;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
