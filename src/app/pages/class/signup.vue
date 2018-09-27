<template>
	<div>
		
    <!-- Page Header Start -->
    <div class="page-header" :style="{'background-image': 'url(' + require('@/assets/class/img/banner1.jpg') + ')' }">
      <div class="container">
        <div class="row">         
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="page-title">Join Us</h2>
              <router-link :to="{name:'home page'}" >Home</router-link>
              <span>/</span>
              <span class="current">Singup</span>
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
          <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            <div class="page-login-form box">
              <h3>
                Register
              </h3>
              <form class="login-form">
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input class="md-elevation-5" placeholder="Username">     
                       <template slot="prepend"><i class="fa fa-user"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input class="md-elevation-5" placeholder="Email Address">     
                       <template slot="prepend"><i class="fa fa-envelope"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input type="password" class="md-elevation-5" placeholder="Password">     
                       <template slot="prepend"><i class="fa fa-lock"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input type="password" class="md-elevation-5" placeholder="Retype Password">     
                       <template slot="prepend"><i class="fa fa-lock"></i></template>         
                    </el-input>
                  </md-field> 
                </div>   

                <div class="form-group pull-left" style="margin-top: 0px">
                    <el-checkbox style="font-size: 13px;" v-model="terms">I agree to the Terms & Conditions</el-checkbox>  
                </div>           
                
                <md-field>
                <el-button class="btn-block md-elevation-5" type="success">Register
                </el-button>
              </md-field>
               <div class="form-group" style="margin-top: 0px">
                  <!-- <md-field> -->
                    <div class="row">
                      <div class="col-xs-12 col-md-6">
                      </div>
                      <div class="col-xs-12 col-md-6" style="font-size: 13px; color: #333 !important;">Already Have Account?
                         <router-link :to="{name: 'login'}" class="text-center" style="font-size: 13px;font-weight: bolder; color: #333 !important;" >Login Here</router-link>
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
        terms: true
      }
    }
  }
</script>