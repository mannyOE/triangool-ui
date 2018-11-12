<template>
    <div>
        <section class="content-header">
      <h1>
        Add Your New Appartments Here
      </h1>
    </section>

    <!-- Main content -->
    <section class="content ovrf">
        
      <div class="row">
        <!-- left column -->
        <div class="col-md-6">
          <!-- general form elements -->
          <div class="box box-primary">
            
            <!-- form start -->
              <div class="box-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Listing Title [ Required ]</label>
                  <input type="text" v-model="singleListing.title" class="form-control" id="exampleInputEmail1" >
                  <p class="help-block">Give this Item a title that will help users find it.</p>
                </div>
                
                <div class="form-group">
                  <label for="exampleInputEmail1">Apartment Location [ Required ]</label>
                  <input type="text" v-model="singleListing.location" class="form-control" id="exampleInputEmail1" >
                  <p class="help-block">What is the address where this item can be found.</p>
                </div> 

                <div class="form-group">
                  <label for="exampleInputEmail1">Apartment Location State [ Required ]</label>
                  <el-select v-model="singleListing.state" name="movies" filterable placeholder="Select State" 
                  class="" style="color: #000 !important; width: 100%;">
				    <el-option
				      v-for="state in $states"
				      :key="state.value"
				      :label="state.show"
				      :value="state.value">
				    </el-option>
			    </el-select>
                  <p class="help-block">In which state can this item be found.</p>
                </div>               

                <div class="form-group">
                  <label for="exampleInputPassword1">Rent/Year [ Required ]</label>
                  <input type="text" v-model="singleListing.cost" class="form-control" id="exampleInputPassword1" >
                  <p class="help-block">what is the rent price for this apartment.</p>
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">GPS Location</label>
                <div class="row">
                     <div class="col-xs-4">
                    <input type="text" 
                    v-model="singleListing.longitude" 
                    class="form-control" placeholder="Longitude">
                  </div>
                 <div class="col-xs-4">
                    <input type="text" 
                    v-model="singleListing.latitude" 
                    class="form-control" placeholder="Latitude">
                </div>
                <div class="col-xs-2">
                    <el-button size="mini" round class="btn-primary" @click="geo_location()">Generate GPS</el-button>
                </div>
                </div>
                  <p class="help-block">Select the category this item belongs.</p>
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Apartment Type</label>
                  <select type="text" v-model="singleListing.apartmentType" class="form-control" id="exampleInputPassword1" >
                      <option value="flat">Flat</option>
                      <option value="self-contain">Self Contain</option>
                      <option value="single-room">Single Room</option>
                  </select>
                  <p class="help-block">Select the apartment type.</p>
                </div>


                 <div class="form-group">
                  <label for="exampleInputPassword1">Apartment Description</label>
                  <textarea rows="10" v-model="singleListing.description" class="form-control">
                  </textarea>
                  <p class="help-block">Brief Description of listing.</p>
                </div>

                
               
              </div>
              <!-- /.box-body -->

              
          </div>
          <!-- /.box -->

          

          
        </div>
        <!--/.col (left) -->
        <div class="col-md-6">
          <div class="box box-info box-solid">
            <div class="box-header">
              <h3 class="box-title">Add Item Photos</h3>
            </div>
            <div class="box-body text-center">
               <el-upload
                    class="upload-demo"
                    drag
                    :action="$API+'api/listings/upload_photos'" 
                    :on-success="upload_complete" 
                    :on-error="upload_failed" 
                    :before-upload="beforeUpload"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                    <div class="el-upload__tip" slot="tip">Add at least one image</div>
                    <div class="el-upload__tip" slot="tip">Mark at least one image as the centerpiece</div>
                    </el-upload>
            </div>
            <!-- /.box-body -->
            <!-- Loading (remove the following to stop the loading)-->
            <div class="overlay" v-if="uploading">
              <i class="fa fa-gear fa-spin"></i>
            </div>
            <!-- end loading -->
          </div>
          <!-- /.box -->
        </div>
        <!-- right column -->
        <div class="col-md-6">
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">Preview Item Photos</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
              <div class="box-body">
                <Carousel :images="images" @delete="removeFromList" v-if="images.length>0"/>
                <div class="text-center text-warning" v-else>
                    <span class="fa fa-close fa-2x"></span>
                    <p>No Previews at the Moment</p>
                </div>
              </div>
              <!-- /.box-body -->
          </div>
          <!-- /.box -->
          
        </div>
        <!--/.col (right) -->

        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-primary">
                        <!-- /.box-header -->
              <div class="box-footer text-center">
                <el-button @click="cancelProcess" type="submit" class="btn btn-warning">Cancel</el-button>
                <el-button type="submit" @click="submitProcess" class="btn btn-primary">Submit</el-button>
              </div>
          </div>
          <!-- /.box -->
      </div>
      </div>
      <!-- /.row -->

    </section>
    <!-- /.content -->

    

    </div>
</template>
 
<script>
import Carousel from "@/app/utils/previewItems";
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {Carousel},
    data(){
        return {
            latitude: 'Latitude',
            longitude: 'Longitutde',
            uploading: false,
            destroying: {
                state: false,
                next: false
            },

        }
    },
    beforeDestroy(){
        if(this.images.length>0){
            var t = this;
            
            // alert("Your Uploads will be lost");
            this.$alert('Your uploads will be lost?', 'Title', {
                confirmButtonText: 'Continue',
                callback: action => {
                    t.removeUnusedFiles(t.images).then(e=>{
                        t.emptyImages();
                        t.resetState();
                    })
                }
            });
        }
    },
    methods: {
        cancelProcess(){
            var t = this;
            this.$alert('Are you sure you want to cancel?', 'Warning', {
                confirmButtonText: 'OK',
                callback: action => {
                    t.removeUnusedFiles(t.images).then(e=>{
                        t.emptyImages();
                        t.resetState();
                    })
                }
            });
        },
        submitProcess(){
            var t = this;
            this.$alert('Are you sure you want to save this?', 'Hold On', {
                confirmButtonText: 'Yes',
                callback: action => {
                    if(t.images.length<1){
                        this.$notify({
                            title: 'Notice',
                            message: "Images are not set"
                        });
                        return;
                    }
                    if(t.singleListing.location===undefined || t.singleListing.location.length<1){
                        this.$notify({
                            title: 'Notice',
                            message: "Location/Address is not set"
                        });
                        return;
                    }
                    if(t.singleListing.state===undefined || t.singleListing.state.length<1){
                        this.$notify({
                            title: 'Notice',
                            message: "Location State is not set"
                        });
                        return;
                    }
                    if(t.singleListing.cost===undefined||t.singleListing.cost.length<1){
                        this.$notify({
                            title: 'Notice',
                            message: "Cost is not set"
                        });
                        return;
                    }
                    if(t.singleListing.description===undefined||t.singleListing.description.length<1){
                        this.$notify({
                            title: 'Notice',
                            message: "Description is not set"
                        });
                        return;
                    }
                    var index = this.images.findIndex(x=>x.center===true);
                   if(index === -1){
                        this.images[0].center = true;
                        console.log(this.images);
                    }
                    
                    
                    
                    t.singleListing.images = t.images;
                    t.singleListing.agent = t.user.Id;
                    t.singleListing.agentName = t.user.firstName+' '+t.user.lastName;
                    t.singleListing.category = 'apartments';
                    t.callWithToken({
                        parameters: t.singleListing,
                        action: t.createListing
                    }).then(e=>{
                        if(e.success){
                            t.emptyImages();
                            t.resetState();
                        }
                    })
                }
            });
        },
        ...mapActions('General', ['addImage','emptyImages','removeImage']),
        ...mapActions('UserCreds', ['callWithToken']),
        ...mapActions('Listing', ['removeUnusedFiles','resetState','createListing']),
        geo_location(){
            var t = this;
            if("geolocation" in navigator){
                 // check if geolocation is supported/enabled on current browser
                navigator.geolocation.getCurrentPosition(
                function success(position) {
                    // for when getting location is a success
                    console.log('latitude', position.coords.latitude, 
                                'longitude', position.coords.longitude);
                                t.singleListing.longitude = position.coords.longitude;
                                t.singleListing.latitude = position.coords.latitude;
                },
                function error(error_message) {
                    // for when getting location results in an error
                    console.error('An error has occured while retrieving location', error_message)
                });
            }else{
                // geolocation is not supported
                // get your location some other way
                console.log('geolocation is not enabled on this browser')
            }
        },
        removeFromList(item){
            var index = this.images.findIndex(x=>x===item);
            var t = this;
            if(index !==-1){
                var image2 = [];
                image2.push(item);
                this.removeUnusedFiles(image2).then(x=>{
                    t.removeImage(index);
                })
            }
            
        },
        upload_complete(response, file, fileList){
            this.addImage(response.upload);
            this.uploading = false;
    	},
    	upload_failed(error, file, fileList){
            this.uploading = false;
            console.log(error)
    	},
    	beforeUpload(file){
    		this.uploading = true;
    	},
    },
    computed: {
        ...mapGetters('Listing', ['singleListing']),
        ...mapGetters('General', ['images']),
        ...mapGetters('UserCreds', ['user']),
    }
}
</script>

<style >
    .el-upload__input, .el-upload-list {
		display: none !important;
	}
</style>

