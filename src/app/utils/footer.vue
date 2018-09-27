<template>
	 <el-footer>
     <footer>
      <div class="container">
        <div class="row">
            <!-- Start Contact Widget -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="footer-widget contact-widget">
                <h4>
                  <a href="index.html"><img src="assets/img/logo.png" class="img-responsive" alt="Footer Logo" /></a>
                </h4>
                <p>
                  There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in
                </p>
              </div>
            </div>
            <!-- End Contact Widget -->

            <!-- Start Address Widget -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="footer-widget">
                <h4>
                  Contact Info
                </h4>
                <ul class="address">
                  <li>
                    <a href="#"><i class="icon-location-pin"></i> York Blvd, Los Angeles, US</a>
                  </li>
                  <li>
                    <a href="#"><i class="icon-phone"></i> (518) 2014-040 43</a>
                  </li>
                  <li>
                    <a href="#"><i class="icon-envelope"></i> hello@estatex.com</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-fax"></i> FAX:(123) 123-4567</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End Address Widget -->

            <!-- Start latest Work Posts Widget -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="footer-widget">
                <h4>
                  Usefull Links
                </h4>
                <div class="footer-nav">
                  <ul>
                    <li><a href="#"><i class="icon-arrow-right"></i>Bayonne, New Jersey</a></li>
                    <li><a href="#"><i class="icon-arrow-right"></i>Greenville, New Jersey</a></li>
                    <li><a href="#"><i class="icon-arrow-right"></i>The Heights, New Jersey</a></li>
                    <li><a href="#"><i class="icon-arrow-right"></i>Bayonne, New Jersey</a></li>
                    <li><a href="#"><i class="icon-arrow-right"></i>Greenville, New Jersey</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End latest Work  Widget -->

            <!-- Start Text Widget -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="footer-widget">
                <h4>
                  Image Gallery
                </h4>
                <div class="flicker-gallery">
                  <a href="#"><img src="assets/img/flicker/img1.png" alt=""></a>
                  <a href="#"><img src="assets/img/flicker/img2.png" alt=""></a>
                  <a href="#"><img src="assets/img/flicker/img3.png" alt=""></a>
                  <a href="#"><img src="assets/img/flicker/img4.png" alt=""></a>
                  <a href="#"><img src="assets/img/flicker/img5.png" alt=""></a>
                  <a href="#"><img src="assets/img/flicker/img6.png" alt=""></a>
                </div>
              </div>
            </div>
            <!-- End Text Widget -->
          </div>      
        </div>
      </footer>
    <md-toolbar class="btn-primary">
       <div class="site-info text-center">
          <p>&copy; All rights reserved 2017 - Designed & Developed by <a href="http://uideck.com">UIdeck</a></p>
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
</template>

<script type="text/javascript">
  
  export default {
    data(){
      return {
        menuVisible: true,
      }
    },
    methods: {
    	activePage(page){
    		if(this.$route.name === page){
    			return true;
    		}
    		// console.log(this.$route.name);
    	}
    }
  }
</script>


<style>
	.mrg {
		margin-left: 220px;	
	}
	.md-active {
		border-bottom: 1px solid white !important;
	}
	a {
		color: #fff !important;
		text-decoration: none !important;
	}
  .back {
    background-color: #333333 !important;
  }
	
</style>