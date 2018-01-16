<template>
	<section  v-if="content.isVisible" id="speaker" class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="row">
					<div class="section-title" :style="{fontSize:20+'px',color:'#666'}">
						<p class="section-title-tweak">{{ data_h.section_name }}</p>
					</div>
				</div>
				<div class="row">
					<div class="section-title" :style="{fontSize:20+'px',color:'#666'}">
						<p>{{ data_h.tagline }}</p>
					</div>
				</div>
				<div class="row">
					<div class="speaker-outer-div">
						<app-layout v-if="true" :gridSize="'1'">
							<div slot="slot_div">
								<div class="speaker-inner-div col-lg-3 col-md-3 col-sm-3 col-xs-12" v-for="(item,index) in data_4.limit">
									<a class="link-style" :href="'#sp'+index" data-toggle="modal">
										<div class="speaker-face">
											<img class="speaker-img-tag" :src="speakerData[item-1].speakerFace" />
										</div>
										<div class="speaker-name" :style="{fontFamily:data_1.title.font_family,fontSize:data_1.title.font_size+'px',color:data_1.title.font_color}">
											{{speakerData[item-1].speakerName}}
										</div>
										<div class="speaker-profile" :style="{fontSize:data_1.detail.font_size+'px',color:data_1.detail.font_color,fontFamily:data_1.detail.font_family}">
											{{speakerData[item-1].speakerProfile}}
										</div>
									</a>
									<div :id="'sp'+index" class="modal fade" role="dialog">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<a v-for="i in 2" href="#">
														<i class="fa fa-2x fa-linkedin-square">
														</i>
													</a>
													<button type="button" class="close speaker-modal-btn" data-dismiss="modal">&times;</button>
												</div>
												<div class="modal-body">
													<div class="row modal-speaker-detail">
														<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
															<div class="speaker-face">
																<img class="speaker-img-tag-modal" :src="speakerData[item-1].speakerFace" />
															</div>
														</div>
														<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
															<div class="row modal-speaker-side">
																<div class="modal-speaker-name col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	{{speakerData[item-1].speakerName}}
																</div>
																<div class="modal-speaker-profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	{{speakerData[item-1].speakerProfile}}
																</div>
															</div>
														</div>
														<div class="modal-speaker-below">
														</div>
														<div class="modal-speaker-content col-lg-12 col-md-12 col-sm-12 col-xs-12">
															Mahesh is an entrepreneur, marketer, investor and speaker - and among the most-tracked Indian businesspeople, with a following of over 400,000 across various social platforms. His fearless and often iconoclastic opinions are frequently quoted in business press, and he has hosted Indian versions of The Apprentice, Dragon's Den & Shark Tank on TV.
															As an entrepreneur, Mahesh founded digital transformation firm Pinstorm in 2004, which helps ambitious brands win in the new economy: folks like Adobe, Airtel, ICICI Bank, India Today, Mondelez and Putzmeister. As a CEO, Mahesh turned around loss-making TV station Channel V till its sale to Star TV in 2000.
															Mahesh spent 30+ years across FCB and Grey in India, Ogilvy across Asia and CKS Partners in Silicon Valley. He designed and launched Amazon.com globally, shaped Yahoo.com, sold subscriptions to The Economist across Asia and launched MTV in India - perhaps starting the long-bemoaned decline in Indian culture since :-)
															Since 1999, Mahesh has brought a marketer's point of view to investing. First as an angel, where he shaped firms like Doolally - India's leading microbrewery, Geodesic - a software product firm with a big IPO exit, CompassBox - acquired by CareerLauncher and WebDunia.
															And then as a VC since 2006, when he co-founded Seedfund, India's most-awarded early-stage investor. Investees include RedBus - acquired by Naspers in a record-setting exit, CarWale - acquired by Axel Springer, EduSports, Chumbak, MyDentist and Voonik - a firm that Mahesh spotted on his TV show.
															With the retirement of partner Pravin Gandhi, Seedfund will wind down in 2020 and Mahesh is shaping to launch his next early-stage fund, a game-changer.
															Mahesh is a sought-after corporate speaker on digital transformation, marketing and innovation, having inspired CXOs at McKinsey, IBM, Cognizant, de Beers and Microsoft.
														</div>
														<div class="modal-speaker-below">
														</div>
														<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															<div class="row">
																<div class="agenda-event-time">
																	<i class="fa fa-clock-o"></i>15:30 - 16:30
																</div>
															</div>
															<div class="row">
																<div class="agenda-event-title">
																	Mahesh Murthy in Conversation with Poonam Pandey
																</div>
															</div>
															<div class="row">
																<div v-for="i in 2" class="modal-speaker-face">
																	<img class="speaker-img-tag" :src="speakerData[item-1].speakerFace" />
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
							<div slot="slot_img">
								<img style="width:100%;height: auto;" src="../image/para.jpg">
							</div>
						</app-layout>
						<app-slick v-else="" ref="slick" :options="{
							slidesToShow:3
						}">
							<div class="speaker-inner-div col-lg-12 col-md-12 col-sm-12 col-xs-12" v-for="(item,index) in data_4.limit">
								<a class="link-style" :href="'#sp'+index" data-toggle="modal">
									<div class="speaker-face">
										<img class="speaker-img-tag" :src="speakerData[item-1].speakerFace" />
									</div>
									<div class="speaker-name" :style="{fontFamily:data_1.title.font_family,fontSize:data_1.title.font_size+'px',color:data_1.title.font_color}">
										{{speakerData[item-1].speakerName}}
									</div>
									<div class="speaker-profile" :style="{fontSize:data_1.detail.font_size+'px',color:data_1.detail.font_color,fontFamily:data_1.detail.font_family}">
										{{speakerData[item-1].speakerProfile}}
									</div>
								</a>
								<div :id="'sp'+index" class="modal fade" role="dialog">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<a v-for="i in 2" href="#">
													<i class="fa fa-2x fa-linkedin-square">
													</i>
												</a>
												<button type="button" class="close speaker-modal-btn" data-dismiss="modal">&times;</button>
											</div>
											<div class="modal-body">
												<div class="row modal-speaker-detail">
													<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
														<div class="speaker-face">
															<img class="speaker-img-tag-modal" :src="speakerData[item-1].speakerFace" />
														</div>
													</div>
													<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
														<div class="row modal-speaker-side">
															<div class="modal-speaker-name col-lg-12 col-md-12 col-sm-12 col-xs-12">
																{{speakerData[item-1].speakerName}}
															</div>
															<div class="modal-speaker-profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
																{{speakerData[item-1].speakerProfile}}
															</div>
														</div>
													</div>
													<div class="modal-speaker-below">
													</div>
													<div class="modal-speaker-content col-lg-12 col-md-12 col-sm-12 col-xs-12">
														Mahesh is an entrepreneur, marketer, investor and speaker - and among the most-tracked Indian businesspeople, with a following of over 400,000 across various social platforms. His fearless and often iconoclastic opinions are frequently quoted in business press, and he has hosted Indian versions of The Apprentice, Dragon's Den & Shark Tank on TV.
														As an entrepreneur, Mahesh founded digital transformation firm Pinstorm in 2004, which helps ambitious brands win in the new economy: folks like Adobe, Airtel, ICICI Bank, India Today, Mondelez and Putzmeister. As a CEO, Mahesh turned around loss-making TV station Channel V till its sale to Star TV in 2000.
														Mahesh spent 30+ years across FCB and Grey in India, Ogilvy across Asia and CKS Partners in Silicon Valley. He designed and launched Amazon.com globally, shaped Yahoo.com, sold subscriptions to The Economist across Asia and launched MTV in India - perhaps starting the long-bemoaned decline in Indian culture since :-)
														Since 1999, Mahesh has brought a marketer's point of view to investing. First as an angel, where he shaped firms like Doolally - India's leading microbrewery, Geodesic - a software product firm with a big IPO exit, CompassBox - acquired by CareerLauncher and WebDunia.
														And then as a VC since 2006, when he co-founded Seedfund, India's most-awarded early-stage investor. Investees include RedBus - acquired by Naspers in a record-setting exit, CarWale - acquired by Axel Springer, EduSports, Chumbak, MyDentist and Voonik - a firm that Mahesh spotted on his TV show.
														With the retirement of partner Pravin Gandhi, Seedfund will wind down in 2020 and Mahesh is shaping to launch his next early-stage fund, a game-changer.
														Mahesh is a sought-after corporate speaker on digital transformation, marketing and innovation, having inspired CXOs at McKinsey, IBM, Cognizant, de Beers and Microsoft.
													</div>
													<div class="modal-speaker-below">
													</div>
													<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<div class="row">
															<div class="agenda-event-time">
																<i class="fa fa-clock-o"></i>15:30 - 16:30
															</div>
														</div>
														<div class="row">
															<div class="agenda-event-title">
																Mahesh Murthy in Conversation with Poonam Pandey
															</div>
														</div>
														<div class="row">
															<div v-for="i in 2" class="modal-speaker-face">
																<img class="speaker-img-tag" :src="speakerData[item-1].speakerFace" />
															</div>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</app-slick>
					</div>

					<div v-if="speakerData.length > data_4.limit">
						<div id="more_speaker" class="collapse">
							<div class="speaker-inner-div col-lg-3 col-md-3 col-sm-3 col-xs-12" v-for="(item,index) in speakerData.length-data_4.limit">
								<a class="link-style" :href="'#sp-collapse'+index" data-toggle="modal">
									<div class="speaker-face">
										<img class="speaker-img-tag" :src="speakerData[item-1+data_4.limit].speakerFace" />
									</div>
									<div class="speaker-name" :style="{fontFamily:data_1.title.font_family,fontSize:data_1.title.font_size+'px',color:data_1.title.font_color}">
										{{speakerData[item-1+data_4.limit].speakerName}}
									</div>
									<div class="speaker-profile" :style="{fontSize:data_1.detail.font_size+'px',color:data_1.detail.font_color,fontFamily:data_1.detail.font_family}">
										{{speakerData[item-1+data_4.limit].speakerProfile}}
									</div>
								</a>
								<div :id="'sp-collapse'+index" class="modal fade" role="dialog">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<button type="button" class="close speaker-modal-btn" data-dismiss="modal">&times;</button>
											</div>
											<div class="modal-body">
												<div class="row modal-speaker-detail">
													<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
														<div class="speaker-face">
															<img class="speaker-img-tag-modal" :src="speakerData[item-1+data_4.limit].speakerFace" />
														</div>
													</div>
													<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
														<div class="row modal-speaker-side">
															<div class="modal-speaker-name col-lg-12 col-md-12 col-sm-12 col-xs-12">
																{{speakerData[item-1+data_4.limit].speakerName}}
														</div>
															<div class="modal-speaker-profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
																{{speakerData[item-1+data_4.limit].speakerProfile}}
														</div>
														</div>
													</div>
													<div class="modal-speaker-below">
													</div>
													<div class="modal-speaker-content col-lg-12 col-md-12 col-sm-12 col-xs-12">
														Mahesh is an entrepreneur, marketer, investor and speaker - and among the most-tracked Indian businesspeople, with a following of over 400,000 across various social platforms. His fearless and often iconoclastic opinions are frequently quoted in business press, and he has hosted Indian versions of The Apprentice, Dragon's Den & Shark Tank on TV.
	As an entrepreneur, Mahesh founded digital transformation firm Pinstorm in 2004, which helps ambitious brands win in the new economy: folks like Adobe, Airtel, ICICI Bank, India Today, Mondelez and Putzmeister. As a CEO, Mahesh turned around loss-making TV station Channel V till its sale to Star TV in 2000.
	Mahesh spent 30+ years across FCB and Grey in India, Ogilvy across Asia and CKS Partners in Silicon Valley. He designed and launched Amazon.com globally, shaped Yahoo.com, sold subscriptions to The Economist across Asia and launched MTV in India - perhaps starting the long-bemoaned decline in Indian culture since :-)
	Since 1999, Mahesh has brought a marketer's point of view to investing. First as an angel, where he shaped firms like Doolally - India's leading microbrewery, Geodesic - a software product firm with a big IPO exit, CompassBox - acquired by CareerLauncher and WebDunia.
	And then as a VC since 2006, when he co-founded Seedfund, India's most-awarded early-stage investor. Investees include RedBus - acquired by Naspers in a record-setting exit, CarWale - acquired by Axel Springer, EduSports, Chumbak, MyDentist and Voonik - a firm that Mahesh spotted on his TV show.
	With the retirement of partner Pravin Gandhi, Seedfund will wind down in 2020 and Mahesh is shaping to launch his next early-stage fund, a game-changer.
	Mahesh is a sought-after corporate speaker on digital transformation, marketing and innovation, having inspired CXOs at McKinsey, IBM, Cognizant, de Beers and Microsoft.
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div v-if="displayBtn" class="row view_more_btn">
								<button class="btn btn-default register_btn" data-target="#more_speaker" v-on:click="displayBtn = !displayBtn" data-toggle="collapse">{{data_4.btn_title}}</button>
							</div>
						</div>
					</div>

				</div>

				<!--<div v-if="$route.params.place === 'multi' || data.json_data.place_now === 'multi'">-->
					<!--<component is="theme-about"></component>-->
				<!--</div>-->

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
			},
			data_4: function() {
				return this.data_l;
			}
		},
		data() {
			return {
				displayBtn: true,
				data_f: this.content.font,
				data_h: this.content.header,
				data_e: this.content.element,
				data_l: this.content.load_more,
				speakerData: [
					{
						id: 'sp1',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'abc',
						speakerProfile: 'def'
					},
					{
						id: 'sp2',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'manish',
						speakerProfile: 'def'
					},
					{
						id: 'sp3',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'haresh',
						speakerProfile: 'def'
					},
					{
						id: 'sp4',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'sanam',
						speakerProfile: 'def'
					},
					{
						id: 'sp5',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'gaya',
						speakerProfile: 'def'
					},
					{
						id: 'sp6',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'bhaga',
						speakerProfile: 'def'
					},
					{
						id: 'sp7',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'umesh',
						speakerProfile: 'def'
					},
					{
						id: 'sp8',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'suresh',
						speakerProfile: 'def'
					},
					{
						id: 'sp9',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'manish',
						speakerProfile: 'def'
					},
					{
						id: 'sp10',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'shaman',
						speakerProfile: 'def'
					},
					{
						id: 'sp11',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'tarang',
						speakerProfile: 'def'
					},
					{
						id: 'sp12',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'mukesh',
						speakerProfile: 'def'
					},
					{
						id: 'sp13',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'savin',
						speakerProfile: 'def'
					},
					{
						id: 'sp14',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'hardik',
						speakerProfile: 'def'
					},
					{
						id: 'sp15',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'vishal',
						speakerProfile: 'def'
					},
					{
						id: 'sp16',
						speakerFace: 'https://vuejs.org/images/logo.png',
						speakerName: 'yug',
						speakerProfile: 'def'
					}
				],
			};
		},
		sockets: {
			font: function( val ) {
				if ( val.name === 'speaker' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'speaker' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'speaker' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'speaker' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {

				if ( val.name === 'speaker' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {

				if ( val.name === 'speaker' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {

				if ( val.name === 'speaker' ) {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'speaker' ) {
					this.data_e.splice( val.index, 1 );
				}
			}
		}
	};
</script>

<style>
	.speaker-outer-div{
		padding:10px;
	}
	.speaker-inner-div{
		padding: 30px;
	}
	.speaker-face{
		border: 1px solid #333;
		border-radius: 50%;
		overflow: hidden;
		height: 150px;
		width: 150px;
		margin: 0 auto;
	}
	.speaker-img-tag{
		width:100%;
	}
	.speaker-name{
		text-align: center;

	}
	.speaker-profile{
		text-align: center;
		color:#999;
	}
	.view_more_btn{
		text-align: center;
	}
	.speaker-img-tag-modal{
		width:100%;
		height: 100%;
	}
	.link-style{
		text-decoration: none !important;
		color:#333;
	}
	.speaker-modal-btn{
		display: block !important;
		opacity: 1;
		color:#666;
		margin:10px;
		font-size: 30px;
	}
	.modal-header{
		border:none;
	}
	.modal-speaker-detail{
		padding: 0px 50px;
	}
	.modal-speaker-name{
		text-align: left;
		font-size: 30px;
	}
	.modal-speaker-profile{
		text-align: left;
		color:#999;
		font-size: 20px;
	}
	.modal-speaker-side{
		padding:20px;
	}
	.modal-speaker-below{
		width: 100%;
		padding: 0px 15px;
		float:left;
		margin:20px 0px;
		border-bottom: 1px solid #666;
	}
	.modal-speaker-content{
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
	.agenda-event-time i.fa{
		font-size: 15px;
		color:#f74819;
		margin-right: 5px;
	}
	.agenda-event-time{
		color:#f74819;
		font-size: 15px;
	}
	.agenda-event-title{
		color:#f74819;
		font-size: 15px;

	}
	.modal-speaker-face{
		border: 1px solid #333;
		border-radius: 50%;
		overflow: hidden;
		height: 45px;
		width: 45px;
		margin-top: 10px;
		margin-right: 10px;
		float: left;
	}
	.modal-header a{
		text-decoration: none;
		margin-left: 10px;
	}
	.modal-header i.fa{
		color:#f74819;
	}
	.owl-nav{
		text-align: center;
	}
	.owl-next{
		width:50px;
		text-align:center;
		padding:5px;
		border: 1px solid #666;
		background-color: #fff;
		display: inline;
	}
	.owl-prev{
		width:50px;
		text-align:center;
		padding:5px;
		border: 1px solid #666;
		background-color: #fff;
		display: inline;
	}
</style>
