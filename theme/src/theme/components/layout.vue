<template>
	<div>
		<!-- Full Div Layout -->
		<div v-if="gridSize === '1'">
			<div class="">
				<slot name="slot_div"></slot>
			</div>
		</div>
		<!-- Full Div Layout Ends -->

		<!-- Half Right Div Layout -->
		<div v-if="gridSize === '2'">
			<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
				<slot name="slot_img"></slot>
			</div>
			<div class="col-lg-6 col-md-6 cl-sm-6 col-xs-6">
				<slot name="slot_div"></slot>
			</div>
		</div>
		<!-- Half Right Layout Ends -->

		<!-- Half Left Down Layout -->
		<div v-if="gridSize === '3'">
			<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
				<slot name="slot_div"></slot>
			</div>
			<div class="col-lg-6 col-md-6 cl-sm-6 col-xs-6">
				<slot name="slot_img"></slot>
			</div>
		</div>
		<!-- Half Left Layout ends -->

		<!-- Slider Layout -->
		<div v-if="gridSize === '4'">
			<app-slick ref="slick" :options="{
							slidesToShow:4
						}">
				<slot name="slot_div"></slot>
			</app-slick>
		</div>
		<!-- Slider Layout Ends -->

	</div>
</template>

<script>
export default {
	props: [ 'gridSize' ]
};
</script>

<style>

</style>
