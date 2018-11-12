import api from '@/api/listing';

// Remember to update resetState mutation
const state = {
  sub: {
    listings: [],
    singleListing: {},
  }
}

// getters
const getters = {
  listings: state => state.sub.listings,
  singleListing: state => state.sub.singleListing,
}

// actions
const actions = {
  
  fetchAllListings ({ dispatch, commit, state }, args) {
    return api.fetchAll(args)
    .then(function (result) {
      console.log(result);
      commit('setAllListing', result.result)
      return result;
    })
  },

  fetchMyListings ({ dispatch, commit, state }, args) {
    return api.fetchMine(args)
    .then(function (result) {
      console.log(result)
      commit('setAllListing', result.result)
      return result;
    })
  },
  fetchLatestListings ({ dispatch, commit, state }, args) {
    return api.fetchLatest(args)
    .then(function (result) {
      commit('setAllListing', result.result)
      return result;
    })
  },
  fetchOneListing ({ dispatch, commit, state }, args) {
    return api.fetchOne(args)
    .then(function (result) {
      return result;
    })
  },
  createListing ({ dispatch, commit, state }, args) {
    return api.create(args)
    .then(function (result) {
      return result;
    })
  },
  removeUnusedFiles ({ dispatch, commit, state }, args) {
    return api.removeUnusedFiles(args)
    .then(function (result) {
      return result;
    })
  },
  setRedirectError ({ commit, state }, val) {
    commit('setRedirectError', val);
  },
  clearErrors ({ commit, state }) {
    commit('clearErrors');
  },
  resetState ({ commit, state }) {
    commit('resetState');
  },
}

// mutations
const mutations = {
  
  setAllListing (state, val) {
    state.sub.listings = val;
  },

  clearErrors (state) {
    state.sub.autherror = false;
    state.sub.redirectError = false;
    state.sub.loading = false;
    state.sub.error = false;
  },

  resetState (state) {
    state.sub = {
      singleListing: {},
    };
  },

  notVerified (state) {
    state.sub.error = true;
    state.sub.autherrorMsg = "Please confirm you account from your email"
  },

  isAuthError (state) {
    state.sub.autherror = true;
  },

  notAuthError (state) {
    state.sub.autherror = false;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
