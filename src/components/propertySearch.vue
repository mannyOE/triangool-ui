<template>
	<div class="container" style="margin: 40px auto;">		    
		    <div class=" row">
		      <div class="col-lg-3  col-md-4  col-xs-12">
		        <md-field>
		          <el-select v-model="state" name="movies" placeholder="Select State" class="md-elevation-5" style="color: #000 !important;">
				    <el-option
				      v-for="item in 4"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
			    </el-select>
		        </md-field>
		      </div>

		      <div class="col-lg-3  col-md-4  col-xs-12">
		        <md-field>
		          <el-select v-model="university" placeholder="Select University" class="md-elevation-5">
				    <el-option
				      v-for="item in 4"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
			    </el-select>
		        </md-field>
		      </div>

		      <div class="col-lg-3  col-md-4  col-xs-12">
		        <md-field>
		          <el-select v-model="type" placeholder="Select Type" class="md-elevation-5">
				    <el-option
				      v-for="item in 4"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
			    </el-select>
		        </md-field>
		      </div>


		       <div class="col-lg-3  col-md-4  col-xs-12">
		        <md-field>
		          <el-button class="btn-block md-elevation-5" type="success">Find Your Accomodation
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
      }
    }
  }
</script>