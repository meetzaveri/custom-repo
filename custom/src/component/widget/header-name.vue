<template>
    <!--div for changing header name-->
    <div v-if="data.showWidgetPanel === 'header-name'" class="header_change_div">
        <div class="section_header_div bg-light lter b-b">
            <div class="header_title_text">
                <span class="font_size_14 m-l-25px" >Header Name</span>
            </div>
            <div class="header_save_cancel_text_div pull-right blue_color_text">
                <span @click="save_data({c_data,c_index,c_type,w_type:'header'})" class="m-r cursor_pointer">Save</span>
                <span @click="unset_WP" class="m-r-25px cursor_pointer">Close</span>
            </div>
        </div> <!-- /section header_div-->

        <div class="section_scrolling_div">
            <div class="custom_section_edit_inner_div">
                <div class="custom_section_edit_body_div b-b bg-light lter">
                    <div class="div_wrapper">
                        <div class="row m-l-none m-r-none m-b-md">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="row m-t-sm">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label class="font_size_11">Navbar Name</label>
                                        <input @input="send_data" type="text" v-model="c_data.navbar_name" class="form-control font_size_11"  placeholder="Enter Navbar Name">
                                    </div>
                                </div>

                                <div class="row m-t">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label class="font_size_11">Section Name</label>
                                        <input @input="send_data" type="text" v-model="c_data.section_name" class="form-control font_size_11" placeholder="Enter Section Name">
                                    </div>
                                </div>

                                <div class="row m-t m-b-xs">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label class="font_size_11">Tag Line</label>
                                        <input @input="send_data" type="text" v-model="c_data.tagline" class="form-control font_size_11" placeholder="Enter Tag Line">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- custom_section_edit_inner_div -->
        </div>
    </div>
    <!--/div for changing header name-->
</template>

<script>
    import { mapActions } from 'vuex'

    export default{
        data(){
            return {
                data:this.$store.state.data,
                api_data:this.$store.state.api_data,

                c_data:this.$store.state.data.currentWidgetData.header,
                c_index:this.$store.state.data.currentWidgetSectionIndex,
                c_name:this.$store.state.data.currentWidgetSectionName,
                c_type:this.$store.state.data.currentWidgetSectionType
            }
        },
        computed:mapActions([
           'set_WS'
        ]),
        methods:{
            send_data:function(){
                this.$socket.emit('header',{data:this.c_data,name:this.c_name},"client1:slave");
            },
            save_data:function (payload) {
                this.set_cont(payload);
                this.$http.put('https://hu-dash.firebaseio.com/data.json',this.api_data)
                    .then(response =>{
                        console.log(response);
                    }),error => {
                        console.log(error);
                    }
            },
            set_cont:function(by){
                this.$store.dispatch('set_WS',by)
            },
            unset_WP:function(){
                this.$store.commit('unset_widget_panel');
            }
        }
    }
</script>

<style>

</style>