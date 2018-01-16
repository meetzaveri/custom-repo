<template>

		<section v-if="content.isVisible" id="about" class="container">
			<!--
				Below code is to show parallax view in section.
			-->

			<!--<app-layout :style="{position: theme_data.show_parallax ? 'absolute' : 'relative',zIndex: 2}" :gridSize="theme_data.section_grid">-->
				<!--<div slot="slot_div">-->
					<div :class="false ? '' : 'row'">
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
            <div></div>
					<div class="row">
					  <div v-if="data_3.length > 0">
						<component v-for="(item,index) in data_3" :key="item.id" :text_content="data_3[index]" :text_index="index" :is="item.type+'-ele'"></component>
					  </div>
					</div>

					<app-layout :gridSize="data_4.type.toString()">
						<div class="hamse" v-for="i in 5" slot="slot_div">
							<div>
								<div>Abc</div>
							</div>
						</div>
					</app-layout>
				<!--</div>-->
				<!--<div slot="slot_img">-->
					<!--<img style="width:100%;height: auto;" src="../image/para.jpg">-->
				<!--</div>-->
			<!--</app-layout>-->
			<!--<div v-if="theme_data.show_parallax" style="position: relative;z-index: 1;margin-top:-50px;">-->
				<!--<parallax :speedFactor="0.1">-->
					<!--<img style="height:100vh" src="../image/para.jpg" alt="very cool bg">-->
				<!--</parallax>-->
			<!--</div>-->
		</section>
		<!-- this is for calling component -->
		<!--{{$route.params.id === '123'}}-->
		<!--<component v-if="$route.params.id === '123'" is="networking"></component>-->
</template>

<script>
	import Parallax from 'vue-parallaxy';

	export default {
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
			},
			data_4: function() {
				return this.data_l;
			}
		},
		components: {
			'parallax': Parallax,
		},
		data() {
			return {
				data_f: this.content.font,
				data_h: this.content.header,
				data_e: this.content.element,
				data_l: this.content.layout
			};
		},
		sockets: {
			font: function( val ) {
				if ( val.name === 'about' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'about' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'about' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'about' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {
				if ( val.name === 'about' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {
				if ( val.name === 'about' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {
				if ( val.name === 'about' ) {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'about' ) {
					this.data_e.splice( val.index, 1 );
				}
			},
			layoutUpdate: function( val ) {
				if ( val.name === 'about' ) {
					this.data_l = val.data;
				}
			}
		}
	};
</script>

<style>

</style>
