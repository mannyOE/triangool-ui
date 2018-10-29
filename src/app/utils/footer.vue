<template>
	 <div>
    <md-toolbar class="btn-primary back" style="margin-top: 120px;">
       <div class="site-info text-center">
          <p>&copy; All rights reserved {{new Date().getFullYear()}} - Designed & Developed by <a href="http://jaccuzzi.io">Jaccuzzi</a></p>
        </div> 
        <a href="#" class="back-to-top">
          <i class="fa fa-arrow-up"></i>
        </a>
    </md-toolbar>
      <el-dialog
        :visible.sync="menu" :show-close="false"
        width="80%" :before-close="closeMenu"
        center>
        <ul>
          <li style="margin-left: -15px;">
            <md-button class="btn-success btn-block" :class="activePage=='home page'?'btn-warning':''" :to="{name: 'home page'}">Home</md-button>
          </li>
          <li style="margin-left: -15px;">
            <md-button class="btn-success btn-block" :class="activePage=='accomodations page'?'btn-warning':''" :to="{name: 'accomodations page'}">Student Accomodations</md-button>
          </li>
          <li style="margin-left: -15px;">
            <md-button class="btn-success btn-block" :class="activePage=='properties'?'btn-warning':''" :to="{name: 'properties'}">Home Appliances</md-button>
          </li>
          <li style="margin-left: -15px;">
            <md-button class="btn-success btn-block" :class="activePage=='phones page'?'btn-warning':''" :to="{name: 'phones page'}">Phones</md-button>
          </li>
        </ul>
      </el-dialog> 
   </div>
</template>

<script type="text/javascript">
  import { mapActions, mapGetters } from 'vuex';
  export default {
    data(){
      return {
        menuVisible: false,
      }
    },
    methods: {
    	activePage(page){
    		if(this.$route.name === page){
    			return true;
    		}
    		// console.log(this.$route.name);
    	},
      closeMenu(){
        this.menuState(false);
      },
      ...mapActions('General', ['setLoadingState','menuState'])
    },
    computed: {
      ...mapGetters('General', ['loading','menu']),
    },
    mounted(){
      
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