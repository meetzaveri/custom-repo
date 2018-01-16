<template>
	<section  v-if="content.isVisible" class="container" id="faq">
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
				<div class="row section-format faq-section">
					<div class="panel-group" id="accordion">
						<div v-for="i in 3" class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
										Question title
										<a data-toggle="collapse" v-on:click="show_section = 'section-'+i" :class="[{active:show_section === 'section-'+i},'accord']" style="float:right" data-parent="#accordion" :href="'#collapse'+i">
											<i class="fa fa-plus"></i>
											<i class="fa fa-minus"></i>
										</a>
								</h4>
							</div>
							<div :id="'collapse'+i" class="panel-collapse collapse">
								<div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
	  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
	  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
	  commodo consequat.</div>
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
	export default{
		props: [
			'content'
		],
		data() {
			return {
				show_section: '',
				isActive: true,
				data_f: this.content.font,
				data_h: this.content.header,
				data_e: this.content.element
			};
		},
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
		sockets: {
			font: function( val ) {
				if ( val.name === 'faq' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'faq' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'faq' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'faq' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {

				if ( val.name === 'faq' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {

				if ( val.name === 'faq' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {

				if ( val.name === 'faq' ) {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'faq' ) {
					this.data_e.splice( val.index, 1 );
				}
			}
		}
	};
</script>

<style>
	i.fa-minus{
		display: none;
	}
	.active.accord.collapsed i.fa-minus{
		display: none !important;
	}
	.active.collapsed i.fa-plus{
		display: block !important;
	}
	.accord.active i.fa-minus{
		display: block;
	}
	.accord.active i.fa-plus{
		display: none;
	}
	#faq i.fa{
		color:#000;
		font-size: 20px;
	}
	.faq-section{
		padding:0px 50px;
	}
	.panel-title{
		text-align: center;
		font-size: 25px;
	}
	.panel-body{
		font-size: 20px;
	}
</style>
