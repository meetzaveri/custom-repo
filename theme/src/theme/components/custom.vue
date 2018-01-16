<template>
	<section class="container"  v-if="content.isVisible" :id="data_1.navbar_name">

		<!-- Section With People -->
		<div v-if="type === 'section-with-people'">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="section-title">
						<p class="section-title-tweak">{{ data_1.section_name }}</p>
					</div>
					<div class="section-title">
						<p class="section-title-tweak">{{data_1.tagline}}</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="people-outer-div">
					<div v-for="i in 8" class="people-inner-div col-lg-3 col-md-3 col-sm-3 col-xs-12">
						<div class="people-detail">
							<div class="people-avatar">
								<img class="avatar" src="https://vuejs.org/images/logo.png" alt="">
							</div>
							<div class="people-profile">
								people{{ i }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/ Section With People -->

		<!-- Section With Logo -->
		<div  v-if="type === 'section-with-logo'">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="section-title">
						<p class="section-title-tweak">{{ data_1.section_name }}</p>
					</div>
					<div class="section-title">
						<p class="section-title-tweak">{{data_1.tagline}}</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="logo-outer-div">
					<div v-for="i in 8" class="logo-inner-div col-lg-3 col-md-3 col-sm-3 col-xs-12">
						<div class="logo-detail">
							<div class="logo-avatar">
								<img src="https://vuejs.org/images/logo.png" alt="" class="avatar">
							</div>
							<div class="logo-profile">
								logo {{ i }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Section With Logo -->

		<!-- Section With Icons and Text -->
		<div v-if="type === 'section-with-logo-text'">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="section-title">
						<p class="section-title-tweak">{{ data_1.section_name }}</p>
					</div>
					<div class="section-title">
						<p class="section-title-tweak">{{data_1.tagline}}</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="it-outer-div">
					<div v-for="i in 8" class="it-inner-div col-lg-3 col-md-3 col-sm-3 col-xs-12">
						<div class="it-detail">
							<div class="it-avatar">
								<img src="https://vuejs.org/images/logo.png" alt="" class="avatar">
							</div>
							<div class="it-profile">
								Icon{{ i }} with Text Profile Too many Sections
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Section With Icons and Text -->

		<!-- Section With Text and Image -->
		<div v-if="type === 'section-with-text-image'">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="section-title">
						<p class="section-title-tweak">{{ data_1.section_name }}</p>
					</div>
					<div class="section-title">
						<p class="section-title-tweak">{{data_1.tagline}}</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="ti-outer-div">
					<div v-for="i in 8" class="ti-inner-div col-lg-3 col-md-3 col-sm-3 col-xs-12">
						<div class="ti-detail">
							<div class="ti-avatar">
								<img src="https://vuejs.org/images/logo.png" alt="" class="avatar">
							</div>
							<div class="ti-profile">
								Image {{ i }} with Text Profile
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Section With Text and Image -->

		<!-- Section With Image -->
		<div v-if="type === 'section-with-image'">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="section-title">
						<p class="section-title-tweak">{{ data_1.section_name }}</p>
					</div>
					<div class="section-title">
						<p class="section-title-tweak">{{data_1.tagline}}</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="i-outer-div">
					<div v-for="i in 8" class="i-inner-div col-lg-3 col-md-3 col-sm-3 col-xs-12">
						<div class="i-detail">
							<div class="i-avatar">
								<img src="https://vuejs.org/images/logo.png" alt="" class="avatar">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Section With Image -->

		<!-- Section With Text -->
		<div v-if="type === 'section-with-text'">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="section-title">
						<p class="section-title-tweak">{{ data_1.section_name }}</p>
					</div>
					<div class="section-title">
						<p class="section-title-tweak">{{data_1.tagline}}</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="t-outer-div">
					<div class="t-inner-div col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="t-detail">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Section With Text -->


	</section>
</template>

<script>
	export default{
		props: [
			'content'
		],
		computed: {
			data_1: function() {
				return this.data_h;
			}
		},
		data() {
			return {
				data_h: this.content.header,
				type: this.content.type
			};
		}
	};
</script>

<style>
	/* Section With People */
	.people-outer-div{

	}

	.people-inner-div{
		padding: 40px;
	}

	.people-detail {
		margin: 0 auto;
	}

	.people-avatar{
		border-radius: 50%;
		border: 1px solid #333;
		overflow: hidden;
	}

	.people-profile{
		text-align: center;
		padding: 5px;
	}

	.avatar{
		width: 100%;
		height:100%;
	}
	/* /Section With People */

	/* Section With Logo */
	.logo-outer-div{

	}

	.logo-inner-div{
		padding: 10px;
	}

	.logo-detail{
		margin: 0 auto;
	}

	.logo-avatar{
		border: 1px solid #333;

	}

	.logo-profile{
		text-align: center;
		padding: 5px;

	}

	/* /Section With Logo */

	/* Section With Icon & Text */
	.it-outer-div{

	}

	.it-inner-div{
		padding: 60px;

	}

	.it-detail{
		margin: 0 auto;
	}

	.it-avatar{
		border: 1px solid #333;
	}

	.it-profile{
		text-align: center;
		padding: 5px;
	}
	/* /Section With Icon $ Text */

	/* Section with Image & Text */
	.ti-outer-div{

	}

	.ti-inner-div{
		padding: 30px;
	}

	.ti-detail{
		margin: 0 auto;
	}

	.ti-avatar{
		border: 1px solid #333;
	}

	.ti-profile{
		text-align: center;
		padding: 5px;
	}
	/* /Section with Image & Text */

	/* Section With Image */
	.i-outer-div{

	}

	.i-inner-div{
		padding: 10px;
		margin-bottom: 20px;
	}

	.i-detail{
		margin: 0 auto;
	}

	.i-avatar{
		border: 1px solid #333;
	}
	/* /Section With Image */

	/* Section With Text */
	.t-outer-div{

	}

	.t-inner-div{
		padding: 10px;
	}

	.t-detail{
		text-align: center;
		font-size: 30px;
	}
	/* /Section With Text */
</style>
