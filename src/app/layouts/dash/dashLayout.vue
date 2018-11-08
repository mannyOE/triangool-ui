<template>
	<div class="hold-transition skin-blue sidebar-mini">
		<div class="wrapper">

		  <!-- Main Header -->
		  <header class="main-header">

		    <!-- Logo -->
		    <a href="index2.html" class="logo">
		      <!-- logo for regular state and mobile devices -->
		      <span class="logo-lg">
		      	<img style="width: 120px; height: 30px;" :src="require('@/assets/triangoolate-w-b.png')">
		      </span>

		    </a>

		    <!-- Header Navbar -->
		    <nav class="navbar navbar-static-top" role="navigation">
		      <!-- Sidebar toggle button-->
		      <a href="#" class="sidebar-toggle visible-xs" data-toggle="offcanvas" role="button">
		        <span class="sr-only">Toggle navigation</span>
		      </a>
		      <!-- Navbar Right Menu -->
		      <div class="navbar-custom-menu">
		        <ul class="nav navbar-nav">
		          <!-- Notifications Menu -->
		          <li class="dropdown notifications-menu">
		            <!-- Menu toggle button -->
		            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		              <i class="fa fa-bell-o"></i>
		              <span class="label label-warning">10</span>
		            </a>
		            <ul class="dropdown-menu">
		              <li class="header">You have 10 notifications</li>
		              <li>
		                <!-- Inner Menu: contains the notifications -->
		                <ul class="menu">
		                  <li><!-- start notification -->
		                    <a href="#">
		                      <i class="fa fa-users text-aqua"></i> 5 new members joined today
		                    </a>
		                  </li>
		                  <!-- end notification -->
		                </ul>
		              </li>
		              <li class="footer"><a href="#">View all</a></li>
		            </ul>
		          </li>
		         
		          <!-- User Account Menu -->
		          <li class="dropdown user user-menu">
		            <!-- Menu Toggle Button -->
		            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		              <!-- The user image in the navbar-->
		              <img :src="require('@/assets/dist/img/avatar5.png')" class="user-image" alt="User Image" v-if="user.image===null||user.image===''||user.image===undefined">

		              <img :src="$API+user.image" class="user-image" alt="User Image" v-else>
		              <!-- hidden-xs hides the username on small devices so only the image appears. -->
		              <span class="hidden-xs" style="text-transform: capitalize;">{{user.firstName+' '+user.lastName}}</span>
		            </a>
		            <ul class="dropdown-menu">
		              <!-- The user image in the menu -->
		              <li class="user-header">
		                <img :src="require('@/assets/dist/img/avatar5.png')" class="img-circle" alt="User Image" v-if="user.image===null||user.image===''||user.image===undefined">

		                <img :src="$API+user.image" class="img-circle" alt="User Image" v-else>

		                <p style="text-transform: capitalize;">
		                  {{user.firstName+' '+user.lastName}}
		                  <small>Member since Nov. 2012</small>
		                </p>
		              </li>
		              <!-- Menu Footer-->
		              <li class="user-footer">
		                <div class="pull-left">
		                  <md-button :to="{name:'settings'}">Profile</md-button>
		                </div>
		                <div class="pull-right">
		                	<md-button :to="{name:'logout'}">Sign out</md-button>
		                </div>
		              </li>
		            </ul>
		          </li>
		        </ul>
		      </div>
		    </nav>
		  </header>
		  <!-- Left side column. contains the logo and sidebar -->
		  <aside class="main-sidebar">

		    <!-- sidebar: style can be found in sidebar.less -->
		    <section class="sidebar">

		      <!-- Sidebar user panel (optional) -->
		      <div class="user-panel">
		        <div class="pull-left image">
		          <img :src="require('@/assets/dist/img/avatar5.png')"  class="img-circle" alt="User Image" v-if="user.image===null||user.image===''||user.image===undefined">

		          <img :src="$API+user.image" class="img-circle" alt="User Image" v-else>
		        </div>
		        <div class="pull-left info">
		          <p style="text-transform: capitalize;">{{user.firstName+' '+user.lastName}}</p>
		          <!-- Status -->
		          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
		        </div>
		      </div>


		      <!-- Sidebar Menu -->
		      <ul class="sidebar-menu">
		        <li class="header">Menu</li>
		        <!-- Optionally, you can add icons to the links -->
		        <li :class="activeLink('dashboard')?'active':''"><router-link :to="{name:'dashboard'}"><i class="fa fa-dashboard"></i> <span>Dashboard</span></router-link></li>
		        <li class="treeview" :class="activeLink('add-items')||activeLink('all-items')?'active':''">
		          <a href="#"><i class="fa fa-dollar"></i> <span>My Items</span>
		            <span class="pull-right-container">
		              <i class="fa fa-angle-left pull-right"></i>
		            </span>
		          </a>
		          <ul class="treeview-menu">
		            <li :class="activeLink('add-items')?'active':''"><router-link :to="{name:'add-items'}">Add Item</router-link></li>
		            <li :class="activeLink('all-items')?'active':''"><router-link :to="{name:'all-items'}">View All Items</router-link></li>
		          </ul>
		        </li>
		        <li :class="activeLink('settings')?'active':''"><router-link :to="{name:'settings'}"><i class="fa fa-users"></i> <span>Profile</span></router-link></li>
		      </ul>
		      <!-- /.sidebar-menu -->
		    </section>
		    <!-- /.sidebar -->
		  </aside>

		  <!-- Content Wrapper. Contains page content -->
		  <div class="content-wrapper">
		  	
		  	<router-view/>
		  </div>
		  <!-- /.content-wrapper -->
		  <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs">
      The Future of Sourcing
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; {{new Date().getFullYear()}} <a href="#">A&E Corp</a>.</strong> All rights reserved.
  </footer>

  <el-dialog
  	title="Incomplete Profile"
      :visible.sync="profileIncomplete"
      width="30%">
      <div class="container">
      	Please, Complete Your Profile to be able to post Ads here.
      </div>
      <span slot="footer">
          <md-button class="btn-primary" :to="{name:'settings'}">Go to Profile</md-button>
      </span>
  </el-dialog>
		 
		</div>
	</div>
</template>



<script type="text/javascript">
  import { mapActions, mapGetters } from 'vuex';
  export default {
    props: ['images'],
    data(){
      return {
        
      }
    },
    computed: {
      ...mapGetters('UserCreds', ['user','enabled']),
      profileIncomplete(){
      	if(!this.enabled && this.$route.name!=='settings'){
      		return true;
      	}
      	return false
      }

    },
    methods: {
    ...mapActions('UserCreds', ['logout']),
      logoutUser(){
      	this.logout();
      	this.$router.push({name:'login'});
      },
    	activeLink(tab){
    		if(this.$route.name === tab){
    			return true;
    		}
    		return false;
    	}
    }
  }
</script>
<style type="text/css" scoped>
	
</style>