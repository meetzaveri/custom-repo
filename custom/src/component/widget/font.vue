<template>
    <!-- div for changing font color , size , family-->
    <div v-if="data.showWidgetPanel === 'font'" class="font_change_div">
        <div class="section_header_div bg-light lter b-b">
            <div class="header_title_text">
                <span class="font_size_14 m-l-25px" >Font</span>
            </div>
            <div class="header_save_cancel_text_div pull-right blue_color_text">
                <span @click='save_data({c_data,c_index,c_type,w_type:"font"})' class="m-r cursor_pointer">Save</span>
                <span @click="unset_WP" class="m-r-25px cursor_pointer">Close</span>
            </div>
        </div> <!-- /section header_div-->
        <!--section_scrolling_div-->
        <div class="section_scrolling_div">
            <div class="custom_section_edit_inner_div">
                <div class="custom_section_inner_header_div bg-light lter">
                    <span class="m-l-25px font_size_14 inner_header_text">Title</span>
                    <p class="m-l-25px font_size_11 inner_header_sub_text_color m-b-none m-t-xs">Change Font Setting for Title</p>
                </div>

                <div class="custom_section_edit_body_div b-b">
                    <div class="div_wrapper">
                        <div class="row m-l-none m-r-none m-t-xs m-b-md" >
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <label>Size</label>
                                        <input type="text" name="" @input="send_data" v-model="c_data.title.font_size" class="form-control font_size_11" placeholder="18px">
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <label>Color</label>
                                        <div class="color-box left-addon">
                                            <i v-on:click="showPicker1 = !showPicker1" class="glyphicon glyphicon-edit"></i>
                                            <input type="text" @change="send_data" v-model="colors1.hex" class="form-control font_size_11" placeholder="#000000">
                                        </div>
                                    </div>
                                </div>
                                <div class="row" v-if="showPicker1">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 align-color-box">
                                        <component  v-model="colors1" @change-color="updateColor1" is="color-picker"></component>
                                    </div>
                                </div>
                                <div class="row m-t-sm">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label >Font Family</label>
                                        <div class="common_select_box">
                                            <!--give open class to below div when clicking on button-->
                                            <div class="input-group-btn dropdown" >
                                                <select @change="send_data" v-model="c_data.title.font_family" class="form-control" id="sel1">
                                                    <option v-for="item in c_data.font_family_list">{{item}}</option>
                                                </select>
                                                <!--<button type="button" class="btn btn-default font_size_12 no_box_shadow ticket_info_subline_text_color" dropdown-toggle="" aria-haspopup="true" aria-expanded="false" >Select Font Type <span class="caret" style="color: #000;"></span></button>-->
                                                <!--<ul class="dropdown-menu">-->
                                                    <!--<li class="cursor_pointer" >Arial</li>-->
                                                    <!--<li class="cursor_pointer" >Sans Seriff</li>-->
                                                    <!--<li class="cursor_pointer" >Verdana</li>-->
                                                <!--</ul>-->
                                            </div>
                                            <!-- /btn-group -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="custom_section_inner_header_div bg-light lter">
                    <span class="m-l-25px font_size_14 inner_header_text">Details</span>
                    <p class="m-l-25px font_size_11 inner_header_sub_text_color m-b-none m-t-xs">Change Font Setting for Detail</p>
                </div>

                <div class="custom_section_edit_body_div b-b">
                    <div class="div_wrapper">
                        <div class="row m-l-none m-r-none m-t-xs m-b-md" >
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <label>Size</label>
                                        <input @input="send_data" v-model="c_data.detail.font_size" type="text" name="" value="" class="form-control font_size_11" placeholder="18px">
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <label>Color</label>
                                        <div class="color-box left-addon">
                                            <i v-on:click="showPicker2 = !showPicker2" class="glyphicon glyphicon-edit"></i>
                                            <input @input="send_data" type="text" v-model="colors2.hex" class="form-control font_size_11" placeholder="#000000">
                                        </div>
                                    </div>
                                </div>
                                <div class="row" v-if="showPicker2">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 align-color-box">
                                        <component  v-model="colors2" @change-color="updateColor2" is="color-picker"></component>
                                    </div>
                                </div>
                                <div class="row m-t-sm">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label >Font Family</label>
                                        <div class="common_select_box">
                                            <!--give open class to below div when clicking on button-->
                                            <div class="input-group-btn dropdown" >
                                                <select @change="send_data" v-model="c_data.detail.font_family" class="form-control" id="sel2">
                                                    <option v-for="item in c_data.font_family_list">{{item}}</option>
                                                </select>
                                                <!--<button type="button" class="btn btn-default font_size_12 no_box_shadow ticket_info_subline_text_color" dropdown-toggle="" aria-haspopup="true" aria-expanded="false" >Select Font Type <span class="caret" style="color: #000;"></span></button>-->
                                                <!--<ul class="dropdown-menu">-->
                                                    <!--<li class="cursor_pointer" >Arial</li>-->
                                                    <!--<li class="cursor_pointer" >Sans Seriff</li>-->
                                                    <!--<li class="cursor_pointer" >Verdana</li>-->
                                                <!--</ul>-->
                                            </div>
                                            <!-- /btn-group -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div><!-- custom_section_edit_inner_div -->
        </div>
        <!--/ section_scrolling_div-->
    </div>
    <!--/div for changing font color , size , family-->
</template>

<script>
    import { mapActions } from 'vuex'

    export default{
        data(){
            return {
                data:this.$store.state.data,
                c_data:this.$store.state.data.currentWidgetData.font,
                api_data:this.$store.state.api_data,
                c_index:this.$store.state.data.currentWidgetSectionIndex,
                c_name:this.$store.state.data.currentWidgetSectionName,
                c_type:this.$store.state.data.currentWidgetSectionType,
                showPicker1:false,
                showPicker2:false,
                colors1:{
                    hex:this.$store.state.data.currentWidgetData.font.title.font_color
                },
                colors2:{
                    hex:this.$store.state.data.currentWidgetData.font.detail.font_color
                }
            }
        },
        computed:mapActions([
            'set_WS'
        ]),
        methods:{
            updateColor1:function(event){
                this.c_data.title.font_color = event.hex;
                this.colors1.hex = event.hex;
                this.$socket.emit('font',{data:this.c_data,name:this.c_name},"client1:slave");
            },
            updateColor2:function(event){
                this.c_data.detail.font_color = event.hex;
                this.colors2.hex = event.hex;
                this.$socket.emit('font',{data:this.c_data,name:this.c_name},"client1:slave");
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
            send_data:function(){
                this.$socket.emit('font',{data:this.c_data,name:this.c_name},"client1:slave");
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
</style>
