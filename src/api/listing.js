import { blackAxios } from '@/config';

// const blackAxios = config.blackAxios

export default {
  resource: {
    all: 'api/listings',
    latest: 'api/listings',
    mine: 'api/listings/my-listings',
    one: 'api/listings/one',
    edit: 'api/listings/modify',
    create: 'api/listings/create-item',
    delete: '/api/listings/delete',
    report: 'api/listings/report',
    block: 'api/listings/block', 
    unusedFiles: 'api/listings/remove-unused-files'
  },

  fetchAll(dargs){
    return blackAxios.get(this.resource.all, dargs)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
    })
  },
  removeUnusedFiles (dargs){
    return blackAxios.post(this.resource.unusedFiles, {images: dargs})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
    })
  },

  create (dargs){
    return blackAxios.post(this.resource.create, dargs)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
    })
  },
  fetchLatest(dargs){
    return blackAxios.get(this.resource.latest+'?latest=true', dargs)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
    })
  },

  fetchMine(dargs){
    return blackAxios.get(this.resource.mine+'?page='+dargs.page+'&&category='+dargs.category, {headers: {token:dargs.token}})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
    })
  },

  fetchOne(dargs){
    return blackAxios.post(this.resource.one, dargs)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
    })
  },



}
