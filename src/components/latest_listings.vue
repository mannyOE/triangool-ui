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
          <div class="col-md-4 col-sm-6 col-xs-12" v-else v-for="(listing, key) in listings" :key="key" @click="openSingle(listing.Id)">
            <div class="property-main">
              <div class="property-wrap">
                <div class="property-item">
                  <figure class="item-thumb">
                    <a @click.prevent="openSingle(listing.Id)" class="hover-effect" href="#">
                      
                      <img :src="$API+imgLink(listing.images)" alt="">
                    </a>
                    <span class="label-featured" v-if="listing.featured">Featured</span>
                    <div class="label-inner">
                      <span class="label-status label" v-if="listing.category==='apartments'">For Rent</span>
                      <span class="label-status label" v-else>For Sale</span>
                    </div>
                    <div class="price">
                      <span class="item-price">
                        {{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(listing.cost)}}
                      </span>
                    </div>
                    <!-- <ul class="actions">
                      <li>
                        <span class="add-fav"><i class="fa fa-heart"></i></span>
                      </li>
                    </ul> -->
                  </figure>
                  <div class="item-body">
                    <h3 class="property-title"><a @click.prevent="openSingle(listing.Id)" href="#">{{listing.title}}</a></h3>
                    <div class="adderess"><i class="fa fa-map-marker"></i> {{listing.location}}</div>
                    <div class="info">
                     <p style="text-transform: uppercase;">{{listing.category}}</p>
                    </div>
                  </div>               
                </div>              
              </div>
              <div class="item-foot date hide-on-list">
                <div class="pull-left">
                  <p class="prop-user-agent"><i class="icon-user"></i> <a href="#">{{listing.agentName||'Willie Obiano'}} </a></p>
                </div>
                <div class="pull-right">
                  <p class="prop-date"><i class="icon-calendar"></i>{{diff_weeks(listing.date_created)}}</p>
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
        imgLink(images){
          var center = images.filter(ex=>ex.center===true);
          if(center.length > 0){
            return center[0].image;
          }else{
            return images[0].image;
          }
        },
        openSingle(Id){
          console.log(Id);
        },
        diff_weeks(dt) 
        {
          var dt2 = new Date();
          var dt1 = new Date(dt);
          var diff =(dt2.getTime() - dt1.getTime()) / 1000;

          var diff_minutes = diff/ (60);
          var diff_hours = diff/ (60*60);
          var diff_days = diff/ (60*60*24);
          var diff_weeks = diff/ (60*60*24*7);
          var diff_months = diff/ (60*60*24*7*4);
          

          if(diff_months<1){
            if(diff_weeks<1){
              if(diff_days<1){
                if(diff_hours<1){
                  if(diff_minutes<1){
                    return Math.abs(Math.round(diff))+' Seconds ago';
                  }else{
                    return Math.abs(Math.round(diff_minutes))+' Minutes ago';
                  }
                }else{
                  return Math.abs(Math.round(diff_hours))+' Hours ago';
                }
              }else{  
                return Math.abs(Math.round(diff_days))+' Days ago';
              }
            }else{
              return Math.abs(Math.round(diff_weeks))+' Weeks ago';  
            }
          }else{
            return Math.abs(Math.round(diff_months))+' Months ago';
          }
          
        },


    },
    mounted(){
      this.fetchLatestListings().then(x=>{
        
      });
    }
  }
</script>

<style scoped>
  
</style>