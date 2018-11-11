
import Vue from 'vue'
import Router from 'vue-router'

// classifieds pages
import Home from "@/app/pages/class/homepage"
import Listings from "@/app/pages/class/listing"
import Login from "@/app/pages/class/login"
import Signup from "@/app/pages/class/signup"
import Confirmation from "@/app/pages/class/confirmation"
import Verification from "@/app/pages/class/verification"
import ForgotPassword from "@/app/pages/class/forgot_password"
import ChangePassword from "@/app/pages/class/change_password"



import dash from "@/app/layouts/dash/dashLayout"

import dashHome from "@/app/pages/dash/home"
import newItem from "@/app/pages/dash/new_item"

import newAppartment from "@/app/pages/dash/new_appartment"
import newElectronic from "@/app/pages/dash/new_electronic"
import Settings from "@/app/pages/dash/settings"


// dashboard pages



// layouts
import classLayout from '@/app/layouts/class/MainClassLayout'

import store from '@/store'

Vue.use(Router)

const router = new Router({
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
          // meta: {requiresAuth: true},
          component: Home
        },
        {
          path: 'accomodations',
          name: 'accomodations page',
          component: Listings
        },
        {
          path: 'phones',
          name: 'phones page',
          component: Listings
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
          path: 'logout',
          name: 'logout',
          component: Login
        },

        {
          path: 'signup-page',
          name: 'signup',
          component: Signup
        },
        {
          path: 'forgot-passsword',
          name: 'forgot-passsword',
          component: ForgotPassword
        },
        {
          path: 'change-password/:token',
          name: 'change-password',
          component: ChangePassword
        },
        {
          path: 'verify-user/:token',
          name: 'verify',
          component: Verification
        },
        {
          path: 'confirmation-page',
          name: 'confirmation',
          component: Confirmation,
          props: (route) => ({ email: route.query.email })
        }
      ]
    },
    {
      path: '/dash',
      name: 'post ad',
      components: { default:dash},
      meta: {requiresAuth: true},
      redirect: {name: 'dashboard'},
      children: [
        {
          path: 'home',
          name: 'dashboard',
          component: dashHome
        },

        {
          path: 'add-household-item',
          name: 'add-items-hou',
          component: newItem
        },

        {
          path: 'all-household-items',
          name: 'all-items-hou',
          component: dashHome
        },

        {
          path: 'add-appartment-item',
          name: 'add-items-app',
          component: newAppartment
        },

        {
          path: 'all-appartment-items',
          name: 'all-items-app',
          component: dashHome
        },


        {
          path: 'add-electronic-item',
          name: 'add-items-ele',
          component: newElectronic
        },

        {
          path: 'all-electronic-items',
          name: 'all-items-ele',
          component: dashHome
        },

        {
          path: 'user/profile',
          name: 'settings',
          component: Settings
        },
        
      ]
    },
    {
          path: '/user/dashboard',
          name: 'dash',
          component: dash
        },
    
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires authentiication, check if logged in
    // if not, redirect to login page.
    let fmsg = 'Please login to access this page'
    if (!store.state.UserCreds.sub.isAuth) {
      next({
        name: 'login',
        query: { redirectUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
