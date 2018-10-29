<template>
	<div>    
    <!-- Content section Start --> 
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            <div class="page-login-form box md-elevation-5" >
              <h2 class="text-center">New Password</h2>

              <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input type="password" v-model="user.password" class="md-elevation-5" placeholder="Password">     
                       <template slot="prepend"><i class="fa fa-lock"></i></template>         
                    </el-input>
                  </md-field> 
                </div> 


                 <div class="form-group" style="margin-top: -10px">
                  <md-field>
                    <el-input type="password" v-model="user.password2" class="md-elevation-5" placeholder="Confirm Password">     
                       <template slot="prepend"><i class="fa fa-lock"></i></template>         
                    </el-input>
                  </md-field> 
                </div> 

                 <md-field>
                <el-button class="btn-block md-elevation-5" @click.prevent="submitController()" type="success">Submit
                </el-button>
              </md-field>



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
    props: ['email'],
    data(){
      return {
        error: null,
        user: {
          password: '',
          password2: ''
        }
      }
    },
    computed: {
      ...mapGetters('Auth', ['autherror','autherrorMsg'])
    },
    methods: {
      ...mapActions('Auth', [
          'send_password'
        ]),

      submitController(){
        var t = this;

        if(t.user.password.length < 5||t.user.password !== t.user.password2){
          t.$notify({
            type: 'warning',
            message: 'Password incorrect or do not match',
            title: 'Password'
          });
          return;
        }
        var data = {
          password: t.user.password,
          token: t.$route.params.token
        }
        this.send_password(data).then(result=>{
          if(!result.success){
            t.$notify({
              type: 'warning',
              message: result.message,
              title: 'Password Change'
            })
          }else{
            t.$notify({
              type: 'success',
              message: result.message,
              title: 'Password Change'
            })
            t.$router.push({name: 'login'});
          }
        });
      }
    }
  }
</script>