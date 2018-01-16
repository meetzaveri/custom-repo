<template>
	<section>
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="row section-format faq-section">
					<div class="panel-group" id="accordion">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
									{{text_content.title}}
									<a data-toggle="collapse" v-on:click="show_section = 'btn-with-section-'+text_index"
                                       :class="[{active:show_section === 'btn-with-section-'+text_index},'accord']"
                                       style="float:right" data-parent="#accordion" :href="'#btn-with-collapse'+text_index">
										<i class="fa fa-plus"></i>
										<i class="fa fa-minus"></i>
									</a>
								</h4>
							</div>
							<div :id="'btn-with-collapse'+text_index" class="panel-collapse collapse">
								<div class="panel-body" v-html="text_content.option">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		props: [ 'text_content', 'text_index' ],
		data() {
			return {
				show_section: '',
				isActive: true,
			};
		}
	};
</script>

<style scoped>
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
