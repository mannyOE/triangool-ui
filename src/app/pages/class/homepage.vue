<template>
	<div>
		<div class="row" style="padding-left: 20px; padding-right: 20px;">
			<Carousel :images="images"/>
		</div>
		<SearchForm/>

    <Latest/>
    <!-- Property Highlights Start -->
      <section class="property-highlights">
        <div class="container">
          <div class="row">            
            <div class="col-md-6 col-sm-12 col-xs-12">
              <h2 class="title-hl">Triangoolate Highlights</h2>
              <p class="content-hl">Keeping you informed about every comfortable living space in the vicinity of your university as well as providing contacts for other household goods and service.</p>
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <div class="features-box">
                    <div class="features-icon">
                      <i class="icon-map"></i>
                    </div>
                    <div class="features-content">
                      <h4>
                        Quiet Neighbourhood
                      </h4>
                      <p>
                        Enjoy tranquil and relaxed atmosphere of the place
                      </p>
                    </div>
                  </div>
                </div> 
                <div class="col-md-6 col-sm-6">
                  <div class="features-box">
                    <div class="features-icon">
                      <i class="icon-settings"></i>
                    </div>
                    <div class="features-content">
                      <h4>
                        Great local community
                      </h4>
                      <p>
                        You will be delighted by the fantastic local community
                      </p>
                    </div>
                  </div>
                </div>           
                <div class="col-md-6 col-sm-6">
                  <div class="features-box">
                    <div class="features-icon">
                     <i class="icon-hourglass"></i>
                    </div>
                    <div class="features-content">
                      <h4>
                        Fabulous views
                      </h4>
                      <p>
                        Get yourself surrounded by the stunning view opening
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="features-box">
                    <div class="features-icon">
                      <i class="icon-layers"></i>
                    </div>
                    <div class="features-content">
                      <h4>
                        Proximity to Campus
                      </h4>
                      <p>
                        You will find there is no hassle with getting to the campus everyday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
                <Carousel :images="featureImages"/>
            </div>
          </div>
        </div>
      </section>
      <!-- End Property Highlights Section --> 

      <Agents/>

	</div>
</template>


<script type="text/javascript">
  import { countup } from 'vue-countup2';
  import Carousel from "@/app/utils/carousel";
  import Latest from "@/components/latest_listings";
  import Counter from "@/components/counterup";
  import Agents from "@/components/someAgents";
  import SearchForm from "@/components/propertySearch";
  export default {
    components: {Carousel, countup, Latest, Counter, Agents, SearchForm},
    data(){
    	return {
    		images:[{image:require("@/assets/class/img/slider/bg-1.jpg"),name:"Musa Ibrahim",company:"Natterbase",pos:"Full stack developer",quote:"sdhnskjdhksdhksmdhksdsdsd sdkjsnkjsdhs dshdgnsdhgdj sjdgsddj sdjhd dshdgdjdh sgdjhbdsd"},
    		{image:require("@/assets/class/img/slider/bg-2.jpg"),name:"Musa Ibrahim",company:"Natterbase",pos:"Full stack developer",quote:"sdhnskjdhksdhksmdhksdsdsd sdkjsnkjsdhs dshdgnsdhgdj sjdgsddj sdjhd dshdgdjdh sgdjhbdsd"}
    		],
        featureImages: [{image:require("@/assets/class/img/featured/img1.jpg"),name:"Musa Ibrahim",company:"Natterbase",pos:"Full stack developer",quote:"sdhnskjdhksdhksmdhksdsdsd sdkjsnkjsdhs dshdgnsdhgdj sjdgsddj sdjhd dshdgdjdh sgdjhbdsd"},
        {image:require("@/assets/class/img/featured/img2.jpg"),name:"Musa Ibrahim",company:"Natterbase",pos:"Full stack developer",quote:"sdhnskjdhksdhksmdhksdsdsd sdkjsnkjsdhs dshdgnsdhgdj sjdgsddj sdjhd dshdgdjdh sgdjhbdsd"},
        {image:require("@/assets/class/img/featured/img3.jpg"),name:"Musa Ibrahim",company:"Natterbase",pos:"Full stack developer",quote:"sdhnskjdhksdhksmdhksdsdsd sdkjsnkjsdhs dshdgnsdhgdj sjdgsddj sdjhd dshdgdjdh sgdjhbdsd"}],
    		movies: [],
      country: null,
      font: null,
      to: 200,
      startUp: true,
    	}
    }
  }
</script>

<style type="text/css" scoped>
	.el-input__inner {
		color: #000 !important;
	}
	.md-elevation-5 {
		width: 100%;
	}
</style>