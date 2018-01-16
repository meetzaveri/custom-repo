<template>
    <!--div for add element-->
    <div v-if="abc.showWidgetPanel === 'add-element'" class="add_element_change_div">
        <div class="section_header_div bg-light lter b-b">
            <div class="header_title_text">
                <span class="font_size_14 m-l-25px" >Elements</span>
            </div>
            <div class="header_save_cancel_text_div pull-right blue_color_text">
                <span @click="unset_WP" class="m-r-25px cursor_pointer">Close</span>
            </div>
        </div> <!-- /section header_div-->

        <div class="section_scrolling_div">
            <div class="custom_section_edit_inner_div">
                <div class="custom_section_edit_body_div bg-light lter">
                    <div class="add_element_main_panel_div">
                        <div class="add_option_btn_div">
                            <div v-for="(item,index) in c_data">
                                <component :is="'ele-'+item.type" :tab_content="{index:index}"></component>
                            </div>

                            <button type="button" class="btn m-r-n-xs btn-sm font_size_13 btn-addon m-t pull-right no_box_shadow" @click="showModal = true">
                                <i class="b-r">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" width="11px" height="11px">
                                        <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M39.889,100h20.1V0h-20.1V100z"></path>
                                        <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M0,59.947V39.817h100v20.129H0z"></path>
                                    </svg>
                                </i> Add Element
                            </button>
                            <modal key="myModal" width="670px" v-if="showModal" @close="showModal = false">
                                <div slot="header">
                                    <div class="close_icon_div pull-right cursor_pointer" @click="showModal = false">
                                        <span>&#x2715;</span>
                                    </div>

                                    <div class="default_text_div" >
                                        <div class="modal-title font_size_14 padding_left_6">Add New Element</div>
                                        <div class="font_size_11 m-t-xs sub_text_color padding_left_6">Add Element and Merge with other field</div>
                                    </div>
                                </div>
                                <div slot="body">
                                    <div class="selection_of_new_element_div">
                                        <div class="row m-r-none m-l-none">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                    <div class="selection_element_div" @click="is_selected = 'btn-with-text'">
                                                        <div v-if="is_selected === 'btn-with-text'" class="element_selected_div">
                                                            <svg enable-background="new 0 0 26 26" height="10px" version="1.1" viewBox="0 0 26 26" width="10px">
                                                                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" fill="#FFFFFF"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="image_div">
                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                                                                 <path style="fill:#ced7da;" d="M0.014,18.806H24v2.711H0.014V18.806z"></path>
                                                                 <path style="fill:#ced7da;" d="M0.014,13.358H24v2.711H0.014V13.358z"></path>
                                                                 <path style="fill:#ced7da;" d="M11.992,7.931H24v2.711H11.992V7.931z"></path>
                                                                 <path style="fill:#ced7da;" d="M11.992,2.483H24v2.711H11.992V2.483z"></path>
                                                                 <path style="fill:#ced7da;" d="M1.039,3.5h2.077v6.123H2.077v1.02h4.154v-1.02H5.192V3.5h2.077v1.02h1.039V3.5V2.48H0V3.5v1.02h1.039                              V3.5z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="element_name text-center">
                                                        <span>Button with Text</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                    <div class="selection_element_div" @click="is_selected = 'btn-with-file'">
                                                        <div class="element_selected_div" v-if="is_selected === 'btn-with-file'">
                                                            <svg enable-background="new 0 0 26 26" height="10px" version="1.1" viewBox="0 0 26 26" width="10px">
                                                                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" fill="#FFFFFF"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="image_div">
                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                                                                 <path style="fill:#ced7da;" d="M13.427,10c-0.396,0-0.734-0.146-1.011-0.438C12.139,9.271,12,8.917,12,8.5v-8.501H3.913                              c-0.396,0-0.733,0.146-1.011,0.438C2.624,0.728,2.485,1.082,2.485,1.499v21.003c0,0.417,0.139,0.771,0.416,1.063                              c0.278,0.292,0.615,0.438,1.011,0.438h16.175c0.396,0,0.733-0.146,1.011-0.438c0.277-0.292,0.416-0.646,0.416-1.063V10H13.427z                               M17.709,19.501c0,0.146-0.045,0.266-0.134,0.359C17.486,19.954,17.372,20,17.233,20H6.767c-0.139,0-0.253-0.046-0.342-0.14                              c-0.089-0.094-0.134-0.213-0.134-0.359v-1c0-0.146,0.045-0.266,0.134-0.36c0.089-0.094,0.204-0.14,0.342-0.14h10.466                              c0.139,0,0.252,0.046,0.342,0.14c0.089,0.094,0.134,0.214,0.134,0.36V19.501z M17.709,15.5c0,0.146-0.045,0.266-0.134,0.359                              C17.486,15.954,17.372,16,17.233,16H6.767c-0.139,0-0.253-0.047-0.342-0.141c-0.089-0.094-0.134-0.213-0.134-0.359v-1                              c0-0.146,0.045-0.266,0.134-0.359C6.514,14.047,6.628,14,6.767,14h10.466c0.139,0,0.252,0.047,0.342,0.141                              c0.089,0.094,0.134,0.213,0.134,0.359V15.5z"></path>
                                                                 <path style="fill:#ced7da;" d="M20.504,5.937l-4.639-4.876c-0.496-0.521-1.15-0.86-1.962-1.016V8h7.567                              C21.321,7.145,21,6.458,20.504,5.937z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="element_name text-center">
                                                        <span>Button with&nbsp; File</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                    <div class="selection_element_div" @click="is_selected = 'btn-with-link'">
                                                        <div class="element_selected_div" v-if="is_selected === 'btn-with-link'">
                                                            <svg enable-background="new 0 0 26 26" height="10px" version="1.1" viewBox="0 0 26 26" width="10px">
                                                                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" fill="#FFFFFF"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="image_div">
                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                                                                <path style="fill:#ced7da;" d="M22.135,10.86l-4.511,4.509c-2.49,2.492-6.529,2.492-9.019,0c-0.393-0.391-0.699-0.832-0.969-1.286                              l2.096-2.096c0.1-0.101,0.223-0.158,0.34-0.226c0.145,0.495,0.398,0.964,0.788,1.353c1.243,1.244,3.267,1.243,4.509,0l4.51-4.509                              c1.244-1.244,1.244-3.267,0-4.511c-1.243-1.243-3.266-1.243-4.51,0L13.766,5.7c-1.301-0.507-2.704-0.643-4.068-0.443l3.417-3.417                              c2.492-2.491,6.529-2.491,9.021,0C24.625,4.331,24.625,8.369,22.135,10.86z M10.209,18.275L8.605,19.88                              c-1.244,1.243-3.267,1.243-4.511,0c-1.243-1.244-1.243-3.267,0-4.511l4.511-4.51c1.244-1.244,3.266-1.244,4.509,0                              c0.389,0.389,0.642,0.857,0.788,1.352c0.119-0.068,0.24-0.125,0.339-0.224l2.096-2.095c-0.268-0.457-0.576-0.896-0.968-1.287                              c-2.49-2.491-6.53-2.491-9.021,0l-4.509,4.51c-2.491,2.491-2.491,6.529,0,9.021c2.491,2.49,6.529,2.49,9.02,0l3.418-3.418                              C12.912,18.918,11.51,18.781,10.209,18.275z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="element_name text-center">
                                                        <span>Button with Link</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                    <div class="selection_element_div" @click="is_selected = 'text'">
                                                        <div class="element_selected_div" v-if="is_selected === 'text'">
                                                            <svg enable-background="new 0 0 26 26" height="10px" version="1.1" viewBox="0 0 26 26" width="10px">
                                                                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" fill="#FFFFFF"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="image_div">
                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                                                                 <path style="fill:#ced7da;" d="M20.322,0.018l3.676,0.001l-0.001,3.676L20.32,3.693L20.322,0.018z"></path>
                                                                 <path style="fill:#ced7da;" d="M0.01,0.009L3.687,0.01L3.686,3.686L0.009,3.685L0.01,0.009z"></path>
                                                                 <path style="fill:#ced7da;" d="M20.313,20.324l3.676,0.002l-0.001,3.675L20.312,24L20.313,20.324z"></path>
                                                                 <path style="fill:#ced7da;" d="M19.351,4.662l0.001-2.799L4.655,1.856l-0.001,2.8l-2.8-0.001L1.848,19.348l2.8,0.001l-0.001,2.8                              l14.696,0.006l0.001-2.799l2.8,0.001L22.15,4.663L19.351,4.662z M16.97,7.573l-3.882-0.001l-0.005,10.851l-2.168-0.001L10.919,7.57                              L7.037,7.569l0.001-1.978l9.938,0.004L16.97,7.573z"></path>
                                                                 <path style="fill:#ced7da;" d="M0.001,20.316l3.677,0.001l-0.001,3.676L0,23.992L0.001,20.316z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="element_name text-center">
                                                        <span>Text</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div slot="footer">
                                    <div class="row m-l-none m-r-none padding_top_8 padding_bottom_10">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                            <button @click="showModal = false;push_element();"class="btn btn-dark custom_button_width text-white pull-right" type="button">Select</button>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                            <button @click="showModal = false" class="btn cancel_btn custom_button_width pull-left b" type="button" data-dismiss="modal">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </modal>
                        </div>
                    </div>
                </div>
            </div><!-- custom_section_edit_inner_div -->
        </div>
    </div>
    <!--/div for add element -->
</template>

<script>
    import Text from './element/text.vue'
    import BtnWithText from './element/btn-with-text.vue'
    import BtnWithFile from './element/btn-with-file.vue'
    import BtnWithLink from './element/btn-with-link.vue'
    import Modal from './element/modal.vue'

    export default{
        data(){
            return {
                showModal:false,
                is_selected:false,
                abc:this.$store.state.data,
                c_data:this.$store.state.data.currentWidgetData.element,
                api_data:this.$store.state.api_data,
                c_index:this.$store.state.data.currentWidgetSectionIndex,
                c_name:this.$store.state.data.currentWidgetSectionName,
                c_type:this.$store.state.data.currentWidgetSectionType,
            }
        },
        components:{
            'ele-text':Text,
            'ele-btn-with-text':BtnWithText,
            'ele-btn-with-file':BtnWithFile,
            'ele-btn-with-link':BtnWithLink,
            'modal':Modal
        },
        methods:{
            push_element:function(){
                var temp;

                switch(this.is_selected){
                    case 'text':
                        temp = {
                            "type":"text",
                            "title":"text",
                            "option":"text detail"
                        };
                        break;
                    case 'btn-with-text':
                        temp = {
                            "type":'btn-with-text',
                            "title":"btn-with-text",
                            "option":"Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                            "ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
                            "reprehenderit in voluptate velit esse cillum dolore eu " +
                            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, " +
                            "sunt in culpa qui officia deserunt mollit anim id est laborum"
                        };
                        break;
                    case 'btn-with-link':
                        temp = {
                            "type":"btn-with-link",
                            "title":"Google",
                            "option":"http://google.com"
                        };
                        break;
                    case 'btn-with-file':
                        temp = {
                            "type":"btn-with-file",
                            "title":"File link",
                            "option":"#"
                        };
                        break;
                }
                this.send_data(temp);
                this.c_data.push(temp);
            },
            send_data:function(temp){
                    this.$socket.emit('add_element',{data:temp,name:this.c_name},"client1:slave");
            },
            unset_WP:function(){
                this.$store.commit('unset_widget_panel');
            }

        }
    }
</script>

<style>

</style>