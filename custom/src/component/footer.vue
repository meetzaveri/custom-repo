<template>
    <!--Footer 1-->
    <div class="row m-l-none m-r-none">
        <div class="panel no_box_shadow m-b-sm">
            <div :class="['panel-heading','no_border_radius','common_panel_heading_div',displayFooterPanel === 'footer1' ?'opened_panel_bg':'collapse_panel_bg']">
                <span >Footer Name 1 </span>
                <span v-on:click='setDFP("footer1")' class="pull-right cursor_pointer">
                    {{displayFooterPanel==='footer1' ? '&#x2212;' : '&#x2b;'}}
                </span>
            </div>
            <div class="panel-body footer_panel_body b b-t-none padding_left_10 padding_top_0 padding_bottom_0" v-if="displayFooterPanel === 'footer1'">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label class="m-t-sm">Section Name</label>
                        <input type="text" class="form-control" placeholder="Enter Section Name">
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div class="m-t show_hide_checkbox">
                            <label class="i-switch bg-info m-t-xs m-r">
                                <input checked="" type="checkbox">
                                <i></i>
                                <span class="m-l-xl">Show</span>
                            </label>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div class="m-t m-b-sm save_cancel_text pull-right">
                            <span class="cursor_pointer">Save</span>
                            <span class="m-l cursor_pointer">Cancel</span>
                        </div>
                    </div>
                </div>
            </div> <!--/Panel Body -->
        </div><!--Panel-->
    </div><!--/Row-->
    <!--/ Footer 1-->
</template>

<script>
    import { mapActions } from 'vuex'

    export default{
        data(){
            return this.$store.state.data;
        },
        computed:mapActions([
            'set_DFP'
        ]),
        methods:{
            setDFP:function(x){
                this.$store.dispatch('set_DFP',x);
            }
        }
    }
</script>

<style>

</style>