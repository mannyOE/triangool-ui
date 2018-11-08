<template>
	<div>
		<div class="row" style="padding-left: 20px; padding-right: 20px;">
			<Carousel :images="images"/>
		</div>
		<SearchForm/>

    <Latest/>
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