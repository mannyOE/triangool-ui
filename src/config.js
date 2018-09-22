import axios from 'axios';
import Vue from 'vue'
var port = '';
var hostname = location.hostname;
hostname = hostname.toLowerCase();

const isProd = process.env.LOCAL === 10 || hostname !== 'localhost' 

export const API = isProd ? 'http://v2.lotterycoins.co.uk:2300/' : 'http://localhost:2300/'


console.log("Connecting API: "+ API);

Vue.prototype.$API = API;


// export var HOST = 'https://127.0.0.1:8080/#/';
export var blackAxios = axios.create({
  baseURL: API
});
