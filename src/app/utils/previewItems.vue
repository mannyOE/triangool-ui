<template>
   <swiper :options="swiperOption" style="height: auto">
        <swiper-slide v-for="(item, index) in images" :key="item.image" 
        style="background-repeat:no-repeat; height: 450px; background-size:cover;"   
        :style="{ 'background-image': 'url(' + $API+item.image + ')' }">
          <div class="text-center">
              <div :class="item.center===true?'center':''" style="padding-top: 15px;">
                  <el-button size="mini" v-if="!item.center" class="btn-success" @click="makeCenterPiece(index)">
                        Use this as Centerpiece
                  </el-button>
                    <span class="btn-success md-elevation-5"  v-else>This is the centerpiece photo</span>
                    <el-button @click="deleteImageItem(item)" class="btn-warning md-elevation-5 fa fa-trash-o text-primary" size="mini"></el-button>
              </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
</template>

<script type="text/javascript">
  
  export default {
    props: ['images','auto'],
    data(){
      return {
        swiperOption: {
          // autoHeight: true, //enable auto height
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
        options(){
            if(this.auto){
                this.swiperOption.autoplay = {
                        delay: 3500,
                        disableOnInteraction: false,
                    };
            }else{
                delete this.swiperOption.autoplay;
            }
            return this.swiperOption;
        }
    },
    methods: {
        deleteImageItem(item){
            this.$emit('delete', item)
        },
        makeCenterPiece(index1){
            
            var index = this.images.findIndex(x => x.center === true);
            if(index === -1){
                this.images[index1].center = true;
                console.log(this.images);
                return;
            }else{
                this.images[index].center = false;
                this.images[index1].center = true;
                console.log(this.images);
                return;
            }
        }
    }

  }
</script>

<style scoped>
  .center {
      border: 2px solid blueviolet;
      height: 450px;
      width: 98%;
      border-right: none;
  }
  .body {
      height: 98%;
      width: 98%;
      background-color: black !important;
  }
</style>
