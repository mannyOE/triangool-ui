
// Remember to update resetState mutation
const state = {
  sub: {
    loading: false, 
    menu: false   
  }
}

// getters
const getters = {
  loading: state => state.sub.loading,
  menu: state => state.sub.menu,
}

// actions
const actions = {
  logout ({ dispatch, commit, state }, args) {
    
  },
  setUser ({ dispatch, commit, state }, user) {
    /**
     * Save the user's details in state
     */
    commit('setUser', user);
    return true;
  },

  setLoadingState ({ dispatch, commit, state }) {
    /**
     * Save the user's details in state
     */
    commit('loading');
    return true;
  },

  menuState ({ dispatch, commit, state }, menu) {
    /**
     * Save the user's details in state
     */
    commit('menu', menu);
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
  loading (state) {
    state.sub.loading = !state.sub.loading;
  },
  menu (state, menu) {
    state.sub.menu = menu;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
