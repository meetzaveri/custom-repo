<template>
    <!--Venue-->
    <div class="row m-l-none m-r-none">
        <div class="panel no_box_shadow m-b-sm">
            <div :class="['panel-heading','no_border_radius','common_panel_heading_div',abc.displayHomePagePanel === 'venue' ?'opened_panel_bg':'collapse_panel_bg']">
                <span >Venue </span>
                <span v-on:click='setDHP("venue")' class="pull-right cursor_pointer">
                    {{abc.displayHomePagePanel==='venue' ? '&#x2212;' : '&#x2b;'}}
                </span>
            </div>
            <div class="panel-body home_page_panel_body b b-t-none padding_10" v-if="abc.displayHomePagePanel === 'venue'">
                <div class="speaker_panel_header_div b">
                    <div v-on:click="setSWP({name:'font',content})" class="speaker_panel_header bg-light lter b-b cursor_pointer">
                        <span>Font</span>
                    </div>
                    <div v-on:click="setSWP({name:'layout',content})" class="speaker_panel_header bg-light lter b-b cursor_pointer">
                        <span>Layout</span>
                    </div>
                    <div v-on:click="setSWP({name:'header-name',content})" class="speaker_panel_header bg-light lter b-b cursor_pointer">
                        <span>Header Name</span>
                    </div>
                    <div v-on:click="setSWP({name:'load-more',content})" class="speaker_panel_header bg-light lter b-b cursor_pointer">
                        <span>Load More</span>
                    </div>
                    <div v-on:click="setSWP({name:'add-element',content})" class="speaker_panel_header bg-light lter cursor_pointer" data-toggle="modal" data-target="#myModal">
                        <span>Add Element</span>
                    </div>
                </div>

                <div class="row m-t-sm">
                    <div class="col-lg-12">
                        <div class="show_hide_checkbox">
                            <label class="i-switch bg-info m-t-xs m-r">
                                <input v-model="isVisible" @change="send_data" type="checkbox">
                                <i></i>
                                <span class="m-l-xl">Show</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div> <!--/Panel Body -->
        </div><!--Panel-->
    </div><!--/Row Venue-->
</template>

<script>
    import { mapActions } from 'vuex'

    export default{
        props:[
            'content'
        ],
        data(){
            return {
                abc : this.$store.state.data,
                isVisible: this.content.data.isVisible
            }
        },
        computed:mapActions([
            'set_DHP',
            'set_SWP'
        ]),
        methods:{
            setDHP:function(x){
                this.$store.dispatch('set_DHP',x);
            },
            setSWP:function(x){
                this.$store.dispatch('set_SWP',x);
            },
            send_data: function(){
                this.$socket.emit('toggle_section',{ isChanged: this.isVisible, type: this.content.type, index: this.content.index },"client1:slave");
            }
        }
    }
</script>

<style>

</style>