<template>
    <!--div for adding widget -->
    <div v-if="abc.showWidgetPanel === 'add-widget'" class="add_widget_div">
        <div class="section_header_div bg-light lter b-b">
            <div class="header_title_text">
                <span class="m-l" >Select Widget to add</span>
            </div>
        </div>
        <!--/ Section header div-->
        <div class="section_scrolling_div">
            <div class="widget_search_box_div">
                <input type="text" v-model="filterText" class="form-control font_size_11" placeholder="Search">
            </div>
            <div class="widgets_option_main_div">
                <div v-for="(widget,index) in filteredWidget" :key="widget.id" v-on:click="update_list(widget,index)" class="cursor_pointer">
                    <component :is="'icon-'+widget"></component>
                </div>
            </div>
        </div>
        <!--/ scrolling div-->
    </div>
    <!-- / div for adding widget -->
</template>

<script>
    import About from './widget-tab/about.vue'
    import Blog from './widget-tab/blog.vue'
    import Exhibitor from './widget-tab/exhibitor.vue'
    import FacebookRsvp from './widget-tab/facebook-rsvp.vue'
    import Faq from './widget-tab/faq.vue'
    import FeaturedSession from './widget-tab/featured-session.vue'
    import ImageGallery from './widget-tab/image-gallery.vue'
    import Networking from './widget-tab/networking.vue'
    import Speaker from './widget-tab/speaker.vue'
    import Sponsor from './widget-tab/sponsor.vue'
    import Stackholder from './widget-tab/stackholder.vue'
    import Ticket from './widget-tab/ticket.vue'
    import UpcomingEvent from './widget-tab/upcoming-event.vue'
    import Venue from './widget-tab/venue.vue'
    import VideoGallery from './widget-tab/video-gallery.vue'
    import CustomMenu from './widget-tab/custom-menu.vue'
    import SocialLinks from './widget-tab/social-links.vue'

    export default{
        data(){
            return {
                abc:this.$store.state.data,
                filterText:''
            }
        },
        computed:{
            filteredWidget:function(){
                return this.abc.widget_list.filter((wlist)=> {
                    return wlist.toLowerCase().match(this.filterText.toLowerCase());
                })
            }
        },
        components:{
            'icon-about':About,
            'icon-customMenu':CustomMenu,
            'icon-exhibitor':Exhibitor,
            'icon-facebookRsvp':FacebookRsvp,
            'icon-faq':Faq,
            'icon-featuredSession':FeaturedSession,
            'icon-imageGallery':ImageGallery,
            'icon-networking':Networking,
            'icon-speaker':Speaker,
            'icon-sponsor':Sponsor,
            'icon-stackholder':Stackholder,
            'icon-ticket':Ticket,
            'icon-upcomingEvent':UpcomingEvent,
            'icon-venue':Venue,
            'icon-videoGallery':VideoGallery,
            'icon-blog':Blog,
            'icon-socialLinks': SocialLinks,

        },
        methods:{
            update_list:function(val,index){
                console.log('hi');
                this.abc.widget_list.splice(index,1);
                this.abc.more_section_list.push(val);
            },
            unset_WP:function(){
                this.$store.commit('unset_widget_panel');
            }
        }
    }
</script>

<style>

</style>