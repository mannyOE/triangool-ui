<template>
	<div>
		<div class="row">
			<Carousel :images="images"/>
		</div>
		<SearchForm/>

    <Latest/>
    <!-- Property Highlights Start -->
      <section class="property-highlights">
        <div class="container">
          <div class="row">            
            <div class="col-md-6 col-sm-12 col-xs-12">
              <h2 class="title-hl">Property Highlights</h2>
              <p class="content-hl">Extensive upgrades and thorough maintenance have kept this home in prime condition. Hardwood floors and new carpets create a very comfortable living space.</p>
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
                        Large play center in yard
                      </h4>
                      <p>
                        Your kids will be happy having all these things around
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" class="btn btn-common">Learn More</a>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
                <Carousel :images="featureImages"/>
            </div>
          </div>
        </div>
      </section>
      <!-- End Property Highlights Section --> 

      <Agents/>



       
    <Counter/>


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