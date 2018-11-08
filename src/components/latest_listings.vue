<template>
    
    <!-- Property Section Start -->
    <section class="property section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">            
            <h2 class="section-title">Latest Listings</h2>
          </div>

          <div v-if="listings.length<1" class="text-center" style="padding-top: 80px; padding-bottom: 40px;">
            <h3>
              <span class="fa fa-folder fa-2x"></span><br>
              No Latest Listings
            </h3>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12" v-else v-for="listing in listings">
            <div class="property-main">
              <div class="property-wrap">
                <div class="property-item">
                  <figure class="item-thumb">
                    <a class="hover-effect" href="property.html">
                      <img :src="require('@/assets/class/img/property/house-1.jpg')" alt="">
                    </a>
                    <span class="label-featured">Featured</span>
                    <div class="label-inner">
                      <span class="label-status label">For Sale</span>
                    </div>
                    <div class="price">
                      <span class="item-price">$526.885</span>
                      <span class="item-sub-price">$3.500/sq ft</span>
                    </div>
                    <ul class="actions">
                      <li>
                        <span class="add-fav"><i class="fa fa-heart"></i></span>
                      </li>
                    </ul>
                  </figure>
                  <div class="item-body">
                    <h3 class="property-title"><a href="property.html">Guaranteed modern home</a></h3>
                    <div class="adderess"><i class="icon-location-pin"></i> Drive Street, Los Angeles, US</div>
                    <div class="info">
                     <p><span>Bedroom: 4</span><span>Bathroom: 2</span><span>Sq Ft: 2500</span></p>
                     <p>Single Family Home</p>
                    </div>
                  </div>               
                </div>              
              </div>
              <div class="item-foot date hide-on-list">
                <div class="pull-left">
                  <p class="prop-user-agent"><i class="icon-user"></i> <a href="#">Will Ernest </a></p>
                </div>
                <div class="pull-right">
                  <p class="prop-date"><i class="icon-calendar"></i>9 months ago</p>
                </div>
              </div>
            </div>
          </div> 
          <div class="text-center">
            <a href="gridlisting.html" class="btn btn-common">Load More</a>
          </div>        
        </div>
      </div>
    </section>
    <!-- Property Section End --> 

</template>
  
<script type="text/javascript">
  import { mapActions, mapGetters } from 'vuex';
  export default {
    props: ['images'],
    data(){
      return {
        loading: false,
      }
    },
    computed: {
      ...mapGetters('Listing', ['listings'])
    },
    methods: {
      ...mapActions('Listing', [
          'fetchLatestListings'
        ]),
    },
    mounted(){
      this.fetchLatestListings();
    }
  }
</script>

<style scoped>
  
</style>