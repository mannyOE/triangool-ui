<template>
	 <div>
	 	<section class="content-header">
      <h1>
        User Profile
      </h1>
    </section>

    <!-- Main content -->
    <section class="content ovrf">

      <div class="row">
        <div class="col-md-3">
        	

          <!-- Profile Image -->
          <div class="box box-primary">
            <div class="box-body box-profile">
              
		          <div class="text-center">
		          	<img :src="require('@/assets/dist/img/avatar5.png')"  class="img-circle" style="width: 180px; height: 200px" alt="User Image" v-if="user.image===null||user.image===''||user.image===undefined">

		          <img :src="$API+user.image" class="img-circle" alt="User Image" style="width: 180px; height: 200px" v-else>
		          <br>
		          	<el-upload :headers="dataSent" :action="$API+'api/users/upload_profile'" :on-success="upload_complete" :on-error="upload_failed" :before-upload="beforeUpload">
		        	    <el-button :loading="uploading" class="btn btn-primary btn-xs" role="button">Upload <i class="fa fa-upload"></i></el-button>
		        	</el-upload>
		          </div>
              <h3 class="profile-username text-center" style="text-transform: capitalize;">{{user.firstName+' '+user.lastName}}</h3>

              <ul class="list-group list-group-unbordered">
                <li class="list-group-item">
                  <b>Total Item Views</b> <a class="pull-right">13,287</a>
                </li>
              </ul>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

          
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-9">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li :class="enabled?'active':''"><a href="#timeline" data-toggle="tab">Timeline</a></li>
              <li :class="!enabled?'active':''"><a href="#settings" data-toggle="tab">Modify Profile</a></li>
              <li><a href="#password" data-toggle="tab">Modify Password</a></li>
            </ul>
            <div class="tab-content">
              <!-- /.tab-pane -->
              <div class="tab-pane overf" :class="enabled?'active':''" id="timeline">
                <!-- The timeline -->
                <ul class="timeline timeline-inverse">
                  <!-- timeline time label -->
                  <li class="time-label">
                        <span class="bg-red">
                          10 Feb. 2014
                        </span>
                  </li>
                  <!-- /.timeline-label -->
                  <!-- timeline item -->
                  <li>
                    <i class="fa fa-envelope bg-blue"></i>

                    <div class="timeline-item">
                      <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>

                      <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                      <div class="timeline-body">
                        Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                        weebly ning heekya handango imeem plugg dopplr jibjab, movity
                        jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                        quora plaxo ideeli hulu weebly balihoo...
                      </div>
                      <div class="timeline-footer">
                        <a class="btn btn-primary btn-xs">Read more</a>
                        <a class="btn btn-danger btn-xs">Delete</a>
                      </div>
                    </div>
                  </li>
                  <!-- END timeline item -->
                  <!-- timeline item -->
                  <li>
                    <i class="fa fa-user bg-aqua"></i>

                    <div class="timeline-item">
                      <span class="time"><i class="fa fa-clock-o"></i> 5 mins ago</span>

                      <h3 class="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request
                      </h3>
                    </div>
                  </li>
                  <!-- END timeline item -->
                  <!-- timeline item -->
                  <li>
                    <i class="fa fa-comments bg-yellow"></i>

                    <div class="timeline-item">
                      <span class="time"><i class="fa fa-clock-o"></i> 27 mins ago</span>

                      <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                      <div class="timeline-body">
                        Take me to your leader!
                        Switzerland is small and neutral!
                        We are more like Germany, ambitious and misunderstood!
                      </div>
                      <div class="timeline-footer">
                        <a class="btn btn-warning btn-flat btn-xs">View comment</a>
                      </div>
                    </div>
                  </li>
                  <!-- END timeline item -->
                  <!-- timeline time label -->
                  <li class="time-label">
                        <span class="bg-green">
                          3 Jan. 2014
                        </span>
                  </li>
                  <!-- /.timeline-label -->
                  <!-- timeline item -->
                  <li>
                    <i class="fa fa-camera bg-purple"></i>

                    <div class="timeline-item">
                      <span class="time"><i class="fa fa-clock-o"></i> 2 days ago</span>

                      <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                      <div class="timeline-body">
                        <img src="http://placehold.it/150x100" alt="..." class="margin">
                        <img src="http://placehold.it/150x100" alt="..." class="margin">
                        <img src="http://placehold.it/150x100" alt="..." class="margin">
                        <img src="http://placehold.it/150x100" alt="..." class="margin">
                      </div>
                    </div>
                  </li>
                  <!-- END timeline item -->
                  <li>
                    <i class="fa fa-clock-o bg-gray"></i>
                  </li>
                </ul>
              </div>
              <!-- /.tab-pane -->

              <div class="tab-pane overf" :class="enabled?'':'active'" id="settings">
                <form class="form-horizontal" @submit.prevent="update()">
                	<div class="row">
                		<div class="col-md-6"></div>
                		<div class="col-md-6"></div>
                	</div>
                	<div class="row">
                	<section class="content-header">
				      <h1>
				        Modify Profile
				      </h1>
				    </section>
                		<div class="col-md-6">
                			<div class="form-group">

			                    <div class="col-sm-11">
			                    <label class="control-label">First Name</label>
			                      <input type="text" class="form-control" v-model="user.firstName" placeholder="First Name">
			                    </div>
			                  </div>
                		</div>
                		<div class="col-md-6">
                			<div class="form-group">

			                    <div class="col-sm-11">
			                    <label class="control-label">Last Name</label>
			                      <input type="text" v-model="user.lastName" class="form-control" placeholder="Name">
			                    </div>
			                  </div>
                		</div>
                	</div>


                	<div class="row">
                		<div class="col-md-6">
                			<div class="form-group">

			                    <div class="col-sm-11">
			                    <label class="control-label">Email</label>
			                      <input type="email" v-model="user.email" class="form-control" placeholder="Email">
			                    </div>
			                  </div>
                		</div>
                		<div class="col-md-6">
                			<div class="form-group">
			                    <div class="col-sm-11">
			                    <label class="control-label">Phone Number</label>
			                      <input type="text" v-model="user.phone" class="form-control" placeholder="Phone Number">
			                    </div>
			                  </div>
                		</div>
                	</div>    

                	<div class="row">
                		<div class="col-md-6">
                			<div class="form-group">

			                    <div class="col-sm-11">
			                    <label class="control-label">Company Name</label>
			                      <input type="text" v-model="user.company" class="form-control" placeholder="Company Name">
			                    </div>
			                  </div>
                		</div>
                		<div class="col-md-6">
                			<div class="form-group">
			                    <div class="col-sm-11">
			                    <label class="control-label">Job Title</label>
			                      <input type="text" v-model="user.title" class="form-control" placeholder="Job Title">
			                    </div>
			                  </div>
                		</div>
                	</div>                  
                
                  <div class="form-group">
                    <div class="col-sm-offset-10 col-sm-2">
                      <button type="submit" class="btn btn-danger">Save</button>
                    </div>
                  </div>
                </form>                    
              </div>
              <!-- /.tab-pane -->


              <div class="tab-pane overf" id="password">
                	<div class="row">
                		<div class="col-md-6"></div>
                		<div class="col-md-6"></div>
                	</div>
	                <form class="form-horizontal" @submit.prevent="changePassword()">
	                	<div class="row">
		                	<section class="content-header">
						      <h1>
						        Change Password
						      </h1>
						    </section>
	                		<div class="col-md-8">
	                			<div class="form-group">

				                    <div class="col-sm-12">
				                    <label class="control-label">Old Password</label>
				                      <input type="password" class="form-control" v-model="change.old" placeholder="Old Password">
				                    </div>
				                  </div>
	                		</div>
	                	</div>


	                	<div class="row">
	                		<div class="col-md-6">
	                			<div class="form-group">

				                    <div class="col-sm-11">
				                    <label class="control-label">New Password</label>
				                      <input type="password" v-model="change.new" class="form-control" placeholder="New Password">
				                    </div>
				                  </div>
	                		</div>
	                		<div class="col-md-6">
	                			<div class="form-group">
				                    <div class="col-sm-11">
				                    <label class="control-label">Confirm New Password</label>
				                      <input type="password" v-model="change.confirm" class="form-control" placeholder="Confirm New Password">
				                    </div>
				                  </div>
	                		</div>
	                	</div>                      
	                
	                  <div class="form-group">
	                    <div class="col-sm-offset-10 col-sm-2">
	                      <button type="submit" class="btn btn-danger">Save</button>
	                    </div>
	                  </div>
	                </form>
	            </div>
	        </div>
            <!-- /.tab-content -->
          </div>
          <!-- /.nav-tabs-custom -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

    </section>
	 </div>
</template>



<script type="text/javascript">
  import { mapActions, mapGetters } from 'vuex';
  export default {
    props: ['images'],
    data(){
      return {
        change: {
        	old: '',
        	new:'',
        	confirm:''
        },
        uploading: false,
      }
    },
    computed: {
      ...mapGetters('UserCreds', ['user','enabled','token']),
      dataSent(){
      	var dt = {};
      	dt.token = this.token;
      	dt.old = this.user.image;
      	return dt;
      }

    },
    methods: {
    ...mapActions('UserCreds', ['logout','callWithToken','setUser','setEnabled']),
    ...mapActions('Auth', ['change_password','updateUser']),
      logoutUser(){
      	this.logout();
      	this.$router.push({name:'login'});
      },
      update(){
      	var t = this;
      	this.callWithToken({
    			parameters: this.user,
    			action: this.updateUser
    		}).then(result=>{
    			if(result.success){
    				t.setEnabled(result.result.enabled);
    				t.setUser(result.result);
    				t.$notify({
		              type: 'success',
		              message: result.message,
		              title: 'Profile Update'
		            });
		            return;
    			}

    			if(!result.success){
    				t.$notify({
		              type: 'warning',
		              message: result.message,
		              title: 'Profile Update'
		            });
		            return;
    			}
    		})
      },
    	activeLink(tab){
    		if(this.$route.name === tab){
    			return true;
    		}
    		return false;
    	},
    	upload_complete(response, file, fileList){
    		this.uploading = false;
    		this.setUser(response.result);
    	},
    	upload_failed(error, file, fileList){
    		this.uploading = false;
    	},
    	beforeUpload(file){
    		this.uploading = true;
    	},
    	changePassword(){

    		var t = this;
    		if(this.change.new!==this.change.confirm){
    			t.$notify({
	              type: 'warning',
	              message: 'Confirm New Password',
	              title: 'Password Confirmation Mismatch'
	            });
	            return;
    		}

    		if(this.change.new.length<5){
    			t.$notify({
	              type: 'warning',
	              message: 'New Password Too Short',
	              title: 'Password Length'
	            });
	            return;
    		}


    		this.callWithToken({
    			parameters: this.change,
    			action: this.change_password
    		}).then(result=>{
    			if(result.success){

    				t.change.old = '';
    				t.change.new = '';
    				t.change.confirm = '';
    				t.$notify({
		              type: 'success',
		              message: result.message,
		              title: 'Password Change'
		            });
		            return;
    			}

    			if(!result.success){
    				t.$notify({
		              type: 'warning',
		              message: result.message,
		              title: 'Password Change'
		            });
		            return;
    			}
    		})
    	}
    }
  }
</script>


<style type="text/css">
	.el-upload__input, .el-upload-list {
		display: none !important;
	}
</style>