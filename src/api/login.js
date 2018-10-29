import { blackAxios } from '@/config';

// const blackAxios = config.blackAxios

export default {
  resource: {
    res: 'api/users/login',
    register: 'api/users/register',
    confirmPassword: 'api/users/new_password',
    resend_confirmation: '/api/users/resend_confirmation',
    confirm_email: 'api/users/confirm_email',
    recover: 'api/users/recover_password', 
    resUser: 'session',
  },


  login (dargs) {
    return blackAxios.post(this.resource.res, {
        email: dargs.email,
        password: dargs.password,
      })
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  },

  register (dargs) {
    return blackAxios.post(this.resource.register, dargs)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  },

  forgotPassword(dargs){
    return blackAxios.post(this.resource.recover, dargs)
    .then(function (response) {

      return response.data;
    })
    .catch(function (error) {
      return error;
  })
},

confirmPassword (dargs) {
  /**
   * Retrieve all devs and pms on zeedas without team
   */

  return blackAxios.post(this.resource.confirmPassword, dargs)
  .then(function (response) {

    return response.data;
  })
  .catch(function (error) {
    return error;
  });
},
resend_confirmation (dargs) {
  /**
   * Retrieve all devs and pms on zeedas without team
   */
  return blackAxios.post(this.resource.resend_confirmation, {email:dargs})
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error;
  });
},
confirm_email (dargs) {
  /**
   * Retrieve all devs and pms on zeedas without team
   */
  return blackAxios.get(this.resource.confirm_email+'/'+dargs)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error;
  });
},


}
