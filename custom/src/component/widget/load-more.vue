<template>
    <!--div for changing load more-->
    <div v-if="data.showWidgetPanel === 'load-more'" class="load_more_change_div">
        <div class="section_header_div bg-light lter b-b">
            <div class="header_title_text">
                <span class="font_size_14 m-l-25px" >Load More</span>
            </div>
            <div class="header_save_cancel_text_div pull-right blue_color_text">
                <span class="m-r cursor_pointer">Save</span>
                <span @click="unset_WP" class="m-r-25px cursor_pointer">Close</span>
            </div>
        </div> <!-- /section header_div-->

        <div class="section_scrolling_div">
            <div class="custom_section_edit_inner_div">
                <div class="custom_section_edit_body_div b-b bg-light lter">
                    <div class="div_wrapper">
                        <div class="row m-l-none m-r-none">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label class="light_text_color font_size_11">Set <span class="dark_text">Load More</span> option</label>
                            </div>
                        </div>
                        <div class="row m-l-none m-r-none">
                            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 padding_right_0">
                                <input type="text" v-model="c_data.btn_title" class="form-control font_size_11" placeholder="Load More">
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 padding_left_10">
                                <div class="input-group bootstrap-touchspin load_more_div">
                                    <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span>
                                    <input class="form-control" v-model="c_data.limit" data-max="20" data-min="0" data-verticalbuttons="true" data-verticaldownclass="fa fa-caret-down" data-verticalupclass="fa fa-caret-up" style="display: block;" ui-jq="TouchSpin" type="text">

                                    <span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span>
                                    <span class="input-group-btn-vertical">
                                        <button class="btn btn-default bootstrap-touchspin-up up_arrow" type="button">
                                            <i class="fa fa-caret-up"></i>
                                        </button>
                                        <button class="btn btn-default bootstrap-touchspin-down down_arrow" type="button">
                                            <i class="fa fa-caret-down"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- custom_section_edit_inner_div -->
        </div>
    </div>
    <!--/div for changing load more-->
</template>

<script>
    export default{
        data(){
            return {
                data:this.$store.state.data,
                c_data:this.$store.state.data.currentWidgetData.load_more
            }
        },
        methods:{
            unset_WP:function(){
                this.$store.commit('unset_widget_panel');
            }
        }
    }
</script>

<style>

</style>