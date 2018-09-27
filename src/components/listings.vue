<template>
    <div>
      <!-- Page Header Start -->
    <div class="page-header" :style="{'background-image': 'url(' + require('@/assets/class/img/banner1.jpg') + ')' }">
      <div class="container">
        <div class="row">         
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="page-title">Properties Listing</h2>
              <router-link :to="{name:'home page'}" >Home</router-link>
              <span>/</span>
              <span class="current">Properties Listing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End --> 

    <!-- Main container Start -->  
    <div class="main-container section">
      <div class="container">
        <div class="row">
            <div class="col-md-3 col-xs-12 widget-area-sidebar">
              <div class="sidebar-inner">
                <div class="widget-container">
                  <h3 class="title-sidebar">Advanced Search</h3>
                  <form class="" method="get">
                     <el-select v-model="state" name="movies" placeholder="Select State" class="md-elevation-5 " style="color: #000 !important;width: 100%;">
                      <el-option
                        v-for="item in 4"
                        :key="item"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                    <el-select v-model="university" name="movies" placeholder="Select State" class="md-elevation-5 m-top-20" style="width: 100%; color: #000 !important;">
                      <el-option
                        v-for="item in 4"
                        :key="item"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                    
                    <el-select v-model="type" name="movies" placeholder="Select State" class="md-elevation-5 m-top-20" style="color: #000 !important;width: 100%;">
                      <el-option
                        v-for="item in 4"
                        :key="item"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                    

                  </form>
                  <md-field>
                    <el-button class="btn-block md-elevation-5" type="success">Search Now
                      <span style="margin-left: 12px;" class="fa fa-search"></span>
                    </el-button>
                  </md-field>
                </div>
                <div class="widget-container latest-listings">
                  <h3 class="title-sidebar">Latest Listings</h3>
                  <ul class="posts-list">
                    <li>
                      <div class="widget-thumb">
                        <a href="#"><img src="assets/img/blog/p1.png" alt="" /></a>
                      </div>
                      <div class="widget-content">
                        <a href="#">Villa On Washington Ave</a>
                        <span>$ 5,500,000 </span>
                      </div>
                      <div class="clearfix"></div>
                    </li>
                    <li>
                      <div class="widget-thumb">
                        <a href="#"><img src="assets/img/blog/p2.png" alt="" /></a>
                      </div>
                      <div class="widget-content">
                        <a href="#">Villa On Washington Ave</a>
                        <span>$ 5,500,000 </span>
                      </div>
                      <div class="clearfix"></div>
                    </li>
                    <li>
                      <div class="widget-thumb">
                        <a href="#"><img src="assets/img/blog/p3.png" alt="" /></a>
                      </div>
                      <div class="widget-content">
                        <a href="#">Villa On Washington Ave</a>
                        <span>$ 5,500,000 </span>
                      </div>
                      <div class="clearfix"></div>
                    </li>
                    <li>
                      <div class="widget-thumb">
                        <a href="#"><img src="assets/img/blog/p4.png" alt="" /></a>
                      </div>
                      <div class="widget-content">
                        <a href="#">Villa On Washington Ave</a>
                        <span>$ 5,500,000 </span>
                      </div>
                      <div class="clearfix"></div>
                    </li>
                    <li>
                      <div class="widget-thumb">
                        <a href="#"><img src="assets/img/blog/p5.png" alt="" /></a>
                      </div>
                      <div class="widget-content">
                        <a href="#">Villa On Washington Ave</a>
                        <span>$ 5,500,000 </span>
                      </div>
                      <div class="clearfix"></div>
                    </li>
                  </ul>
                </div>
                <div class="widget-container widget-featured">
                  <h3 class="title-sidebar">Featured Properties</h3>
                  <div id="post-carousel" class="post-slide owl-carousel" data-slider-pagination="true">
                    <div class="item">
                      <div class="widget-img">
                        <img src="assets/img/blog/img1.jpg" alt="">
                        <div class="text">
                          <p>California Residence</p>
                          <span>$3000.000.00</span>
                        </div>
                      </div> 
                    </div>
                    <div class="item">
                      <div class="widget-img">
                        <img src="assets/img/blog/img2.jpg" alt="">
                        <div class="text">
                          <p>2479 Murphy Court</p>
                          <span>$2900.000</span>
                        </div>
                      </div> 
                    </div>
                    <div class="item">
                      <div class="widget-img">
                        <img src="assets/img/blog/img3.jpg" alt="">
                        <div class="text">
                          <p>2186 Rinehart Road</p>
                          <span>$2000.000.00</span>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div class="col-md-9 col-xs-12 page-content">
            <!-- Product filter Start -->
            <div class="product-filter">              
              <div class="title-listing">
                <h2>Property Listing</h2> 
              </div>
              <div class="Show-item">
               <div class="grid-list-count">
                  <a class="grid switchToList" @click.prevent="grid=true" :class="grid?'md-elevation-5':''" href="#"><i style="color: #000;" class="fa fa-th-large"></i></a>
                  <a class="list switchToGrid active" :class="grid?'':'md-elevation-5'" @click.prevent="grid=false" href="#"><i  style="color: #000;" class="fa fa-th-list"></i></a>
                </div>
                <span style="color: #333">Sort By:</span>
                <form class="woocommerce-ordering" method="post">
                  <label>
                    <el-select v-model="sortBy" name="movies" class="md-elevation-5" style="color: #000 !important;">
                      <el-option value="1" label="Newest First"></el-option>
                      <el-option value="2" label="Lowest price first"></el-option>
                      <el-option value="3" label="Highest price first"></el-option>
                      <el-option value="4" label="Date Added"></el-option>
                    </el-select>
                  </label>
                </form>                
              </div>
            </div>
            <!-- Product filter End -->

            <!-- Adds wrapper Start -->
            <div class="adds-wrapper">
              <div class="item-list col-md-4 col-sm-6 col-xs-12" :class="grid?'make-grid':''">
                <div class="property-item table-list">
                  <div class="table-cell">
                    <figure class="item-thumb">
                      <a class="hover-effect" href="property.html">
                        <img :src="require('@/assets/class/img/property/house-1.jpg')" alt="">
                      </a>
                      <span class="label-featured">Featured</span>
                      <ul class="actions">
                        <li>
                          <span class="add-fav"><i class="icon-heart"></i></span>
                        </li>
                      </ul>
                    </figure>
                  </div>
                  <div class="item-body table-cell">
                    <h3 class="property-title"><a href="property.html">Guaranteed modern home</a></h3>
                    <div class="adderess"><i class="icon-location-pin"></i> Drive Street, Los Angeles, US</div>
                    <div class="info">
                     <p><span>Bedroom: 4</span><span>Bathroom: 2</span><span>Sq Ft: 2500</span></p>
                     <p>Single Family Home</p>
                    </div>
                    <span class="prop-user-agent"><i class="icon-user"></i> <a href="#">Maria Barlow</a></span>
                    <span class="prop-date"><i class="icon-calendar"></i>9 months ago</span>
                  </div>  
                  <div class="body-right table-cell hidden-gird-cell">
                    <div class="info-row">
                      <span class="item-price">$29,00/mo</span>
                    </div>
                      <div class="info-row button text-right">
                          <a href="property.html" class="btn btn-common">Details</a>
                      </div>
                  </div>             
                </div> 
              </div>

              <div class="item-list" :class="grid?'make-grid':''">
                <div class="property-item table-list">
                  <div class="table-cell">
                    <figure class="item-thumb">
                      <a class="hover-effect" href="property.html">
                        <img :src="require('@/assets/class/img/property/house-1.jpg')" alt="">
                      </a>
                      <span class="label-featured">Featured</span>
                      <ul class="actions">
                        <li>
                          <span class="add-fav"><i class="icon-heart"></i></span>
                        </li>
                      </ul>
                    </figure>
                  </div>
                  <div class="item-body table-cell">
                    <h3 class="property-title"><a href="property.html">Guaranteed modern home</a></h3>
                    <div class="adderess"><i class="icon-location-pin"></i> Drive Street, Los Angeles, US</div>
                    <div class="info">
                     <p><span>Bedroom: 4</span><span>Bathroom: 2</span><span>Sq Ft: 2500</span></p>
                     <p>Single Family Home</p>
                    </div>
                    <span class="prop-user-agent"><i class="icon-user"></i> <a href="#">Maria Barlow</a></span>
                    <span class="prop-date"><i class="icon-calendar"></i>9 months ago</span>
                  </div>  
                  <div class="body-right table-cell hidden-gird-cell">
                    <div class="info-row">
                      <span class="item-price">$29,00/mo</span>
                    </div>
                      <div class="info-row button text-right">
                          <a href="property.html" class="btn btn-common">Details</a>
                      </div>
                  </div>             
                </div> 
              </div>
              



            </div>
            <!-- Adds wrapper End -->
            
            <!-- Start Pagination -->
            <div class="pagination-bar">
              <ul class="pagination">
              <li class="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a class="pagination-btn" href="#">Next »</a></li>
              </ul>
            </div>
            <!-- End Pagination -->
          </div>
        </div>
      </div>
    </div>
    <!-- Main container End -->  
    </div>
</template>
  
<script type="text/javascript">
  
  export default {
    props: ['images'],
    data(){
      return {
        sortBy: "4",
        grid: false,
        university: null,
        state: null,
        type: null,
      }
    }
  }
</script>

<style scoped>
  .pagination li a{
    color: #333 !important;
  }
  .pagination li .active a{
    color: #fff !important;
  }
</style>