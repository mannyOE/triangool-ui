<template>
	<div>
		
    <!-- Page Header Start -->
   <div class="page-header" :style="{'background-image': 'url(' + require('@/assets/class/img/banner1.jpg') + ')' }">  <div class="container">
        <div class="row">         
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="page-title">Contact Us</h2>
              <router-link :to="{name:'home page'}">Home</router-link>
              <span>/</span>
              <span class="current">Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End --> 
    <Map name="google"/>    
    <!-- <div id="google-maps"></div> -->
    <!-- End Map Section -->
    <!-- <GmapMap 
	  :center="{lat:9.049928, lng:7.487805}"
	  :zoom="10"
	  map-type-id="labels"
	  style="width: 100%; height: 300px"
	>
	  <GmapMarker
	    :key="index"
	    v-for="(m, index) in markers"
	    :position="m.position"
	    :clickable="true"
	    :draggable="true"
	    @click="center=m.position"
	  />
	</GmapMap> -->
    <!-- Support Section Start -->
    <div class="support">
      <div class="container">
        <div class="row">
         <div class="support-inner">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <h4>Book By Phone</h4>
            <div class="support-info">
              <div class="info-title">
                <i class="fa fa-phone"></i>
                1-234-567-478-2214
                <span>Booking time: 0900 – 2000 hrs</span>
              </div>
            </div>
          </div>          
          <div class="col-md-4 col-sm-6 col-xs-12">
            <h4>Location Address</h4>
            <div class="support-info">
              <div class="info-title">
                <i class="fa fa-map-marker"></i>
                Address
                <span>206  10th street, Abuja</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <h4>Give Your Feedback</h4>
            <div class="support-info">
              <div class="info-title">
                <i class="fa fa-envelope"></i>
                Feedback@property.com
                <span>Help Us improve!</span>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    <!-- Support Section End -->
      
      <!-- Start Contact Us Section -->
      <section class="contact section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-title">
                SEND US A MESSAGE
              </h2>
              <!-- Form -->
              <form id="contactForm" class="contact-form" data-toggle="validator">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                        	<md-field>
					          <el-input class="md-elevation-5" placeholder="Full Name">					          	
					          </el-input>
					        </md-field> 
                        </div>
                      </div> 
                      <div class="col-md-12">
                        <div class="form-group">
                        	<md-field style="margin-top: -1px !important">
					          <el-input class="md-elevation-5" placeholder="mail@sitename.com">					          	
					          </el-input>
					        </md-field> 
                        </div>
                      </div> 
                      <div class="col-md-12">
                        <div class="form-group">
                        	<md-field style="margin-top: -1px !important">
					          <el-input class="md-elevation-5" placeholder="Subject">					          	
					          </el-input>
					        </md-field> 
                        </div>
                      </div>                       
                    </div>
                    <md-field>
			          <el-button class="md-elevation-5" type="success">Send Message
			          	<span style="margin-left: 12px;" class="fa fa-envelope"></span>
			          </el-button>
			        </md-field>
                    <div id="msgSubmit" class="h3 text-center hidden"></div> 
                    <div class="clearfix"></div> 
                  </div>    
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                        	<md-field>
					          <el-input type="textarea" :rows="9" class="md-elevation-5" placeholder="Tpe your message here">					          	
					          </el-input>
					        </md-field> 
                        </div>
                      </div>
                    </div>
                  </div>    
                </div> 
              </form>
            </div>
          </div>
        </div>
      </section>
      <!-- End Contact Us Section  -->    
    
	</div>
</template>


<script type="text/javascript">
  import Map from "@/components/googleMap";
  export default {
    components: {Map},
    props: ['images'],
    data(){
      return {
                
      }
    },
    mounted: function () {
      
    }
  }
</script>