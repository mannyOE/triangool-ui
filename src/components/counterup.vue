<template>
	<!-- Counter Section Start -->
    <section id="counter">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="counting">
              <div class="desc">
                <div class="icon"><i class="icon-home"></i>
                  <h3 class="counter"> 999</h3> 
                </div>
                <p>Complete Project</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="counting">
              <div class="desc">
                <div class="icon">
                  <i class="icon-key"></i><h3 class="counter">720</h3>
                </div>                
                <p>Property Sold</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="counting">
              <div class="desc">
                <div class="icon">
                  <i class="icon-emotsmile"></i><h3 class="counter">450</h3>
                </div>                
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="counting">
              <div class="desc">
                <div class="icon">
                  <countup :value="startUp" :to="to"></countup>
                  <!-- <i class="icon-cup"></i><h3 class="counter">120</h3> -->
                </div>                
                <p>Awards Win</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Counter Section End --> 
</template>

<script type="text/javascript">
  import { countup } from 'vue-countup2';
  export default {
    components: {countup},
    data(){
      return {
        startUp: true,
        to: 2000
      }
    }
  }
</script>