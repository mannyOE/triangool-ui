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
              <el-alert v-if="error!==null"
                title="Hold On"
                type="info"
                :description="error" show-icon>
              </el-alert>
              <form class="login-form">
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input class="md-elevation-5" v-model="user.firstName" placeholder="First Name">     
                       <template slot="prepend"><i class="fa fa-user"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input class="md-elevation-5" v-model="user.lastName" placeholder="Last Name">     
                       <template slot="prepend"><i class="fa fa-user"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input class="md-elevation-5" v-model="user.email" placeholder="Email Address">     
                       <template slot="prepend"><i class="fa fa-envelope"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                 <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input class="md-elevation-5" v-model="user.phone" placeholder="Phone Number">     
                       <template slot="prepend"><i class="fa fa-phone"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input type="password" v-model="user.password" class="md-elevation-5" placeholder="Password">     
                       <template slot="prepend"><i class="fa fa-lock"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input type="password" v-model="user.password2" class="md-elevation-5" placeholder="Retype Password">     
                       <template slot="prepend"><i class="fa fa-lock"></i></template>         
                    </el-input>
                  </md-field> 
                </div>   

                <div class="form-group pull-left" style="margin-top: 0px">
                    <el-checkbox style="font-size: 13px;" v-model="user.terms">I agree to the Terms & Conditions</el-checkbox>  
                </div>           
                
                <md-field>
                <el-button class="btn-block md-elevation-5" @click="registerController" type="success">Register
                </el-button>
              </md-field>
               <div class="form-group" style="margin-top: 0px">
                  <!-- <md-field> -->
                    <div class="row">
                      <div class="col-xs-12 col-md-6">
                      </div>
                      <div class="col-xs-12 col-md-6" style="font-size: 13px; color: #333 !important;">
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
  import { mapActions, mapGetters } from 'vuex';
  export default {
    props: ['images'],
    data(){
      return {
        rememberme: false,
        user: {
          email: '',
          password: '',
          password2: '',
          terms:true,
          firstName: '',
          lastName:'',
          phone: '',
        },
        error: null,
      }
    },
    computed: {
      ...mapGetters('Auth', ['autherror','autherrorMsg'])
    },
    methods: {
      ...mapActions('Auth', [
          'register'
        ]),

      registerController(){
        var t = this;
        if(this.user.firstName.length < 1){
          this.error = "Provide a First Name";
          return;
        }
        if(this.user.lastName.length < 1){
          this.error = "Provide a Last Name";
          return;
        }
        if(this.user.email.length < 1){
          this.error = "Provide a Email";
          return;
        }
        if(this.user.phone.length < 11){
          this.error = "Provide a Phone";
          return;
        }
        if(this.user.password.length < 5){
          this.error = "Provide a Password";
          return;
        }
        if(this.user.password !== this.user.password2){
          this.error = "Passwords do not match";
          return;
        }
        if(this.user.terms !== true ){
          this.error = "Please Accept Our Terms and Conditions";
          return;
        }
        this.register(this.user).then(result=>{
          if(!result.success){
            t.$notify({
              type: 'warning',
              message: result.message,
              title: 'Registeration Failed'
            })
          }else{
            t.$notify({
              type: 'success',
              message: result.message,
              title: 'Registeration Done'
            });
            t.$router.push({name:'confirmation', query: {email: t.user.email}})
          }
        });
      }
    }
  }
</script>