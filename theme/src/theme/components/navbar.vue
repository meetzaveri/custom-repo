<template>
	<nav ref="myNav" class="navbar navbar-inverse navbar-fixed-top">
		<!-- only for real theme -->
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>

				<router-link class="navbar-brand" to="/theme">
					<img v-for="i in 2" src="https://vuejs.org/images/logo.png" >
				</router-link>
			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
				<!-- single page navbar -->
				<ul v-if="isLoaded" class="nav navbar-nav navbar-right">
					<li v-for="(section,index) in main_data">
						<a class="link-design" href="#" v-scroll-to="{el:'#'+section,offset:-50}">{{section}}</a>
						<!--<router-link :to="'/theme/'+section">{{section}}</router-link>-->
					</li>
					<li v-if="farji_data" class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#">More<span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li v-for="section in farji_data">
								<a class="link-design" href="#" v-scroll-to="{el:'#'+section,offset:-50}">{{section}}</a>
							</li>
						</ul>
					</li>
				</ul>
				<!-- single page navbar ends -->

				<!-- multi page navbar -->
				<!--<ul v-else-if="!data.theme_data.is_single" class="nav navbar-nav navbar-right">-->
					<!--<li v-for="section in data.theme_section">-->
						<!--<router-link class="link-design" :to="'/theme/multi/'+section">{{section}}</router-link>-->
					<!--</li>-->
					<!--<li v-if="data.more_section.length > 0" class="dropdown">-->
						<!--<a class="dropdown-toggle" data-toggle="dropdown" href="#">More<span class="caret"></span></a>-->
						<!--<ul class="dropdown-menu">-->
							<!--<li v-for="section in data.more_section">-->
								<!--<router-link class="link-design" :to="'/theme/multi/'+section">{{section}}</router-link>-->
							<!--</li>-->
						<!--</ul>-->
					<!--</li>-->
				<!--</ul>-->
				<!-- multi page navbar ends -->
			</div>
		</div>
	</nav>



</template>

<script>

	export default{
		props: [
			'content'
		],
		data() {
			return {
				isLoaded: false
			};
		},
		computed: {
			main_data: function() {
				return this.content.nav_section;
			},
			farji_data: function() {
				return this.content.nav_more_section;
			}
		},
		mounted() {
			this.isLoaded = true;
		}
	};
</script>

<style>
	.link-design{
		text-transform: capitalize;
	}
	.navbar-brand img{
		display: inline-table;
		max-height: 50px;
		margin-top: -4px;
		vertical-align: middle;
	}
	.navbar-header{
		display:table;
		width: auto;
	}
	.navbar-brand.a{
		display: table;
	}
</style>
