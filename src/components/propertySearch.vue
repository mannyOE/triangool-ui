<template>
	<div class="container" style="margin: -15px auto 0px auto;">		    
		    <div class=" row">
		      <div class="col-lg-6  col-md-4  col-xs-12">
		        <md-field>
		          <el-input v-model="search" placeholder="What are you looking for?" class="md-elevation-5">
			    </el-input>
		        </md-field>
		      </div>

		      <div class="col-lg-3  col-md-4  col-xs-12">
		        <md-field>
		          <el-select v-model="state" name="movies" filterable placeholder="Select State" class="md-elevation-5" style="color: #000 !important; width: 100%;">
				    <el-option
				      v-for="state in $states"
				      :key="state.value"
				      :label="state.show"
				      :value="state.value">
				    </el-option>
			    </el-select>
		        </md-field>
		      </div>
		       <div class="col-lg-3  col-md-4  col-xs-12">
		        <md-field>
		          <el-button class="btn-block md-elevation-5" type="success">Find Your Item
		          	<span style="margin-left: 12px;" class="fa fa-search"></span>
		          </el-button>
		        </md-field>
		      </div>


		    </div>
  
		</div>
</template>

 
<script type="text/javascript">
  
  export default {
    props: ['images'],
    data(){
      return {
        sortBy: "4",
        grid: false,
        university: null,
        state: null,
        type: null,
        search: '',
      }
    }
  }
</script>