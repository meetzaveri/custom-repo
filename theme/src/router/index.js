import Vue from 'vue';
import Router from 'vue-router';
import Index from '../theme/index.vue';

Vue.use( Router );

export default new Router( {
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Index
		},
		{
			path: '/:id/theme',
			name: 'Custom',
			component: Index
		}
	]
} );
