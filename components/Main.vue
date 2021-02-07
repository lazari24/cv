<template>
	<main class="main">
		<BlockAboutMe :title="aboutMeInfo.title" :text="aboutMeInfo.info"/>
		<BlockContent v-for="(item, index) of content" :key="index" :title="item.title" :items="item.items"/>
	</main>
</template>

<script>
import BlockAboutMe from '../components/BlockAboutMe'
import BlockContent from '../components/BlockContent'
export default {
	components: {
		BlockAboutMe,
		BlockContent,
	},
	computed: {
		aboutMeInfo() {
			const response = this.$store.getters['GET_ABOUT_ME']
			return response
		},
		content() {
			const response = this.$store.getters['GET_CONTENT']
			return response
		}
	}
}
</script>

<style scoped>
	.main {
		width: 75%;
		height: 100%;
		padding-left: 46px;
	}
</style>
