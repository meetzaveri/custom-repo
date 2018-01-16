<template>
	<section>
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="text-ele-title">
					{{text_content.title}}
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="text-ele-detail" v-html="text_content.option">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		props: [ 'text_content' ],
		data() {
			return {

			};
		}
	};
</script>

<style scoped>
	.text-ele-title{
		font-size:30px;
		color:#333;
		text-align:center;
		margin-bottom: 50px;
	}
	.text-ele-detail{
		font-size: 20px;
		color:#666;
	}
</style>
