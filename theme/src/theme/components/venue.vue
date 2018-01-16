<template>
	<section  v-if="content.isVisible" id="venue">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="section-title" :style="{fontFamily:data_1.title.font_family,fontSize:data_1.title.font_size+'px',color:data_1.title.font_color}">
						<p class="section-title-tweak">{{ data_2.section_name }}</p>
					</div>
					<div class="section-title">
						<p class="section-title-tweak">{{data_2.tagline}}</p>
					</div>
					<div class="section-format section_detail" :style="{fontSize:data_1.detail.font_size+'px',color:data_1.detail.font_color,fontFamily:data_1.detail.font_family}">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</div>
				</div>
			</div>
		</div>

		<gmap-map
				:center="{lat:21.169395, lng:72.840953}"
				:zoom="7"
				map-type-id="terrain"
				style="width: 100%; height: 500px"
		>
			<gmap-info-window
					content="<h4>Venue</h4><h5>Yaha Pe Aa Jana</h5>"
					:opened="true"
					:position="{lat:21.169395, lng:72.840953}"
					:options="{pixelOffset:{height:-35,width:0}}"
			>
				<gmap-marker
						:position="{lat:21.169395, lng:72.840953}"
						:clickable="true"
						:draggable="false"
						@click="center=position"
				></gmap-marker>
			</gmap-info-window>
		</gmap-map>

		<div class="row">
			<div v-if="data_3.length > 0">
				<component v-for="(item,index) in data_3" :key="item.id" :text_content="data_3[index]" :text_index="index" :is="item.type+'-ele'"></component>
			</div>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import * as VueGoogleMap from 'vue2-google-maps';

	Vue.use( VueGoogleMap, {
		load: {
			key: 'AIzaSyAnc4SclTF0q7b_I9MwolBu72BhgjviJuo'
		}
	} );

	export default{
		props: [
			'content'
		],
		computed: {
			data_1: function() {
				return this.data_f;
			},
			data_2: function() {
				return this.data_h;
			},
			data_3: function() {
				return this.data_e;
			}
		},
		data() {
			return {
				data_f: this.content.font,
				data_h: this.content.header,
				data_e: this.content.element
			};
		},
		sockets: {
			font: function( val ) {
				if ( val.name === 'venue' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'venue' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'venue' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'venue' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {

				if ( val.name === 'venue' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {

				if ( val.name === 'venue' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {

				if ( val.name === 'venue' ) {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'venue' ) {
					this.data_e.splice( val.index, 1 );
				}
			}
		}
	};
</script>

<style>
	section#venue{
		margin-top:-50px;
	}
</style>
