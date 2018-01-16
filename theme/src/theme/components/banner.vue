<template>
	<section id="banner">
		<swipe :showIndicators="false" class="my-swipe">
			<swipe-item v-for="(item,index) in data_1" :key="item.id" class="slide1">
				<div class="banner_bg" style="background: url('http://localhost/public_html/eventApp/ws/images/event/cover/facebook/thumb/3558_1464420559.jpg') 50% 0px / cover;">
					<div class="banner_overlay" :style="{opacity:item.data.opacity}" ></div>
					<div class="banner_table_cell">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="event_logo">
								<img class="logo_img" src="https://vuejs.org/images/logo.png" />
							</div>
							<div class="event_title" :style="{fontSize:50+'px'}">
								{{item.data.tagline}}
							</div>
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 event_detail" :style="{fontSize:30+'px'}">
									<i class="fa fa-map-marker">
									</i> Mahatma Mandir, Gandhinagar, Gujarat, India
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 event_detail" :style="{fontSize:20+'px'}">
									<i class="fa fa-calendar">
									</i> 29th April, 2017 - 30th April, 2017
								</div>
							</div>
							<div v-if="item.data.showRegistration" class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 event_register">
									<button class="btn btn-default register_btn">REGISTER</button>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 event_hashtag">
									#HashTag
								</div>
							</div>
							<!--<div class="row">-->
								<!--<div v-if="data_1[index].data.element.length > 0">-->
									<!--<component v-for="(items,index2) in data_1[index].data.element" :key="items.id" :text_content="data_1[index].data.element[index2]" :text_index="index2" :is="items.type+'-ele'"></component>-->
								<!--</div>-->
							<!--</div>-->
							<div v-if="item.data.showEventDetail" class="row event_highlight_outer">
								<div v-for="i in 5" class="event_highlight">
									<i class="fa fa-calendar">
									</i> Day
								</div>
							</div>
						</div>
					</div>
				</div>
			</swipe-item>
		</swipe>
	</section>
</template>

<script>
	import { Swipe, SwipeItem } from 'vue-swipe';
	require( 'vue-swipe/dist/vue-swipe.css' )

	export default{
		props: [
			'content'
		],
		computed: {
			data_1: function() {
				return this.data_b;
			}
		},
		data() {
			return {
				data_b: this.content
			};
		},
		components: {
			'swipe': Swipe,
			'swipe-item': SwipeItem
		},
		sockets: {
			content: function( val ) {
				this.data_b[ val.index ].data = val.data;
			}
		}

	};
</script>

<style>
	.banner_bg{
		display: table;
		zoom: 1;
		content: "";
		position: relative;
		width: 100%;
		height: 100vh;
		z-index: -5;
	}
	.event_title{
		text-align: center;
		margin:20px 0px;
		color: #fff;
		cursor: pointer;
	}
	.event_detail{
		text-align: center;
		margin:20px 0px;
		color: #fff;
		display: table;
	}
	.banner_overlay{

		background-color: #000;
		bottom:0;
		left:0;
		position:absolute;
		min-height: 100vh;
		right: 0;
		top:0;
	}
	.banner_table_cell{
		display: table-cell;
		vertical-align: middle;
	}
	.event_logo{
		vertical-align: middle;
		text-align: center;
	}
	.logo_img{
		width:110px;
		height:110px;
	}
	#banner i.fa{
		font-size:30px;
		color:#f74819;
		display: inline-table;
	}
	.event_register{
		text-align: center;
	}
	.event_highlight_outer{
		text-align: center;
	}
	.event_highlight{
		display: inline-block;
		width:25%;
		text-align: center;
		color:#fff;
		font-size: 20px;
		margin:0 auto;
	}
	.event_hashtag{
		text-align: center;
		margin-top:20px;
		color:#fff;
		font-size: 20px;
	}



	.my-swipe {
		height: 100vh !important;
		color: #fff;
		font-size: 30px;
		text-align: center;
	}
</style>
