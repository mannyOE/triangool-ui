<template>
	 <md-toolbar class="btn-primary back md-elevation-10">
      <h3 class="md-title">
        <img style="width: 100px; height: 60px;" :src="require('@/assets/class/img/logo.png')">
      </h3>
          <md-tabs class="md-primary mrg" md-alignment="right" :md-active-tab="activePage">
            <md-tab id="home page" :to="{name: 'home page'}" md-label="Home"></md-tab>
            <md-tab id="properties" :to="{name: 'properties'}" md-label="Listings"></md-tab>
            <md-tab id="login" :to="{name: 'login'}" md-label="Login"></md-tab>
            <md-tab id="signup" :to="{name: 'signup'}" md-label="Signup"></md-tab>
            <md-tab id="contact page" :to="{name: 'contact page'}" md-label="Contact"></md-tab>
          </md-tabs>
    </md-toolbar>
</template>

<script type="text/javascript">
  
  export default {
    data(){
      return {
        menuVisible: true,
      }
    },
    methods: {
    	
    },
    computed: {
      activePage(){
        return this.$route.name 
      }
    }
  }
</script>


<style>
	.mrg {
		margin-left: 220px;	
	}
	.md-active {
		border-bottom: 1px solid white !important;
	}
	a {
		color: #fff !important;
		text-decoration: none !important;
	}
  .back {
    background-color: #333333 !important;
  }
	
</style>