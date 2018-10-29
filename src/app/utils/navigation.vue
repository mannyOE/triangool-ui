<template>
    <div>
    <md-toolbar class="md-accent back" md-elevation="1">
      <h3 class="md-title" style="flex: 1">
        <img style="width: 120px; height: 40px;" :src="require('@/assets/triangoolate-w-b.png')">
      </h3>
      <md-button class="hidden-xs" :class="activePage=='home page'?'btn-warning':''" :to="{name: 'home page'}">Home</md-button>
      <md-button class="hidden-xs" :class="activePage=='accomodations page'?'btn-warning':''" :to="{name: 'accomodations page'}">Student Accomodations</md-button>
      <md-button class="hidden-xs" :class="activePage=='properties'?'btn-warning':''" :to="{name: 'properties'}">Home Appliances</md-button>
      <md-button class="hidden-xs" :class="activePage=='phones page'?'btn-warning':''" :to="{name: 'phones page'}">Phones</md-button>
      <md-button class="btn-success" :to="{name: 'post ad'}">POST AD</md-button>
      <el-button class="visible-xs" style="background-color: transparent !important; border: none;" @click="menuVisible">
        <i class="fa fa-bars" style="color: #fff;"></i>
      </el-button>      
    </md-toolbar>
  </div>
</template>

<script type="text/javascript">
  import { mapActions, mapGetters } from 'vuex';
  export default {
    data(){
      return {
        
      }
    },
    methods: {
      ...mapActions('General', ['menuState']),
      menuVisible(){
        this.menuState(true);
      }
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
    color: #fff !important;
  }
	
</style>