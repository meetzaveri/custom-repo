<template>
    <!--Home-->
    <div class="home_main_section ">
        <div class="row m-l-none m-r-none">
            <div class="panel no_box_shadow m-b-sm">
                <div :class="['panel-heading','no_border_radius','common_panel_heading_div',showMPageSection === tab_name ?'opened_panel_bg':'collapse_panel_bg']">
                    <span >{{tab_name}} </span>
                    <span v-on:click="set_MPS(tab_name)" :class="['pull-right','cursor_pointer','right_down_arrow_text','fa',showMPageSection === tab_name ? 'fa-angle-right' : 'fa-angle-down']">
                        <!--replace fa-angle-right class with fa-angle-down when panel is expanded-->
                    </span>
                </div>

                <div class="panel-body pages_panel_body padding_15 b-r b-l b-b" v-if="showMPageSection === tab_name">
                    <div class="row">
                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                            <label class="font_size_11 m-t-7px">Name</label>
                        </div>
                        <div class="col-lg-10 col-md-9 col-sm-9 col-xs-9">
                            <input type="text" name="" value="" class="form-control font_size_11" placeholder="Enter Name">
                        </div>
                    </div>
                    <div class="row m-t">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="show_hide_checkbox">
                                <label class="i-switch bg-info m-t-xs m-r">
                                    <input checked="" type="checkbox">
                                    <i></i>
                                    <span class="m-l-xl">Show</span>
                                </label>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="save_cancel_text_div pull-right blue_color_text">
                                <span class="m-r cursor_pointer">Save</span>
                                <span class="cursor_pointer">Cancel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--Panel-->
        </div>
        <div class="row" v-if="showMPageSection === tab_name">
            <div class="col-lg-12 padding_right_0">
                <div class="col-lg-offset-1 col-lg-11">
                    <slot></slot>
                </div>
                <!--Main Banner-->
                <div class="row m-l-none m-r-none">
                    <div class="col-lg-offset-1 col-lg-11 padding_left_10" >
                        <div class="panel no_box_shadow m-b-sm">
                            <div class="panel-heading no_border_radius common_panel_heading_div collapse_panel_bg">
                                <span >Main Banner </span>
                                <span class="pull-right cursor_pointer">
                                      <!--replace the below text with &#x2212; when panel is expanded-->
                                        &#x2b;
                                    </span>
                            </div>
                            <div class="panel-body padding_top_0 padding_bottom_0 pages_panel_body b b-t-none">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="checkbox">
                                            <label class="i-checks i-checks-sm">
                                                <input type="checkbox">
                                                <i></i>
                                                Event Information
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label class="i-checks i-checks-sm m-t-xs">
                                                <input type="checkbox" checked="">
                                                <i></i>
                                                Registration
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="banner_image_outer_div common_display_flex b">
                                            <div class="banner_image_inner_div common_display_flex bg-light lter">
                                                <svg  height="35px" id="Layer_1" style="enable-background:new 0 0 47 47;vertical-align: middle;" version="1.1" viewBox="0 0 47 47" width="35px">
                                                    <path d="M4.267,40.061V8.911H0.826c-0.455,0-0.828,0.375-0.828,0.837v34.4c0,0.465,0.373,0.841,0.828,0.841
                                            h39.278c0.457,0,0.829-0.376,0.829-0.841v-3.25H5.098C4.635,40.898,4.267,40.521,4.267,40.061z" style="fill:#d5dee0;"></path>
                                                    <path d="M46.173,2.997H6.9c-0.459,0-0.828,0.376-0.828,0.837v34.399c0,0.463,0.371,0.844,0.828,0.844h39.273
                                            c0.457,0,0.83-0.379,0.83-0.844V3.834C47.002,3.373,46.63,2.997,46.173,2.997z M17.074,6.124c2.43,0,4.404,1.996,4.404,4.46
                                            c0,2.467-1.974,4.456-4.404,4.456c-2.433,0-4.405-1.988-4.405-4.456C12.669,8.12,14.641,6.124,17.074,6.124z M44.309,28.687h-0.054
                                            H11.818H9.22v-0.342l6.924-8.007l3.896,2.659l4.54-7.875l5.275,3.786l4.767-10.003l9.687,19.411V28.687z" style="fill:#d5dee0;"></path>
                                                </svg>
                                                <div class="banner_image_overlay_div">

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="row m-t">
                                    <div class="col-lg-12">
                                        <div class="show_hide_checkbox">
                                            <label class="i-switch bg-info m-t-xs m-r">
                                                <input checked="" type="checkbox">
                                                <i></i>
                                                <span class="m-l-xl">Show</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-t m-b">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="save_cancel_text_div pull-right blue_color_text">
                                            <span class="m-r cursor_pointer">Save</span>
                                            <span class="cursor_pointer">Cancel</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div><!--Panel-->
                    </div>
                </div>

                <!-- Farji Banner -->
                <div class="row schedule_section m-l-none m-r-none">
                    <div class="col-lg-offset-1 col-lg-11" >
                        <div class="panel no_box_shadow m-b-sm">
                            <div class="panel-heading no_border_radius common_panel_heading_div collapse_panel_bg">
                                <span >Header Banner </span>
                                <span class="pull-right cursor_pointer">
                                    <!--replace the below text with &#x2212; when panel is expanded-->
                                      &#x2b;
                                  </span>
                            </div>
                            <div class="panel-body schedule_panel_body padding_bottom_0 b b-t-none">

                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="image_upload_main_div b common_display_flex">
                                            <div class="image_upload_div bg-light lter common_display_flex">
                                                <svg  height="35px" id="Layer_1" style="enable-background:new 0 0 47 47;vertical-align: middle;" version="1.1" viewBox="0 0 47 47" width="35px">
                                                    <path d="M4.267,40.061V8.911H0.826c-0.455,0-0.828,0.375-0.828,0.837v34.4c0,0.465,0.373,0.841,0.828,0.841
                                          h39.278c0.457,0,0.829-0.376,0.829-0.841v-3.25H5.098C4.635,40.898,4.267,40.521,4.267,40.061z" style="fill:#d5dee0;"></path>
                                                    <path d="M46.173,2.997H6.9c-0.459,0-0.828,0.376-0.828,0.837v34.399c0,0.463,0.371,0.844,0.828,0.844h39.273
                                          c0.457,0,0.83-0.379,0.83-0.844V3.834C47.002,3.373,46.63,2.997,46.173,2.997z M17.074,6.124c2.43,0,4.404,1.996,4.404,4.46
                                          c0,2.467-1.974,4.456-4.404,4.456c-2.433,0-4.405-1.988-4.405-4.456C12.669,8.12,14.641,6.124,17.074,6.124z M44.309,28.687h-0.054
                                          H11.818H9.22v-0.342l6.924-8.007l3.896,2.659l4.54-7.875l5.275,3.786l4.767-10.003l9.687,19.411V28.687z" style="fill:#d5dee0;"></path>
                                                </svg>
                                                <div class="image_upload_overlay_div">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row m-t m-b-sm">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div class="show_hide_checkbox">
                                            <label class="i-switch bg-info m-t-xs m-r">
                                                <input checked="" type="checkbox">
                                                <i></i>
                                                <span class="m-l-xl">Show</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div class="save_cancel_text_div pull-right blue_color_text">
                                            <span class="m-r cursor_pointer">Save</span>
                                            <span class="cursor_pointer">Cancel</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div><!--Panel-->
                    </div>
                </div>

                <div class="row m-l-none m-r-none m-b-md">
                    <div class="col-lg-offset-1 col-lg-11" >
                        <div class="common_add_btn_div">
                            <button type="button" class="btn m-b-xs btn-sm font_size_13 btn-addon m-t-sm pull-right no_box_shadow" >
                                <i class="b-r">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" width="11px" height="11px">
                                        <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M39.889,100h20.1V0h-20.1V100z"></path>
                                        <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M0,59.947V39.817h100v20.129H0z"></path>
                                    </svg>
                                </i> Add Widget
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ Home Panel  -->
    </div>
</template>

<script>
    export default{
        props:['tab_name'],
        data(){
            return{
                showMPageSection:this.$store.state.data.showMPageSection
            }
        },
        methods:{
            set_MPS:function(x){
                if(this.showMPageSection === x){
                    this.showMPageSection = 'clear';
                }else{
                    this.showMPageSection = x;
                }
            }
        }
    }
</script>

<style>

</style>