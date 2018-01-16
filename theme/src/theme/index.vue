<template>
	<div v-if="isLoaded">
		<component is="navbar" :content="{nav_section,nav_more_section}"></component>
		<component is="banner" :content="data.banner_section"></component>
		<component v-for="item in data.section_format" :key="item.name+'index'" :is='item.name' :content="item.data"></component>
		<component v-for="item in data.more_section" :key="item.name+'index'" :is='item.name' :content="item.data"></component>
	</div>
</template>

<script>
    const id = "client1:slave";

	export default{
		data() {
			return {
				data: {},
				isLoaded: false
			};
		},
		computed: {
			//Computing Navbar Main section
			nav_section: function() {
				if ( this.isLoaded ) {
					const temp = [];
					for ( let i = 0; i < this.data.section_format.length; i++ ) {
						if ( this.data.section_format[ i ].data.isVisible ) {
							temp.push( this.data.section_format[ i ].data.header.navbar_name );
						}
					}
					return temp;
				}
			},
			//Computing Navbar more Section
			nav_more_section: function() {
				if ( this.isLoaded ) {
					const temp = [];
					for ( let i = 0; i < this.data.more_section.length; i++ ) {
						if ( this.data.more_section[ i ].data.isVisible ) {
							temp.push( this.data.more_section[ i ].data.header.navbar_name );
						}
					}
					return temp;
				}
			}
		},
		methods: {
			//Request Main Theme data
			get_cont: function() {
				this.$http.get( 'https://hu-dash.firebaseio.com/data.json' )
					.then( function( success ) {
						this.data = success.data;
						this.isLoaded = true;
					} );
			}
		},
		sockets: {
            connect: function() {
                if(this.$route.params.id === 'custom'){
                    this.$socket.emit( 'init', id );
                    console.log( 'socket connected' );
                }
            },
			//Change Section Order
			change_section: function( val ) {
				this.data.section_format = val.main_section;
				this.data.more_section = val.more_section;
			},
			//Toggle section Show Hide
			toggle_section: function( val ) {
				let temp = null;
				if ( val.type === "more" ) {
					temp = "more_section";
				} else if ( val.type === "default" ) {
					temp = "section_format";
				}
				this.data[ temp ][ val.index ].data.isVisible = val.isChanged;
			}
		},
		created() {
			this.get_cont();
		}
	};

</script>

<style>
	section{
		margin: 50px 0px;
		position: relative;
	}
	.section-format{
		margin: 50px 0px;
	}
	.section-title-tweak{
		display: inline;
		border-bottom: 4px solid #e6e6e6;
	}
	.section-title{
		text-align:center;
	}
	.section_detail{
		text-align: center;
	}
	body{
		overflow-y: auto;
		background-color: #fff;
	}
	#app{
		background-color: #fff;
	}
	.register_btn{
		background-color: #f74819;
		border-color:#f74819;
		color:#fff !important;
		border-radius: 25px;
		padding: 10px 45px;
	}
	@font-face {
	  font-family: 'AdventPro';
	  src: url('./fonts/AdventPro-Regular.ttf');
	}

	@font-face {
	  font-family: 'Lato-Bold';
	  src: url('./fonts/Lato-Bold.ttf');
	}

	@font-face {
	  font-family: 'Lato-Regular';
	  src: url('./fonts/Lato-Regular.ttf');
	}
</style>
