import api from '@/api/login';

// Remember to update resetState mutation
const state = {
  sub: {
    autherror: false,
    autherrorMsg: 'Email or password is incorrect',
    loading: false,
  }
}

// getters
const getters = {
  autherror: state => state.sub.autherror,
  autherrorMsg: state => state.sub.autherrorMsg,
  loading: state => state.sub.loading,
}

// actions
const actions = {
  login ({ dispatch, commit, state }, args) {

    // change state for loading animation
    dispatch('General/setLoadingState', null, {root: true})
    .then(function (status) {
      // Logged out
    });

    return api.login(args)
      .then(function (result) {
        if (result.error === undefined) {
          console.log(result)
          if(result.success){
            dispatch('UserCreds/setAuthenticated', null, {root: true})
            .then(function (status) {
              // Logged out
            });

            dispatch('UserCreds/setUser', result.result.user, {root: true})
            .then(function (status) {
              // Logged out
            });

            dispatch('UserCreds/setToken', result.result.token, {root: true})
            .then(function (status) {
              // Logged out
            });

            dispatch('UserCreds/setEnabled', result.result.enabled, {root: true})
            .then(function (status) {
              // Logged out
            });
          }
          return result;
        } else {
          // Login attempt failed
          dispatch('General/setLoadingState', null, {root: true})
          .then(function (status) {
            // Logged out
          });
        }
      })    
  },

  register ({ dispatch, commit, state }, args) {

    // change state for loading animation
    dispatch('General/setLoadingState', null, {root: true})
    .then(function (status) {
      // Logged out
    });

    return api.register(args)
      .then(function (result) {
        if (result.error === undefined) {
           dispatch('General/setLoadingState', null, {root: true})
          .then(function (status) {
            // Logged out
          });
          return result;
        } else {
          // Login attempt failed
          dispatch('General/setLoadingState', null, {root: true})
          .then(function (status) {
            // Logged out
          });
        }
      })    
  },



  resend_confirmation ({ dispatch, commit, state }, args) {

    commit('loading');

    return api.resend_confirmation(args)
    .then(function (result) {

          return result;
    })
  },
  send_password_token ({ dispatch, commit, state }, args) {

    commit('loading');

    return api.forgotPassword(args)
    .then(function (result) {

          return result;
    })
  },

  send_password ({ dispatch, commit, state }, args) {

    commit('loading');

    return api.confirmPassword(args)
    .then(function (result) {
        console.log(result);
          return result;
    })
  },
  change_password ({ dispatch, commit, state }, args) {

    commit('loading');

    return api.changePassword(args)
    .then(function (result) {
        console.log(result);
          return result;
    })
  },
  updateUser ({ dispatch, commit, state }, args) {

    commit('loading');

    return api.update_user(args)
    .then(function (result) {
        console.log(result);
          return result;
    })
  },
  confirm_email({ dispatch, commit, state }, args) {

    return api.confirm_email(args)
    .then(function (result) {

          return result;
    })
  },
  getUser ({ dispatch, commit, state }, dargs) {
    commit('loading');

    return userApi.getUser(dargs)
    .then(function (result) {
      if (result.error === undefined) {
        // Got the user successfully
        commit('clearErrors');
        commit('resetState');

        // get user from response
        const user = result.data;

        // Set user data in 'user' state
        dispatch('userCredentials/setUser', user, {root: true})
        .then(function (status) {
          // User is set
        });

        commit('notLoading');
        return true;
      } else {
        // Failed to get user
        commit('clearErrors');
        commit('resetState');

        commit('setUserError', result.error);

        commit('notLoading');
        return false;
      }
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
  loading (state) {
    state.sub.loading = true
  },

  notLoading (state) {
    state.sub.loading = false
  },

  setError (state, error) {
    state.sub.error = error
  },

  setUserError (state, error) {
    state.sub.userError = error
  },

  setRedirectError (state, val) {
    state.sub.redirectError = val;
  },

  clearErrors (state) {
    state.sub.autherror = false;
    state.sub.redirectError = false;
    state.sub.loading = false;
    state.sub.error = false;
  },

  resetState (state) {
    state.sub = {
      error: false,
      userError: false,
      redirectError: false,
      autherror: false,
      autherrorMsg: 'Email or password is incorrect',
      loading: false,
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
