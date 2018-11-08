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
              <form class="login-form" v-if="mail_sent" @submit.prevent="recoverController">
                <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input class="md-elevation-5" v-model="user.email" placeholder="Email">     
                       <template slot="prepend"><i class="fa fa-user"></i></template>         
                    </el-input>
                  </md-field> 
                </div>
                <md-field>
                <el-button :loading="loading" class="btn-block md-elevation-5" @click="recoverController" type="success">Submit
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

              <div v-else>
              <p>Recovery Token sent to your email, click on the link provided and enter a new password to continue.</p>
              </div>
              
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
        },
        notSumitted: true,
        loading: false,
      }
    },
    computed: {
      ...mapGetters('Auth', ['autherror','autherrorMsg']),
      mail_sent(){
        if(this.$route.query.sent){
          return false;
        }
        return true;
      }
    },
    methods: {
      ...mapActions('Auth', [
          'send_password_token'
        ]),
      recoverController(){
        var t = this;
        if(t.user.email.length < 5){
          t.$notify({
            type: 'warning',
            message: 'Invalid Email Provided',
            title: 'Failed to send token'
          });
          return;
        }
        t.loading = true;
        this.send_password_token(this.user).then(result=>{
          if(!result.success){
            t.$notify({
              type: 'warning',
              message: result.message,
              title: 'Failed to send token'
            });
            t.loading = false;
            return;
          }else{
            t.$notify({
              type: 'success',
              message: result.message,
              title: 'token sent'
            });
            t.loading = false;
            t.$router.push({name: 'forgot-passsword', query: {sent: true}});
          }
        });
      }
    }
  }
</script>