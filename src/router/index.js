
import Vue from 'vue'
import Router from 'vue-router'

// classifieds pages
import Home from "@/app/pages/class/homepage"
import Listings from "@/app/pages/class/listing"
import Login from "@/app/pages/class/login"
import Signup from "@/app/pages/class/signup"
import Contact from "@/app/pages/class/contact"

// dashboard pages



// layouts
import classLayout from '@/app/layouts/class/MainClassLayout'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'class layout',
      components: { default:classLayout},
      redirect: {name: 'home page'},
      children: [
        {
          path: 'home',
          name: 'home page',
          component: Home
        },
        {
          path: 'contact',
          name: 'contact page',
          component: Contact
        },
        {
          path: 'properties',
          name: 'properties',
          component: Listings
        },
        {
          path: 'login-page',
          name: 'login',
          component: Login
        },
        {
          path: 'signup-page',
          name: 'signup',
          component: Signup
        }
      ]
    },
    
  ]
})
