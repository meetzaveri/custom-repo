<template>
	<section  v-if="content.isVisible" id="gallery" class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
				<div class="section-format row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="gallery-tab row">
							<button v-for="(items,index) in gallery_data" v-on:click="show_section = 'gtab-'+index;" :class="['gallery-tab-btn','btn','btn-default',{active:show_section === 'gtab-'+index}]">{{items.gallery_tab}}</button>
						</div>
						<div v-for="(items,index) in gallery_data" v-if="show_section === 'gtab-'+index" class="row">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<a v-for="g_img in items.gallery_images" :href="g_img.photo" :data-lightbox="items.gallery_tab">
									<div class="gallery-img-div col-lg-3 col-md-3 col-sm-3 col-xs-6">
										<img class="gallery-img" :src="g_img.thumbnail" />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div v-if="data_3.length > 0">
				<component v-for="(item,index) in data_3" :key="item.id" :text_content="data_3[index]" :text_index="index" :is="item.type+'-ele'"></component>
			</div>
		</div>
	</section>
</template>

<script>
	import Lightbox from 'lightbox2';
	require( 'lightbox2/dist/css/lightbox.min.css' );

	Lightbox.option( {
		'resizeDuration': 200,
		'wrapAround': true
	} )

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
				isActive: true,
				show_section: 'gtab-0',
				data_f: this.content.font,
				data_h: this.content.header,
				data_e: this.content.element,
				gallery_data: [ {
					gallery_tab: 'first_tab',
					gallery_images: [ {
						id: "e3ce8d3d-0ae2-4c6b-8952-40334074b130",
						thumbnail: "https://robohash.org/evenietsedlaudantium.png?size=150x150&set=set1",
						photo: "https://robohash.org/illumreiciendisnon.png?size=800x600&set=set1"
					}, {
						id: "c0c28d48-32bb-4ad2-88ff-fbea51798f50",
						thumbnail: "https://robohash.org/quiaautlibero.png?size=150x150&set=set1",
						photo: "https://robohash.org/quidemblanditiissunt.png?size=800x600&set=set1"
					}, {
						id: "3856a55c-77b0-4212-a0f6-d4f906cca895",
						thumbnail: "https://robohash.org/similiqueveritatismodi.png?size=150x150&set=set1",
						photo: "https://robohash.org/delectuseaqueet.png?size=800x600&set=set1"
					} ]
				}, {
					gallery_tab: 'second_tab',
					gallery_images: [
						{
							id: "2a84403d-5e5f-4d85-bbe3-ffee5befc3c0",
							thumbnail: "https://robohash.org/veritatisdolorsapiente.png?size=150x150&set=set1",
							photo: "https://robohash.org/placeatfugavoluptatem.png?size=800x600&set=set1"
						}, {
							id: "a038b24c-c058-4c1d-9b8b-fe6e00163e90",
							thumbnail: "https://robohash.org/noneaneque.png?size=150x150&set=set1",
							photo: "https://robohash.org/quisquamassumendaratione.png?size=800x600&set=set1"
						}, {
							id: "030ed65e-e5da-448d-b637-b7206daf9418",
							thumbnail: "https://robohash.org/etetharum.png?size=150x150&set=set1",
							photo: "https://robohash.org/pariaturquiqui.png?size=800x600&set=set1"
						}
					]
				}, {
					gallery_tab: 'third_tab',
					gallery_images: [
						{
							id: "d32c6676-fc00-451e-bb94-93e8dde887a0",
							thumbnail: "https://robohash.org/illumestlaborum.png?size=150x150&set=set1",
							photo: "https://robohash.org/delectusrecusandaemodi.png?size=800x600&set=set1"
						}, {
							id: "1569c9ef-8e06-4bb6-ac69-47f493ad081f",
							thumbnail: "https://robohash.org/velvoluptatumut.png?size=150x150&set=set1",
							photo: "https://robohash.org/repellatveroa.png?size=800x600&set=set1"
						}, {
							id: "2c03be5a-db20-45bd-92f7-20731a1e7f14",
							thumbnail: "https://robohash.org/inquisfugit.png?size=150x150&set=set1",
							photo: "https://robohash.org/illoquinihil.png?size=800x600&set=set1"
						}, {
							id: "ae5f4c47-c9de-4486-8b69-716bce7ad5f9",
							thumbnail: "https://robohash.org/nobisquifacilis.png?size=150x150&set=set1",
							photo: "https://robohash.org/harumeumaut.png?size=800x600&set=set1"
						}
					]
				} ]
			};

		},
		sockets: {
			font: function( val ) {
				if ( val.name === 'gallery' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'gallery' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'gallery' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'gallery' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {

				if ( val.name === 'gallery' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {

				if ( val.name === 'gallery' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {

				if ( val.name === 'gallery' ) {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'gallery' ) {
					this.data_e.splice( val.index, 1 );
				}
			}
		}
	};
</script>

<style>
	.gallery-tab{
		text-align: center;
	}
	.gallery-img{
		width: 100%;
	}
	.gallery-img-div{
		height:200px;
		overflow: hidden;
	}
	.gallery-tab-btn{
		border: 2px solid #333;
		border-radius: 20px;
		text-transform: uppercase;
		padding-left: 30px;
		padding-right: 30px;
		margin-right: 30px;
	}
	.gallery-tab-btn:hover{
		border: 2px solid #333;
		background-color: #fff;
	}
	.btn-default.active{
		color: #fff !important;
		background-color: #f74819 !important;
		border-color: #f74819 !important;
	}
</style>
