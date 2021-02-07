<template>
	<div class="wrapper">
		<div class="container-header">
			<Header/>
		</div>
		<div class="container-aside-and-main">
			<Aside/>
			<Main/>
		</div>
	</div>
</template>

<script>
import Header from '../components/Header'
import Aside from '../components/Aside'
import Main from '../components/Main'
export default {
	components: {
		Header,
		Aside,
		Main,
	},
	async asyncData({ $content }) {

	},
}
</script>

<style scoped>
	.wrapper {
		display: flex;

		flex-direction: column;

		width: 100%;
		height: 100vh;
		padding-top: 46px;
		padding-right: 46px;
		padding-bottom: 46px;
		padding-left: 46px;
	}
	.container-header {
	}
	.container-aside-and-main {
		display: flex;

		flex-grow: 2;
	}

</style>
