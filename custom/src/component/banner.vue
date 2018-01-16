<template>
    <!--Banner-->
    <div class="row m-l-none m-r-none">
        <div class="panel no_box_shadow m-b-sm">
            <div :class="['panel-heading','no_border_radius','common_panel_heading_div',displayBannerPanel === content.name ?'opened_panel_bg':'collapse_panel_bg']">
                <span >{{content.name}}</span>
                <span v-on:click='setDBP(content.name)' class="pull-right cursor_pointer">
                    {{displayBannerPanel===content.name ? '&#x2212;' : '&#x2b;'}}
                </span>
            </div>
            <div class="panel-body banner_panel_body b b-t-none padding_10" v-if="displayBannerPanel === content.name">
                <div class="speaker_panel_header_div b">
                    <div v-on:click="setSWP({name:'event-content',content})" class="speaker_panel_header bg-light lter b-b cursor_pointer">
                        <span>Contents</span>
                    </div>
                    <div v-on:click="setSWP({name:'add-element',content})" class="speaker_panel_header bg-light lter cursor_pointer">
                        <span>Add Element</span>
                    </div>
                </div>

                <div class="row m-t-sm">
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

            </div> <!--/Panel Body -->

        </div><!--Panel-->
    </div><!--/Banner-->
</template>

<script>
    import { mapActions } from 'vuex'

    export default{
        props:[
            'content'
        ],
        data(){
          return this.$store.state.data;
        },
        computed:mapActions([
            'set_DBP',
            'set_SWP'
        ]),
        methods:{
            setDBP:function(x){
                this.$store.dispatch('set_DBP',x);
            },
            setSWP:function(x){
                this.$store.dispatch('set_SWP',x);
            }
        }
    }
</script>

<style>

</style>