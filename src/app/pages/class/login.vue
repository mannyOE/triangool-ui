<template>
	<div>
		
    <!-- Page Header Start -->
    <div class="page-header" :style="{'background-image': 'url(' + require('@/assets/class/img/banner1.jpg') + ')' }">
      <div class="container">
        <div class="row">         
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="page-title">Login to account</h2>
              <router-link :to="{name:'home page'}" >Home</router-link>
              <span>/</span>
              <span class="current">Login</span>
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
                Login
              </h3>
              <form class="login-form">
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input class="md-elevation-5" v-model="user.email" placeholder="Email">     
                       <template slot="prepend"><i class="fa fa-user"></i></template>         
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
                <md-field>
                <el-button class="btn-block md-elevation-5" @click.prevent="loginController()" type="success">Submit
                </el-button>
              </md-field>
              
              <div class="form-group" style="margin-top: 0px">
                  <!-- <md-field> -->
                    <div class="row">
                      <div class="col-xs-12 col-md-6">
                        <router-link :to="{name: 'forgot-passsword'}" class="text-center" style="font-size: 13px;font-weight: bolder; color: #333 !important;">Forgot Password</router-link>  
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
  import { mapActions, mapGetters } from 'vuex';
  export default {
    props: ['images'],
    data(){
      return {
        rememberme: false,
        user: {
          email: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters('Auth', ['autherror','autherrorMsg'])
    },
    methods: {
      ...mapActions('Auth', [
          'login'
        ]),

      loginController(){
        var t = this;
        this.login(this.user).then(result=>{
          if(!result.success){
            t.$notify({
              type: 'warning',
              message: result.message,
              title: 'Login Failed'
            })
          }else{

          }
        });
      }
    }
  }
</script>