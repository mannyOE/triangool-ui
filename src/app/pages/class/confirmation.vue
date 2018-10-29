<template>
	<div>
		<Confirm/>
	</div>
</template>


<script type="text/javascript">
  import Confirm from "@/components/confirmation_sent";
  export default {
    components: {Confirm},
    data(){
    	return {
    		
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