import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import VueSocketio from 'vue-socket.io';

// Theme Plugins
import VueScrollTo from 'vue-scrollto';
import Parallax from 'vue-parallaxy';
import Slick from 'vue-slick';

// Theme Component
import Banner from './theme/components/banner.vue';
import Navbar from './theme/components/navbar.vue';
import About from './theme/components/about.vue';
import Networking from './theme/components/networking.vue';
import Speaker from './theme/components/speaker.vue';
import Sponsor from './theme/components/sponsor.vue';
import Exhibitor from './theme/components/exhibitor.vue';
import Contact from './theme/components/contact.vue';
import Venue from './theme/components/venue.vue';
import Gallery from './theme/components/gallery.vue';
import Faq from './theme/components/faq.vue';
import Schedule from './theme/components/schedule.vue';
import Custom from './theme/components/custom.vue';
import Text from './theme/components/text.vue';
import BtnWithText from './theme/components/btn-with-text.vue';
import BtnWithLink from './theme/components/btn-with-link.vue';
import BtnWithFile from './theme/components/btn-with-file.vue';
import AppLayout from './theme/components/layout.vue';

// Registering Plugin
Vue.component( 'parallax', Parallax );
Vue.component( 'app-slick', Slick );

// Registering Component
Vue.component( 'banner', Banner );
Vue.component( 'navbar', Navbar );
Vue.component( 'about', About );
Vue.component( 'networking', Networking );
Vue.component( 'speaker', Speaker );
Vue.component( 'sponsor', Sponsor );
Vue.component( 'exhibitor', Exhibitor );
Vue.component( 'contact', Contact );
Vue.component( 'venue', Venue );
Vue.component( 'gallery', Gallery );
Vue.component( 'faq', Faq );
Vue.component( 'schedule', Schedule );
Vue.component( 'custom', Custom );
Vue.component( 'btn-with-text-ele', BtnWithText );
Vue.component( 'btn-with-link-ele', BtnWithLink );
Vue.component( 'btn-with-file-ele', BtnWithFile );
Vue.component( 'text-ele', Text );
Vue.component( 'app-layout', AppLayout );

// Installing Plugins & Library
Vue.use( VueScrollTo );
Vue.use( VueResource );

// Vue.use( VueSocketio, 'http://127.0.0.1:48160' );
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue( {
	el: '#app',
	router,
	sockets: {

	},
	template: '<App/>',
	components: { App }
} );
