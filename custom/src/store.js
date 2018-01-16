import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        api_data:'',
        data:{
            is_single:true,
            displayPageTypeSection:'clear',
            displayBannerPanel:'clear',
            displayFooterPanel:'clear',
            displayHomePagePanel:'clear',
            showWidgetPanel:'clear',
            showMPageSection:'clear',
            currentWidgetData:'clear',
            currentWidgetSectionName:'',
            currentWidgetSectionIndex:'',
            currentWidgetSectionType:'',
            multi_section: [
                {
                    name:'home',
                    list:['banner','about','speaker','schedule']
                },
                {
                    name:'Speaker',
                    list:['banner','about','venue','sponsor']
                }
            ],
            widget_list:['upcomingEvent','facebookRsvp','socialLinks','featuredSession'],
            section_list:['about','contact','custom-menu','event-highlight','exhibitor'
            ,'faq','image-gallery','networking','schedule','speaker','sponsor','stackholder','ticket',
            'venue','video-gallery'],
            more_section_list:[]
        }
    },
    mutations:{
        set_display_banner_panel:(state,payload) =>{
            if(state.data.displayBannerPanel === payload){
                state.data.displayBannerPanel = "clear";
            }
            else{
                state.data.displayBannerPanel = payload;
            }
        },
        set_display_footer_panel:(state,payload) =>{
            if(state.data.displayFooterPanel === payload){
                state.data.displayFooterPanel = "clear";
            }
            else{
                state.data.displayFooterPanel = payload;
            }
        },
        set_display_home_page_panel:(state,payload) =>{
            if(state.data.displayHomePagePanel === payload){
                state.data.displayHomePagePanel = "clear";
            }
            else{
                state.data.displayHomePagePanel = payload;
            }
        },
        set_show_widget_panel:(state,payload) =>{

            if(state.data.showWidgetPanel === payload.name){
                state.data.showWidgetPanel = "clear";
            }else{
                state.data.showWidgetPanel = payload.name;
                state.data.currentWidgetData = payload.content.data;
                state.data.currentWidgetSectionIndex = payload.content.index;
                state.data.currentWidgetSectionName = payload.content.name;
                state.data.currentWidgetSectionType = payload.content.type;
            }
        },
        set_state_api_data:(state,payload) =>{
            state.api_data = payload;
        },
        set_widget_state:(state,payload) =>{

            var temp;
            if(payload.c_type === 'default'){
                temp = 'section_format';
            }
            else if(payload.c_type === 'banner'){
                temp = 'banner_section'
                state.api_data[temp][payload.c_index].data = payload.c_data;
                return;
            }
            else{
                temp = 'more_section';
            }

            state.api_data[temp][payload.c_index].data[payload.w_type] = payload.c_data;
        },
        unset_widget_panel:(state) =>{
            state.data.showWidgetPanel = 'clear';
            state.data.currentWidgetData = 'clear';
            state.data.currentWidgetSectionIndex = 'clear';
            state.data.currentWidgetSectionName = 'clear';
            state.data.currentWidgetSectionType = 'clear';
        }
    },
    actions:{
        set_DBP:({commit},payload) =>{
            commit('set_display_banner_panel',payload);
        },
        set_DFP:({commit},payload) =>{
            commit('set_display_footer_panel',payload);
        },
        set_DHP:({commit},payload) =>{
            commit('set_display_home_page_panel',payload);
        },
        set_SWP:({commit},payload) =>{
            commit('set_show_widget_panel',payload);
        },
        set_state:({commit},payload) =>{
            commit('set_state_api_data',payload);
        },
        set_WS:({commit},payload) =>{
            commit('set_widget_state',payload);
        }
    }
})
