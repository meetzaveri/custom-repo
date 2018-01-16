<template>
    <!--Text Panel-->
    <div class="panel no_box_shadow m-b-none b-b-none b-t-none b-l-none">
        <div :class="['panel-heading','no_border_radius','common_panel_heading_div',isPanelActive ? 'opened_panel_bg' : 'collapse_panel_bg','b-b']">
            <span class="m-l-sm">{{c_data[index].title}}</span>
            <span  v-on:click="openPanel" class="pull-right cursor_pointer">
                <!--replace the below text with &#x2212; when panel is expanded-->
                {{ !panelCollapse ? '&#x2212;' : '&#x2b;' }}
            </span>
        </div>
        <div v-if="!panelCollapse" class="panel-body custom_section_add_element_panel_body" >
            <div class="row div_wrapper m-l-none m-r-none m-t-sm m-b">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row ">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label>Name</label>
                            <input type="text" @input="send_data" v-model="c_data[index].title" class="form-control font_size_11" placeholder="Enter Element Name">
                        </div>
                    </div>
                    <div class="row m-t">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label>Description</label>
                            <quill-editor
                                ref="myTextEditor"
                                v-model="c_data[index].option"
                                @change="send_data"
                                :options="editorOption">
                            </quill-editor>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="custom_element_save_cancel_text m-t pull-right blue_color_text">
                                <span @click="save_data({c_data,c_index,c_type,w_type:'element'})" class="m-r cursor_pointer">Save</span>
                                <span @click="remove_ele({c_data,c_index,c_type,w_type:'element'})" class="cursor_pointer">Delete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/Panel Body -->
    </div>
    <!--/Text Panel-->
</template>

<script>
    import { mapActions } from 'vuex'

    export default{
        props:[
            'tab_content'
        ],
        data(){
            return {
                panelCollapse: true,
                isPanelActive: false,
                index: this.tab_content.index,
                c_data: this.$store.state.data.currentWidgetData.element,
                api_data: this.$store.state.api_data,
                c_index: this.$store.state.data.currentWidgetSectionIndex,
                c_name: this.$store.state.data.currentWidgetSectionName,
                c_type: this.$store.state.data.currentWidgetSectionType,
                editorOption: {
                    modules: {
                        toolbar: [
                            [{'size': ['small', false, 'large']}],
                            ['bold', 'italic'],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            ['link', 'image']
                        ],
                    }
                }
            }
        },
        computed:{
            ...mapActions([
               'set_WS'
            ]),
            editor() {
                return this.$refs.myTextEditor.quillEditor
            }
        },
        methods:{
            openPanel:function(){
                this.panelCollapse = !this.panelCollapse;
                this.isPanelActive = !this.isPanelActive;
            },
            send_data:function(){
                this.$socket.emit('text_ele',{data:this.c_data,name:this.c_name,index:this.index},"client1:slave");
            },
            remove_ele:function(payload){
                this.c_data.splice(this.index,1);
                this.$socket.emit('remove_ele',{name:this.c_name,index:this.index},"client1:slave");
                this.save_data(payload);
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
                this.$store.dispatch('set_WS',by);
            }
        }
    }
</script>

<style>

</style>