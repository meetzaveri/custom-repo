<template>
    <!--div for changing layout-->
    <div v-if="data.showWidgetPanel === 'layout'" class="layout_change_div">
        <div class="section_header_div bg-light lter b-b">
            <div class="header_title_text">
                <span class="font_size_14 m-l-25px" >Layout</span>
            </div>
            <div class="header_save_cancel_text_div pull-right blue_color_text">
                <span class="m-r cursor_pointer">Save</span>
                <span @click="unset_WP" class="m-r-25px cursor_pointer">Close</span>
            </div>
        </div> <!-- /section header_div-->

        <div class="section_scrolling_div">
            <div class="custom_section_edit_inner_div">
                <div class="custom_section_inner_header_div bg-light lter">
                    <span class="m-l-25px font_size_14 inner_header_text">Layout</span>
                    <p class="m-l-25px font_size_11 inner_header_sub_text_color m-b-none m-t-xs">Set Layout for Speakers</p>
                </div>

                <div class="custom_section_edit_body_div b-b">
                    <div class="row text-center m-l-none m-r-none m-b-lg">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8 col-xs-offset-2 col-xs-8">
                            <div class="row speaker_style_option_div m-t-lg" @click="changeLayout('1')">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="speaker_layout_div">
                                        <img src="http://i.imgur.com/1YzaPZ3.png" class="img-responsive cursor_pointer">
                                        <div v-if="isSelected === 'layout-1'" class="speaker_style_option_selected_div">
                                            <svg enable-background="new 0 0 26 26" class="v-middle" viewBox="0 0 26 26" >
                                                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" fill="#FFFFFF"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row speaker_style_option_div m-t-md" @click="changeLayout('2')">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="speaker_layout_div">
                                        <img src="http://i.imgur.com/uRBycCi.png" class="img-responsive cursor_pointer">
                                        <div v-if="isSelected === 'layout-2'" class="speaker_style_option_selected_div">
                                            <svg enable-background="new 0 0 26 26" class="v-middle" viewBox="0 0 26 26" >
                                                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" fill="#FFFFFF"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row speaker_style_option_div m-t-md" @click="changeLayout('3')">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="speaker_layout_div">
                                        <img src="http://i.imgur.com/E3H4wxC.png" class="img-responsive cursor_pointer">
                                        <div v-if="isSelected === 'layout-3'" class="speaker_style_option_selected_div">
                                            <svg enable-background="new 0 0 26 26" class="v-middle" viewBox="0 0 26 26" >
                                                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" fill="#FFFFFF"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row speaker_style_option_div m-t-md" @click="changeLayout('4')">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="speaker_layout_div">
                                        <img src="http://i.imgur.com/j4P7hiF.png" class="img-responsive cursor_pointer">
                                        <div v-if="isSelected === 'layout-4'" class="speaker_style_option_selected_div">
                                            <svg enable-background="new 0 0 26 26" class="v-middle" viewBox="0 0 26 26" >
                                                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" fill="#FFFFFF"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- custom_section_edit_inner_div -->
            <div class="custom_section_edit_inner_div">
                <div class="custom_section_inner_header_div bg-light lter">
                    <span class="m-l-25px font_size_14 inner_header_text">Background</span>
                    <p class="m-l-25px font_size_11 inner_header_sub_text_color m-b-none m-t-xs">Set Background for Speaker Layout</p>
                </div>
                <div class="custom_section_edit_body_div b-b">
                    <div class="div_wrapper">
                        <div class="row m-l-none m-r-none light_text_color">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <div class="radio">
                                    <label class="i-checks i-checks-sm">
                                        <input name="background_type" v-model="optSelected" value="Color" type="radio">
                                        <i></i>
                                        Color
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div class="radio">
                                    <label class="i-checks i-checks-sm">
                                        <input name="background_type" v-model="optSelected" value="Image"  type="radio">
                                        <i></i>
                                        Image
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row m-b-lg m-l-none m-r-none" v-if="optSelected === 'Color'">
                            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div class="color_input_div">
                                    <div class="color-box left-addon">
                                        <i v-on:click="showPicker = !showPicker" class="glyphicon glyphicon-edit"></i>
                                        <input type="text" v-model="colors.hex" class="form-control font_size_11" placeholder="#000000">
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row m-b-lg m-l-none m-r-none" v-if="showPicker">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 align-color-box">
                                <component  v-model="colors" @change-color="updateColor" is="color-picker"></component>
                            </div>
                        </div>
                        <div class="row m-l-none m-r-none m-b-lg" v-if="optSelected === 'Image'">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="speaker_style_option_div">


                                    <div class="upload_background_image_main_div b common_display_flex" @click="layoutModal = true">
                                        <div class="upload_background_image_div bg-light lter common_display_flex cursor_pointer">
                                            <svg  height="35px" id="Layer_1" style="enable-background:new 0 0 47 47;vertical-align: middle;" version="1.1" viewBox="0 0 47 47" width="35px">
                                                <path d="M4.267,40.061V8.911H0.826c-0.455,0-0.828,0.375-0.828,0.837v34.4c0,0.465,0.373,0.841,0.828,0.841
                                                    h39.278c0.457,0,0.829-0.376,0.829-0.841v-3.25H5.098C4.635,40.898,4.267,40.521,4.267,40.061z" style="fill:#d5dee0;"></path>
                                                <path d="M46.173,2.997H6.9c-0.459,0-0.828,0.376-0.828,0.837v34.399c0,0.463,0.371,0.844,0.828,0.844h39.273
                                                    c0.457,0,0.83-0.379,0.83-0.844V3.834C47.002,3.373,46.63,2.997,46.173,2.997z M17.074,6.124c2.43,0,4.404,1.996,4.404,4.46
                                                    c0,2.467-1.974,4.456-4.404,4.456c-2.433,0-4.405-1.988-4.405-4.456C12.669,8.12,14.641,6.124,17.074,6.124z M44.309,28.687h-0.054
                                                    H11.818H9.22v-0.342l6.924-8.007l3.896,2.659l4.54-7.875l5.275,3.786l4.767-10.003l9.687,19.411V28.687z" style="fill:#d5dee0;"></path>
                                            </svg>
                                            <!--<div class="upload_background_image_overlay_div">-->

                                            <!--</div>-->
                                            <!--<input type="file" name="image" accept="image/*"-->
                                                   <!--style="font-size: 1.2em; padding: 10px 0;"-->
                                                   <!--v-on:change="setImage"-->
                                            <!--/>-->
                                            <!--<vue-cropper-->
                                                <!--ref='cropper'-->
                                                <!--:guides=true-->
                                                <!--:view-mode=2-->
                                                <!--drag-mode="crop"-->
                                                <!--:auto-crop-area=0.5-->
                                                <!--:min-container-width=250-->
                                                <!--:min-container-height=180-->
                                                <!--:background=true-->
                                                <!--:rotatable=true-->
                                                <!--:src=imgSrc-->
                                                <!--alt="SourceImage"-->
                                                <!--:cropmove="cropImage"-->
                                            <!--&gt;-->

                                            <!--</vue-cropper>-->
                                            <!--<img :src="cropImg"-->
                                                 <!--style="width: 200px; height: 150px; border: 1px solid gray"-->
                                                 <!--alt="Cropped Image"-->
                                            <!--/>-->
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- custom_section_edit_inner_div -->
        </div>
        <modal key="layoutModal" width="670px" v-if="layoutModal" @close="layoutModal = false">
            <div slot="header">
                <div class="modal_header_bg p">
                    <div class="close_icon_div pull-right cursor_pointer" @click="layoutModal = false">
                        <span>&#x2715;</span>
                    </div>
                    <div class="modal-title font_size_15 padding_left_6">
                        <span>Add Banner</span>
                    </div>
                    <div class="font_size_11 m-t-xs sub_text_color padding_left_6">
                        <span>Add Banner for Event</span>
                    </div>
                </div>
            </div>

            <div slot="body">
                <div class="modal-body padding_top_0 padding_bottom_0 padding_left_0 padding_right_0">
                    <div class="row m-l-none m-r-none height_46px b-b event_logo_selection_menu ">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_left_20">
                            <div class="menu_div" @click="selectedTab = 'upload'">
                                <div :class="['menu_text_div',selectedTab === 'upload' ? 'menu_text_div_border_bottom' : '']">
                                    <span class="cursor_pointer">&nbsp;Upload&nbsp;</span>
                                </div>
                            </div>
                            <div @click="selectedTab = 'url'" class="menu_div">
                                <div :class="['menu_text_div',selectedTab === 'url' ? 'menu_text_div_border_bottom' : '']">
                                    <span class="cursor_pointer">&nbsp;By URL&nbsp;</span>
                                </div>
                            </div>
                            <div @click="selectedTab = 'gallery'" class="menu_div">
                                <div :class="['menu_text_div',selectedTab === 'gallery' ? 'menu_text_div_border_bottom' : '']">
                                    <span class="cursor_pointer">&nbsp;Your Gallery&nbsp;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-t-35 selection_of_img_div ">
                        <div class="upload_img_div" v-if="selectedTab === 'upload'">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2 ">
                                            <small ref="error_display" class="text-danger">

                                            </small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                            <div class="img-div-width-451 default_img_dragging_div dashed_border drag-over" >
                                                <div class="image_div_banner" :style="isImageSet ? 'background-color: grey' : ''">
                                                    <div v-if="isCropped" class="img_overlay img-overlay-crop">
                                                        <div @click="callChange" class="change_img_div cursor_pointer">Change</div>
                                                    </div>
                                                    <div ref="imgCanvas" class="img-container">
                                                        <vue-cropper
                                                                v-if="isImageSet && cropImg === ''"
                                                                ref='cropper'
                                                                :guides=true
                                                                :view-mode=2
                                                                drag-mode="crop"
                                                                :auto-crop-area=0.5
                                                                :min-container-width=250
                                                                :min-container-height=180
                                                                :background=true
                                                                :rotatable=true
                                                                :imgStyle=imgSyl
                                                                :src=imgSrc
                                                                alt="SourceImage"
                                                                :minContainerHeight=228
                                                                >
                                                        </vue-cropper>
                                                        <img v-if="cropImg != ''" :src="cropImg" alt="">
                                                    </div>

                                                    <div v-if="!isImageSet" class="drag_image_div text-center">
                                                        <p class="font_size_18 m-b-none">Drag an Image here </p>
                                                        <span class="font_size_18">Or</span><br>
                                                        <button class="select_image_btn m-t-sm font_size_11" @click="callInput"> Select Image from Computer</button>
                                                    </div>
                                                    <input @change="setImage" accept="image/*" ref="image_browse" class="file_display_none ng-untouched ng-pristine ng-valid" name="fileupload" type="file">
                                                </div>
                                            </div>
                                            <div v-if="isImageSet && !isCropped" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                                <button @click="cropImage" class="crop-button b">Crop</button>
                                            </div>
                                            <div v-if="isCropped" class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div style="height:5px;margin-top:10px;background-color: #2e99e6;width:10%">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row_width height_53">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center banner-hidden">

                                </div>
                            </div>
                        </div>
                        <div v-else-if="selectedTab === 'url'" class="by_url_div">
                            <div class="row row_width">
                                <div class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                    <label class="m-t-7px">URL</label>
                                </div>
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 padding_left_right_28">
                                    <input @change="set_url_img" v-model="img_from_url" class="form-control ng-untouched ng-pristine ng-valid" placeholder="Enter Banner URL" type="text">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-3">
                                    <small class="text-danger">
                                    </small>
                                </div>
                            </div>
                            <div class="row row_width">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="img-div-width-326 margin_20px_auto">
                                        <div class="event_logo_div dashed_border" >
                                            <div class="popup_banner_url_div">
                                                <div class="image_url_div_banner" :style="isUrlImageSet ? 'background-color: grey' : ''">
                                                    <div v-if="isUrlCropped" class="img_overlay img-div-width-326 img-overlay-crop">
                                                        <div @click="callChange" class="change_img_div cursor_pointer">Change</div>
                                                    </div>
                                                    <div ref="imgCanvas" class="img-container">
                                                        <vue-cropper
                                                                v-if="isUrlImageSet && cropUrlImg === ''"
                                                                ref='cropper2'
                                                                :guides=true
                                                                :view-mode=2
                                                                drag-mode="crop"
                                                                :auto-crop-area=0.5
                                                                :min-container-width=250
                                                                :min-container-height=180
                                                                :background=true
                                                                :rotatable=true
                                                                :imgStyle=imgSyl
                                                                :checkCrossOrigin=true
                                                                :src=imgUrlSrc
                                                                alt="SourceImage"
                                                                :minContainerHeight=180
                                                        >
                                                        </vue-cropper>
                                                        <img v-if="cropUrlImg != ''" :src="cropUrlImg" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="isUrlCropped" class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div style="height:5px;margin-top:10px;background-color: #2e99e6;width:10%">

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                        <div v-if="isUrlImageSet && !isUrlCropped" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                            <button @click="cropUrlImage" class="crop-button b">Crop</button>
                                        </div>
                                </div>
                            </div>

                            <div class="row row_width height_53">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center banner-hidden">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div slot="footer">
                <div class="row m-l-none m-r-none padding_top_8 padding_bottom_10">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <button type="submit" class="btn btn-dark custom_button_width text-white pull-right disabled">Select</button>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <button class="btn cancel_btn custom_button_width pull-left b" @click="layoutModal = false" type="button">Cancel</button>
                    </div>
                </div>
            </div>
        </modal>
    </div>
    <!--/div for changing layout-->
</template>

<script>
    import Modal from './element/modal.vue'

    export default{
        props:[
          'content'
        ],
        data(){
            return {
                selectedTab:'upload',
                layoutModal:false,
                optSelected:'Color',
                isImageSet:false,
                isUrlImageSet:false,
                data:this.$store.state.data,
                c_data:this.$store.state.data.currentWidgetData.layout,
                api_data:this.$store.state.api_data,
                c_index:this.$store.state.data.currentWidgetSectionIndex,
                c_name:this.$store.state.data.currentWidgetSectionName,
                c_type:this.$store.state.data.currentWidgetSectionType,
                isSelected:'layout-1',
                isCropped:false,
                isUrlCropped:false,
                showPicker:false,
                img_from_url:'',
                imgSrc:'',
                imgUrlSrc:'',
                cropImg:'',
                cropUrlImg:'',
                colors:{
                    hex:'#333'
                },
                imgSyl:{
                    'width':'100%',
                    'height':'100%'
                }

            }
        },
        components:{
          'modal':Modal
        },
        methods:{
            updateColor:function(event){
                this.colors.hex = event.hex;
            },
            setImage:function(event){
                const file = event.target.files[0];
                console.log(file.size);
                if (!file.type.includes('image/')) {
                    this.$refs.error_display.html('Please select an image file')
                    return;
                }

                if (typeof FileReader === 'function') {
                    const reader = new FileReader();

                    reader.onload = (event) => {
                        this.imgSrc = event.target.result;
                        this.isImageSet = true;
                        this.cropImg = '';
                        // rebuild cropperjs with the updated source
                    };

                    reader.readAsDataURL(file);
                } else {
                    alert('Sorry, FileReader API not supported');
                }
            },
            cropImage () {
                // get image data for post processing, e.g. upload or setting image src
                this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
                this.isCropped = true;

            },
            cropUrlImage () {
                // get image data for post processing, e.g. upload or setting image src
                this.cropUrlImg = this.$refs.cropper2.getCroppedCanvas().toDataURL();
                this.isUrlCropped = true;

            },
            unset_WP:function(){
                this.$store.commit('unset_widget_panel');
            },
            callInput:function(){
                this.$refs.image_browse.click();
            },
            callChange:function(){
                this.isCropped = false;
                this.isImageSet = false;
                this.$refs.image_browse.click();
            },
            set_url_img:function(){
                this.$http.post('http://httpbin.org/post',this.img_from_url)
                    .then(response =>{
                        return response.json();
                    })
                    .then(data =>{

                        this.imgUrlSrc = data.data;
                        this.isUrlImageSet = true;
                        this.cropUrlImg = '';
                    })
            },
            changeLayout:function(x){
                console.log('change');
                this.isSelected = 'layout-'+x;
                this.c_data.type = x;
                this.send_data();
            },
            send_data:function(){
                console.log('send-Data');
                this.$socket.emit('layoutUpdate',{data:this.c_data,name:this.c_name,index:this.c_index},"client1:slave")
            }

        },
        created(){
            this.isSelected ='layout-'+this.c_data.type;
        }
    }
</script>

<style scoped>
    .color-box{
        position: relative;
    }
    .color-box .glyphicon{
        position: absolute;
        padding: 7px;
        cursor: pointer;
    }
    .left-addon .glyphicon{
        left:0px;
    }
    .left-addon input{
        padding-left: 30px;
    }
    .align-color-box{
        margin: 10px 0px;
    }
    .img-container{
        width:100%;
        height:100%;
    }
</style>