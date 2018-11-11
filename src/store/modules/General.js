
// Remember to update resetState mutation
const state = {
  sub: {
    loading: false, 
    menu: false,
    images: [],   
  }
}

// getters
const getters = {
  loading: state => state.sub.loading,
  menu: state => state.sub.menu,
  images: state => state.sub.images,
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
  addImage ({ dispatch, commit, state }, image) {
    /**
     * Save the user's details in state
     */
    commit('addImages', image);
    return true;
  },
  emptyImages ({ dispatch, commit, state }) {
    /**
     * Save the user's details in state
     */
    commit('emptyImages');
    return true;
  },

  removeImage ({ dispatch, commit, state }, index) {
    /**
     * Save the user's details in state
     */
    commit('removeImage', index);
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
  addImages (state, image){
    state.sub.images.push(image);
  },
  emptyImages (state, image){
    state.sub.images = [];
  },
  removeImage(state, index){
    state.sub.images.splice(index, 1);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
