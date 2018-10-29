<template>
	<div>    
    <!-- Content section Start --> 
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            <div class="page-login-form box md-elevation-5" >
              <h2>Confirmation Email Sent</h2>

              <p>A Confirmation Email has been sent to the email provided. Click on the link in the email to confirm your account and start posting Ads.</p>

              <p>Didn't Get the email? Resend <span class="text-primary" style="cursor: pointer;" @click="resendController">Here</span></p>
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
      }
    },
    computed: {
      ...mapGetters('Auth', ['autherror','autherrorMsg'])
    },
    methods: {
      ...mapActions('Auth', [
          'resend_confirmation'
        ]),

      resendController(){
        var t = this;
        this.resend_confirmation(this.$route.query.email).then(result=>{
          if(!result.success){
            t.$notify({
              type: 'warning',
              message: result.message,
              title: 'Confirmation Re-send'
            })
          }else{
            t.$notify({
              type: 'success',
              message: result.message,
              title: 'Confirmation Resent'
            })
          }
        });
      }
    }
  }
</script>