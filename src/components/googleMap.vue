<template>
  <div class="google-map" :id="mapName"></div>
</template>


<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
    }
  },
  mounted: function () {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(9.049928, 7.487805)
    }
    var position = new google.maps.LatLng(9.049928, 7.487805)
    const map = new google.maps.Map(element, options);
    const marker = new google.maps.Marker({ 
	    position,
	    map
	  });
  }
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background: gray;
}
</style>