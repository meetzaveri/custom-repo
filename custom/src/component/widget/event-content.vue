<template>
    <!--div for event_contents -->
    <div v-if="data.showWidgetPanel === 'event-content'" class="event_contents_change_div ">
        <div class="section_header_div bg-light lter b-b">
            <div class="header_title_text">
                <span class="font_size_14 m-l-25px" >Contents</span>
            </div>
        </div> <!-- /section header_div-->

        <div class="section_scrolling_div">
            <div class="custom_section_edit_inner_div">
                <div class="custom_section_inner_header_div bg-light lter">
                    <span class="m-l-25px font_size_14 inner_header_text">Event Contents</span>
                    <p class="m-l-25px font_size_11 inner_header_sub_text_color m-b-none m-t-xs">Settings for Event Contents</p>
                </div>

                <div class="custom_section_edit_body_div b-b">
                    <div class="div_wrapper">
                        <div class="row m-l-none m-r-none" >
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="checkbox">
                                    <label class="i-checks i-checks-sm">
                                        <input type="checkbox" @change="send_data" v-model="c_data.showEventDetail">
                                        <i></i>
                                        Event Detail
                                    </label>
                                </div>

                                <div class="checkbox">
                                    <label class="i-checks i-checks-sm m-t-xs">
                                        <input type="checkbox" @change="send_data" v-model="c_data.showRegistration">
                                        <i></i>
                                        Registration
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row m-l-none m-r-none">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label >Banner Opacity</label>
                                <div class="range_slider_div">
                                    <vue-slider @callback="send_data" v-model="c_data.opacity" :min=0 :max=1 :interval=0.1 tooltip="false"></vue-slider>
                                </div>
                            </div>
                        </div>

                        <div class="row m-b m-l-none m-r-none">
                            <div class="col-lg-12">
                                <div class="custom_element_save_cancel_text m-t pull-right blue_color_text">
                                    <span @click="save_data({c_data,c_index,c_type})" class="m-r cursor_pointer">Save</span>
                                    <span class="cursor_pointer">Close</span>
                                </div>
                            </div>
                        </div>
                    </div>q
                </div>



                <div class="custom_section_inner_header_div bg-light lter">
                    <span class="m-l-25px font_size_14 inner_header_text">Tagline</span>
                    <p class="m-l-25px font_size_11 inner_header_sub_text_color m-b-none m-t-xs">Set Tagline for Event</p>
                </div>

                <div class="custom_section_edit_body_div b-b">
                    <div class="div_wrapper">
                        <div class="row m-l-none m-r-none m-t-xs" >
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label >Tagline</label>
                                <input type="text" @input="send_data" v-model="c_data.tagline" class="form-control font_size_11" placeholder="Enter Tagline">
                            </div>
                        </div>

                        <div class="row m-b m-l-none m-r-none">
                            <div class="col-lg-12">
                                <div class="custom_element_save_cancel_text m-t pull-right blue_color_text">
                                    <span @click="save_data({c_data,c_index,c_type})" class="m-r cursor_pointer">Save</span>
                                    <span class="cursor_pointer">Cancel</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div><!-- custom_section_edit_inner_div -->
        </div>

    </div>
    <!--/div for event_contents -->
</template>

<script>
    import { mapActions } from 'vuex'

    export default{
        data(){
            return {
                data:this.$store.state.data,
                c_data:this.$store.state.data.currentWidgetData,
                api_data:this.$store.state.api_data,
                c_index:this.$store.state.data.currentWidgetSectionIndex,
                c_name:this.$store.state.data.currentWidgetSectionName,
                c_type:this.$store.state.data.currentWidgetSectionType,
            }
        },
        computed:mapActions([
            'set_WS'
        ]),
        methods:{
            send_data:function(){
                this.$socket.emit('content',{data:this.c_data,name:this.c_name,index:this.c_index},"client1:slave");
            },
            save_data:function(payload){
                this.set_cont(payload);
                this.$http.put('https://hu-dash.firebaseio.com/data.json',this.api_data)
                    .then(response =>{
                        console.log(response);
                    }),error =>{
                    console.log(error);
                }
            },
            set_cont:function(by){
                this.$store.dispatch('set_WS',by)
            }
        }
    }
</script>

<style>

</style>