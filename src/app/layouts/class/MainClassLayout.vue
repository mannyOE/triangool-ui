<template>
  <el-container>
  <el-header class="">
    <Navigation/>
  </el-header>
  <el-main class="md-scrollbar">
    <router-view/>
  </el-main>
  <el-footer>
     <footer>
      <div class="container">
        <div class="row">
            <!-- Start Contact Widget -->
            <div class="col-xs-12 col-sm-12 col-md-1"></div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="footer-widget contact-widget">
                <h4>
                  <a href="index.html"><img :src="require('@/assets/class/img/logo.png')" class="img-responsive" alt="Footer Logo" /></a>
                </h4>
                <p>
                  There are many options to choose from on @triangoolateProperties, just search for suitable apartments, login/create account and contact the agent
                </p>
              </div>
            </div>
            <!-- End Contact Widget -->

            <!-- Start Address Widget -->
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="footer-widget">
                <h4>
                  Contact Info
                </h4>
                <ul class="address">
                  <li>
                    <a href="#"><i class="fa fa-map-marker"></i> Dhabi Street, Abuja FCT, NG</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-phone"></i> (234) 813-864-1965</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-envelope"></i> hello@triangoolate.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End Address Widget -->

            

            <!-- Start Text Widget -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="footer-widget">
                <h4>
                  Image Gallery
                </h4>
                <div class="flicker-gallery">
                  <a href="#"><img :src="require('@/assets/class/img/flicker/img1.png')" alt=""></a>
                  <a href="#"><img :src="require('@/assets/class/img/flicker/img2.png')" alt=""></a>
                  <a href="#"><img :src="require('@/assets/class/img/flicker/img3.png')" alt=""></a>
                  <a href="#"><img :src="require('@/assets/class/img/flicker/img4.png')" alt=""></a>
                  <a href="#"><img :src="require('@/assets/class/img/flicker/img5.png')" alt=""></a>
                  <a href="#"><img :src="require('@/assets/class/img/flicker/img6.png')" alt=""></a>
                </div>
              </div>
            </div>
            <!-- End Text Widget -->
          </div>      
        </div>
      </footer>
    <md-toolbar class="btn-primary back">
       <div class="site-info text-center">
          <p>&copy; All rights reserved {{new Date().getFullYear()}} - Designed & Developed by <a href="http://ahmanny.com">Ahmanny</a></p>
        </div> 
        <a href="#" class="back-to-top">
          <i class="fa fa-arrow-up"></i>
        </a>
    </md-toolbar>
      <div id="loader" v-if="menuVisible">
        <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div>
      </div>
  </el-footer>
</el-container>
</template>

<script type="text/javascript">
  
  import Carousel from "@/app/utils/carousel";
  import Navigation from "@/app/utils/navigation";
  import Footer from "@/app/utils/footer";
  export default {
    components: {Carousel, Navigation},
    data(){
      return {
        menuVisible: false,
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    
    color: #fff !important;
    text-align: center;
    padding-left: 0px;
    padding-right: 0px;
    /*line-height: 60px;*/
  }
  .el-main {
    /*background-color: #5c6bc0;*/
    color: #fff !important;
    text-align: center;
    /*line-height: 160px;*/
    margin-top: 60px;
  }
  .el-container {
    width: 100%;
    margin-right: 0px;
  }
  .md-toolbar {
    padding-top: 10px;
  }
  .custom-toolbar {
    background-color: #7e57c2;
  }
  .site-info {
    text-align: center !important;
    color: #fff !important;
  }
  .back {
    background-color: #333333 !important;
  }
  @media screen and (max-width: 600px) {
    .el-main {
        margin-top: 100px;
    }
}
   
</style>