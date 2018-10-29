<template>
	<div>
		
    <!-- Page Header Start -->
    <div class="page-header" :style="{'background-image': 'url(' + require('@/assets/class/img/banner1.jpg') + ')' }">
      <div class="container">
        <div class="row">         
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="page-title">Forgot Password</h2>
              <router-link :to="{name:'home page'}" >Home</router-link>
              <span>/</span>
              <span class="current">Forgot Password</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End --> 

    <!-- Content section Start --> 
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-4 col-md-4 col-md-offset-4">
            <div class="page-login-form box">
              <h3>
                Forgot Password
              </h3>
              <form class="login-form">
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input class="md-elevation-5" v-model="user.email" placeholder="Email">     
                       <template slot="prepend"><i class="fa fa-user"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                <md-field>
                <el-button class="btn-block md-elevation-5" type="success">Submit
                </el-button>
              </md-field>
              
              <div class="form-group" style="margin-top: 0px">
                  <!-- <md-field> -->
                    <div class="row">
                      <div class="col-xs-12 col-md-6 text-right">
                         <router-link :to="{name: 'login'}" class="text-center" style="font-size: 13px;font-weight: bolder; color: #333 !important;" >Login Here</router-link>
                      </div>
                      <div class="col-xs-12 col-md-6" style="font-size: 13px; color: #333 !important;">
                         <router-link :to="{name: 'signup'}" class="text-center" style="font-size: 13px; font-weight: bolder; color: #333 !important;" >Signup Here</router-link>
                      </div>
                    </div>                   
                  <!-- </md-field>     -->
              </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content section End --> 
    
	</div>
</template>

<script type="text/javascript">
  
  export default {
    props: ['images'],
    data(){
      return {
        rememberme: false,
        user: {
          email: '',
        }
      }
    }
  }
</script>