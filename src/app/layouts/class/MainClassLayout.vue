<template>
  <div>
    <Navigation style="margin-bottom: 10px"/>
    <router-view/>
    <Foter/>
  </div>
</template>

<script type="text/javascript">
  
  import Carousel from "@/app/utils/carousel";
  import Navigation from "@/app/utils/navigation";
  import Foter from "@/app/utils/footer";
  export default {
    components: {Carousel, Navigation, Foter},
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