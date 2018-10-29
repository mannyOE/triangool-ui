import { blackAxios } from '@/config';

// const blackAxios = config.blackAxios

export default {
  resource: {
    res: 'api/users/login',
    register: 'api/users/register',
    confirmPassword: 'api/users/confirm_password',
    resend_confirmation: '/api/users/resend_confirmation',
    confirm_email: 'api/users/confirm_email',
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
    return blackAxios.post('/recover_password', dargs)
    .then(function (response) {

      print('Sent Email Details: ', response);



      return response;
    })
    .catch(function (error) {
      let results = {};
      let errMsg = 'Recover Password failed. ' + error.message;
      let customEMsg;

      if (error.response) {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        let statusCode = error.response.status;
        print(error.response.data, statusCode);

        // Custom Status msgs by status code
        customEMsg = authErrMsg(statusCode, error.message);
        errMsg = 'sending email failed. ' + customEMsg;

        results.autherror = isBadReq(statusCode);
        results.message = errMsg;
        results.status = false;
      } else {
        results.message = errMsg;
      }

      return results;
  })
},

confirmPassword (dargs) {
  /**
   * Retrieve all devs and pms on zeedas without team
   */

  return blackAxios.post(this.resource.confirmPassword, dargs)
  .then(function (response) {

    return getById.success({
      response: response,
      resource: '',
    });
  })
  .catch(function (error) {
    return getById.error({
      error: error,
      defaultmsg: ''
    });
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
