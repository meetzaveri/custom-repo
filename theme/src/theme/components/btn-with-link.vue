<template>
	<section id="btn-with-link">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="btn-align">
					<a :href="text_content.option" target="_blank" class="link-style">
						<button class="btn btn-default">
							{{text_content.title}}
						</button>
					</a>
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
	#btn-with-link .btn-align{
		text-align: center;
	}
	#btn-with-link .link-style{
		text-decoration: none;
	}
</style>
