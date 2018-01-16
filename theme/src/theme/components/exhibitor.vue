<template>
	<section  v-if="content.isVisible" id="exhibitor" class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="row">
					<div class="section-title" :style="{fontFamily:data_1.title.font_family,fontSize:data_1.title.font_size+'px',color:data_1.title.font_color}">
						<p class="section-title-tweak">{{ data_2.section_name }}</p>
					</div>
					<div class="section-title">
						<p class="section-title-tweak">{{data_2.tagline}}</p>
					</div>
					<div class="section-format section_detail" :style="{fontSize:data_1.detail.font_size+'px',color:data_1.detail.font_color,fontFamily:data_1.detail.font_family}">
						iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</div>
				</div>
				<div class="row">
					<div class="exhibitor-outer-div">
						<div v-for="(item,index1) in exhibitor_data" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="row">
								<div v-for="(img_src,index2) in item.exhibitor_list" :class="['exhibitor-inner-div',item.exhibitor_type === 'large' ? 'col-lg-6' : item.exhibitor_type === 'medium' ? 'col-lg-4' : 'col-lg-3',item.exhibitor_type === 'large' ? 'col-md-6' : item.exhibitor_type === 'medium' ? 'col-md-4' : 'col-md-3',item.exhibitor_type === 'large' ? 'col-sm-6' : item.exhibitor_type === 'medium' ? 'col-sm-4' : 'col-sm-3','col-xs-12']">
									<a class="link-style" :href="'#exhibitor'+index1+'-'+index2" data-toggle="modal">
										<div class="exhibitor-title">
											{{item.exhibitor_group_title}}
										</div>
										<div :class="['exhibitor-face',item.exhibitor_type]">
											<img class="exhibitor-img-tag" :src="img_src"/>
										</div>
									</a>
									<div :id="'exhibitor'+index1+'-'+index2" class="modal fade" role="dialog">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<a v-for="i in 2" href="#">
														<i class="fa fa-2x fa-linkedin-square">
														</i>
													</a>
													<button type="button" class="close exhibitor-modal-btn" data-dismiss="modal">&times;</button>
												</div>
												<div class="modal-body">
													<div class="row modal-exhibitor-detail">
														<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															<div class="exhibitor-face small">
																<img class="exhibitor-img-tag-modal" :src="img_src" />
															</div>
														</div>
														<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															<div class="row modal-exhibitor-side">
																<div class="modal-exhibitor-name col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	{{item.exhibitor_group_title}}
																</div>
																<div class="modal-exhibitor-profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	{{item.exhibitor_group_title}}
																</div>
															</div>
														</div>
														<div class="modal-exhibitor-below">
														</div>
														<div class="modal-exhibitor-content col-lg-12 col-md-12 col-sm-12 col-xs-12">
															Mahesh is an entrepreneur, marketer, investor and speaker - and among the most-tracked Indian businesspeople, with a following of over 400,000 across various social platforms. His fearless and often iconoclastic opinions are frequently quoted in business press, and he has hosted Indian versions of The Apprentice, Dragon's Den & Shark Tank on TV.
		As an entrepreneur, Mahesh founded digital transformation firm Pinstorm in 2004, which helps ambitious brands win in the new economy: folks like Adobe, Airtel, ICICI Bank, India Today, Mondelez and Putzmeister. As a CEO, Mahesh turned around loss-making TV station Channel V till its sale to Star TV in 2000.
		Mahesh spent 30+ years across FCB and Grey in India, Ogilvy across Asia and CKS Partners in Silicon Valley. He designed and launched Amazon.com globally, shaped Yahoo.com, sold subscriptions to The Economist across Asia and launched MTV in India - perhaps starting the long-bemoaned decline in Indian culture since :-)
		Since 1999, Mahesh has brought a marketer's point of view to investing. First as an angel, where he shaped firms like Doolally - India's leading microbrewery, Geodesic - a software product firm with a big IPO exit, CompassBox - acquired by CareerLauncher and WebDunia.
		And then as a VC since 2006, when he co-founded Seedfund, India's most-awarded early-stage investor. Investees include RedBus - acquired by Naspers in a record-setting exit, CarWale - acquired by Axel Springer, EduSports, Chumbak, MyDentist and Voonik - a firm that Mahesh spotted on his TV show.
		With the retirement of partner Pravin Gandhi, Seedfund will wind down in 2020 and Mahesh is shaping to launch his next early-stage fund, a game-changer.
		Mahesh is a sought-after corporate speaker on digital transformation, marketing and innovation, having inspired CXOs at McKinsey, IBM, Cognizant, de Beers and Microsoft.
														</div>
														<div class="modal-exhibitor-below">
														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
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
				data_e: this.content.element,
				exhibitor_data: [
					{
						exhibitor_type: 'small',
						exhibitor_group_title: 'Large exhibitor',
						exhibitor_list: [ 'https://vuejs.org/images/logo.png','https://vuejs.org/images/logo.png' ]
					},
					{
						exhibitor_type: 'small',
						exhibitor_group_title: 'Medium exhibitor',
						exhibitor_list: [ 'https://vuejs.org/images/logo.png','https://vuejs.org/images/logo.png' ]
					},
					{
						exhibitor_type: 'small',
						exhibitor_group_title: 'Small exhibitor',
						exhibitor_list: [ 'https://vuejs.org/images/logo.png','https://vuejs.org/images/logo.png' ]
					}
				]
			};
		},
		sockets: {
			font: function( val ) {
				if ( val.name === 'exhibitor' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'exhibitor' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'exhibitor' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'exhibitor' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {

				if ( val.name === 'exhibitor' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {

				if ( val.name === 'exhibitor' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {

				if ( val.name === 'exhibitor') {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'exhibitor' ) {
					this.data_e.splice( val.index, 1 );
				}
			}
		}
	};
</script>

<style>
	.exhibitor-outer-div{
		padding:10px;
	}
	.exhibitor-inner-div{
		padding: 30px;
	}
	.exhibitor-title{
		text-align: center;
		font-size: 20px;
		color:#333;
	}
	.link-style{
		text-decoration: none !important;
		color:#333;
	}
	.exhibitor-face{
		border: 1px solid #999;
		overflow: hidden;
		margin: 0 auto;
		display: table;
	}
	.exhibitor-face.large{
		height: 300px;
		width: 100%;
	}
	.exhibitor-face.medium{
		height: 200px;
		width: 100%;
	}
	.exhibitor-face.small{
		height: 150px;
		width: 100%;
	}
	.exhibitor-img-tag{
		height: 100%;
		display: table-cell;
		margin: 0 auto;
	}
	.exhibitor-img-tag-modal{
		height: 100%;
		display: table-cell;
		margin: 0 auto;
	}
	.exhibitor-modal-btn{
		display: block !important;
		opacity: 1;
		color:#666;
		margin:10px;
		font-size: 30px;
	}
	.modal-header{
		border:none;
	}
	.modal-exhibitor-detail{
		padding: 0px 50px;
	}
	.modal-exhibitor-name{
		font-size: 30px;
	}
	.modal-exhibitor-profile{
		color:#999;
		font-size: 20px;
	}
	.modal-exhibitor-side{
		padding:20px;
		text-align: center;
	}
	.modal-exhibitor-below{
		width: 100%;
		padding: 0px 15px;
		float:left;
		margin:20px 0px;
		border-bottom: 1px solid #666;
	}
	.modal-exhibitor-content{
		overflow-y: scroll;
		height: 150px;
		font-size: 15px;
	}
	.modal-dialog{
		width:500px;
	}
	.modal-content{
		width: 100%;
		margin-left: 0px;
	}
	.modal-header a{
		text-decoration: none;
		margin-left: 10px;
	}
	.modal-header i.fa{
		color:#f74819;
	}
</style>
