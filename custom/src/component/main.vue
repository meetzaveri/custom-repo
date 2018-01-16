<template>
    <div class="custom_section">
        <!--Custom Aside-->
        <div class="custom_aside b-r">
            <!--Custom_heading_div-->
            <div class="custom_heading_div bg-light lter">
                <div class="custom_name_div">
                    <span>CUSTOM</span>
                </div>
                <div class="icon_div">
                    <span @click="change_view('desktop')">
                        <i class="cursor_pointer fa fa-desktop "></i>
                    </span>

                    <span @click="change_view('tablet')">
                        <i class="cursor_pointer fa fa-tablet"></i>
                    </span>

                    <span @click="change_view('mobile')">
                        <i class="cursor_pointer fa fa-mobile "></i>
                    </span>

                    <span class="cursor_pointer">
                        &#x2715;
                    </span>
                </div>
            </div><!--/custom_heading_div-->

            <!-- Website Section -->
            <div class="website_section">

                <!--single_multipage_div-->
                <div class="row">
                    <div class="single_multipage_div b-t">
                        <div v-if="abc.is_single" :class="['col-lg-6','col-md-6','col-sm-6','col-xs-6','padding_right_0',{selected_page_div:abc.is_single}]">
                            <div class=" cursor_pointer">
                                <span class="text-center"> SINGLE PAGE </span>
                            </div>
                        </div>
                        <div v-else="" :class="['col-lg-6','col-md-6','col-sm-6','col-xs-6','padding_left_0',{selected_page_div:!abc.is_single}]">
                            <div class=" cursor_pointer ">
                                <span class="text-center"> MULTI PAGE </span>
                            </div>
                        </div>
                    </div><!--/single_multipage_div-->
                </div><!--/row-->
                <!--/single_multipage_div-->

                <!--Single Page Navigation Menu -->
                <div class="navigation_menu" v-if="abc.is_single">
                    <div class="default_menu" v-if="abc.displayPageTypeSection === 'single_page_menu'">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div v-on:click="abc.displayPageTypeSection='single_page_banner'" class="nav_menu cursor_pointer">
                                    <span>Banner</span>
                                    <span class="pull-right">
                                        <svg width="22" height="22" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div v-on:click="abc.displayPageTypeSection='single_home_page'" class="nav_menu cursor_pointer">
                                    <span>Home Page</span>
                                    <span class="pull-right">
                                        <svg width="22" height="22" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div v-on:click="abc.displayPageTypeSection='single_page_footer'" class="nav_menu cursor_pointer">
                                    <span>Footer</span>
                                    <span class="pull-right">
                                        <svg width="22" height="22" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div><!--/default_menu-->
                </div><!--/navigation_menu-->
                <!--/Single Page Navigation Menu -->

                <!--Multi Page Navigation Menu -->
                <div class="navigation_menu" v-else="">
                    <div class="default_menu"  v-if="abc.displayPageTypeSection === 'multi_page_menu'">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div v-on:click="abc.displayPageTypeSection='multi_page_banner'" class="nav_menu cursor_pointer">
                                    <span>Banner</span>
                                    <span class="pull-right">
                                        <svg width="22" height="22" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div v-on:click="abc.displayPageTypeSection='multi_page_section'" class="nav_menu cursor_pointer">
                                    <span>Pages</span>
                                    <span class="pull-right">
                                        <svg width="22" height="22" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div v-on:click="abc.displayPageTypeSection='multi_page_footer'" class="nav_menu cursor_pointer">
                                    <span>Footer</span>
                                    <span class="pull-right">
                                        <svg width="22" height="22" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div><!--/default_menu-->
                </div><!--/navigation_menu-->
                <!--/Multi Page Navigation Menu -->

                <!-- Single Page Banner Expanded Section-->
                <div class="single_page_expanded_menu_main_div" v-if="abc.displayPageTypeSection === 'single_page_banner'">
                    <div class="expanded_menu_div">
                        <div class="row m-l-none">
                            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 left_chevron_div padding_left_0 padding_right_0">
                                <span class="m-l-sm cursor_pointer" v-on:click="abc.displayPageTypeSection='single_page_menu'">
                                    <svg width="22" height="22" viewBox="0 0 18 18">
                                        <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="col-lg-8 menu_name_div">
                                <span>Banner</span>
                            </div>
                        </div>
                    </div>
                    <!--Scrolling Div-->
                    <div class="scrolling_div" >
                        <!--common_panel_div-->
                        <div class="common_panel_div padding_bottom_5">
                            <div v-for="(item,index) in data.banner_section" class="banner_section" >
                                <component is="tab-banner" :content="{data:item.data,index:index,type:'banner',name:item.name}"></component>
                            </div><!--/Bannner Section-->
                        </div>
                        <!--/common_panel_div-->
                    </div>
                </div>
                <!--/ Single Page Banner Expanded Section-->

                <!--Single Page Home Page Expanded Section-->
                <div class="single_page_expanded_menu_main_div" v-if="abc.displayPageTypeSection === 'single_home_page'">
                    <div class="expanded_menu_div">
                        <div class="row m-l-none">
                            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 left_chevron_div padding_left_0 padding_right_0">
                        <span class="m-l-sm cursor_pointer" v-on:click="abc.displayPageTypeSection='single_page_menu'">
                          <svg width="22" height="22" viewBox="0 0 18 18">
                            <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"/>
                          </svg>
                        </span>
                            </div>
                            <div class="col-lg-8 menu_name_div">
                                <span>Home Page</span>
                            </div>
                        </div>
                    </div>
                    <!--Scrolling Div-->
                    <div class="scrolling_div">
                        <!--common_panel_div-->
                        <div class="common_panel_div padding_bottom_5">
                            <div class="homepage_section m-t-xs" >
                                <draggable @change="change_section" @end="change_section" v-model="data.section_format" :options="{group:'theme_section'}">
                                    <transition-group>
                                        <div v-for="(item,index) in data.section_format" :key="index">
                                            <component :is="'tab-'+item.name" :content="{data:item.data,index:index,type:'default',name:item.name}"></component>
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div><!--/Home Page Section-->
                        </div>
                        <!--/common_panel_div-->
                        <div class="more_plus_div">
                            <span>More +</span>
                        </div>

                        <div class="common_panel_div">
                            <div class="homepage_section" >
                                <draggable v-model="data.more_section" @end="change_section" :options="{group:'theme_section'}">
                                    <transition-group>
                                        <div v-for="(item,index) in data.more_section" :key="index">
                                            <component :is="'tab-'+item.name" :content="{data:item.data,index:index,type:'more',name:item.name}"></component>
                                        </div>
                                    </transition-group>
                                </draggable>
                            </div><!--Home Page Section-->
                            <div class="common_add_btn_div m-t-xs">
                                <button v-on:click="setSWP({name:'add-widget',content:{data:'clear',name:'clear',index:null,type:'clear'}})" type="button" class="btn m-b-xs btn-sm font_size_13 btn-addon m-t-md pull-right no_box_shadow" >
                                    <i class="b-r">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" width="11px" height="11px">
                                            <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M39.889,100h20.1V0h-20.1V100z"></path>
                                            <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M0,59.947V39.817h100v20.129H0z"></path>
                                        </svg>
                                    </i> Add Widget
                                </button>
                            </div>
                        </div><!--/ Common Panel Div-->
                    </div>
                </div>
                <!--/Single Page Home Page Expanded Section-->

                <!--Single Page Footer Expanded Section-->
                <div class="single_page_expanded_menu_main_div" v-if="abc.displayPageTypeSection === 'single_page_footer'">
                    <div class="expanded_menu_div">
                        <div class="row m-l-none">
                            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 left_chevron_div padding_left_0 padding_right_0">
                                <span class="m-l-sm cursor_pointer" v-on:click="abc.displayPageTypeSection='single_page_menu'">
                                    <svg width="22" height="22" viewBox="0 0 18 18">
                                        <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="col-lg-8 menu_name_div">
                                <span>Footer</span>
                            </div>
                        </div>
                    </div>
                    <!--Scrolling Div-->
                    <div class="scrolling_div">
                        <!--common_panel_div-->
                        <div class="common_panel_div padding_bottom_5">
                            <div class="footer_section m-t-xs" >
                                <component is="tab-footer"></component>
                            </div><!--/Footer Section-->
                            <div class="common_add_btn_div">
                                <button v-on:click="setSWP('add-widget')" type="button" class="btn m-b-xs btn-sm font_size_13 btn-addon m-t-md pull-right no_box_shadow" >
                                    <i class="b-r">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" width="11px" height="11px">
                                            <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M39.889,100h20.1V0h-20.1V100z"></path>
                                            <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M0,59.947V39.817h100v20.129H0z"></path>
                                        </svg>
                                    </i> Add Widget
                                </button>
                            </div>
                        </div>
                        <!--/common_panel_div-->
                    </div>
                </div>
                <!-- / Single Page Footer Expanded Section-->

                <!--Multipage Banner Expanded Section-->
                <div class="multi_page_expanded_menu_main_div" v-if="abc.displayPageTypeSection === 'multi_page_banner'">
                    <div class="expanded_menu_div">
                        <div class="row m-l-none">
                            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 left_chevron_div padding_left_0 padding_right_0">
                                <span class="m-l-sm cursor_pointer" v-on:click="abc.displayPageTypeSection='multi_page_menu'">
                                    <svg width="22" height="22" viewBox="0 0 18 18">
                                        <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="col-lg-8 menu_name_div">
                                <span>Banner</span>
                            </div>
                        </div>
                    </div>
                    <!--Scrolling Div-->
                    <div class="scrolling_div">
                        <!--common_panel_div-->
                        <div class="common_panel_div padding_bottom_5">
                            <div v-for="item in data.banner_section" class="banner_section" >
                                <component is="tab-banner" :content="item"></component>
                            </div><!--/Home Page Section-->
                        </div>
                        <!--/common_panel_div-->
                    </div>
                </div>
                <!--/ Multipage Banner Expanded Section-->

                <!--Pages Expanded Section-->
                <div class="multi_page_expanded_menu_main_div" v-if="abc.displayPageTypeSection === 'multi_page_section'">
                    <div class="expanded_menu_div">
                        <div class="row m-l-none">
                            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 left_chevron_div padding_left_0 padding_right_0">
                              <span class="m-l-sm cursor_pointer" v-on:click="abc.displayPageTypeSection='multi_page_menu'">
                                <svg width="22" height="22" viewBox="0 0 18 18">
                                  <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"/>
                                </svg>
                              </span>
                            </div>
                            <div class="col-lg-8 menu_name_div">
                                <span>Pages</span>
                            </div>
                        </div>
                    </div>
                    <!--Scrolling Div-->
                    <div class="scrolling_div" >
                        <!--common_panel_div-->
                        <div class="common_panel_div padding_bottom_5">
                            <div class="pages_section" >

                                <!--Pages Section-->

                                <component is="tab-m-page" v-for="section in abc.multi_section" :tab_name="section.name" :key="section.id">
                                    <component v-for="subsection in section.list" :is="'tab-'+subsection" :key="subsection.id"></component>
                                </component>

                            </div><!--/Pages Section-->
                            <div class="common_add_btn_div">
                                <button type="button" class="btn m-b-xs btn-sm font_size_13 btn-addon m-t-sm pull-right no_box_shadow" >
                                    <i class="b-r">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" width="11px" height="11px">
                                            <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M39.889,100h20.1V0h-20.1V100z"></path>
                                            <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M0,59.947V39.817h100v20.129H0z"></path>
                                          </svg>
                                    </i> Add Page
                                </button>
                            </div>
                        </div>
                        <!--/common_panel_div-->
                    </div>
                </div>
                <!-- / Pages Expanded Section-->

                <!--Multi Page Footer Expanded Section-->
                <div class="single_page_expanded_menu_main_div" v-if="abc.displayPageTypeSection === 'multi_page_footer'">
                    <div class="expanded_menu_div">
                        <div class="row m-l-none">
                            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 left_chevron_div padding_left_0 padding_right_0">
                                <span class="m-l-sm cursor_pointer" v-on:click="abc.displayPageTypeSection='multi_page_menu'">
                                  <svg width="22" height="22" viewBox="0 0 18 18">
                                    <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"/>
                                  </svg>
                                </span>
                            </div>
                            <div class="col-lg-8 menu_name_div">
                                <span>Footer</span>
                            </div>
                        </div>
                    </div>
                    <!--Scrolling Div-->
                    <div class="scrolling_div">
                        <!--common_panel_div-->
                        <div class="common_panel_div padding_bottom_5">
                            <div class="footer_section m-t-xs" >
                                <component is="tab-footer"></component>
                            </div><!--/Footer Section-->
                            <div class="common_add_btn_div">
                                <button type="button" class="btn m-b-xs btn-sm font_size_13 btn-addon m-t-md pull-right no_box_shadow" >
                                    <i class="b-r">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" width="11px" height="11px">
                                          <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M39.889,100h20.1V0h-20.1V100z"></path>
                                          <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#59666E;" d="M0,59.947V39.817h100v20.129H0z"></path>
                                        </svg>
                                    </i> Add Widget
                                </button>
                            </div>
                        </div>
                        <!--/common_panel_div-->
                    </div>
                </div>
                <!-- / Multi Page Footer Expanded Section-->


            </div><!--/Website Section -->
        </div><!--/custom_aside-->

        <!--section_main_edit_div-->

        <div class="section_edit_main_div" v-if="abc.showWidgetPanel != 'clear'">
            <component is="tab-font" v-if="abc.showWidgetPanel === 'font'"></component>
            <component is="tab-add-widget" v-if="abc.showWidgetPanel === 'add-widget'"></component>
            <component is="tab-add-new-page" v-if="abc.showWidgetPanel === 'add-new-page'"></component>
            <component is="tab-event-content" v-if="abc.showWidgetPanel === 'event-content'"></component>
            <component is="tab-header-name" v-if="abc.showWidgetPanel === 'header-name'"></component>
            <component is="tab-load-more" v-if="abc.showWidgetPanel === 'load-more'"></component>
            <component is="tab-add-element" v-if="abc.showWidgetPanel === 'add-element'"></component>
            <component is="tab-layout" v-if="abc.showWidgetPanel === 'layout'"></component>
        </div>

        <!--/section_main_edit_div-->

    </div>
</template>

<script>
    import Draggable from 'vuedraggable'
    import { mapActions } from 'vuex'

    export default{
        data(){
            return {
                data:[],
                abc:this.$store.state.data
            }
        },
        computed:mapActions([
            'set_SWP',
            'set_state'
        ]),
        components:{
            'draggable':Draggable
        },
        methods:{
            setSWP:function(x){
                this.$store.dispatch('set_SWP',x);
            },
            get_content:function(){
                this.$http.get('https://hu-dash.firebaseio.com/data.json')
                    .then(response =>{
                        return response.json();
                    })
                    .then(data =>{
                        this.data = data;
                        this.set_cont(this.data);
                    })
                return this.data;
            },
            set_cont:function(by){
                this.$store.dispatch('set_state',by)
            },
            change_section:function(){
                this.$socket.emit('change_section', {main_section:this.data.section_format, more_section:this.data.more_section},"client1:slave");
            },
            change_view:function(val) {
                this.$emit('view_changed', val);
            }
        },
        mounted(){

            if(this.abc.is_single){
                this.abc.displayPageTypeSection = 'single_page_menu';
            }else{
                this.abc.displayPageTypeSection = 'multi_page_menu';
            }

        },
        created(){
            this.data = this.get_content();
        }
    }
</script>

<style>

</style>