<template>
	<section  v-if="content.isVisible" id="contact">
		<div class="container">
			<div class="row section-format">
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
					<div class="row section-format">
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
							<div class="row">
								<div class="contact-heading col-lg-12 col-md-12 col-sm-12 col-xs-12">
									For Event
								</div>
							</div>
							<div class="row">
								<div class="contact-icon col-lg-1 col-md-1 col-sm-1 col-xs-1">
									<i class="fa fa-user"></i>
								</div>
								<div class="contact-profile col-lg-11 col-md-11 col-sm-11 col-xs-11">
									Himani shah
								</div>
							</div>
							<div class="row">
								<div class="contact-icon col-lg-1 col-md-1 col-sm-1 col-xs-1">
									<i class="fa fa-phone"></i>
								</div>
								<div class="contact-profile col-lg-11 col-md-11 col-sm-11 col-xs-11">
									9904451199
								</div>
							</div>
							<div class="row">
								<div class="contact-icon col-lg-1 col-md-1 col-sm-1 col-xs-1">
									<i class="fa fa-envelope-o"></i>
								</div>
								<div class="contact-profile col-lg-11 col-md-11 col-sm-11 col-xs-11">
									customerservice@ahmedabad.tie.org
								</div>
							</div>
							<div class="row">
								<div class="contact-icon col-lg-1 col-md-1 col-sm-1 col-xs-1">
									<i class="fa fa-map-marker"></i>
								</div>
								<div class="contact-profile col-lg-11 col-md-11 col-sm-11 col-xs-11">
									TiE Ahmedabad, 1007-1008, Shapath V, Nr. Chimanbhai Patel Institute, Opp. Karnavati Club, S.G.highway, Ahmedabad – 380051
								</div>
							</div>
						</div>
						<div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div class="form-group">
										<input type="text" placeholder="Name" class="form-control">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div class="form-group">
										<input type="text" placeholder="Email Address" class="form-control">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div class="form-group">
										<textarea class="form-control" placeholder="Your Message here .." rows="5" id="comment"></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<button class="btn btn-default register_btn">SUBMIT</button>
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
		</div>

	</section>
</template>

<script>
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
				if ( val.name === 'contact' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'contact' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'contact' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'contact' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {

				if ( val.name === 'contact' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {

				if ( val.name === 'contact' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {

				if ( val.name === 'contact' ) {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'contact' ) {
					this.data_e.splice( val.index, 1 );
				}
			}
		}
	};
</script>

<style>
	.contact-heading{
		font-size: 20px;
		color:#fff

	}
	.contact-icon i.fa{
		color:#fff;
		font-size: 15px;
	}
	#contact{
		background-color: #000;
	}
	.contact-profile{
		color:#fff;
		font-size: 15px;
	}
	.form-control{
		border-radius: 5px;
	}
</style>
