<template>
	<section  v-if="content.isVisible" id="sponsor" class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="row">
					<div class="section-title" :style="{fontFamily:data_1.title.font_family,fontSize:data_1.title.font_size+'px',color:data_1.title.font_color}">
						<p class="section-title-tweak">{{ data_2.section_name }}</p>
					</div>
					<div class="section-title">
						<p class="section-title-tweak">{{data_2.tagline}}</p>
					</div>
				</div>
				<div class="row">
					<div class="sponsor-outer-div">
						<div v-for="(item,index1) in sponsor_data" :key="item+'-'+index1" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="row">
								<div v-for="(img_src,index2) in item.sponsor_list" :key="img_src+'-'+index2" :class="['sponsor-inner-div',item.sponsor_type === 'large' ? 'col-lg-6' : item.sponsor_type === 'medium' ? 'col-lg-4' : 'col-lg-3',item.sponsor_type === 'large' ? 'col-md-6' : item.sponsor_type === 'medium' ? 'col-md-4' : 'col-md-3',item.sponsor_type === 'large' ? 'col-sm-6' : item.sponsor_type === 'medium' ? 'col-sm-4' : 'col-sm-3','col-xs-12']">
									<a class="link-style" :href="'#sponsor'+index1+'-'+index2" data-toggle="modal">
										<div class="sponsor-title">
											{{item.sponsor_group_title}}
										</div>
										<div :class="['sponsor-face',item.sponsor_type]">
											<img class="sponsor-img-tag" :src="img_src"/>
										</div>
									</a>
									<div :id="'sponsor'+index1+'-'+index2" class="modal fade" role="dialog">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<a v-for="i in 2" href="#">
														<i class="fa fa-2x fa-linkedin-square">
														</i>
													</a>
													<button type="button" class="close sponsor-modal-btn" data-dismiss="modal">&times;</button>
												</div>
												<div class="modal-body">
													<div class="row modal-sponsor-detail">
														<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															<div class="sponsor-face small">
																<img class="sponsor-img-tag-modal" :src="img_src" />
															</div>
														</div>
														<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															<div class="row modal-sponsor-side">
																<div class="modal-sponsor-name col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	{{item.sponsor_group_title}}
																</div>
																<div class="modal-sponsor-profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	{{item.sponsor_group_title}}
																</div>
															</div>
														</div>
														<div class="modal-sponsor-below">
														</div>
														<div class="modal-sponsor-content col-lg-12 col-md-12 col-sm-12 col-xs-12">
															Mahesh is an entrepreneur, marketer, investor and speaker - and among the most-tracked Indian businesspeople, with a following of over 400,000 across various social platforms. His fearless and often iconoclastic opinions are frequently quoted in business press, and he has hosted Indian versions of The Apprentice, Dragon's Den & Shark Tank on TV.
		As an entrepreneur, Mahesh founded digital transformation firm Pinstorm in 2004, which helps ambitious brands win in the new economy: folks like Adobe, Airtel, ICICI Bank, India Today, Mondelez and Putzmeister. As a CEO, Mahesh turned around loss-making TV station Channel V till its sale to Star TV in 2000.
		Mahesh spent 30+ years across FCB and Grey in India, Ogilvy across Asia and CKS Partners in Silicon Valley. He designed and launched Amazon.com globally, shaped Yahoo.com, sold subscriptions to The Economist across Asia and launched MTV in India - perhaps starting the long-bemoaned decline in Indian culture since :-)
		Since 1999, Mahesh has brought a marketer's point of view to investing. First as an angel, where he shaped firms like Doolally - India's leading microbrewery, Geodesic - a software product firm with a big IPO exit, CompassBox - acquired by CareerLauncher and WebDunia.
		And then as a VC since 2006, when he co-founded Seedfund, India's most-awarded early-stage investor. Investees include RedBus - acquired by Naspers in a record-setting exit, CarWale - acquired by Axel Springer, EduSports, Chumbak, MyDentist and Voonik - a firm that Mahesh spotted on his TV show.
		With the retirement of partner Pravin Gandhi, Seedfund will wind down in 2020 and Mahesh is shaping to launch his next early-stage fund, a game-changer.
		Mahesh is a sought-after corporate speaker on digital transformation, marketing and innovation, having inspired CXOs at McKinsey, IBM, Cognizant, de Beers and Microsoft.
														</div>
														<div class="modal-sponsor-below">
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
				sponsor_data: [
					{
						sponsor_type: 'large',
						sponsor_group_title: 'Large Sponsor',
						sponsor_list: [ 'https://vuejs.org/images/logo.png', 'https://vuejs.org/images/logo.png' ]
					},
					{
						sponsor_type: 'medium',
						sponsor_group_title: 'Medium Sponsor',
						sponsor_list: [ 'https://vuejs.org/images/logo.png', 'https://vuejs.org/images/logo.png' ]
					},
					{
						sponsor_type: 'small',
						sponsor_group_title: 'Small Sponsor',
						sponsor_list: [ 'https://vuejs.org/images/logo.png', 'https://vuejs.org/images/logo.png' ]
					}
				],
				data_f: this.content.font,
				data_h: this.content.header,
				data_e: this.content.element
			};
		},
		sockets: {
			font: function( val ) {
				if ( val.name === 'sponsor' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'sponsor' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'sponsor' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'sponsor' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {

				if ( val.name === 'sponsor' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {

				if ( val.name === 'sponsor' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {

				if ( val.name === 'sponsor' ) {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'sponsor' ) {
					this.data_e.splice( val.index, 1 );
				}
			}
		}
	};
</script>

<style>
	.sponsor-outer-div{
		padding:10px;
	}
	.sponsor-inner-div{
		padding: 30px;
	}
	.sponsor-title{
		text-align: center;
		font-size: 20px;
		color:#333;
	}
	.link-style{
		text-decoration: none !important;
		color:#333;
	}
	.sponsor-face{
		border: 1px solid #999;
		overflow: hidden;
		margin: 0 auto;
		display: table;
	}
	.sponsor-face.large{
		height: 300px;
		width: 100%;
	}
	.sponsor-face.medium{
		height: 200px;
		width: 100%;
	}
	.sponsor-face.small{
		height: 150px;
		width: 100%;
	}
	.sponsor-img-tag{
		height: 100%;
		display: table-cell;
		margin: 0 auto;
	}
	.sponsor-img-tag-modal{
		height: 100%;
		display: table-cell;
		margin: 0 auto;
	}
	.sponsor-modal-btn{
		display: block !important;
		opacity: 1;
		color:#666;
		margin:10px;
		font-size: 30px;
	}
	.modal-header{
		border:none;
	}
	.modal-sponsor-detail{
		padding: 0px 50px;
	}
	.modal-sponsor-name{
		font-size: 30px;
	}
	.modal-sponsor-profile{
		color:#999;
		font-size: 20px;
	}
	.modal-sponsor-side{
		padding:20px;
		text-align: center;
	}
	.modal-sponsor-below{
		width: 100%;
		padding: 0px 15px;
		float:left;
		margin:20px 0px;
		border-bottom: 1px solid #666;
	}
	.modal-sponsor-content{
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
