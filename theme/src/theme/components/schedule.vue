<template>
	<section  v-if="content.isVisible" id="schedule" class="container">
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
				<div class="row section-format">
					<div class="table-border col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="row table-border-bottom">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="schedule-day">
									Day-1
								</div>
								<div class="schedule-date">
									21st Oct, 2016
								</div>
							</div>
						</div>
						<div class="row table-detail">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="schedule-time-slot">
									<i class="fa fa-clock-o"></i>08:00 - 09:00
									<a data-toggle="collapse" v-on:click="show_sche_section = 'section-sche1'" :class="[{active:show_sche_section === 'section-sche1'},'accord']" style="float:right" href="#collapse_sche1">
										<i class="fa fa-plus"></i>
										<i class="fa fa-minus"></i>
									</a>
								</div>
								<div class="schedule-title">
									Registration
								</div>
								<div id="collapse_sche1" class="panel-collapse collapse">
									<div class="panel-body">
										<div class="detailed-time-slot">
											<i class="fa fa-clock-o"></i>08:00 - 09:00
										</div>
										<div class="detailed-title">
											Registration
										</div>
									</div>
								</div>
								<div v-for="i in 2" class="modal-speaker-face">
									<img class="speaker-img-tag" src="https://vuejs.org/images/logo.png" />
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
				show_sche_section: '',
				data_f: this.content.font,
				data_h: this.content.header,
				data_e: this.content.element,
			};
		},
		sockets: {
			font: function( val ) {
				if ( val.name === 'schedule' ) {
					this.data_f = val.data;
				}
			},
			header: function( val ) {
				if ( val.name === 'schedule' ) {
					this.data_h = val.data;
				}
			},
			add_element: function( val ) {
				if ( val.name === 'schedule' ) {
					this.data_e.push( val.data );
				}
			},
			text_ele: function( val ) {

				if ( val.name === 'schedule' ) {
					this.data_e = val.data;
				}
			},
			btn_with_text_ele: function( val ) {

				if ( val.name === 'schedule' ) {
					this.data_e = val.data;
				}
			},
			btn_with_file_ele: function( val ) {

				if ( val.name === 'schedule' ) {
					this.data_e = val.data;
				}
			},
			btn_with_link_ele: function( val ) {

				if ( val.name === 'schedule' ) {
					this.data_e = val.data;
				}
			},
			remove_ele: function( val ) {
				if ( val.name === 'schedule' ) {
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
	.schedule-day{
		font-size: 15px;
		font-weight: 600;
		color:#000;
		text-align: center;
	}
	.schedule-date{
		font-size: 20px;
		color:#999;
		text-align: center;
	}
	#schedule i.fa{
		color:#333;
		font-size:15px;
		margin-right: 10px;
	}
	.schedule-time-slot{
		font-size:15px;
		color:#333;
	}
	.schedule-title{
		font-size:25px;
		color: #f74819;
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
	.speaker-img-tag{
		width:100%;
	}
	.table-border{
		border: 1px solid #aaa;
	}
	.table-border-bottom{
		border-bottom: 1px solid #aaa;
	}
	.detailed-time-slot{
		color:#666;
	}
	.detailed-title{
		color:#666;
	}
	.panel-body{
		padding: 0px;
	}
	.table-detail{
		padding:10px;
	}
	.panel-collapse{
		margin: 20px 0px;
	}
</style>
