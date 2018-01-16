import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueResource from 'vue-resource'
import VueSocketio from 'vue-socket.io'

//Components
import Banner from './component/banner.vue'
import Footer from './component/footer.vue'
import About from './component/section/about.vue'
import Contact from './component/section/contact.vue'
import CustomMenu from './component/section/custom-menu.vue'
import EventHighlight from './component/section/event-highlight.vue'
import Exhibitor from './component/section/exhibitor.vue'
import FacebookRsvp from './component/section/facebook-rsvp.vue'
import Faq from './component/section/faq.vue'
import FeaturedSession from './component/section/featured-session.vue'
import ImageGallery from './component/section/image-gallery.vue'
import Networking from './component/section/networking.vue'
import Schedule from './component/section/schedule.vue'
import SocialLinks from './component/section/social-links.vue'
import Speaker from './component/section/speaker.vue'
import Sponsor from './component/section/sponsor.vue'
import Stackholder from './component/section/stackholder.vue'
import Ticket from './component/section/ticket.vue'
import UpcomingEvent from './component/section/upcoming-event.vue'
import Venue from './component/section/venue.vue'
import VideoGallery from './component/section/video-gallery.vue'
import EventContent from './component/widget/event-content.vue'
import AddElement from './component/widget/add-element.vue'
import LoadMore from './component/widget/load-more.vue'
import HeaderName from './component/widget/header-name.vue'
import Layout from './component/widget/layout.vue'
import Font from './component/widget/font.vue'
import AddWidget from './component/widget/add-widget.vue'
import AddNewPage from './component/widget/add-new-page.vue'
import MPage from './component/section/mpage.vue'

//Plugins
import {Chrome} from 'vue-color'
import VueCropper from 'vue-cropperjs'
import VueSlider from 'vue-slider-component'
import VueQuillEditor from 'vue-quill-editor'

//Registering Global Component
Vue.component('tab-banner',Banner);
Vue.component('tab-footer',Footer);
Vue.component('tab-about',About);
Vue.component('tab-contact',Contact);
Vue.component('tab-custom-menu',CustomMenu);
Vue.component('tab-event-highlight',EventHighlight);
Vue.component('tab-exhibitor',Exhibitor);
Vue.component('tab-facebook-rsvp',FacebookRsvp);
Vue.component('tab-faq',Faq);
Vue.component('tab-featured-session',FeaturedSession);
Vue.component('tab-gallery',ImageGallery);
Vue.component('tab-networking',Networking);
Vue.component('tab-schedule',Schedule);
Vue.component('tab-social-links',SocialLinks);
Vue.component('tab-speaker',Speaker);
Vue.component('tab-sponsor',Sponsor);
Vue.component('tab-stackholder',Stackholder);
Vue.component('tab-ticket',Ticket);
Vue.component('tab-upcoming-event',UpcomingEvent);
Vue.component('tab-venue',Venue);
Vue.component('tab-video-gallery',VideoGallery);
Vue.component('tab-event-content',EventContent);
Vue.component('tab-add-element',AddElement);
Vue.component('tab-load-more',LoadMore);
Vue.component('tab-header-name',HeaderName);
Vue.component('tab-layout',Layout);
Vue.component('tab-font',Font);
Vue.component('tab-add-widget',AddWidget);
Vue.component('tab-add-new-page',AddNewPage);
Vue.component('tab-m-page',MPage);

//Registering Global Plugin
Vue.component('color-picker',Chrome);
Vue.component('vue-cropper',VueCropper);
Vue.component('vue-slider',VueSlider);

//Installing Plugin & library
Vue.use(VueQuillEditor);
Vue.use(VueResource);
// Vue.use(VueSocketio,'http://127.0.0.1:48160');

var id="client1:master";


new Vue({
    el: '#app',
    store:store,
    sockets:{
        connect:function(){
            this.$socket.emit('init',id);
            console.log('socket connected');
        }
    },
    render: h => h(App)
})
