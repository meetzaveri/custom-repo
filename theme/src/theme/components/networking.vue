<template>

	<section id="networking"  v-if="content.isVisible" class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="section-title" :style="{fontFamily:data_1.title.font_family,fontSize:data_1.title.font_size+'px',color:data_1.title.font_color}">
					<p class="section-title-tweak">{{data_2.section_name}}</p>
				</div>
				<div class="section-title">
					<p class="section-title-tweak">{{data_2.tagline}}</p>
				</div>
				<div class="row section-format">
					<div class="section_detail col-lg-6 col-md-6 col-sm-12 col-xs-12" :style="{fontSize:data_1.detail.font_size+'px',color:data_1.detail.font_color,fontFamily:data_1.detail.font_family}">
						Grab this opportunity to discover and connect with people coming to the event, sharing similar interests, industry or organisation and stay connected with them before, during and after the event.
					</div>
					<div class="net-outer col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div v-for="i in 8" class="net-innner-block">
							<div class="attendee-avatar">
								<img class="attendee-img" src="https://vuejs.org/images/logo.png">
							</div>
							<div class="attendee-name">
								<strong>Att {{i}}</strong>
							</div>
							<div class="attendee-detail">
								Agent Att {{i}}
							</div>
						</div>
					</div>
					<div class="net-button col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<button class="btn btn-success">Start Networking</button>
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
				if ( val.name === 'networking' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'networking' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'networking' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'networking' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {

				if ( val.name === 'networking' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {

				if ( val.name === 'networking' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {

				if ( val.name === 'networking' ) {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'networking' ) {
					this.data_e.splice( val.index, 1 );
				}
			}
		}
	};
</script>

<style>
	.attendee-name{
		text-align: center;
	}
	.attendee-detail{
		text-align: center;
	}
	.attendee-img{
		width: 110px;
		height:110px;
	}
	.net-innner-block{
		width:110px;
		float: left;
		border: 1px solid #333;
	}

	.net-button{
		text-align: center;
		margin-top: 50px;
	}
</style>
