<template>
   <swiper :options="swiperOption" style="height: auto">
        <swiper-slide v-for="item in images" :key="item.image" style="background-repeat:no-repeat; height: 450px; background-size:cover;"   :style="{ 'background-image': 'url(' + item.image + ')' }">
          
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
</template>

<script type="text/javascript">
  
  export default {
    props: ['images'],
    data(){
      return {
        swiperOption: {
          // autoHeight: true, //enable auto height
          spaceBetween: 20,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style scoped>
  
</style>